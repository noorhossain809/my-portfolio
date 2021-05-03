import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import Header from '../../Header/Header';
import Projects from '../../Projects/Projects';
import Skills from '../../Skills/Skills';
import SubmitForm from '../../SubmitForm/SubmitForm';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
       <AboutMe></AboutMe>
       <Skills></Skills>
       <SubmitForm></SubmitForm>
            
        </div>
    );
};

export default Home;