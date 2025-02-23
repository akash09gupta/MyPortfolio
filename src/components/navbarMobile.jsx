import logo from "../assets/logo.png";
import { Link } from 'react-scroll';
import dropDown from '../assets/dropDown.png';

const NavbarMobile = () => {
  return (
    <>
      <div classNameName="navbar" 
      style={{
      display:"flex", 
      flexDirection:"row", 
      justifyContent:'space-between', 
      alignItems:"center",
      background:"black",
      top:'0',
      width:"100%",
      height: '3.5rem',
      position:"fixed",
      }}>
        <div className="navbar-logo" 
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",  
          width: '5rem',
          height: '3rem'
          }}></div>
          <div 
          style={{
            color:"white", 
            fontFamily:'revert',
            fontWeight:'bold',
            fontSize:'1.8rem',
            }}>
              Akash Gupta
          </div>
          <div className="dropdown">
              <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" 
              style={{border:'none'}}>
              <img src={dropDown} width={45} alt="dropDown"/>
              </button>
              <ul className="dropdown-menu" style={{backgroundColor:'black'}}>
                <li>
                    <button className="dropdown-item" type="button">
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
                          fontSize: '1.5rem',
                          cursor: "pointer",
                          borderBottom:'1px solid gray'
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "gray")} // Change color on hover
                        onMouseLeave={(e) => (e.target.style.color = "white")} // Reset color on leave
                        >
                          Home
                        </Link>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" type="button">
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
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      borderBottom:'1px solid gray'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "gray")} // Change color on hover
                    onMouseLeave={(e) => (e.target.style.color = "white")} // Reset color on leave
                    >
                      About
                    </Link>
                    </button>
                </li> 
                <li>
                    <button className="dropdown-item" type="button">
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
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      borderBottom:'1px solid gray'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "gray")} // Change color on hover
                    onMouseLeave={(e) => (e.target.style.color = "white")} // Reset color on leave
                    >
                      Projects
                    </Link>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" type="button">
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
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      borderBottom:'1px solid gray'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "gray")} // Change color on hover
                    onMouseLeave={(e) => (e.target.style.color = "white")} // Reset color on leave
                    >
                      Experiance
                    </Link>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" type="button">
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
                      fontSize: "1.5rem",
                      marginRight:'2rem',
                      cursor: "pointer",
                      borderBottom:'1px solid gray'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "gray")} // Change color on hover
                    onMouseLeave={(e) => (e.target.style.color = "white")} // Reset color on leave
                    >
                      Contact
                    </Link>
                    </button>
                </li>
              </ul>
            </div>
    </div>
    </>
  )
}

export default NavbarMobile;

