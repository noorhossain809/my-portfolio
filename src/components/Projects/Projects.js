import React from 'react';
import doctor from '../../images/images/doctorsPortal.png'
import burjAlArab from '../../images/images/burjAlArab.png'
import gent from '../../images/images/gents .png'
import './Projects.css'
import ProjectPost from '../ProjectPost/ProjectPost';
import Navbar from '../Navbar/Navbar';


const projectData = [
    {
        title : 'Doctors Portal',
        description1 : 'Admin Panel Make Admin, Add Service, Delete Service',
        description2 : 'Dashboard Book with Payment Method Review',
        description : 'Login Authentication Private Route',
        authorImg : doctor,
        github: 'https://github.com/noorhossain809/doctors-portal',
        live: 'https://doctors-portal-c5857.web.app/'
    },
    {
        title : 'Dry-Cleaning',
        description : 'Login Authentication Private Route',
        description1 : 'Admin Panel Make Admin, Add Service, Delete Service',
        description2 : 'Dashboard Book with Payment Method Review',
        github: 'https://github.com/noorhossain809/complete-web-client',
        authorImg : burjAlArab,
        live: 'https://day-wash-auth.web.app/'
        
    },
    {
        title : 'Gents-Collection',
        description : 'Login Authentication (Private Route)',
        description1 : ' Add Product, Delete Product',
        description2 : 'Place Order, Order History',
        github: 'https://github.com/noorhossain809/full-stack-client',
        authorImg : gent,
        live: 'https://gents-collection.web.app/'
    },
]
const Projects = () => {
    return (
        <section className="blogs header">
            
            <div className="container">
            
            <div className="section-header text-center">
            
            <h1 style={{color:'white', fontWeight: '600'}}>MY Recent <span className="text-danger">Works</span> </h1>
        </div>
              <div className="row mt-5">
                  {
                      projectData.map(project => <ProjectPost project={project}></ProjectPost>)
                  }
              </div>
            </div>
        </section>
    );
};

export default Projects;