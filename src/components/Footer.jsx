import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div style={{height:'300px'}} className='container mt-5 w-10 '>
        <div className='row'>
          <div className='col-4'>
            <h5><i class="fa-solid fa-music fa-lg me-3"></i>Media Player</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos possimus aut molestiae non ea ullam porro? Reprehenderit doloremque cupiditate deleniti, architecto vitae ut dicta, similique laudantium commodi officia fugit.</p>
            <p>Code is liscenced by Luminar</p>
            <p>currently v5.3.2</p>
          </div>
  
          <div className='col-2'>
             <h5>Links</h5>
             <Link to={''} style={{textDecoration:'none', color:'#adafad'}} >Landing</Link><br />
             <Link to={''} style={{textDecoration:'none',color:'#adafad'}} >Home</Link><br />
             <Link to={''} style={{textDecoration:'none',color:'#adafad'}}>History</Link>
          </div>
          <div className='col-2'>
            <h5>Guids</h5>
            <p>React</p>
            <p>React Router</p>
            <p>Bootstrap</p>
          </div>
          <div className='col-4'>
            <h4>Contact Us</h4>
            <span className='d-flex'><input type="text" className='form-control w-50 me-2' /> <button className='rounded btn btn-info'><i class="fa-solid fa-arrow-right fa-sm"></i></button></span><br />
            <i class="fa-brands fa-facebook fa-sm me-3 fs-5"></i>
            <i class="fa-brands fa-twitter fa-sm me-3 fs-5"></i>
            <i class="fa-brands fa-instagram fa-sm me-3 fs-5"></i>
            <i class="fa-brands fa-linkedin fa-sm me-3 fs-5"></i>
            <i class="fa-brands fa-github fa-sm me-3 fs-5"></i>
            <i class="fa-solid fa-phone fa-sm me-3 mt-3 fs-5"></i>
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer