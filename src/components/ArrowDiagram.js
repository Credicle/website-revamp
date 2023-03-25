import React from "react";
import "../CSS/ArrowDiagram.css";
import { FaUser, FaRegBuilding, FaArrowRight } from "react-icons/fa";

function ArrowDiagram() {
  return (
    <div className="arrow-diagram">
      <div className="step">
        <FaUser className="step-icon" />
        <h3>Customer of Fintech</h3>
        <ul className = "cardText">
          <li>Initiates wallet connection request via our landing page</li>
          <li>Signs up with Credicle and adds wallets</li>
          <li>Provides permission to Credicle to send wallet metrics</li>
        </ul>
      </div>
      <FaArrowRight className="arrow" />
      <div className="step">
        <FaRegBuilding className="step-icon" />
        <h3>Credicle</h3>
        <ul className = "cardText">
          <li>Computes wallet metrics frame and Credicle score</li>
          <li>Wallet addresses is kept private from FinTech</li>
          <li>Credicle sends metrics and score to fintech</li>
        </ul>
      </div>
      <FaArrowRight className="arrow" />
      <div className="step">
        <FaRegBuilding className="step-icon" />
        <h3>Fintech</h3>
        <ul className = "cardText">
          <li>Direct integration of score and metrics through user credentials</li>
          <li>Metrics and score are used as part of user analysis</li>
          <li>Realtime monitoring of metrics for changes in values</li>
        </ul>
      </div>
    </div>
  );
}

export default ArrowDiagram;
