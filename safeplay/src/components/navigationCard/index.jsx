import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

const NavigationCard = () => {
  const navigate = useNavigate();
  return (
     <div className="feature-btn-wrapper">
          <div className="navigation-container">
            <h3>Skin Cancer Awareness and Prevention</h3>
            <button type="button" onClick={() => navigate("/uv-exposure")}>
              Analyse UV exposure ➤
            </button>
          </div>
          <div className="navigation-container">
            <h3>Awareness of Allergic Rhinitis</h3>
            <button
              type="button"
              onClick={() => navigate("/allergic-awareness")}>
              Symptoms & Prevention ➤
            </button>
          </div>
        </div>
  )
}

export default NavigationCard