import React from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import './SubmitForm.css'
import emailjs from 'emailjs-com';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    }
};

Modal.setAppElement('#root')

const SubmitForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_tiaqjuo', 'template_0urda3u', e.target, 'user_Rq6vBqGhysUmlEv9PkhlE')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div className="card">
            <div className="col-md-4 text-align-center">

                {/* <div class="modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div> */}

                <form className="card-shadow p-5"  onSubmit={sendEmail}>
                    <div className="form-group justify-content-md-center">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        <span className="text-danger">This field is required</span>

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        <span className="text-danger">This field is required</span>
                    </div>
                    <div className="form-group">
                        <input type="description" ref={register({ required: true })} name="message" placeholder="message" className="form-control" />
                        <span className="text-danger">This field is required</span>
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        <span className="text-danger">This field is required</span>
                    </div>
                    

                    <div className="form-group text-right">
                        <button style={{ backgroundColor: '#1cc7c1' }} type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>


            </div>
            
            
            <footer>
                <h5 style={{ fontWeight: '400' }} className="text-danger text-center mb-5">All Rights Reserved By Noor Hossain 2021</h5>
            </footer>
        </div>
    );
};

export default SubmitForm;