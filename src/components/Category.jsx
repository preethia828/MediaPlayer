import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategoryAPI, deleteCategoryAPI, deleteVideoAPI, getCategoryAPI, getSingleVideoAPI, updateCategoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard';



function Category({setDeleteVideoResponseFromCat,updateCatDragVideo}) {

  const[categoryName,setCategoryName]=useState("")
  
  const[showCategory, setShowCategory]=useState([])
  console.log(showCategory,"lop");
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  useEffect(() => {
     categoryShow()
  }, [updateCatDragVideo])
  

  const addCategory=async()=>{
    if(!categoryName.trim()){
     alert('Enter the category')
     return;
    }
    try{
     const result = await addCategoryAPI({categoryName,allVideos:[]})
     console.log(result.data,"op"); 
     categoryShow()
     handleClose()
    }
    catch(err){
    console.log(err);
    
    }
  }

  const categoryShow=async()=>{
    try{
      const result = await getCategoryAPI()
      if(result.status>=200 && result.status<300){
          setShowCategory(result.data)          
        }

    }
    catch(err){

    }
  }
 
  const deleteCategory=async(categoryId)=>{
    try{
     await deleteCategoryAPI(categoryId)
     categoryShow()
     
    }
    catch(err){
      console.log(err);
      
    }
  }

  const dropVideo=async(e,categoryId)=>{
   const videoId = e.dataTransfer.getData("videoId")
   console.log(`video dragged with the id ${videoId} and dropped with the id ${categoryId}`);
  

   try{
    const {data} = await getSingleVideoAPI(videoId)
    console.log(data);
    const selectedCategory = showCategory?.find(category=>category.id==categoryId)
    console.log(selectedCategory,"pppp");
    
    selectedCategory.allVideos.push(data)  
    console.log(selectedCategory,"sel");
    
    await updateCategoryAPI(categoryId,selectedCategory)
    categoryShow()
    const response = await deleteVideoAPI(videoId)
    setDeleteVideoResponseFromCat(response.data)
   }
   catch(err){
    console.log(err);
    
   }
   
  }
  const dragOverCategory=(e)=>{
    e.preventDefault()
  }

  const videoDragStarted=(e,videoDetails,categoryId)=>{

    const shareData={videoDetails,categoryId}
    e.dataTransfer.setData("shareData",JSON.stringify(shareData))
    console.log(videoDetails,categoryId,"hope");
   
  }
  return (
    <>
     <div className='d-flex justify-content-center'>
      <h3 className='me-4 mt-1 text-info'>All Category</h3>
      <button onClick={handleShow} className='btn btn-warning rounded-5 mt-2' style={{height:"50px",width:"50px"}}>+</button>
      </div>

      {showCategory?.length>0?
      showCategory?.map(itm=>(
      <div key={itm?.id} droppable={true} onDrop={(e)=>dropVideo(e,itm?.id)} onDragOver={(e)=>dragOverCategory(e)} className=' border border-3 rounded border-white w-75 mt-5 p-2 ms-5'>
        <div className='d-flex justify-content-between'>
          <h5 className='text-warning'>{itm.categoryName}</h5>
          <button onClick={()=>deleteCategory(itm?.id)} className='btn'><i class="fa-solid fa-trash fa-lg text-danger fs-5"></i></button>
        </div>
        <div className='row mt-2'>
        {
        itm.allVideos?.length>0 && 

        itm.allVideos.map(video=>(
             <div draggable={true} onDragStart={(e)=>videoDragStarted(e,video,itm.id)} key={video?.id} className='col-lg-6'>
          <VideoCard videoDetails={video} insideCategory={true}/>
        </div>
        ))}

        </div>
      </div>
      ))
      :
      <div className='text-danger text-center'>No category added yet!!</div>
     }
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='border border-3 border-info p-3 rounded'>
            <FloatingLabel controlId="caption" label="Caption" className='mb-3'>
              <Form.Control onChange={(e)=>setCategoryName(e.target.value)} value={categoryName} type="text" placeholder="CategoryName" />
            </FloatingLabel>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addCategory} variant="info">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category