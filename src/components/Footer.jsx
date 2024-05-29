import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div  className="d-flex justify-content-center align-items-center flex-column border shadow text-light mt-5" style={{height:'300px',width:'100%'}} >
    <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>


       <div style={{width:'400px'}} className="website">
         <h4> <i  className="fa-brands fa-docker "></i>PROJECT-FAIR</h4>
         <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum eius! Officiis a voluptate totam eius nam similique ullam repellendus, fugiat vitae eos alias. Atque unde deserunt odio fuga vero.</h6>
         <h6>Lore maiores recusandae soluta?</h6>
         <p> sit aipisicing </p>
       </div>

       <div className="links d-flex flex-column ">
         <h4>Links</h4>
         <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
         <Link to={'/login'} style={{textDecoration:'none',color:'white'}}>Login</Link>
         <Link to={'/register'} style={{textDecoration:'none',color:'white'}}>Register</Link>
       </div>

       <div className="guides d-flex flex-column">
         <h4>Guides</h4>
         <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
         <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
         <a href="https://reactrouter.com/en/main" style={{textDecoration:'none',color:'white'}} target='_blank'>React Router</a>
       </div>

       <div className="contact d-flex flex-column flex-wrap">
         <h4>Contact Us</h4>
         <div className="d-flex">
           <input className='me-1 rounded p-1' placeholder='Enter ur email here' />
           <button className="btn btn-warning ms-3"><i className="fa-solid fa-arrow-right fa-beat"></i></button>
         </div>
         <div className="icons d-flex justify-content-between mt-3 fs-5">
           <a href="" style={{textDecoration:'none',color:'white'}} target='_blank' ><i className="fa-brands fa-twitter"></i></a>
           <a href="" style={{textDecoration:'none',color:'white'}} target='_blank' ><i className="fa-brands fa-instagram"></i></a>
           <a href="" style={{textDecoration:'none',color:'white'}} target='_blank' ><i className="fa-brands fa-facebook"></i></a>
           <a href="" style={{textDecoration:'none',color:'white'}} target='_blank' ><i className="fa-brands fa-linkedin-in"></i></a>
           <a href="" style={{textDecoration:'none',color:'white'}} target='_blank' ><i className="fa-brands fa-github"></i></a>
           <a href="" style={{textDecoration:'none',color:'white'}} target='_blank' ><i className="fa-solid fa-phone"></i></a>
         </div> 
       </div> 


     </div>
     <p>Copyright @ 2024 PROJECT-FAIR. Build with React</p> 
   </div>
  )
}

export default Footer