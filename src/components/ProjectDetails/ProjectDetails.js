import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor:'white'
    }
};

Modal.setAppElement('#root')

const ProjectDetails = ({ modalIsOpen, project,project1,project2, closeModal }) => {
    const { register, handleSubmit, errors  } = useForm();

    const onSubmit = () =>{
        if(true){
            closeModal();
            alert('Your request successfully')
        }
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                 onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text text-white">{project}</p>
                        <p class="card-text text-white">{project1}</p>
                        <p class="card-text text-white">{project2}</p>
                        <a onSubmit={handleSubmit(onSubmit)} type="submit" class="btn btn-primary">Close</a>
                    </div>
                </div>

              
                {/* <button style={{ backgroundColor: '#1cc7c1' }} type="submit" className="btn btn-primary">Close</button> */}
            </Modal>
        </div>
    );
};

export default ProjectDetails;