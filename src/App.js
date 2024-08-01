
import './App.css';
import { useState, useEffect } from "react";
import Tasks from './pages/Tasks';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Employee from './pages/Employee';
import NavBar from './components/Navbar';
import Homepage from './pages/Homepage';
import TaskUpdate from './pages/TaskUpdate';
import axios from 'axios';

function App() {
 

  return (

    
    <div className="App">
     
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"/>
     <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      /> 

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/Tasks' element={<Tasks />} />
            <Route path='/Employee' element={<Employee />} />
            <Route path='Tasks/update/:id' element={<TaskUpdate />} />
          </Routes>


          <footer >
            <div className="container p-4 border-top-purple">
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-4 mb-md-0 text-center">
                  <h5 className="text-uppercase text-purple">Contact Details</h5>
                  <p className="text-purple">
                    <b>Address:</b> Imaginary House, SquareRoot of Negative7, Fictional Place, AR51 0US<br />
                    <b>Phone:</b> 0123 555 1253<br />
                    <b>Email:</b> noreply@dontmailmeillmailyou.co.uk<br />
                    <div className="social-icons">
                      <Link to="/" className="text-purple me-3">
                        <i className="fab fa-facebook fa-2x"></i>
                      </Link>
                      <Link to="/" className="text-purple me-3">
                        <i className="fab fa-instagram fa-2x"></i>
                      </Link>
                      <Link to="/" className="text-purple me-3">

                        <i className="fa-brands fa-twitter fa-2x"></i>

                      </Link>
                    </div>
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-purple text-center">Links</h5>
                  <ul className="list-unstyled mb-0 text-center">
                    <li>
                      <Link to="/Tasks" className="text-purple">Tasks</Link>
                    </li>
                    <li>
                      <Link to="/Employee" className="text-purple">Employees</Link>
                                        </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center p-3 bg-darker-purple text-white">
              © 2024 Copyright: <Link className="text-white" to="/">WrongMove</Link>
            </div>
          </footer>
          </BrowserRouter>




     
      </div>
  );
}

export default App;