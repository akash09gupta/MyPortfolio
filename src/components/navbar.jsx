import logo from "../assets/logo.png";
import { useMediaQuery } from "@mui/material";
import { Link } from 'react-scroll';

const Navbar = () => {
  const _700 = useMediaQuery("(min-width: 700px)");
  return (
    <>
      <div className="navbar" 
      style={{
      display:"flex", 
      flexDirection:"row", 
      justifyContent:"space-between", 
      alignItems:"center",
      background:"black",
      top:'0',
      width:"100%",
      height:_700 ? "4rem" : "6rem",
      position:"fixed"
      }}>
        <div className="navbar-logo" 
        style={{
          marginLeft:'5rem',
          margin: _700 ? '0' : 'auto',
          backgroundImage: `url(${logo})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",  
          width: _700 ? "4rem" : "2rem",
          height: _700 ? "4rem" : "2rem",
          }}></div>
          {_700 ? <div 
          style={{
            color:"white", 
            fontWeight:'bold',
            fontSize:'1.5rem',
            paddingBottom:'0.8rem'
            }}>
              Akash Gupta Portfolio
          </div> : ''}
        <div className="navbar-menu">
          <ul className="navbar-list" 
          style={{
            listStyleType:"none", 
            display: 'flex', 
            flexDirection:"row",
            }}>
            <li style={{margin:'1rem'}}>
                <Link
                to="home"
                smooth={true}
                duration={400}
                offset={-90}
                activeClass="active"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: _700 ? "1rem" : "0.7rem",
                  cursor: "pointer",
                }}
                >
                  Home
                </Link>
            </li>
            <li style={{margin:'1rem'}}>
                <Link
                to="about"
                smooth={true}
                duration={400}
                offset={-90}
                activeClass="active"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: _700 ? "1rem" : "0.7rem",
                  cursor: "pointer",
                }}
                >
                  About
                </Link>
            </li>
            <li style={{margin:'1rem'}}>
                <Link
                to="projects"
                smooth={true}
                duration={400}
                offset={-90}
                activeClass="active"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: _700 ? "1rem" : "0.7rem",
                  cursor: "pointer",
                }}
                >
                  Projects
                </Link>
            </li>
            <li style={{margin:'1rem'}}>
                <Link
                to="exp"
                smooth={true}
                duration={400}
                offset={-90}
                activeClass="active"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: _700 ? "1rem" : "0.7rem",
                  cursor: "pointer",
                }}
                >
                  Experiance
                </Link>
            </li>
            <li style={{margin:'1rem'}}>
                <Link
                to="contact"
                smooth={true}
                duration={400}
                offset={-90}
                activeClass="active"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: _700 ? "1rem" : "0.7rem",
                  marginRight:'2rem',
                  cursor: "pointer",
                }}
                >
                  Contact
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar;
