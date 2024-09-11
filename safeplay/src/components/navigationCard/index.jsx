import React from 'react'
import './index.css'
import {useNavigate} from 'react-router-dom'
import {RangeGaugeComponent} from "@/components/rangeGauge/index.jsx";

// NavigationCard component that provides navigation buttons to different features
// It includes buttons for navigating to UV Exposure analysis and Allergic Rhinitis awareness
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
            <RangeGaugeComponent
                value={5}
                minValue={1}
                maxValue={11}
                currentValueText="UV Level"
                // segments={3}
                // segmentColors={['#FF9933', '#ECEFF4', '#138808']}
            />

            <RangeGaugeComponent
                value={4}
                minValue={0}
                maxValue={5}
                currentValueText="Pollen Level"
                // segments={3}
                // segmentColors={['#FF9933', '#ECEFF4', '#138808']}
            />
        </div>
    )
}

export default NavigationCard