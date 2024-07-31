import '../App.css';
import logo from '../logo.jpg';
import Tasks from './Tasks';
import Employee from './Employee';


function Homepage () {
return (
  <div className="body"> 
  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="intro">
          <p>Welcome to the worst idea in task management history</p>
          <p>We've taken Paul, he cant manage tasks, and made him design this system</p>
          <p>and now you have to use it</p>
        </div>
      </header>
      </div>

    
)}

export default Homepage;
