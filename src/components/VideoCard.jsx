import React from 'react'
import Card from 'react-bootstrap/Card';
import movie from '../assets/movie.jpg'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { deleteVideoAPI, saveWatchHistory } from '../Services/allAPI';

function VideoCard({videoDetails,setDeleteVideoResponse,insideCategory}) {
  console.log(videoDetails);
  
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    
    const {caption,youtubeUrl}=videoDetails
    const localTime = new Date()
    const formatedDate = localTime.toLocaleString()

    const historyData = {caption,youtubeUrl,formatedDate}
    try{
      await saveWatchHistory(historyData)
    }
    catch(err){
      console.log(err);
      
    }
    setShow(true)
  
  };

  const deleteVideo=async(videoId)=>{
     try{
      const result = await deleteVideoAPI(videoId)
      setDeleteVideoResponse(result.data)
     }
     catch(err){
      console.log(err);
      
     }
  }

  const dragVideostarted=(e,videoId)=>{
    console.log(`ondrag video with id:${videoId}`);
    e.dataTransfer.setData("videoId",videoId)
    
  }
  return (
    <>
      <Card style={{ width: '' }} className='mb-3' draggable={true} onDragStart={(e)=>dragVideostarted(e,videoDetails?.id)}>
      <Card.Img variant="top" onClick={handleShow} src={videoDetails?.imageUrl} style={{height:"170px"}} />
      <Card.Body className='d-flex align-items-center justify-content-between mt-3' style={{height:"60px",fontSize:"23px"}}>
        <Card.Title className=''>{videoDetails?.caption}</Card.Title>
{!insideCategory &&
         <button style={{background:"none",border:"none"}} onClick={()=>deleteVideo(videoDetails?.id)}><i class="fa-solid fa-trash fa-lg mb-2 ms-4 text-danger fs-5"></i></button>

}      </Card.Body>
    </Card>

    <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title >{videoDetails?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <iframe width="100%" height="444" src={`${videoDetails?.youtubeUrl}?autoplay=1`} title="Silsila Ye Chahat Ka - Devdas - FULL SONG - FULL HD - 1080p" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default VideoCard