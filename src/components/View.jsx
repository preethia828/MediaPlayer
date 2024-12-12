import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import VideoCard from './VideoCard'
import {addVideoAPI, getSingleCategoryAPI, getVideoAPI, updateCategoryAPI} from '../Services/allAPI'


function View({addVideoResponse,deleteVideoResponseFromCat,setUpdateCatDragVideo}) {
    const[allVideos,setAllVideos]=useState([])
    const[deleteVideoResponse,setDeleteVideoResponse]=useState([])
    console.log(allVideos);
    
    useEffect(()=>{
      getAllVideos()
    },[addVideoResponse,deleteVideoResponse,deleteVideoResponseFromCat])

    const getAllVideos=async()=>{
      try{

        const result=await getVideoAPI()
        if(result.status>=200 && result.status<300){
          setAllVideos(result.data)          
        }
      }
      catch(err){
        console.log(err);
        
      }
      
    }

    const dragOverCategory=(e)=>{
      e.preventDefault()
    }

    const dropCategoryVideo=async(e)=>{
    const {videoDetails,categoryId} =JSON.parse(e.dataTransfer.getData("shareData"))
    console.log(videoDetails,categoryId,"kilo");

    try{
     const {data} =  await getSingleCategoryAPI(categoryId)
     console.log(data,"data");
     const updatedCategoryAllVideos = data.allVideos.filter(itm=>itm.id!==videoDetails.id)
     console.log(videoDetails);
     

     const {id,categoryName} = data

     const response = await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedCategoryAllVideos})
     console.log(response);
     setUpdateCatDragVideo(response)
    const result =  await addVideoAPI(videoDetails)
    console.log(result);
    
    getAllVideos()
    }
    catch(err){
      console.log(err);
      
    }

    
    }



  return (
    <>
     <Row droppable={true} onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>dropCategoryVideo(e)}>
       {
       allVideos?.length > 0 ?
       allVideos?.map(video=>(
         <Col key={video?.id} lg={4} sm={6} xs={12}>
          <VideoCard videoDetails={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
       ))
        :
        <div className='text-danger text-center'>Nothing to display</div>
       }
     </Row>
    </>
  )
}

export default View