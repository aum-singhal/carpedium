import { Fade } from "react-awesome-reveal";
import "./bluebox.css";

export default function BlueBox({title, desc}){
  return <div className="blue-box flex-d-col flex-a-cen">
    <Fade cascade direction="up" triggerOnce>
      <div className="title font-48 semi-bold">{title}</div>
      <div className="desc font-24 text-center">{desc}</div>
    </Fade>
  </div>
}