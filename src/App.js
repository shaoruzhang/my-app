import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

function Cat({ mouse }) {
  const mesh = useRef();
  const [isSleeping, setIsSleeping] = useState(false);
  const [lastActiveTime, setLastActiveTime] = useState(Date.now());
  const [meowText, setMeowText] = useState("");

  useFrame(() => {
    if (mesh.current && !isSleeping) {
      mesh.current.position.x += (mouse.current.x - mesh.current.position.x) * 0.1;
      mesh.current.position.y += (mouse.current.y - mesh.current.position.y) * 0.1;
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastActiveTime > 5000) {
        setIsSleeping(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [lastActiveTime]);

  const onCatClick = () => {
    setMeowText("Meow!");
    setIsSleeping(false);
    setLastActiveTime(Date.now());
    setTimeout(() => setMeowText(""), 1000);
  };

  useEffect(() => {
    const onMouseMove = () => {
      setLastActiveTime(Date.now());
      if (isSleeping) setIsSleeping(false);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isSleeping]);

  return (
    <mesh ref={mesh} onClick={onCatClick}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isSleeping ? "gray" : "orange"} />
      <Html center>
        <div style={{ color: "white", textAlign: "center" }}>
          {meowText && <div>{meowText}</div>}
          {isSleeping && <div>zzz...</div>}
        </div>
      </Html>
    </mesh>
  );
}

export default function App() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 10 - 5;
      mouse.current.y = -((event.clientY / window.innerHeight) * 10 - 5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Background video */}
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

      {/* Page content */}
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

      {/* Three.js Canvas with cat */}
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cat mouse={mouse} />
      </Canvas>
    </>
  );
}
