
import './App.css';
import Tasks from './pages/Tasks';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Employee from './pages/Employee';
import NavBar from './components/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        {/* <BrowserRouter>
        <Routes>

          </Routes>
        <Link to="#tasks">Task Management</Link>           
        <a classname="nav-link" href="#employee">Employee Management</a>        
        <a classname="nav-link" href="#summary">Summary</a>        
        </BrowserRouter> */}

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/Tasks' element={<Tasks />} />
            <Route path='/Employee' element={<Employee />} />
 
          </Routes>
          </BrowserRouter>




      </nav>
      </div>
  );
}

export default App;