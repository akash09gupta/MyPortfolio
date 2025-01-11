import { Typography, useMediaQuery } from "@mui/material";
import htmlImg from '../assets/html-img.jpeg';
import cssImg from '../assets/css-img.jpeg';
import jsImg from '../assets/js-img.jpeg';
import mongodbImg from '../assets/mongodb-img.jpeg';
import expressjsImg from '../assets/express-img.jpeg';
import reactImg from '../assets/react-img.jpeg';
import nodejsImg from '../assets/nodejs-img.jpeg';
import javaImg from '../assets/java-img.jpeg';
import pythonImg from '../assets/python-img.jpeg';
import sqlImg from '../assets/sql-img.jpeg';
import powerbiImg from '../assets/powerbi-img.jpeg';
import djangoImg from '../assets/django-img.jpeg';

const Experiance = () => {
    const _700 = useMediaQuery("(min-width: 700px)");
    return (
        <><div id='exp' style={{paddingBottom:'3rem', borderBottom:'2px solid gray'}}>
        <Typography
        sx={{
            marginLeft: _700 ? '6rem' : '2rem',
            marginTop: '2rem',
            fontSize: _700 ? 35 : 25,
            fontWeight: 'bolder',
            marginBottom:'1rem',
        }}
        >
            Experiance
        </Typography>
        <div className="exp"
        style={{
            marginLeft: _700 ? '6rem' : '2rem',
            display: _700 ? 'grid' : 'flex',
            flexWrap: _700 ? 'nowrap':'wrap',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem',
        }}
        >
            <div 
            style={{
                width: _700 ? '10rem': '6rem', 
                height: _700 ? '10rem': '6rem', 
                border:'3px solid gray',
                borderRadius:'50%', 
                backgroundImage:`url(${htmlImg})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat: "no-repeat",
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                }}>
            </div>
            <div 
            style={{
                width:_700 ? '10rem': '6rem', 
                height:_700 ? '10rem': '6rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                border:'3px solid gray', 
                borderRadius:'50%', 
                backgroundImage:`url(${cssImg})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat: "no-repeat"
                }}>
            </div>
            <div 
            style={{
                width:_700 ? '10rem': '6rem', 
                height:_700 ? '10rem': '6rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                border:'3px solid gray', 
                borderRadius:'50%', 
                backgroundImage:`url(${jsImg})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat: "no-repeat"                       
                }}>
            </div>
            <div 
            style={{
                width:_700 ? '10rem': '6rem', 
                height:_700 ? '10rem': '6rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                border:'3px solid gray', 
                borderRadius:'50%', 
                backgroundImage:`url(${djangoImg})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat: "no-repeat"
                }}>
            </div>
            <div 
            style={{
                width:_700 ? '10rem': '6rem', 
                height:_700 ? '10rem': '6rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                border:'3px solid gray', 
                borderRadius:'50%', 
                backgroundImage:`url(${mongodbImg})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat: "no-repeat"
                }}>
            </div>
            <div 
            style={{
                width:_700 ? '10rem': '6rem', 
                height:_700 ? '10rem': '6rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                border:'3px solid gray', 
                borderRadius:'50%', 
                backgroundImage:`url(${expressjsImg})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat: "no-repeat"
                }}>
            </div>
            <div 
            style={{
                width:_700 ? '10rem': '6rem', 
                height:_700 ? '10rem': '6rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                border:'3px solid gray', 
                borderRadius:'50%', 
                backgroundImage:`url(${reactImg})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat: "no-repeat"
                }}>
            </div>
            <div 
            style={{
                width:_700 ? '10rem': '6rem', 
                height:_700 ? '10rem': '6rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                border:'3px solid gray', 
                borderRadius:'50%', 
                backgroundImage:`url(${nodejsImg})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat: "no-repeat"
                }}>
            </div>
            <div 
            style={{
                width:_700 ? '10rem': '6rem', 
                height:_700 ? '10rem': '6rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                border:'3px solid gray', 
                borderRadius:'50%', 
                backgroundImage:`url(${pythonImg})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat: "no-repeat"
                }}>
            </div>
            <div 
            style={{
                width:_700 ? '10rem': '6rem', 
                height:_700 ? '10rem': '6rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                border:'3px solid gray', 
                borderRadius:'50%', 
                backgroundImage:`url(${javaImg})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat: "no-repeat"
                }}>
            </div>
            <div 
            style={{
                width:_700 ? '10rem': '6rem', 
                height:_700 ? '10rem': '6rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                border:'3px solid gray', 
                borderRadius:'50%', 
                backgroundImage:`url(${powerbiImg})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat: "no-repeat"
                }}>
            </div>
            <div 
            style={{
                width:_700 ? '10rem': '6rem', 
                height:_700 ? '10rem': '6rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                border:'3px solid gray', 
                borderRadius:'50%', 
                backgroundImage:`url(${sqlImg})`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backgroundRepeat: "no-repeat"
                }}>
            </div>
        </div></div>
        </>
    );
}
export default Experiance;