import BlueBox from "../components/common/blueBox/blueBox";
import Clients from "../components/homepage/clients/clients";
import Hero from "../components/homepage/hero/hero";
import Team from "../components/homepage/team/team";

export default function HomePage(){
  const aboutDesc = "Our passion is to bring your narratives to life in the most imaginative and captivating ways. We are a vibrant collective of creative professionals - writers, producers, directors and design artists  united by our love for good storytelling. Our vision is to become your trusted partners, help you  navigate the ever evolving digital landscape and deliver excellent products for all your  communication needs."
  return <div className="home-page">
    <Hero />
    <BlueBox title={"ABOUT US"} id={"about"} desc={aboutDesc} />
    <Clients />
    <Team />
  </div>
}