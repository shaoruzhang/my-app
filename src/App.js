
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Education from "./Education"; 
import AboutMe from "./AboutMe"; 
import Skills from "./Skills";
import animatedCursor from "./assets/cursors/precision_select.gif";
import Projects from "./Projects";
import Contact from "./Contact";

export default function App() {
  const customCursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Position the <img> to follow the mouse's coordinates
      if (customCursorRef.current) {
        // Adjust the "-10px" values to center the image
        customCursorRef.current.style.left = `${event.clientX - 10}px`;
        customCursorRef.current.style.top = `${event.clientY - 10}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* THIS ANIMATED CURSOR */}
      <img
        ref={customCursorRef}
        src={animatedCursor} 
        alt="Animated Cursor"
        style={{
          position: "fixed",
          zIndex: 9999,
          pointerEvents: "none", 
          width: "40px",
          height: "40px",
          transform: "translate(-50%, -50%)", // Centers the cursor
          top: "-100px",
          left: "-100px",
        }}
      />
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="4f3b30e2e72655a8eb948bd9d3ba66a30681a6b9.mp4" type="video/mp4" />
        <source src="85882f90ad8ca69467610883a9fa95ecc2f071ab.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <a
        href="https://www.instagram.com/yugen.framed/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          top: "60px",
          left: "490px",
          width: "95px",
          height: "117px",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "16px",
          boxShadow: "0 0 24px 8px #fff7, 0 0 60px 20px #ffe06677",
          border: "2px solid #ffe066",
          cursor: "pointer",
          transition: "box-shadow 0.3s",
        }}
        title="Photography Portfolio"
      >
        <img
          src="\test2.gif"
          alt="sparkle"
          style={{
            width: "60px",
            height: "60px",
            pointerEvents: "none",
            filter: "drop-shadow(0 0 8px #fff) drop-shadow(0 0 16px #ffe066)",
          }}
        />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </a>
 {/* Cat Instagram Link */}
      <a
        href="https://www.instagram.com/mippy_?igsh=YXY4MjJtcG9xZmk2&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          top: "86px",
          left: "700px", // Adjusted position to be next to the first link
          width: "120px",
          height: "95px",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "16px",
          boxShadow: "0 0 24px 8px #fff7, 0 0 60px 20px #ffe06677",
          border: "2px solid #ffe066",
          cursor: "pointer",
          transition: "box-shadow 0.3s",
        }}
        title="My Cats' Instagram Page"
      >
        <img
          src="\IMG_2030.jpg" // You can change this to a cat-specific GIF if you have one
          alt="cat sparkle"
          style={{
            width: "90px",
            height: "80px",
            pointerEvents: "none",
            filter: "drop-shadow(0 0 8px #fff) drop-shadow(0 0 16px #ffe066)",
          }}
        />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </a>

      <div
  style={{
    position: "relative",
    zIndex: 1,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
  }}
>
  <h1
    style={{
      fontSize: "2rem",
      textShadow: `
        0 0 10px #fff,
        0 0 20px #ffe066,
        0 0 40px #ffe066,
        0 0 80px #ffcc00
      `,
      animation: "pulseGlow 2s infinite alternate",
    }}
  >
    Welcome to Sheryl's Cozy Web Space
  </h1>
  <p
    style={{
      marginTop: "20px",
      fontSize: "1.0rem",
      textShadow: `
        0 0 6px #fff,
        0 0 12px #ffe066,
        0 0 24px #ffe066
      `,
      animation: "pulseGlowSoft 3s infinite alternate",
    }}
  >
    Scroll, click, and discover more about me!
  </p>

  {/* Add CSS keyframes for glowing pulse */}
  <style>{`
    @keyframes pulseGlow {
      from {
        text-shadow: 
          0 0 10px #fff,
          0 0 20px #ffe066,
          0 0 40px #ffe066,
          0 0 80px #ffcc00;
      }
      to {
        text-shadow: 
          0 0 20px #fff,
          0 0 40px #ffe066,
          0 0 60px #ffe066,
          0 0 100px #ffcc00;
      }
    }
    @keyframes pulseGlowSoft {
      from {
        text-shadow: 
          0 0 6px #fff,
          0 0 12px #ffe066,
          0 0 24px #ffe066;
      }
      to {
        text-shadow: 
          0 0 12px #fff,
          0 0 24px #ffe066,
          0 0 48px #ffe066;
      }
    }
  `}</style>
</div>


      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>

      <div style={{ position: "relative", zIndex: 1, paddingBottom: "100px" }}>
        <AboutMe /> 
        <Skills />
        <Education /> 
        <Experience />
        <Projects />   
        <Contact />  
      </div>
    </>
  );
}