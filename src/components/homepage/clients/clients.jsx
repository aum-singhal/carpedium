import "./clients.css";
import Marquee from "react-fast-marquee";
import toyota from "../../../assets/clients/top/toyota.png"
import acad from "../../../assets/clients/top/acad.png"
import relience from "../../../assets/clients/top/relience.png"
import impulse from "../../../assets/clients/top/impulse.png"
import ubereats from "../../../assets/clients/top/uber-eats.png"
import ecko from "../../../assets/clients/top/ecko.png"
import delhivery from "../../../assets/clients/top/delhivery.png"
import clensta from "../../../assets/clients/bottom/clensta.png"
import usindia from "../../../assets/clients/bottom/usindia.png"
import ipas from "../../../assets/clients/bottom/ipas.png"
import bharti from "../../../assets/clients/bottom/bharti.png"
import markivis from "../../../assets/clients/bottom/markivis.png"
import fastup from "../../../assets/clients/bottom/fast-up.png"

export default function Clients(){
  return <div className="clients flex-d-col flex-a-cen">
      <div className="font-48 semi-bold">CLIENTS</div>
      <Marquee speed={30} className="infinite-marquee" autoFill gradient gradientColor="#F6F9FF" gradientWidth={250}>
        <img src={toyota} alt="toyota" />
        <img src={acad} alt="acad" />
        <img src={relience} alt="relience" />
        <img src={impulse} alt="impulse" />
        <img src={ubereats} alt="uber eats" />
        <img src={ecko} alt="ecko" />
        <img src={delhivery} alt="delhivery" />
      </Marquee>
      <Marquee speed={25} direction="right" className="infinite-marquee" autoFill gradient gradientColor="#F6F9FF" gradientWidth={100} >
        <img src={clensta} alt="clensta" />
        <img src={usindia} alt="usindia" />
        <img src={ipas} alt="ipas" />
        <img src={bharti} alt="bharti" />
        <img src={markivis} alt="markivis" />
        <img src={fastup} alt="fast & up" />
      </Marquee>
  </div>
}