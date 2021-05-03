import React, { useState } from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './ProjectPost.css'

const ProjectPost = (props) => {
    const { title, authorImg, description,description1,description2, github, live } = props.project;

    const [modalIsOpen, setIsOpen] =useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4">

            <div class="card" style={{width: "18rem;"}}>
                <img src={authorImg} class="card-img-top" alt="..." />
                <div class="card-body text-white">
                    <h5 class="card-title">{title}</h5>
                    
                    <div className="d-flex mt-3">
                        <div className="m-2">
                        <a href={github} class="btn btn-success">GitHub</a>
                        </div>
                        <div className="m-2">
                        <a href={live} class="btn btn-danger">Live</a>
                        </div>
                        <div className="m-2">
                        <a onClick={openModal} class="btn btn-primary">Detail Features</a>
                        <ProjectDetails modalIsOpen={modalIsOpen} project={description} project1={description1} project2={description2} closeModal={closeModal}></ProjectDetails>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ProjectPost;