import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landing from '../assets/admin.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { homeProjectAPI } from '../services/allAPI'


const Home = () => {
    const [homeProjects,setHomeProjects] = useState([])
    const navigate = useNavigate()
    // console.log(homeProjects);

    useEffect(()=>{
        getHomeProjects()
    },[])

    const getHomeProjects = async()=>{
        try{
            const result = await homeProjectAPI()
            // console.log(result);
            if(result.status == 200){
                setHomeProjects(result.data) 
            }
        }catch(err){
            // console.log(err);
        }
    }

    const handleProject = ()=>{
        if(sessionStorage.getItem("token")){
           navigate('/projects')
        }else{
            toast.warning("Please login top get full access to our projects!!!")
        }
    }
  return (
    <>
        <div style={{minHeight:'100vh'}} className="d-flex justify-center align-items-center rounded shadow w-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h6 style={{fontSize:'40px'}}>
                            <i className="fa-brands fa-docker">Project-Fair</i>
                        </h6>
                        <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ad rem deserunt sit qui exercitationem ab consequuntur. Eveniet expedita tenetur, assumenda, libero harum optio dolorum non necessitatibus aspernatur quisquam ipsum?</p>
                        {
                            sessionStorage.getItem("token")?
                            <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECTS</Link>
                            :
                            <Link to={'/login'} className='btn btn-warning'>START TO EXPLORE</Link>
                        }
                    </div>
                    <div className="col-lg-6">
                        <img src={landing} alt="langing" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-5 text-center">
            <h1 className="mb-5">explore our projects</h1>
            <marquee>
                <div className="d-flex">

                    {
                        homeProjects?.length>0 &&
                        homeProjects?.map(project=>(
                            <div key={project?._id} className="me-5">
                                <ProjectCard displayData={project}/>
                            </div>
                        ))
                    }
                </div>
            </marquee>
            <button onClick={handleProject} className="btn btn-link mt-5">click here to view more projects</button>
        </div>

        <div className="d-flex align-items-center mt-5 flex-column">
            <h1>Our Testimonials</h1>
            <div className="d-flex align-items-center justify-content-evenly mt-3 w-100">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                        <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' variant="top" src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" />
                        <span>Max Miller</span>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-center">
                           <div className="fa-solid fa-star text-warning"></div>
                           <div className="fa-solid fa-star text-warning"></div>
                           <div className="fa-solid fa-star text-warning"></div>
                           <div className="fa-solid fa-star text-warning"></div>
                        </div>
                    <p>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                        <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' variant="top" src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" />
                        <span>Max Miller</span>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-center">
                           <div className="fa-solid fa-star text-warning"></div>
                           <div className="fa-solid fa-star text-warning"></div>
                           <div className="fa-solid fa-star text-warning"></div>
                           <div className="fa-solid fa-star text-warning"></div>
                        </div>
                    <p>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
                        <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' variant="top" src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" />
                        <span>Max Miller</span>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-center">
                           <div className="fa-solid fa-star text-warning"></div>
                           <div className="fa-solid fa-star text-warning"></div>
                           <div className="fa-solid fa-star text-warning"></div>
                           <div className="fa-solid fa-star text-warning"></div>
                        </div>
                    <p>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
        </div>

    </>
  )
}

export default Home