import React from "react";
import "../CSS/Banks.css";
import { FaRegHandshake, FaRegCreditCard, FaUsersCog } from "react-icons/fa";

function Banks() {
  return (
    <div className="banks">
      <h2 className = "Fintech-Header">FinTechs - Know Your Consumers through what matters to them</h2>
      <div className="banks-cards">
        <div className="card">
          <FaRegHandshake className="card-icon" />
          <h3>Enhanced Experience</h3>
          <p>
            Streamline onboarding with Web3 data, reduce churn rate, and foster long-term relationships.
          </p>
        </div>
        <div className="card">
          <FaRegCreditCard className="card-icon" />
          <h3>Improved Risk Assessment</h3>
          <p>
            Use Credicle metrics for risk analysis and offer instant card access and competitive lending rates.
          </p>
        </div>
        <div className="card">
          <FaUsersCog className="card-icon" />
          <h3>Segmentation</h3>
          <p>
            Build user segmentation based on actionable Web3 metrics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banks;
