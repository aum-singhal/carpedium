import "./team.css";
import person1 from "../../../assets/team/curve-person.png"
import person2 from "../../../assets/team/flat-person.png"
import violet from "../../../assets/team/violet-ellipse.png"
import yellow from "../../../assets/team/yellow-curve.png"
import pink from "../../../assets/team/pink-curve.png"
import green from "../../../assets/team/green-curve.png"
import blue from "../../../assets/team/blue-curve.png"
import yellowp from "../../../assets/team/yellow-polygon.png"
import pinkp from "../../../assets/team/pink-polygon.png"
import { Fade } from "react-awesome-reveal";

export default function Team(){
  const teamData = [
    {name: "Nikhil Kumar", desg: "Creative Producer - The Visionary Virtuoso", img: person1, back: violet, desc: "With the foresight of a fortune teller and the creativity of a master painter, our Creative Producer envisions the impossible and turns it into captivating stories. They wield the power of imagination like a wizard, transforming ideas into cinematic wonders."},
    {name: "Nikhil Kumar", desg: "Creative Producer - The Visionary Virtuoso", img: person2, back: yellow, desc: "With the foresight of a fortune teller and the creativity of a master painter, our Creative Producer envisions the impossible and turns it into captivating stories. They wield the power of imagination like a wizard, transforming ideas into cinematic wonders."},
    {name: "Nikhil Kumar", desg: "Creative Producer - The Visionary Virtuoso", img: person1, back: pink, desc: "With the foresight of a fortune teller and the creativity of a master painter, our Creative Producer envisions the impossible and turns it into captivating stories. They wield the power of imagination like a wizard, transforming ideas into cinematic wonders."},
    {name: "Nikhil Kumar", desg: "Creative Producer - The Visionary Virtuoso", img: person1, back: green, desc: "With the foresight of a fortune teller and the creativity of a master painter, our Creative Producer envisions the impossible and turns it into captivating stories. They wield the power of imagination like a wizard, transforming ideas into cinematic wonders."},
    {name: "Nikhil Kumar", desg: "Creative Producer - The Visionary Virtuoso", img: person1, back: blue, desc: "With the foresight of a fortune teller and the creativity of a master painter, our Creative Producer envisions the impossible and turns it into captivating stories. They wield the power of imagination like a wizard, transforming ideas into cinematic wonders."},
    {name: "Nikhil Kumar", desg: "Creative Producer - The Visionary Virtuoso", img: person2, back: yellowp, desc: "With the foresight of a fortune teller and the creativity of a master painter, our Creative Producer envisions the impossible and turns it into captivating stories. They wield the power of imagination like a wizard, transforming ideas into cinematic wonders."},
    {name: "Nikhil Kumar", desg: "Creative Producer - The Visionary Virtuoso", img: person1, back: pinkp, desc: "With the foresight of a fortune teller and the creativity of a master painter, our Creative Producer envisions the impossible and turns it into captivating stories. They wield the power of imagination like a wizard, transforming ideas into cinematic wonders."},
  ]

  return <div className="team flex-d-col flex-a-cen">
    <div className="font-48 semi-bold">THE TEAM</div> 

      <div className="team-card-wrapper flex-d-col">
        {
          teamData.map((item, index)=>{
            return <Fade cascade direction="up" key={index} triggerOnce>
            <div className="team-card flex" >
              <div className="left">
                <div className="image-wrapper">
                  <img src={item.img} alt={item.name} className="person" />
                  <img src={item.back} alt="" className="background" />
                </div>
              </div>
              <div className="right flex-d-col">
                <div className="head">
                  <div className="name font-24">{item.name}</div>
                  <div className="desg font-18">{item.desg}</div>
                </div>
                <div className="desc font-16">{item.desc}</div>
              </div>
            </div>
          </Fade>
          })
        }
      </div>
  </div>
}