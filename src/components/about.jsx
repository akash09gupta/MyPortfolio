import { Typography, useMediaQuery } from "@mui/material";

const About = () => {
    const _700 = useMediaQuery("(min-width: 700px)");
    return (
        <>
        <div className="about-section" id='about' style={{marginTop: _700 ? 0 : '4rem', borderBottom: '2px solid gray'}}>
            <Typography
            sx={{
                marginLeft: _700 ? '6rem' : '2rem',
                fontSize: _700 ? 35 : 25,
                fontWeight: 'bolder',
                marginBottom:'1rem'
            }}
            >About</Typography>
            <Typography
            sx={{
                marginLeft: _700 ? '6rem' : '2rem',
                marginRight:'6rem',
                marginBottom:'1rem',
                fontSize: _700 ? 18 : 15,
                fontWeight: 'bolder',
            }}
            >
            Hello, I'm Akash, a passionate Web developer with a keen eye for MERN Stack . With a background in IT, 
            I strive to create impactful and visually stunning Software solutions that leave a lasting impression.
            </Typography>
            <Typography
            sx={{
                marginLeft: _700 ? '6rem' : '2rem',
                fontSize: _700 ? 25 : 18,
                fontWeight:'bolder',
                color:'#F93827',
            }}
            >
            Education & Training
            </Typography>
            <Typography
            sx={{
                marginLeft: _700 ? '6rem' : '2rem',
                marginRight:'6rem',
                fontSize: _700 ? 18 : 15,
                fontWeight: 'bolder',
                marginBottom:'1rem',
            }}
            >
                Bachelor of Computer Applications (BCA) | 2022–2025  
                Invertis University, Bareilly, Uttar Pradesh
            </Typography>
            <Typography
            sx={{
                marginLeft: _700 ? '6rem' : '2rem',
                fontSize: _700 ? 25 : 18,
                fontWeight:'bolder',
                color:'#F93827'
            }}
            >
            Skills & Expertise
            </Typography>
            <Typography
            sx={{
                marginLeft: _700 ? '6rem' : '2rem',
                marginRight:'6rem',
                fontSize: _700 ? 18 : 15,
                fontWeight: 'bolder',
                marginBottom:'1rem',
            }}
            >
                <ul>
                    <li><b>Web Development:</b> Proficient in HTML, CSS, and JavaScript.</li>
                    <li><b>Frameworks & Libraries:</b> Basic knowledge of React, Node.js, MongoDB, and Express.js.</li>
                    <li><b>Programming Languages:</b> Expertise in Java and Python.</li>
                    <li><b>Data Analysis:</b> Skilled in data cleaning, visualization, and deriving insights using tools like Power BI, MS Excel, and Python libraries (e.g., Pandas, NumPy, Matplotlib).</li>
                    <li><b>Database Management:</b> Proficient in MySQL.</li>
                    <li><b>Tools & Platforms:</b> Skilled in GitHub, Jupyter Notebook, Power BI, and MS Excel.</li>
                </ul>
            </Typography>
            <Typography
            sx={{
                marginLeft: _700 ? '6rem' : '2rem',
                fontSize: _700 ? 25 : 18,
                fontWeight:'bolder',
                color:'#F93827'
            }}
            >
            Professional Experience
            </Typography>
            <Typography
            sx={{
                marginLeft: _700 ? '6rem' : '2rem',
                marginRight:'6rem',
                fontSize: _700 ? 18 : 15,
                fontWeight: 'bolder',
                marginBottom:'1rem',
            }}
            >
                <b>Java Intern | Code Alpha | Certificate</b>
                <ul>
                    <li>Developed and optimized Java-based applications.</li>
                    <li>Gained hands-on experience in object-oriented programming, debugging, and code enhancement.</li>
                    <li>Collaborated with a team to deliver high-quality software solutions.</li>
                </ul>
            </Typography>
            <Typography
            sx={{
                marginLeft: _700 ? '6rem' : '2rem',
                fontSize: _700 ? 25 : 18,
                fontWeight:'bolder',
                color:'#F93827'
            }}
            >
            Mission Statement
            </Typography>
            <Typography
            sx={{
                marginLeft: _700 ? '6rem' : '2rem',
                marginRight:'6rem',
                fontSize: _700 ? 18 : 15,
                fontWeight: 'bolder',
                marginBottom:'1rem',
            }}
            >
                My mission is to utilize my expertise in web development, data analysis, and software engineering to create innovative and impactful solutions that surpass client expectations. I am dedicated to continuous learning, embracing challenges, 
                and contributing meaningfully to the ever-evolving digital landscape.
            </Typography>
        </div>
        </>
    )
}
export default About;