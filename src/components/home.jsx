import { useMediaQuery } from "@mui/material";
import TypingAnimation from "./TypingAnimation";
import intro_img from '../assets/intro-img.jpeg';
import { FaLinkedin } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


const Home = () => {
  const _700 = useMediaQuery("(min-width: 700px)");
    return (
      <>
        <div className='home-content' id='home'
        style={{
          maxWidth:'100%',
          height:_700 ? '75vh' : '50vh',
          display:'flex',
          flexDirection: 'row',
          marginTop:'10rem',
        }}
        >
          <div className="intro" 
          style={{
            width: '60vw',
            height:_700 ? '75vh' : '50vh',
            display:'flex',
            flexDirection:'column',
            justifyContent:'left',
            alignItems:'left',
          }}
          >
            <h4 style={{paddingLeft:_700 ? '6rem' : '3rem', fontSize:_700 ? '1.5rem' : '1rem'}}>Welcome in My Feed</h4>
            <h1 style={{paddingLeft:_700 ? '6rem' : '3rem', fontSize:_700 ? '2.5rem' : '1rem'}}>Hello, I'm a <TypingAnimation /></h1>
            <div className="introduction" style={{marginTop:'1.5rem'}}>
              <p style={{
                fontWeight:'bold', 
                fontFamily: 'sans-serif', 
                paddingLeft:_700 ? '6rem' : '3rem',
                fontSize: _700 ? '1rem' : '0.8rem'
                }}>Hi, I’m Akash Gupta, a passionate and versatile professional skilled in web development, data analysis, and software engineering. 
                With a strong foundation in creating secure and efficient applications, I specialize in turning ideas into impactful solutions.</p>
              <p style={{
                fontWeight:'bold', 
                fontFamily: 'sans-serif',
                paddingLeft:_700 ? '6rem' : '3rem',
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
                paddingLeft: _700 ? '6rem' : '2rem',
                fontSize:_700 ? '1rem' : '0.5rem'
                }}>Available on</h6>
              <h6 style={{
                fontWeight:'bold', 
                marginRight:'4.5rem', 
                paddingLeft:_700 ? '6rem' : '2rem',
                fontSize:_700 ? '1rem' : '0.5rem'
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
              paddingLeft:_700 ? '6rem' : '3rem'
            }}
            >
              <div style={{width:_700 ? '3rem':'1rem', height1:'2rem'}}>
                <a 
                href="https://www.linkedin.com/in/akash09gupta/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color:'black'}}
                >
                <FaLinkedin size={_700 ? 30 : 10}/>
                </a>
              </div>
              <div style={{width:_700 ? '3rem':'1rem', height1:'2rem'}}>
                <a 
                href="https://www.hackerrank.com/profile/akashgupta211ag" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color:'black'}}
                >
                <FaHackerrank size={_700 ? 30 : 10}/>
                </a>
              </div>
              <div style={{width:_700 ? '3rem':'1rem', height1:'2rem'}}>
                <a 
                href="https://github.com/akash09gupta/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color:'black'}}
                >
                <FaGithubSquare size={_700 ? 30 : 10}/>
                </a>
              </div>
              <div style={{width:_700 ? '3rem':'1rem', height1:'2rem'}}>
                <a 
                href="https://www.instagram.com/akash097_9/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{color:'black'}}
                >
                <FaInstagramSquare size={_700 ? 30 : 10}/>
                </a>
              </div>
            </div>
            <div className="exp-info"
            style={{
              display:'flex', 
              flexDirection:'row', 
              justifyContent:'center', 
              alignItems:'center', 
              marginRight:_700 ? '3rem' : 0
            }}
            >
              <div style={{width:_700 ? '3rem':'1rem', height1:'2rem'}}><BiLogoMongodb size={_700 ? 30 : 10}/></div>
              <div style={{width:_700 ? '3rem':'1rem', height1:'2rem'}}><SiExpress size={_700 ? 30 : 10}/></div>
              <div style={{width:_700 ? '3rem':'1rem', height1:'2rem'}}><FaReact size={_700 ? 30 : 10}/></div>
              <div style={{width:_700 ? '3rem':'1rem', height1:'2rem'}}><FaNodeJs size={_700 ? 30 : 10}/></div>
            </div>
          </div>
          </div>
          <div className="my-img"
          style={{
            width:'33vw',
            height:_700 ? '70vh' : '20vh',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            backgroundColor:'pink',
            backgroundImage:`url(${intro_img})`,
            borderRadius:'50%',
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundRepeat: "no-repeat" 
          }}
          ></div>
        </div>
      </>
    )
}
export default Home;