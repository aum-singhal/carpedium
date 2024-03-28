import "./footer.css";
import copyright from "../../../assets/footer/copyright.png";
import logo from "../../../assets/footer/logo.png";
import facebook from "../../../assets/footer/facebook.png";
import instagram from "../../../assets/footer/instagram.png";
import behance from "../../../assets/footer/behance.png";

export default function Footer(){
  return <div className="footer">
    <div className="footer-section flex-j-spbet">
      <div className="item carpediem large-gap">
        <div className="head">
          <img src={logo} alt="" />
        </div>
        <div className="body flex-d-col small-gap">
          <div className="font-18 semi-bold">Navigate the ever evolving digital landscape</div>
          <div className="font-14">To bring ones narratives to life in the most imaginative and 
captivating way.</div>
        </div>
      </div>
      <div className="item address large-gap">
        <div className="head font-20 semi-bold">
          Address
        </div>
        <div className="body font-14">
        128, Versova Marg, Aram Nagar Part 1, Aram Nagar, Versova, Andheri West, Mumbai, Maharashtra 400061
        </div>
      </div>
      <div className="item speak large-gap">
        <div className="head font-20 semi-bold">
          Speak to Us
        </div>
        <div className="body flex-d-col small-gap">
          <div className="font-14">9559123948</div>
          <div className="font-14">carpediem@gmail.com</div>
        </div>  
      </div>
      <div className="item social flex-d-col small-gap">
        <a href="">
          <img src={facebook} alt="" />
        </a>
        <a href="">
          <img src={instagram} alt="" />
        </a>
        <a href="">
          <img src={behance} alt="" />
        </a>
      </div>
    </div>

    <div className="footer-bottom flex-a-cen-j-spbet">
      <div className="font-12 flex-a-cen">
        <img src={copyright} alt="" /> &nbsp; CarpeDiem
      </div>

      <div className="font-12">
        Privacy Policy
      </div>
    </div>
  </div>
}