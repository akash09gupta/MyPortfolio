import { useMediaQuery } from "@mui/material";
import TypingAnimation from "./TypingAnimation";
// import intro_img from '../assets/intro-img.jpeg';
import { FaLinkedin } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
// import  pic1  from "../assets/pic1.jpg";
import  pic2  from "../assets/pic2.jpg";
// import  pic3  from "../assets/pic3.jpg";
// import  pic4  from "../assets/pic4.jpg";

const Home = () => {
  const _700 = useMediaQuery("(min-width: 700px)");
    return (
      <>
        <div className='home-content' id='home'
        style={{
          maxWidth:'100%',
          height:_700 ? '75vh' : '100vh',
          display:'flex',
          // flexDirection: _700 ? 'row' : 'column-reverse',
          flexDirection: _700 ? 'row' : 'column-reverse',
          justifyContent:'center',
          alignItems:'center',
          // marginTop:_700 ? '10rem' : '6rem',
          marginTop:_700 ? '7rem' : '5rem',
          // gap: '2rem'
        }}
        >
          <div className="intro" 
          style={{
            width: _700 ? '60vw' : '80vw',
            height:_700 ? '75vh' : '50vh',
            display:'flex',
            flexDirection:'column',
            justifyContent:'left',
            alignItems:'left',
          }}
          >
            <h4 style={{paddingLeft:_700 ? '6rem' : 0, fontSize:_700 ? '1.5rem' : '1rem'}}>Welcome in My Feed</h4>
            <h1 style={{paddingLeft:_700 ? '6rem' : 0, fontSize:_700 ? '2.5rem' : '1rem'}}>Hello, I'm a <TypingAnimation /></h1>
            <div className="introduction" style={{marginTop:'1.5rem', width:_700 ? 'auto' : '100vw'}}>
              <p style={{
                fontWeight:'bold', 
                fontFamily: 'sans-serif', 
                paddingLeft:_700 ? '6rem' : 0,
                paddingRight:_700 ? 0 : '2rem',
                fontSize: _700 ? '1rem' : '0.8rem'
                }}>Hi, I’m Akash Gupta, a passionate and versatile professional skilled in web development, data analysis, and software engineering. 
                With a strong foundation in creating secure and efficient applications, I specialize in turning ideas into impactful solutions.</p>
              <p style={{
                fontWeight:'bold', 
                fontFamily: 'sans-serif',
                paddingLeft:_700 ? '6rem' : 0,
                paddingRight:_700 ? 0 : '2rem',
                fontSize: _700 ? '1rem' : '0.8rem'
                }}>I thrive on challenges, whether it’s crafting seamless user experiences, analyzing complex data, or building robust systems. Let's collaborate to create something amazing!</p>
            </div>
            <div style={{
              display:'flex',
              flexDirection: 'row',
              justifyContent:'space-between',
              alignItems:'center',
              marginTop:'1.5rem'
            }}>
              <h6 style={{ 
                fontWeight:'bold', 
                marginLeft:'2rem', 
                paddingLeft: _700 ? '6rem' : 0,
                fontSize:_700 ? '1rem' : '0.8rem'
                }}>Available on</h6>
              <h6 style={{
                fontWeight:'bold', 
                marginRight:'4.5rem', 
                paddingLeft:'6rem',
                fontSize:_700 ? '1rem' : '0.8rem',
                }}>Currently working on</h6>
            </div>
            <div className="bottom-info" 
            style={{
              display: 'flex', 
              flexDirection:'row', 
              justifyContent:'space-between', 
              alignItems:'center'
              }}>
            <div className="social-media"
            style={{
              display:'flex', 
              flexDirection:'row', 
              justifyContent:'center', 
              alignItems:'center',
              paddingLeft:_700 ? '6rem' : 0
            }}
            >
              <div style={{width:_700 ? '3rem':'1rem', height1:'2rem',paddingRight:_700 ? '0' : '1rem',
                paddingLeft:_700 ? '0' : '1rem'}}>
                <a 
                href="https://www.linkedin.com/in/akash09gupta/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color:'black'}}
                >
                <FaLinkedin size={_700 ? 30 : 20}/>
                </a>
              </div>
              <div style={{width:_700 ? '3rem':'1rem', height1:'2rem',paddingRight:_700 ? '0' : '1rem',
                paddingLeft:_700 ? '0' : '1rem'}}>
                <a 
                href="https://www.hackerrank.com/profile/akashgupta211ag" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color:'black'}}
                >
                <FaHackerrank size={_700 ? 30 : 20}/>
                </a>
              </div>
              <div style={{width:_700 ? '3rem':'1rem', height1:'2rem',paddingRight:_700 ? '0' : '1rem',
                paddingLeft:_700 ? '0' : '1rem'}}>
                <a 
                href="https://github.com/akash09gupta/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color:'black'}}
                >
                <FaGithubSquare size={_700 ? 30 : 20}/>
                </a>
              </div>
              <div style={{width:_700 ? '3rem':'1rem', height1:'2rem',paddingRight:_700 ? '0' : '1rem',
                paddingLeft:_700 ? '0' : '1rem'}}>
                <a 
                href="https://www.instagram.com/akash097_9/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color:'black'}}
                >
                <FaInstagramSquare size={_700 ? 30 : 20}/>
                </a>
              </div>
            </div>
            <div className="exp-info"
            style={{
              display:'flex', 
              flexDirection:'row', 
              justifyContent:'center', 
              alignItems:'center', 
              marginRight:_700 ? '3rem' : 0,
            }}
            >
              <div style={{
                width:_700 ? '3rem':'1rem', 
                height:'2rem', 
                paddingRight:_700 ? '0' : '1rem',
                paddingLeft:_700 ? '0' : '1rem'
                }}><BiLogoMongodb size={_700 ? 30 : 20}/></div>
              <div style={{
                width:_700 ? '3rem':'1rem', 
                height:'2rem', 
                paddingRight:_700 ? '0' : '1rem',
                paddingLeft:_700 ? '0' : '1rem'
                }}><SiExpress size={_700 ? 30 : 20}/></div>
              <div style={{
                width:_700 ? '3rem':'1rem', 
                height:'2rem', 
                paddingRight:_700 ? '0' : '1rem',
                paddingLeft:_700 ? '0' : '1rem'
                }}><FaReact size={_700 ? 30 : 20}/></div>
              <div style={{
                width:_700 ? '3rem':'1rem', 
                height:'2rem', 
                paddingRight:_700 ? '0' : '1rem',
                paddingLeft:_700 ? '0' : '1rem'
                }}><FaNodeJs size={_700 ? 30 : 20}/></div>
            </div>
          </div>
          </div>
          {/* <div className="my-img"
          style={{
            width:_700 ? '33vw' : '20rem',
            height:_700 ? '70vh' : '20rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            backgroundColor:'pink',
            backgroundImage:`url(${pic2})`,
            borderRadius:'50%',
            backgroundSize:'cover',
            backgroundPosition:'top',
            backgroundRepeat: "no-repeat",
            marginTop:_700 ? 0 : 'auto',
            marginBottom:_700 ? 0 : '2rem',
          }}
          ></div> */}
          <div 
          className="my-img"
          style={{
            width: _700 ? '33vw' : '20rem', 
            height: _700 ? '33vw' : '20rem', // Ensure a perfect circle
            minWidth: '200px',
            minHeight: '200px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            backgroundColor: 'transparent', // Remove the pink background
            backgroundImage: `url(${pic2})`,
            borderRadius: '50%', // Ensures a proper circle
            backgroundSize: 'cover', // Ensures the image fills the circle properly
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: "no-repeat",
            marginTop: _700 ? 0 : 'auto',
            marginBottom: _700 ? 0 : '2rem',
            display: 'flex', // Helps with centering
            justifyContent: 'center',
            alignItems: 'center',
          }}
        ></div>

        </div>
      </>
    )
}
export default Home;