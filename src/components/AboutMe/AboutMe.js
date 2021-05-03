import React from 'react';
import './AboutMe.css'
import Typical from 'react-typical'
import Navbar from '../Navbar/Navbar';

const AboutMe = () => {
    return (

        <div>

            <div className="main text-center">
                <h2 className="text-white">About Me</h2>


                <div className="row justify-content-center">
                    <div style={{ borderRight: '1px solid gray' }} className="col-md-4 p-5 ">
                        <div class="card border-danger mb-3" style={{maxWidth: "18rem"}}>
                            {/* <div class="card-header">Header</div> */}
                            <div class="card-body text-danger">
                                <h3 class="card-title">Noor Hossain</h3>
                                <p class="card-text">I have earned database management, coding and of the programming software used to create websites. I am proficient in HTML and I have a basic knowledge of several scripting languages, structured programming languages and knowledge of HTML5, CSS. I also have knowledge of system development, JavaScript, NodeJS, react and mongoDB.</p>
                            </div>
                        </div>
                        {/* <h1 className="text-uppercase text-white">Noor Hossain</h1> */}
                        {/* <h5 style={{ fontWeight: '300' }} className="text-danger">
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    'I have earned database management, coding and of the programming software used to create websites. I am proficient in HTML and I have a basic knowledge of several scripting languages, structured programming languages and knowledge of HTML5, CSS. I also have knowledge of system development, JavaScript, NodeJS, react and mongoDB.',
                                    1000,
                                    'I have earned database management, coding and of the programming software used to create websites. I am proficient in HTML and I have a basic knowledge of several scripting languages, structured programming languages and knowledge of HTML5, CSS. I also have knowledge of system development, JavaScript, NodeJS, react and mongoDB.',
                                    1000,


                                ]}
                            />

                        </h5> */}
                    </div>

                    <div className="col-md-5">
                        <h1 className="text-white text-uppercase p-5">Complete Projects</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;