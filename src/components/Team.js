import React from "react";

function Team() {
  return (
    <div>
      <h2>Team</h2>
      <div className="team-layout">
        <div className="Rutvik">
          <div className="Rutvik_image">
            <img
              src="src/assets/RutvikPP 2.png"
              id="w-node-_86e64837-0616-515b-4568-76c147234d4c-4c2171fe"
              sizes="100vw"
              alt=""
              className="Rutvik-Image"
            />
          </div>
          <div className="Rutvik-intro">
            <h4>
              Hey! I am Rutvik, a Computer Science and Economics major at
              Columbia University.
              <br />I have held previous SWE intern positions at DoorDash and at
              a Fintech Neo Bank. I also worked at a Defi lending protocol while
              on a gap year exploring Crypto before college.
            </h4>
          </div>
          <div className="connect-icons">
            <div className="icon">
              <span>
                <a href="https://www.twitter.com/raurutvik">
                  <i className="fab fa-twitter fa-3x"></i>
                </a>
              </span>
            </div>
            <div className="icon">
              <span>
                <a href="https://www.linkedin.com/rutvik-rau">
                  <i className="fab fa-linkedin-square fa-3x"></i>
                </a>
              </span>
            </div>
            <div className="icon">
              <span>
                <a href="https://t.me/ruru21r">
                  <i className="fab fa-telegram fa-3x"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="Thomas">
          <div className="Thomas-image">
            <img
              src="assets/ThomasPP.png"
              id="w-node-_86e64837-0616-515b-4568-76c147234d4c-4c2171fe"
              sizes="100vw"
              alt=""
              className="Thomas-Image"
            />
          </div>
          <div className="Thomas-intro">
            <h4>
              Hey! I am Thomas, a Computer Science and Math major at Columbia
              University. I am interested in CS and Math research and have
              previous publications in the fields. I have also worked at the
              Creative Machines Lab at Columbia and interned at the US Senate.
            </h4>
          </div>
          <div className="connect-icons">
            <div className="icon">
              <span>
                <a href="https://twitter.com/twbueler">
                  <i className="fab fa-twitter fa-3x"></i>
                </a>
              </span>
            </div>
            <div className="icon">
              <span>
                <a href="https://www.linkedin.com/in/thomas-bueler-faudree-333b6993/">
                  <i className="fab fa-linkedin-square fa-3x"></i>
                </a>
              </span>
            </div>
            <div className="icon">
              <span>
                <a href="https://t.me/twbueler">
                  <i className="fab fa-telegram fa-3x"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
