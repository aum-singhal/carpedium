import { Fade } from "react-awesome-reveal";
import "./serviceCards.css";

export default function ServiceCards (){
  const serviceCardData = [
    {title: "Conceptualization", img: "", desc: "Ever heard of a brainstorm? Well, we prefer a brain-hurricane! At Carpe  Diem Media, we don't just conjure up ideas; we whip up experiences that pack a punch. Our team dives deep into your brand's essence,  understanding your objectives, audience, and unique voice and from there, we ignite our creative sparks to conceptualize narratives that not only  captivate but also connect with your audience on a profound level. our  conceptualization process ensures that every story we tell is purposeful,  impactful, and unforgettable. So, whether it's a brand campaign or a  corporate video, get ready for storytelling that's as thrilling as a rollercoaster  and as unforgettable as your favorite song stuck in your head. "},
    {title: "Conceptualization", img: "", desc: "Ever heard of a brainstorm? Well, we prefer a brain-hurricane! At Carpe  Diem Media, we don't just conjure up ideas; we whip up experiences that pack a punch. Our team dives deep into your brand's essence,  understanding your objectives, audience, and unique voice and from there, we ignite our creative sparks to conceptualize narratives that not only  captivate but also connect with your audience on a profound level. our  conceptualization process ensures that every story we tell is purposeful,  impactful, and unforgettable. So, whether it's a brand campaign or a  corporate video, get ready for storytelling that's as thrilling as a rollercoaster  and as unforgettable as your favorite song stuck in your head. "},
    {title: "Conceptualization", img: "", desc: "Ever heard of a brainstorm? Well, we prefer a brain-hurricane! At Carpe  Diem Media, we don't just conjure up ideas; we whip up experiences that pack a punch. Our team dives deep into your brand's essence,  understanding your objectives, audience, and unique voice and from there, we ignite our creative sparks to conceptualize narratives that not only  captivate but also connect with your audience on a profound level. our  conceptualization process ensures that every story we tell is purposeful,  impactful, and unforgettable. So, whether it's a brand campaign or a  corporate video, get ready for storytelling that's as thrilling as a rollercoaster  and as unforgettable as your favorite song stuck in your head. "},
    {title: "Conceptualization", img: "", desc: "Ever heard of a brainstorm? Well, we prefer a brain-hurricane! At Carpe  Diem Media, we don't just conjure up ideas; we whip up experiences that pack a punch. Our team dives deep into your brand's essence,  understanding your objectives, audience, and unique voice and from there, we ignite our creative sparks to conceptualize narratives that not only  captivate but also connect with your audience on a profound level. our  conceptualization process ensures that every story we tell is purposeful,  impactful, and unforgettable. So, whether it's a brand campaign or a  corporate video, get ready for storytelling that's as thrilling as a rollercoaster  and as unforgettable as your favorite song stuck in your head. "},
    {title: "Conceptualization", img: "", desc: "Ever heard of a brainstorm? Well, we prefer a brain-hurricane! At Carpe  Diem Media, we don't just conjure up ideas; we whip up experiences that pack a punch. Our team dives deep into your brand's essence,  understanding your objectives, audience, and unique voice and from there, we ignite our creative sparks to conceptualize narratives that not only  captivate but also connect with your audience on a profound level. our  conceptualization process ensures that every story we tell is purposeful,  impactful, and unforgettable. So, whether it's a brand campaign or a  corporate video, get ready for storytelling that's as thrilling as a rollercoaster  and as unforgettable as your favorite song stuck in your head. "},
    {title: "Conceptualization", img: "", desc: "Ever heard of a brainstorm? Well, we prefer a brain-hurricane! At Carpe  Diem Media, we don't just conjure up ideas; we whip up experiences that pack a punch. Our team dives deep into your brand's essence,  understanding your objectives, audience, and unique voice and from there, we ignite our creative sparks to conceptualize narratives that not only  captivate but also connect with your audience on a profound level. our  conceptualization process ensures that every story we tell is purposeful,  impactful, and unforgettable. So, whether it's a brand campaign or a  corporate video, get ready for storytelling that's as thrilling as a rollercoaster  and as unforgettable as your favorite song stuck in your head. "},
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