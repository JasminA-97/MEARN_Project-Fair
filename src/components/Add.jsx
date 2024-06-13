import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import addImg from '../assets/AddImg.png'

const Add = () => {
  const [preview,setPreview] = useState(addImg)
  const [imageFileStatus,setimageFileStatus]=useState(false)
  const [projectDetails,setProjectDetails] = useState({title:"",language:"",github:"",website:"",overview:"",projectImg:""})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(projectDetails);

  useEffect(()=>{
    if(projectDetails.projectImg.type=="image/png" || projectDetails.projectImg.type=="image/jpg" || projectDetails.projectImg.type=="image/jpeg"){
      setimageFileStatus(true)
      setPreview(URL.createObjectURL(projectDetails.projectImg))
    }else{
      setimageFileStatus(false)
      setProjectDetails({...projectDetails,projectImg:""})
    }
  },[projectDetails.projectImg])
  return (
    <>
    <button onClick={handleShow} className="btn btn-primary"><i className="fa-solid fa-plus"></i> New Project</button>
     <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Project Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} onChange={e=>setProjectDetails({...projectDetails,projectImg:e.target.files[0]})}/>
                <img height={'200px'} className='img-fluid' src={preview} alt="" />
              </label>
              {
                <div className="text-warning fw-bolder my-2">*Upload only the following file types (jpeg/jpg/png)here!!!</div>
              }
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Title' value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})}/>
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Languages Used In Project' value={projectDetails.language} onChange={e=>setProjectDetails({...projectDetails,language:e.target.value})}/>
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project GitHub Link'value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})}/>
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Website Link' value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})}/>
              </div>
            </div>
          </div>

          <div>
          <input type="text" className='form-control' placeholder='Project Overview' value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})}/>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
     </Modal>
    </>
  )
}

export default Add