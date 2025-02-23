import About from "./components/about";
import Experiance from "./components/experiance";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Project from "./components/project";
import { Toaster } from "react-hot-toast";
import NavbarMobile from "./components/navbarMobile";
import { useMediaQuery } from "@mui/material";

function App() {
  const _700 = useMediaQuery("(min-width: 700px)");
  return (<>
    {_700 ? <Navbar/> : <NavbarMobile/>}
    <div 
    className="App" 
    style={{
      display:'flex', 
      flexDirection:'column', 
      width:'100%', 
      height:'100vh', 
      padding: '1rem',
      margin:'0',
      boxSizing: 'border-box',
      }}>
      <Home />
      <About/>
      <Project/>
      <Experiance/>
      <Contact/>
      <Toaster />
    </div>
    </>
  );
}

export default App;
