import { Typography, useMediaQuery } from "@mui/material"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from "react-hot-toast";

const Contact = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
      const userInfo={
        name:data.name,
        email:data.email,
        message:data.message
      }
      try {
        await axios.post("https://getform.io/f/aqoopmwa", userInfo);
        toast.success("Your message has been successfully sent to Akash.");
        reset();
      }
      catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    }

    const _700 = useMediaQuery("(min-width: 700px)");
    return (
        <><div id='contact'>
        <Typography
        sx={{
            marginLeft: _700 ? '6rem' : '2rem',
            marginTop: '2rem',
            fontSize: _700 ? 35 : 25,
            fontWeight: 'bolder',
          }}
          >
            Contact Me
        </Typography>
        <Typography
        sx={{
          marginLeft: _700 ? '6rem' : '2rem',
          fontSize: _700 ? 17 : 13,
          marginBottom:'1rem',
          fontWeight: 'bold',
        }}
        >
            Please fill out the form below to contact me
        </Typography>
        <form className="row g-3" 
        style={{
          width: _700 ? '24rem' : '18rem', 
          margin:'auto', 
          borderRadius:'15px', 
          padding:'1.5rem',
          backgroundColor:'rgb(226 232 240)',
        }}
        onSubmit={handleSubmit(onSubmit)}
        >
        <h4 style={{fontWeight:'bold'}}>Send Your Message</h4>
        <label for="name" className="form-label" style={{fontWeight:'bold'}}>FullName</label>
          <input
           {...register("name", { required: true })} 
          type="text" className="form-control" id="name" placeholder="Enter your fullname" name="name"
          style={{fontWeight:'bold', fontSize:'1rem', marginTop:0}}
          />
          {errors.name && <span>This field is required</span>}
        <label for="email" className="form-label" style={{fontWeight:'bold'}}>Email Address</label>
          <input 
           {...register("email", { required: true })}
          type="email" className="form-control" id="email" placeholder="Enter your email address" name="email"
          style={{fontWeight:'bold', fontSize:'1rem', marginTop:0}}
          />
          {errors.email && <span>This field is required</span>}
        <label for="msg" className="form-label" style={{fontWeight:'bold'}}>Message</label>
        <textarea 
         {...register("message", { required: true })}
        class="form-control" placeholder="Enter your Query" id="message" name="message"
        style={{fontWeight:'bold', fontSize:'1rem', marginTop:0}}
        ></textarea>
        {errors.message && <span>This field is required</span>}
        <div className="col-12">
          <input type="submit" className="btn" 
          style={{
            backgroundColor:'black', 
            color:'white', 
            fontWeight:'bold',
            }}value={"Send"}/>
         </div>
        </form>
        <hr/>
        <div className="footer"
        style={{
          width:'25rem', 
          height:'13rem',
          margin:'auto',
          }}>
            <div 
            style={{width:'20rem', 
            height:'6rem', 
            borderBottom:'1px solid black', 
            margin:'auto',
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:'end',
            paddingBottom:'1.5rem',
            }}>
            <FaFacebook size={30}/>
            <FaTwitter size={30}/>
            <FaInstagram size={30}/>
            <FaLinkedin size={30}/>
            </div>
            <div style={{width:'25rem', height:'6rem', margin:'auto'}}>
              <ul style={{listStyle:'none', marginTop:'1rem'}}>
                <li style={{fontSize:'1rem', marginLeft:'1.5rem'}}>© 2024 Your Company. All rights reserved.</li>
                <li style={{marginLeft:'4rem', fontSize:'1rem'}}>Supportive Partner ❤️ Akash</li>
              </ul>
              </div>
        </div>
        </div>
        </>
    )
}
export default Contact;