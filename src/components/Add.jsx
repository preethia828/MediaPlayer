import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addVideoAPI } from '../Services/allAPI';

function Add({setAddVideoResponse}) {

  const [videoDetails,setVideoDetails]=useState({caption:"",imageUrl:"",youtubeUrl:""})
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isInvalid,setIsInvalid]=useState(false)
  console.log(videoDetails);
  
  const getEmbedUrl=(url)=>{

    if(url.includes('v=')){
      setIsInvalid(false)
      const videoId = url.split('v=')[1].slice(0,11)
      setVideoDetails({...videoDetails,youtubeUrl:`https://www.youtube.com/embed/${videoId}`})
    }
    else{
      setIsInvalid(true)
      setVideoDetails({...videoDetails,youtubeUrl:""})
    }
  }
   
  const uploadData=async()=>{
    const {caption,imageUrl,youtubeUrl}=videoDetails

    if(caption && imageUrl && youtubeUrl ){
      try{
        const result = await addVideoAPI(videoDetails)
        if(result.status>=200 && result.status<300){

          setAddVideoResponse(result.data)
          handleClose()
          toast.success(`${result.data.caption} added to your collection`)
        }
        
      }
      catch(err){
        console.log(err);
        
      }
        
    }
    else{
      toast.warning("Please enter the field completly")
    }
  }

  return (
    <>
     <div className=' d-flex align-items-center'>
            <h5 className='text-warning'>Upload New Video<button onClick={handleShow} style={{width:"45px",height:"45px",borderRadius:"25px",color:"#fff"}} className='fs-5 mb-3 fw-bold bg-warning ms-3'>+</button></h5>
    
     </div>  
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill the following details</p>
          
       <div className='border border-3 border-info p-3 rounded'>
              {/* caption */}
    
               <FloatingLabel controlId="caption" label="Caption" className='mb-3'>
              <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="email" placeholder="Caption" />
            </FloatingLabel>
    
            {/* image url */}
            <FloatingLabel controlId="image" label="Image Url" className='mb-3'>
              <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="email" placeholder="Image url" />
            </FloatingLabel>
    
            {/* youtube url */}
    
            <FloatingLabel controlId="url" label="Youtube Url" className='mb-3'>
              <Form.Control onChange={e=>getEmbedUrl(e.target.value)} type="email" placeholder="Youtube url" />
            </FloatingLabel>
               {isInvalid && <p className='text-danger fs-5'>Is invalid</p>} 
       </div> 

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={uploadData}>Upload</Button>
        </Modal.Footer>
      </Modal>      
    </>
  )
}

export default Add