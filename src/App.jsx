import { AiOutlineInstagram, AiOutlineWechat, AiOutlineWhatsApp, AiOutlineYoutube } from "react-icons/ai"
import { useState } from "react"


function App() {
  const [hoveredIG, setHoveredIG] = useState(false);
  const [hoveredWC, setHoveredWC] = useState(false);

  return (
    <div style={{
      textAlign: "center",
      color: "rgb(116, 173, 75)",
      backgroundColor: "rgba(0, 0, 0, 1)",
      fontSize: "60px",
      fontWeight: 400,        // fixed - was "20px"
      padding: "20px",
      margin: "px",
      border: "5px solid rgba(18, 107, 13, 1)",
      borderRadius: "5px",
      width: "1070px",
      height: "770px",
      display: "flex",
      flexDirection: "column",  // ← add here
      gap: "0.5px",          // ← add here
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Cinzel', serif",
    }}>
      <h1 style={{
  animation: "glow 2s ease-in-out infinite",
  color: "rgb(116, 173, 75)",
  fontFeatureSettings: "'calt', 'liga', 'ss01'",
  textAlign: "center",
 fontSize: "50px"
}}>Foreign Reign</h1>


<div style={{
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center"
}}>

<AiOutlineInstagram
  onClick={() => window.open("https://www.instagram.com/foreign_reign.us/?g=5", "_blank")}
  onMouseEnter={() => setHoveredIG(true)}
  onMouseLeave={() => setHoveredIG(false)}
  style={{ 
    paddingLeft: "20px",
    cursor: "pointer", 
    fontSize: "40px", 
    filter: hoveredIG ? "drop-shadow(0 0 5px rgb(116, 173, 75)) drop-shadow(0 0 20px rgb(116, 173, 75))" : "none",
    transition: "filter 0.2s ease-in-out",
    flexDirection: "column"
  }} 
/>

<AiOutlineWechat
  onClick={() => window.open("https://www.wechat.com/en/", "_blank")}
  onMouseEnter={() => setHoveredWC(true)}
  onMouseLeave={() => setHoveredWC(false)}
  style={{
    cursor: "pointer",
    fontSize: "40px",
    filter: hoveredWC ? "drop-shadow(0 0 5px rgb(116, 173, 75)) drop-shadow(0 0 20px rgb(116, 173, 75))" : "none",
    transition: "filter 0.2s ease-in-out",
    paddingLeft: "20px",
    flexDirection: "column"
  }}
/>
    </div>

    </div>
    
    
  )
}

export default App