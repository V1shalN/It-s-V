import "./aboutComp.css";

// ✅ Import assets (Vite way)
import compVideo from "../assets/compvideo.mp4";
import compBg from "../assets/compBg.png";

const AboutComp = () => {
  return (
    <div className="compAboutMain">
      <center className="aboutComp">
        <h1>
          About <span className="usColor">US</span>
        </h1>
      </center>

      <center className="compMain">
        <p className="aboutCompText">
          “The specified values of fuel consumption and emission are determined
          according to the mandatory emission test measurement specified in Rule
          115 of Central Motor Vehicle Rules 1989 (CMVR), under controlled
          conditions using reference fuel, at an agency authorized under Rule 126
          of CMVR. Fuel consumption and emission values may vary due to factors
          such as driving habits, road and traffic condition, fuel quality,
          maintenance practices, loading pattern, ambient condition, and
          engineering tolerances, etc.
          <br />
          <br />
          The values declared for the vehicles have been obtained from one of the
          variants tested as per Central Motor Vehicle Rule 115. Fuel consumption
          and emission values for other variants may differ. Itsvi India or its
          authorized dealers shall not be held liable for any difference in fuel
          consumption values due to any of the aforesaid variables.
          <br />
          <br />
          Due to constant product improvement/changes in the regulatory
          framework, technical specifications provided herewith are subject to
          change without prior notice. Customers are requested to contact Itsvi
          Call Centre/Itsvi Authorized Dealer for further details.”
        </p>

        <div className="videoPlayScreen">
          <video autoPlay muted loop>
            <source src={compVideo} type="video/mp4" />
          </video>

          <img src={compBg} alt="Background" />
        </div>
      </center>
    </div>
  );
};

export default AboutComp;
