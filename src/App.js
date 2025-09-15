// // src/App.js

// import React, { useRef, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import Experience from "./Experience";
// import animatedCursor from "./assets/cursors/precision_select.gif"; // Use your actual file name here


// export default function App() {
//   const customCursorRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       // Position the <img> to follow the mouse's coordinates
//       if (customCursorRef.current) {
//         // Adjust the "-10px" values to center the image
//         customCursorRef.current.style.left = `${event.clientX - 10}px`;
//         customCursorRef.current.style.top = `${event.clientY - 10}px`;
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       {/* THIS IS YOUR ANIMATED CURSOR */}
//       <img
//         ref={customCursorRef}
//         src={animatedCursor} // Make sure this is the correct path to your animated GIF
//         alt="Animated Cursor"
//         style={{
//           position: "fixed",
//           zIndex: 9999,
//           pointerEvents: "none", // This allows clicking on content
//           width: "40px",
//           height: "40px",
//           transform: "translate(-50%, -50%)", // Centers the cursor
//           top: "-100px",
//           left: "-100px",
//         }}
//       />
      
//       {/* The rest of your existing JSX code */}
//       <video
//         className="background-video"
//         autoPlay
//         muted
//         loop
//         playsInline
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100vw",
//           height: "100vh",
//           objectFit: "cover",
//           zIndex: -1,
//         }}
//       >
//         <source src="4f3b30e2e72655a8eb948bd9d3ba66a30681a6b9.mp4" type="video/mp4" />
//         <source src="85882f90ad8ca69467610883a9fa95ecc2f071ab.webm" type="video/webm" />
//         Your browser does not support the video tag.
//       </video>

//       <a
//         href="https://www.instagram.com/yugen.framed/?hl=en"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{
//           position: "fixed",
//           top: "50px",
//           left: "495px",
//           width: "100px",
//           height: "117px",
//           zIndex: 2,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           background: "rgba(255,255,255,0.08)",
//           borderRadius: "16px",
//           boxShadow: "0 0 24px 8px #fff7, 0 0 60px 20px #ffe06677",
//           border: "2px solid #ffe066",
//           cursor: "pointer",
//           transition: "box-shadow 0.3s",
//         }}
//         title="my photography hobby"
//       >
//         <img
//           src="\test2.gif"
//           alt="sparkle"
//           style={{
//             width: "60px",
//             height: "60px",
//             pointerEvents: "none",
//             filter: "drop-shadow(0 0 8px #fff) drop-shadow(0 0 16px #ffe066)",
        
//           }}
//         />
//         <style>{`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}</style>
//       </a>

//       <div
//         style={{
//           position: "relative",
//           zIndex: 1,
//           height: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "white",
//           textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
//         }}
//       >
//         <h1>Welcome to Sheryl's Cozy Web Space</h1>
//         <p>Scroll, click, and discover more about me!</p>
//       </div>

//       <Canvas camera={{ position: [0, 0, 10] }}>
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />
//       </Canvas>

//       <div style={{ position: "relative", zIndex: 1, paddingBottom: "100px" }}>
//         <Experience />
//       </div>
//     </>
//   );
// }

// src/App.js

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Education from "./Education"; // Import the Education component
import animatedCursor from "./assets/cursors/precision_select.gif"; // Use your actual file name here

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
      {/* THIS IS YOUR ANIMATED CURSOR */}
      <img
        ref={customCursorRef}
        src={animatedCursor} // Make sure this is the correct path to your animated GIF
        alt="Animated Cursor"
        style={{
          position: "fixed",
          zIndex: 9999,
          pointerEvents: "none", // This allows clicking on content
          width: "40px",
          height: "40px",
          transform: "translate(-50%, -50%)", // Centers the cursor
          top: "-100px",
          left: "-100px",
        }}
      />

      {/* The rest of your existing JSX code */}
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
          top: "50px",
          left: "495px",
          width: "100px",
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
        title="my photography hobby"
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
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1>Welcome to Sheryl's Cozy Web Space</h1>
        <p>Scroll, click, and discover more about me!</p>
      </div>

      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>

      <div style={{ position: "relative", zIndex: 1, paddingBottom: "100px" }}>
        <Education /> {/* <-- Education is now placed first */}
        <Experience />
      </div>
    </>
  );
}