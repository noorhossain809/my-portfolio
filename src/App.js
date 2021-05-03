import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import SubmitForm from './components/SubmitForm/SubmitForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
   
        <div>
           
                <Router>
                  <Switch>
                   
                    <Route path="/home">
                      <Home></Home>
                    </Route>
                    <Route path="/projects">
                      <Projects></Projects>
                    </Route>
                    <Route path="/aboutMe">
                      <AboutMe></AboutMe>
                    </Route>
                    <Route path="/skills">
                    <Skills></Skills>
                    </Route>
                   <Route path="/blogs">
                     <Blogs></Blogs>
                   </Route>
                   <Route path="/contact">
                     <SubmitForm></SubmitForm>
                   </Route>
                   <Route exact path="/">
                     <Home></Home>
                   </Route>
                  </Switch>
                </Router>
       
        </div>
         
        
  );
}

export default App;
