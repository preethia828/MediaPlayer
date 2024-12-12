import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Home() {

  const[addVideoResponse,setAddVideoResponse]=useState("")
  const [deleteVideoResponseFromCat,setDeleteVideoResponseFromCat]=useState("")
  const [updateCatDragVideo,setUpdateCatDragVideo]=useState("")
  return (
    <>
     <div className='container my-5 d-flex justify-content-between'>
       <Add setAddVideoResponse ={setAddVideoResponse}/>
       <Link to={'/history'} className='text-warning text-decoration-none fw-bold'>Watch History</Link>
     </div>
     <div className='container my-5 row'>
       <div className='col-lg-6'>
        <h3 className='text-info'>All Videos</h3>
      <View addVideoResponse={addVideoResponse} deleteVideoResponseFromCat={deleteVideoResponseFromCat} setUpdateCatDragVideo={setUpdateCatDragVideo}/>
       </div>
       <div className='col-lg-6'>
        <Category setDeleteVideoResponseFromCat={setDeleteVideoResponseFromCat} updateCatDragVideo={updateCatDragVideo} />
       </div>
     </div>
    </>
  )
}

export default Home