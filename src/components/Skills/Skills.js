import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div className="row p-5 justify-content-center app text-white">
            <h2 className="text-center mb-3">My Skills</h2>
            <div className="col-md-5">
                
                <h4 style={{fontWeight:'400'}}>React</h4>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '88%' }} aria-valuenow="10" aria-valuemin="50" aria-valuemax="100">88%</div>
                </div>
                <h4 style={{fontWeight:'400'}}>Javascript</h4>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
                <h4 style={{fontWeight:'400'}}>HTML & CSS</h4>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '90%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">90%</div>
                </div>
                <h4 style={{fontWeight:'400'}}>NodeJs</h4>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '65%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">65%</div>
                </div>
                <h4 style={{fontWeight:'400'}}>Bootstrap</h4>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-" role="progressbar" style={{ width: '95%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">95%</div>
                </div>
            </div>
            <div className="col-md-5">
                
                <h4 style={{fontWeight:'400'}}>MongoDB</h4>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow="10" aria-valuemin="50" aria-valuemax="100">75%</div>
                </div>
                <h4 style={{fontWeight:'400'}}>React Redux</h4>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                </div>
                <h4 style={{fontWeight:'400'}}>netlify & Heroku</h4>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '92%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">92%</div>
                </div>
                <h4 style={{fontWeight:'400'}}>GitHub & Firebase</h4>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '96%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">96%</div>
                </div>
                <h4 style={{fontWeight:'400'}}>Meterial UI</h4>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-" role="progressbar" style={{ width: '65%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">65%</div>
                </div>
            </div>

        </div>
    );
};

export default Skills;