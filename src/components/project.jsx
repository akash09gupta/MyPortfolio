import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import { Typography, useMediaQuery } from '@mui/material';

const Project = () => {
    const _700 = useMediaQuery("(min-width: 700px)");
    return (
        <><div id='projects' style={{left:0,borderBottom:'2px solid gray', zIndex:-1}}>
        <Typography
        sx={{
            marginLeft: _700 ? '6rem' : '2rem',
            marginTop: '2rem',
            fontSize: _700 ? 35 : 25,
            fontWeight: 'bolder',
            marginBottom:'1rem',
        }}
        >Projects</Typography>
        <div className="project" 
        style={{
            // display: 'grid',
            // gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            // justifyContent:'center',
            // alignItems:'center',
            // gap: '1.5rem',
            // // marginRight:'6rem',
            // paddingBottom:'3rem',
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'space-around',
            alignItems:'center',
            gap: '1.5rem',
            paddingBottom:'3rem'
        }}
        >
        <div className="card" 
        style={{
            width: _700 ? '20rem' : '18rem',
            // marginLeft: _700 ? '6rem' : '2rem', 
            overflow: 'hidden', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)', 
            }}>
            <img src={p3} className="card-img-top" alt="..."/>
            <div className="card-body" style={{backgroundColor: '#EFF3EA'}}>
                <h5 className="card-title"
                style={{fontSize:_700 ? '1.3rem':'1rem'}}
                >Amazon Clone</h5>
                <p className="card-text"
                style={{fontSize:_700 ? '1rem':'0.8rem'}}
                >This project is an Amazon clone website that replicates some of the features 
                    and functionalities of the original Amazon website. 
                    It includes sections for navigation, product listings, user account management, and more.</p>
                <a href="https://akash-amazon-clone.netlify.app/" className="btn btn-primary"
                style={{fontSize: _700 ? '1rem':'0.8rem'}}
                >Live Project Link</a>
            </div>
        </div>
        <div className="card" 
        style={{
            width: _700 ? '20rem' : '18rem',
            // marginLeft: _700 ? '6rem' : '2rem', 
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}>
            <img src={p3} className="card-img-top" alt="..."/>
            <div className="card-body" style={{backgroundColor: '#EFF3EA'}}>
                <h5 className="card-title"
                style={{fontSize:_700 ? '1.3rem':'1rem'}}
                >Rock Paper Scissors</h5>
                <p className="card-text"
                style={{fontSize:_700 ? '1rem':'0.8rem'}}
                >A simple Rock Paper Scissors game built with HTML, CSS, and JavaScript. 
                This project allows users to play the classic game against a computer opponent, 
                with the computer making random choices each round.</p>
                <a href="https://akash09gupta.github.io/Rock-Paper-Scissor-Game/" className="btn btn-primary"
                style={{fontSize: _700 ? '1rem':'0.8rem'}}
                >Live Project Link</a>
            </div>
        </div>
        <div className="card" 
        style={{
            width: _700 ? '20rem' : '18rem',
            // marginLeft: _700 ? '6rem' : '2rem', 
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}>
            <img src={p3} className="card-img-top" alt="..."/>
            <div className="card-body" style={{backgroundColor: '#EFF3EA'}}>
                <h5 className="card-title"
                style={{fontSize:_700 ? '1.3rem':'1rem'}}
                >Tic Tac Toe</h5>
                <p className="card-text"
                style={{fontSize:_700 ? '1rem':'0.8rem'}}
                >This project is a simple implementation of the classic Tic-Tac-Toe game where two players take turns marking spaces 
                on a 3x3 grid to try and get three of their symbols in a row, column, or diagonal.</p>
                <a href="https://akash09gupta.github.io/Tic-Toe-Game/" className="btn btn-primary"
                style={{fontSize: _700 ? '1rem':'0.8rem'}}
                >Live Project Link</a>
            </div>
        </div>
        <div className="card" 
        style={{
            width: _700 ? '20rem' : '18rem',
            // marginLeft: _700 ? '6rem' : '2rem', 
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}>
            <img src={p1} className="card-img-top" alt="..."/>
            <div className="card-body" style={{backgroundColor: '#EFF3EA'}}>
                <h5 className="card-title"
                style={{fontSize:_700 ? '1.3rem':'1rem'}}
                >Pizza Sales Data Analysis</h5>
                <p className="card-text"
                style={{fontSize:_700 ? '1rem':'0.8rem'}}
                >The Pizza Sales Data Analysis project focuses on exploring sales data from 2015 to uncover valuable business insights. Using Python and libraries like Pandas and Matplotlib, I analyzed key performance metrics and visualized the findings to support decision-making.</p>
                <a href="https://www.linkedin.com/posts/akash09gupta_dataanalysis-pizzasales-businessinsights-activity-7263828921232629760-HVPu?utm_source=share&utm_medium=member_desktop" className="btn btn-primary"
                style={{fontSize: _700 ? '1rem':'0.8rem'}}
                >LinkedIn Post Link</a>
            </div>
        </div>
        <div className="card" 
        style={{
            width: _700 ? '20rem' : '18rem',
            // marginLeft: _700 ? '6rem' : '2rem', 
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}>
            <img src={p1} className="card-img-top" alt="..."/>
            <div className="card-body" style={{backgroundColor: '#EFF3EA'}}>
                <h5 className="card-title"
                style={{fontSize:_700 ? '1.3rem':'1rem'}}
                > Adani Enterprises Stock Data Analysis Dashboard</h5>
                <p className="card-text"
                style={{fontSize:_700 ? '1rem':'0.8rem'}}
                >
                    This Power BI dashboard analyzes Adani Enterprises' stock performance, highlighting trends, volume movements, and key indicators. It provides valuable insights for investors and analysts to understand market dynamics effectively.
                </p>
                <a href="https://www.linkedin.com/posts/akash09gupta_powerbi-datavisualization-stockanalysis-activity-7259457414461030400-FpzY?utm_source=share&utm_medium=member_desktop" className="btn btn-primary"
                style={{fontSize: _700 ? '1rem':'0.8rem'}}
                >LinkedIn Post Link</a>
            </div>
        </div>
        <div className="card" 
        style={{
            width: _700 ? '20rem' : '18rem',
            // marginLeft: _700 ? '6rem' : '2rem', 
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}>
            <img src={p1} className="card-img-top" alt="..."/>
            <div className="card-body" style={{backgroundColor: '#EFF3EA'}}>
                <h5 className="card-title"
                style={{fontSize:_700 ? '1.3rem':'1rem'}}
                >Virat Kohli Career Statistics Analysis Dashboard</h5>
                <p className="card-text"
                style={{fontSize:_700 ? '1rem':'0.8rem'}}
                >
                    This Power BI dashboard provides an analysis of Virat Kohli's career, showcasing batting performance, trends, yearly progress, milestones, and consistency through detailed visualizations.
                </p>
                <a href="https://www.linkedin.com/posts/akash09gupta_powerbi-datavisualization-viratkohli-activity-7256917625518071809-ONz7?utm_source=share&utm_medium=member_desktop" className="btn btn-primary"
                style={{fontSize: _700 ? '1rem':'0.8rem'}}
                >LinkedIn Post Link</a>
            </div>
        </div>
        <div className="card" 
        style={{
            width: _700 ? '20rem' : '18rem',
            // marginLeft: _700 ? '6rem' : '2rem', 
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}>
            <img src={p2} className="card-img-top" alt="..."/>
            <div className="card-body" style={{backgroundColor: '#EFF3EA'}}>
                <h5 className="card-title"
                style={{fontSize:_700 ? '1.3rem':'1rem'}}
                >Simple Banking Application</h5>
                <p className="card-text"
                style={{fontSize:_700 ? '1rem':'0.8rem'}}
                >
                    A simple Java console-based banking application that allows users to perform basic banking operations such as depositing money, withdrawing money, checking balance, and transferring funds.
                </p>
                <a href="https://github.com/akash09gupta/CodeAlpha_SimpleBankingApplication" className="btn btn-primary"
                style={{fontSize: _700 ? '1rem':'0.8rem'}}
                >GitHub Link</a>
            </div>
        </div>
        <div className="card" 
        style={{
            width: _700 ? '20rem' : '18rem',
            // marginLeft: _700 ? '6rem' : '2rem', 
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}>
            <img src={p2} className="card-img-top" alt="..."/>
            <div className="card-body" style={{backgroundColor: '#EFF3EA'}}>
                <h5 className="card-title"
                style={{fontSize:_700 ? '1.3rem':'1rem'}}
                >Hotel Reservation System</h5>
                <p className="card-text"
                style={{fontSize:_700 ? '1rem':'0.8rem'}}
                >
                    This Java application allows users to check available rooms, reserve rooms, modify bookings, cancel reservations, make payments, and exit. It also provides features for updating payment status and generating receipts.
                </p>
                <a href="https://github.com/akash09gupta/CodeAlpha_HotelReservationSystem" className="btn btn-primary"
                style={{fontSize: _700 ? '1rem':'0.8rem'}}
                >GitHub Link</a>
            </div>
        </div>
        <div className="card" 
        style={{
            width: _700 ? '20rem' : '18rem',
            // marginLeft: _700 ? '6rem' : '2rem', 
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
            }}>
            <img src={p2} className="card-img-top" alt="..."/>
            <div className="card-body" style={{backgroundColor: '#EFF3EA'}}>
                <h5 className="card-title"
                style={{fontSize:_700 ? '1.3rem':'1rem'}}
                >Student Grade Tracker</h5>
                <p className="card-text"
                style={{fontSize:_700 ? '1rem':'0.8rem'}}
                >
                    This Java program helps teachers efficiently track and manage student grades. It allows teachers to add new grades, modify existing ones, view grades by student or subject, and calculate average scores.
                </p>
                <a href="https://github.com/akash09gupta/CodeAlpha_StudentGradeTracker" className="btn btn-primary"
                style={{fontSize: _700 ? '1rem':'0.8rem'}}
                >GitHub Link</a>
            </div>
        </div>
        </div></div>
        </>
    )
}
export default Project;