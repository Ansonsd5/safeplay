import React from "react";
import AllergicAwareness from "../allergicAwareness";
import HayfeverTriggers from "../hayfever-triggers";

// AwarenessCard component that provides information about Allergic Rhinitis (Hay fever)
// It includes sections for common symptoms and common triggers & prevention
const AwarenessCard = () => {
    return (
        <>
            <section className="features">
                <h2>Awareness of Allergic Rhinitis (Hay fever) </h2>
                <div className="allergic-rhinitis">
                    <h2>Common Symptoms</h2>
                    <AllergicAwareness/>
                </div>
                <div className="prevent-hay-fever">
                    <h2>Common Triggers & Prevention</h2>
                    <HayfeverTriggers/>
                </div>
            </section>
        </>
    );
};

export default AwarenessCard;
