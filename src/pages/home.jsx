import BlueBox from "../components/common/blueBox/blueBox";
import Clients from "../components/homepage/clients/clients";
import Hero from "../components/homepage/hero/hero";
import Team from "../components/homepage/team/team";

export default function HomePage(){
  const aboutDesc = "Welcome to the captivating realm of Carpe Diem Media, where storytelling takes center stage. Picture a  lively crew of visionary dream weavers – writers, producers, directors, and design wizards – all fuelled by a  passion for pushing the boundaries of imagination. Our mission is simple: to be your loyal companions as  we navigate the exhilarating twists and turns of the creative process, producing nothing but awe-inspiring  content for all your communication needs. So, let's dive headfirst into this whirlwind adventure where  imagination runs wild and every project is an epic tale waiting to be told!"
  return <div className="home-page">
    <Hero />
    <BlueBox title={"ABOUT US"} id={"about"} desc={aboutDesc} />
    <Clients />
    <Team />
  </div>
}