import { useMediaQuery } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  const typedElement = useRef(null); // Reference to the HTML element

  useEffect(() => {
    const options = {
      strings: ["Web Developer", "Data Analyst", "Python Developer"],
      typeSpeed: 50,   // Typing speed
      backSpeed: 30,   // Backspacing speed
      loop: true,      // Enable looping
    };

    const typed = new Typed(typedElement.current, options);
    // Cleanup the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);
  
  const _700 = useMediaQuery("(min-width: 700px)");
  return (
    <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333", display:'inline'}}>
      <span ref={typedElement} style={{color:'red', fontWeight:'bold', fontSize: _700 ? '2rem' : '1rem'}} />
    </div>
  );
};

export default TypingAnimation;
