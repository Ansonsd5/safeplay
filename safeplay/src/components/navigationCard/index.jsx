import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

const NaviagtionCard = () => {
  const navigate = useNavigate();
  return (
     <div className="feature-btn-wrapper">
          <div className="navigation-container">
            <h3>Skin Cancer Awareness and Prevention</h3>
            <button type="button" onClick={() => navigate("/uv-exposure")}>
              Check UV exposure 
            </button>
          </div>
          <div className="navigation-container">
            <h3>Awareness of Allergic Rhinitis</h3>
            <button
              type="button"
              onClick={() => navigate("/allergic-awareness")}
            >
              Click to prevent
            </button>
          </div>
        </div> 
  )
}

export default NaviagtionCard