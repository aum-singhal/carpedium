import "./hero.css";
import arrow from "../../../assets/arrow_outward.png";
import { Fade } from "react-awesome-reveal";

export default function Hero(){
  return <div className="hero">
    <div className="heading font-100 medium-bold">
      Extraordinary <br />
      Storytelling <span className="gradient-text">Experiences</span>
    </div>

    <div className="video-container">
      
    </div>

    <div className="story flex-d-col flex-a-cen">
      <Fade direction="right" triggerOnce>
        <div className="text font-96 extra-bold text-upper text-center">
          we help you tell your story
        </div>
      </Fade>

      <Fade triggerOnce direction="up">
        <div className="talk-button">
          <div className="wrapper flex-a-cen">
            Talk to us &nbsp;&nbsp; <img src={arrow} alt="" />
          </div>
        </div>
      </Fade>
    </div>
  </div>
}