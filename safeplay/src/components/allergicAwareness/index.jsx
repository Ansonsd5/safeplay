import React from "react";
import {styled, Tooltip} from "@mui/material";
import {tooltipClasses} from "@mui/material/Tooltip";
import "./index.css";
import { headache, itchy, moremucus, nasal, redwateryeye, sorethroat, tiredness, wheezing } from "@/assets/images";

const CustomWidthTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper: className}}/>
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 200,
        fontSize: 14,
    },
});

const symptoms = [
    {
        title: "Nasal stuffiness, sneezing and runny nose",
        icon: nasal,
        description:
            "Hay fever triggers inflammation in the nasal passages, leading to a stuffy or blocked nose, frequent sneezing, and an excessive production of clear, watery mucus.",
    },
    {
        title: "Itchy nose, throat and eyes",
        icon: itchy,
        description:
            "Allergens like pollen cause irritation in the sensitive lining of the nose, throat, and eyes, resulting in an uncomfortable, itchy sensation",
    },
    {
        title: "Red or watery eyes.",
        icon: redwateryeye,
        description:
            "Hay fever often causes the eyes to become red and watery as the body reacts to allergens by producing tears to flush out the irritants.",
    },
    {
        title: "More mucus in your nose and throat",
        icon: moremucus,
        description:
            "The body's response to allergens includes producing extra mucus, which can accumulate in the nose and drip into the throat.",
    },
    {
        title: "Tiredness.",
        icon: tiredness,
        description:
            "Constant symptoms like sneezing, congestion, and headaches can be exhausting, leading to feelings of fatigue and reduced energy levels.",
    },
    {
        title: "Sore throat from mucus dripping down your throat (postnasal drip).",
        icon: sorethroat,
        description:
            "Excess mucus often drips down the back of the throat, irritating it and causing a persistent sore throat, known as postnasal drip.",
    },
    {
        title: "Headaches, sinus pressure",
        icon: headache,
        description:
            "Inflammation in the nasal passages can lead to increased pressure in the sinuses, causing headaches and discomfort in the face.",
    },
    {
        title: "Wheezing, coughing and trouble breathing.",
        icon: wheezing,
        description:
            "In some cases, hay fever can cause the airways to narrow, leading to wheezing, coughing, and shortness of breath, especially in individuals with asthma.",
    },
];
const AllergicAwareness = () => {
    return (
        <div className="allergic-awareness-container">
            {symptoms.map((symptom, key) => (
                <div className="awareness-card" key={key}>
                    <CustomWidthTooltip
                        title={symptom.description}
                        arrow
                        placement="top"
                    >
                        <img src={symptom.icon} alt={`symptom${key}`} className="symptom-icon"/>
                        <div className="card-title">{symptom.title}</div>
                    </CustomWidthTooltip>
                </div>
            ))}
        </div>
    );
};

export default AllergicAwareness;
