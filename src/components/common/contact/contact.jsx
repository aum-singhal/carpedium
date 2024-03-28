import { Fade } from "react-awesome-reveal";
import "./contact.css";

export default function Contact(){
  return <div className="contact">
    <Fade direction="up" triggerOnce>
      <div className="fading-element flex-d-col flex-a-cen">  
        <div className="font-40 semi-bold heading text-center flex">
          Ready to embark on a journey that's as unique as your story?
        </div>

        <form action="" className="contact-form">
          <div className="form-wrapper flex-d-col">
            <div className="item">
              <label htmlFor="">Name & Surname</label>
              <input type="text" name="" id="" placeholder="The alias you prefer to be called" />
            </div>
            <div className="item">
              <label htmlFor="">Communication</label>
              <input type="text" name="" id="" placeholder="Because we want to connect asap !" />
            </div>
            <div className="item">
              <label htmlFor="">Message</label>
              <textarea rows={7} placeholder="How Can We Make Your Story Awesome?"></textarea>
            </div>
          </div>
          <button className="contact-button medium-bold">Seal the deal</button>
        </form>
      </div>
    </Fade>
  </div>
}