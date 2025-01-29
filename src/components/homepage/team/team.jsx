import "./team.css";
import person1 from "../../../assets/team/curve-person.png"
import ashish from "../../../assets/team/ashish.jpg";
import nikhil from "../../../assets/team/nikhil.jpg";
import hasneet from "../../../assets/team/hasneet.jpg";
import inderjot from "../../../assets/team/inderjot.jpg";
import ishan from "../../../assets/team/ishan.jpg";
import prashant from "../../../assets/team/prashant.jpg";
import prince from "../../../assets/team/prince.jpg";
import noddy from "../../../assets/team/noddy.jpeg";
import elvy from "../../../assets/team/elvy.jpeg";
import { Fade } from "react-awesome-reveal";

export default function Team(){
  const teamData = [
    {name: "Nikhil Chaudhary", desg: "The Celluloid Trailblazer", img: nikhil, desc: "Meet Nikhil Chaudhary, an MBA in Finance and Marketing, Nikhil's journey from crunching numbers to crafting stories began in 2015. As the Creative Producer at MDC Filmworks and Carpe Diem Media. His films Mantra, Mona Darling, Yours Truly & Kadakh, all featuring a star-studded cast, have wowed audiences across international and Indian film festivals, snagging numerous accolades along the way and are also available on popular OTT platforms like Netflix, Amazon Prime, Zee5, SonyLiv, etc. With his knack for meeting tight deadlines and budgets, he is the driving force behind every project that comes our way, ensuring they reach their full potential without compromising on Quality."},
    {name: "Ishan Sharma", desg: "The Master of Scripts, Director of Visions.", img: ishan, desc: "Armed with a degree in Direction and Screenplay writing, Ishan Sharma is our very own wordsmith who weaves tales that leap off the screen! His storytelling prowess has left audiences spellbound across over a hundred films and digital ads for top-tier brands like Reliance Foundation, Delhivery, UNESCO, Pedigree, USIBC, among others. From heartwarming shorts like 'The Day He Sleeps' and 'A Season of Mangoes', to currently working on his debut feature film titled 'KABOOTAR' that won the Best Screenplay Award in East Meets West Scriptwriter's Lab, Dhaka 2024, Ishan's directorial finesse knows no bounds. His knack for crafting compelling narratives and a keen eye for detail, is the secret ingredient that ensures every story he creates comes to life on screen."},
    {name: "Hasneet Sethi", desg: "The Silent Orchestrator of Seamless Productions", img: hasneet, desc: "Say hello to Hasneet, our operations ninja and business champ. With a multifaceted background spanning across fashion, journalism, and filmmaking, Hasneet's journey from catwalk to clapboard is a testament to her versatility. Armed with a Best Director award from the Hyderabad Film Festival, for her student documentary film “Into the haze,” Hasneet is the quiet force behind our flawless project executions. She was the Director's Assistant for our film 'Mantra' and was also an Assistant Director for the film 'Axone', both streaming on Netflix. Whether she's orchestrating a symphony of tasks or wrangling production chaos, Hasneet ensures our ship sails smoothly through every storm with unwavering precision!"},
    {name: "Prince Ansari", desg: "The Editing Architect of Visual Marvels", img: prince, desc: "Meet Prince Ansari, our dynamic and visionary Creative Associate with a flair for video editing. With a journey that's taken him from the airwaves of Fever FM 104, Delhi to the creative hub of FilmGoi, Noida, Prince now brings his expertise to Carpe Diem Media. His portfolio boasts diverse projects, from the heartwarming short film “Father's Day” for Trade India to a captivating promotional video for Nykaa, and many more brands like Clean India Ventures, HCL Tech, Philips and Reliance Foundation. Armed with a degree in Journalism and Mass Communication from Chandigarh University, Prince seamlessly weaves creativity and technical prowess into every project he is assigned."},
    {name: "Ashish Chaudhary", desg: "The Multifaceted Maestro of Cinematic Chaos", img: ashish, desc: "Introducing Ashish Chaudhary, our cinematic chameleon donning many hats, be it Assistant Director, Assistant Editor, and now mainly our Production Manager. With a diploma from the Digital Academy- The Film School, Gemini Studios, Mumbai, Ashish has been an integral part of numerous successful projects. From shaping narratives to managing chaos behind the scenes, he's the glue that holds our productions together. With credits on feature films like “Mona Darling” and “Hum bhi akele, tum bhi akele,” short film 'Know Your Enemy', “A Suitable Boy” and a music video for 'Fourhead Music' under his belt, Ashish is the wizard behind the curtains of our cinematic escapades."},
    {name: "Inderjot Kaur", desg: "Turning Deals into Blockbusters", img: inderjot, desc: "Meet Inderjot Kaur, our unstoppable force in sales and business development. With a knack for spotting opportunities and turning them into gold, Inderjot's journey has been nothing short of spectacular. With a resume that reads like a globe-trotting adventure, Inderjot's expertise spans the vast Asia Pacific markets, where she's forged lasting relationships and sealed major deals with her charm and finesse. She's the mastermind behind our national and international sales efforts, leveraging her expertise to open new doors and secure major projects. With a keen eye for opportunities and a natural flair for negotiation, Inderjot is the driving force behind our sales and marketing efforts, ensuring that every project is not just a success, but a blockbuster in the making."},
    {name: "Prashant Singh", desg: "The Creative Catalyst", img: prashant, desc: "Introducing Prashant, our Creative Lead, sculpting cinematic wonders with his artistic vision. From his pivotal role in the casting team for the Oscar-winning film 'Life of Pi' to his position as Associate Casting Director for the acclaimed series 'A Suitable Boy' by Mira Nair, Prashant's journey is nothing short of remarkable. He's also made significant contributions to feature films like 'Mona Darling' and 'Kanchi', collaborating closely with the Direction department to bring stories to life on the big screen."},
    {name: "Noddy", desg: "Chief Cuddles Officer", img: noddy, desc: "Noddy, our Chief Happiness Officer spreads joy faster than you can say fetch! With a tail that wags with boundless enthusiasm and a heart full of cuddles, Noddy's mission is to keep our team's spirits high. Whether it's doling out puppy kisses or impromptu play sessions, Noddy's infectious energy ensures that smiles in our office are never in short supply!"},
    {name: "Elvy", desg: "Director of “Pawductivity”", img: elvy, desc: "Elvy, our Director of Pawductivity, is on a mission to keep the team warm and fuzzy with an abundance of snuggles! With a paw-some talent for turning any moment into a cuddle-worthy occasion, Elvy's presence is like a fluffy cloud on a sunny day. From spontaneous cuddle breaks to orchestrating group hugs, Elvy's cuddle expertise ensures that our workplace is a haven of comfort and joy!"},
  ]

  return <div className="team flex-d-col flex-a-cen" id="team">
    <div className="font-48 semi-bold">THE TEAM</div> 

      <div className="team-card-wrapper flex-d-col">
        {
          teamData.map((item, index)=>{
            return <Fade cascade direction="up" key={index} triggerOnce>
            <div className="team-card flex" >
              <div className="left">
                <div className="image-wrapper">
                  <img src={item.img} alt={item.name} className="person" />
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