import BlueBox from "../components/common/blueBox/blueBox";
import ServiceCards from "../components/servicepage/serviceCardSection/serviceCards";
import "../components/homepage/hero/hero.css";

export default function ServicePage(){
  const serviceDesc = "From crafting CSR films, to developing engaging digital ads, animated films, and explainers, we extend our expertise to encompass employer branding and DEI campaigns. Our capabilities span across all internal and external communication materials and collaterals, providing a  comprehensive range of services to meet your diverse needs.";

  return <div className="service-page">
    <div style={{padding:"7rem 3% 1rem 3%"}} className="heading font-100 medium-bold">
    Extraordinary Ideas <br /> to Seamless <span className="gradient-text">Execution</span>
    </div>

    <BlueBox title={"OUR SERVICES"} desc={serviceDesc} />
    <ServiceCards />
  </div>
}