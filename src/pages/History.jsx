import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../Services/allAPI'

function History() {
  const[allHistory,setAllHistory]=useState([])
  console.log(allHistory);
  
  useEffect(() => {
     getAllHistory()
  }, [])
  

  const getAllHistory=async()=>{
       try{

        const result=await getHistoryAPI()
        if(result.status>=200 && result.status<300){
          setAllHistory(result.data)          
        }

      }
      catch(err){
        console.log(err);
        
      }
    
  }
   const deleteHistory=async(videoId)=>{
    try{
      await deleteHistoryAPI(videoId)
      getAllHistory()
    }
    catch(err){
      console.log(err);
      
    }
  }

  return (
    <>
     <div className='container'>
       <div className='d-flex justify-content-between mt-3'>
          <h3 className='text-warning'>Watch History</h3>
          <Link to={'/home'} className='text-info'>Back to <i class="fa-solid fa-house"></i></Link>
       </div>
       {
        allHistory?.length>0?
       
        <table className='table mt-3'>
          <thead>
             <th>#</th>
             <th>Caption</th>
             <th>Link</th>
             <th>Date</th>
             <th>...</th>
          </thead>
          <tbody>
            {
              allHistory?.map(video=>(
                  <tr key={video?.id}>
                <td>{video.id}</td>
                <td>{video.caption}</td>
                <td><a style={{color:"#fff"}} href={video.youtubeUrl}>{video.youtubeUrl}</a></td>
                <td>{video?.formatedDate}</td>
                <td><button onClick={()=>deleteHistory(video?.id)} style={{background:"none",border:"none"}}><i class="fa-solid fa-trash fa-lg text-danger fs-5"></i></button></td>
              </tr>
              ))
            }
          </tbody>
        </table>
        : 
        <div className='text-center text-danger'>Nothing to display</div>
          }
     </div>
    </>
  )
}

export default History