import React from "react";
import "../CSS/Demo.css";
import ArrowDiagram from "./ArrowDiagram";

function Demo() {
  return (
    <div className = "Demo-Section">
        <h2 className = "Demo-Header">Demo</h2>

        <ArrowDiagram className = "arrowDiagram"/>
      <div className="video-container">
        <iframe
          className="demo-video"
          src="https://www.youtube.com/embed/1pmyrh_vWbA"
          title="YouTube video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Demo;

