
import React from "react";
import AllergicAwareness from "@/components/allergicAwareness";
import HayfeverTriggers from "../hayfever-triggers";

const AwarenessCard = () => {
  return (
    <>
      <section className="features">
        <h2>Awareness of Allergic Rhinitis (Hay fever) </h2>
        <div className="allergic-rhinitis">
          <h2>Common Symptoms of Hay fever</h2>
          <AllergicAwareness />
        </div>
        <div className="prevent-hay-fever">
          <h2>Common Hay fever Triggers & Prevention</h2>
          <HayfeverTriggers />
        </div>
      </section>
    </>
  );
};

export default AwarenessCard;
