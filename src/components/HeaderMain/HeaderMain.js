import React from 'react';
import image from '../../images/Group 33080 (3).png'
import Typical from 'react-typical'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDownload} from '@fortawesome/free-solid-svg-icons'

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-6 offset-md-1">
                   <p className="text-white">WELCOME TO MY WORLD</p>
                  <h1 className="text-white">Hi There!</h1>
                   <h1 className="text-white">I'm NOOR HOSSAIN </h1>
                   <h3><span className="text-danger">   
                    <Typical
                       loop={Infinity}
                       wrapper="b"
                       steps={[
                           'Web Developer',
                           1000,
                           'Content Writer',
                           1000,
                       ]}
                    
                    />
                    </span>
                   </h3>
                  <a href="https://drive.google.com/file/d/1nATThTpXb3ordHTvDnpFs78IvNrRocb-/view?usp=sharing"> <button style={{borderRadius:'5px'}} type="button" class="btn btn-success" ><h3><FontAwesomeIcon icon={faDownload} /> Download Resume</h3></button></a>
            </div>
            <div className="col-md-4">
                <img src={image} alt="" className="img-fluid" width="400"/>
            </div>
        </main>
    );
};

export default HeaderMain;