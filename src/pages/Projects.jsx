import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import Header from '../components/Header'
const Projects = () => {
  return (
    <>
      <Header/>
      <div style={{marginTop:'150px'}} className="container-fluid">
        <div className="d-flex justify-content-between">
          <h1>All Projects</h1>
          <input type="text" className="form-control w-25"  placeholder='Search Projects By Language Used'/>
        </div>
        <Row className='mt-3'>
          <Col className='mb-3' sm={12} md={6} lg={4}>
            <ProjectCard/>
          </Col>
          
        </Row>
      </div>
    </>
  )
}

export default Projects