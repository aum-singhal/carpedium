import { Fade } from "react-awesome-reveal";
import "./serviceCards.css";
import one from "../../../assets/service/one.gif";
import two from "../../../assets/service/two.gif";
import three from "../../../assets/service/three.gif";
import four from "../../../assets/service/four.gif";
import five from "../../../assets/service/five.gif";
import six from "../../../assets/service/six.gif";
import seven from "../../../assets/service/seven.gif";
import eight from "../../../assets/service/eight.gif";

export default function ServiceCards (){
  const serviceCardData = [
    {title: "Conceptualization", img: two, desc: "Forget your standard brainstorm, at Carpe Diem Media, we prefer to kick it up a notch with our own brand of creative storms! Crafting more than just films, we specialize in tailoring strategic narratives to perfectly fit your brand's identity and goals. Through our collaborative process, we ensure your vision comes to life authentically, leaving a lasting impact on your audience. Our approach to conceptualization ensures every story we tell is purposeful, impactful, and unforgettable. Brace yourself for storytelling that's as exciting as a rollercoaster and as catchy as your favourite tune!"},
    {title: "Digital Films", img: five, desc: "Ready for a cinematic thrill? Buckle up and prepare to experience the magic of storytelling with Carpe Diem Media's digital films. With a sharp eye for detail and a knack for pushing creative limits, our team of quirky creatives doesn't just make movies – we craft cinematic adventures that will leave your audience spellbound. From mind-blowing visuals to heartwarming tales, we infuse your ideas with life, turning them into captivating realities that'll have your viewers buzzing with excitement long after the credits role. So get ready for a cinematic journey like no other – With Carpe Diem Media, ordinary moments become extraordinary tales."},
    {title: "Animated Videos and Explainers (2D and 3D)", img: one, desc: "Dive into the whimsical world of animation with our super talented animators, who breathe life into your ideas, turning them into captivating stories. Whether we're simplifying complex concepts or dazzling your audience with visual fireworks, each frame is crafted to spark curiosity and leave a lasting impression. Whether it's the quirky charm of 2D animation or the mind-bending magic of 3D, we blend creativity with technical prowess to serve up animations that'll have you glued to the screen with excitement and your imagination soaring like a turbocharged rocket!"},
    {title: "CSR Films", img: three, desc: "Lights, Camera, Social impact! Get ready to unveil your corporate social responsibility initiatives with flair and authenticity that truly hits home. We're dedicated to crafting narratives that pull heartstrings and inspire action. From heartfelt testimonials to visuals that resonate like a perfectly tuned chord that sparks tangible change, your CSR efforts won't just make waves – they'll create a ripple effect that leaves audiences buzzing and communities thriving."},
    {title: "Employer Branding Campaigns", img: six, desc: "Get ready to reveal the heartbeat of your company's culture and captivate top talent with our unforgettable employer branding campaigns! With our unique blend of creativity and charisma, we dive deep into your company's DNA to craft stories that are as entertaining as a blockbuster movie. From heartfelt employee shoutouts to behind-the-scenes antics that'll make you smile, we're here to help you forge connections with talent who will feel like they're joining the coolest club in town, taking your recruitment and retention efforts to new levels of excitement and success!"},
    {title: "Diversity, Equity, and Inclusion (DEI) Campaigns:", img: four, desc: "At Carpe Diem Media, we're not just cooking up campaigns - we're stirring the pot of inclusion! Our team dives deep into the mosaic of possibilities, partnering closely with you to amplify your commitment to equality through stories that burst with authenticity. From amplifying diverse voices to spotlighting inclusive practices, we're on a mission to create content that doesn't just inspire action – it sparks a cultural shift where everyone feels they belong."},
    {title: "Micro Content", img: eight, desc: "In a world where attention spans are fleeting, make every moment count! Dive into our micro content wonderland where we're masters at turning seconds into sensation. From electrifying animations to visuals that leap off the screen, we specialize in crafting bite-sized content that packs a punch. We distil your message into snackable nuggets that leave a lasting impression. With us by your side, your brand doesn't just keep up – it leads the pack in the wild jungle of digital creativity!"},
    {title: "Marketing Collaterals", img: seven, desc: "Our team of design maestros and strategy experts collaborates closely with you to unravel the essence of your brand's identity, goals, and ideal audience. From crafting eye-catching brochures to dynamic banners, attention-grabbing social media creatives to persuasive pitch decks, we blend creativity with strategic intelligence to create collaterals that leave a lasting impact. With Carpe Diem Media, your marketing materials aren't just tools – they are powerful catalysts that drive engagement, conversions, and unwavering brand loyalty!"},
  ]

  return <div className="service-card-section flex-d-col flex-a-cen">
    {
      serviceCardData.map((item, index)=>{
        return <Fade key={index} triggerOnce direction="up">
          {
            index%2==0? 
              <ImageOnRight title={item.title} desc={item.desc} img={item.img} /> : 
              <ImageOnLeft title={item.title} desc={item.desc} img={item.img} />
          }
        </Fade>
      })
    }
  </div>
}

const ImageOnLeft = ({title, desc, img}) => {
  return <div className="image-on-left card">
    <div className="left">
      <div className="image-wrapper">
        <img src={img} alt="" />
      </div>
    </div>
    <div className="right">
      <div className="font-32 medium-bold">{title}</div>
      <div className="font-16">{desc}</div>
    </div>
  </div>
}

const ImageOnRight = ({title, desc, img}) => {
  return <div className="image-on-right card">
    <div className="right">
      <div className="font-32 medium-bold">{title}</div>
      <div className="font-16">{desc}</div>
    </div>
    <div className="left">
      <div className="image-wrapper">
        <img src={img} alt="" />
      </div>
    </div>
  </div>
}