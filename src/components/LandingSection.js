import React from "react";
import "../CSS/styles.css"

function LandingSection() {
  return (
    <section className="landing-section">
      <div className="home-section-wrap">
        <div className="title-text">
          <h1 className="section-heading header">
            Credicle, allowing FinTech companies to understand their customers through AI driven Web3 wallet quality metrics.
          </h1>
        </div>
        <a
          href="https://forms.gle/RaWXfRzESQGVa9ML7"
          target="_blank"
          className="button-2 demo w-button"
          rel="noreferrer"
        >
          Sign up for beta
        </a>
        <h4 className = "landingText">
          Credicle provides 
          <span className="text-span"> data driven</span> insights for personalized{" "}
          <span className="text-span">product experiences</span> and{" "}
          <span className="text-span">risk management.</span>
        </h4>
      </div>
    </section>
  );
}

export default LandingSection;
