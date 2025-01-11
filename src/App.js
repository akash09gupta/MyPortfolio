import About from "./components/about";
import Experiance from "./components/experiance";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Project from "./components/project";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div 
    className="App" 
    style={{
      display:'flex', 
      flexDirection:'column', 
      width:'100%', 
      height:'100vh', 
      margin:'0'
      }}>
      <Navbar/>
      <Home />
      <About/>
      <Project/>
      <Experiance/>
      <Contact/>
      <Toaster />
    </div>
  );
}

export default App;
