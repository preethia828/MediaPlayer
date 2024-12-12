import React from 'react'
import landingImage from '../assets/colourful-smoke-with-music-notes-illustration-generative-ai_841229-644.avif'
import Card from 'react-bootstrap/Card';
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import  {Link} from 'react-router-dom'

function Landing() {
  return (
    <>
     <div className='row d-flex align-items-center'>
       <div className='col-6 text-center'>
         <h3 style={{fontFamily:'"Sevillana"'}}>Welcome to media player</h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id corrupti doloribus tempore minus sit sed fugiat possimus. Veniam, doloremque voluptatum! Aspernatur deleniti unde similique beatae magnam dicta, dolore iure laborum.</p>
         <Link to={'/home'}><button className='btn btn-info btn-25'>Get Started</button></Link>
       </div>
       <div className='col-6'>
        <img src={landingImage} alt="" className='w-75'/>
       </div>
     </div>
     {/* features */}
      <div className='container mt-5'>
        <h3>Features</h3>
        <div className='row'>
        <div className='col-lg-4'>
                <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={img1} style={{height:"150px"}} />
               <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
         <div className='col-lg-4 pb-3'>
             <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={img2} style={{height:"150px"}} />
               <Card.Body>
              <Card.Title>Categorizing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
         </div>
         <div className='col-lg-4'>
             <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={img3} style={{height:"150px"}} />
               <Card.Body>
              <Card.Title>Managing History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
         </div>
        </div>
      </div>

      {/* second */}
      <div className='border border-3 border-white rounded p-3 container'>
        <h4 className='text-warning' style={{fontFamily:'"Sevillana"'}}>Simple Fast and Powerful</h4>
        <div className='row mt-3'>
          <div className='col-lg'>
            <div >
            <h4>Play Everything</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro repellendus, ipsa 
              fugit rerum sapiente officia exercitationem libero unde maiores nam. Maiores, minus cupiditate. Commodi doloribus ducimus id possimus labore voluptates.</p>
          </div>
           <div className=''>
            <h4>Categorize Video</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro repellendus, ipsa 
              fugit rerum sapiente officia exercitationem libero unde maiores nam. Maiores, minus cupiditate. Commodi doloribus ducimus id possimus labore voluptates.</p>
          </div>
           <div className=''>
            <h4>Manage History</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro repellendus, ipsa 
              fugit rerum sapiente officia exercitationem libero unde maiores nam. Maiores, minus cupiditate. Commodi doloribus ducimus id possimus labore voluptates.</p>
          </div>
          </div>
          <div className='col-lg'>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/sHBUIsgKzYw?si=2RxIb9cxEPF8IV1G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing