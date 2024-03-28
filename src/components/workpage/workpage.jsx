import { Fade } from "react-awesome-reveal";
import "./workpage.css";

export default function WorkPage() {

    const Single = ({item, key}) => {
        return <div key={key} className="work-single">
            <div className="work font-24 semi-bold">{item.workName}</div>
        </div>
    }

    const Double = ({item, key}) => {
        return <div key={key} className="work-double flex-j-cen">
            <div className="left">
                <div className="work">{item.workName1}</div>
            </div>
            <div className="right">
            <div className="work">{item.workName2}</div>
            </div>
        </div>
    }

    const workData = [
        {workName: "Work 1"},
        {workName1: "Work 2", workName2: "Work 3"},
        {workName: "Work 4"},
        {workName1: "Work 5", workName2: "Work 6"},
        {workName: "Work 7"}
    ]

    return <div className="work-page">
        <div className="heading font-100 medium-bold">
            Extraordinary <br />
            Digital <span className="gradient-text">Products</span>
        </div>

        <div className="work-wrapper flex-d-col">
            {
                workData.map((item, index)=>{
                    return <Fade direction="up" triggerOnce>
                        {index%2==0? <Single item={item} key={index} /> : <Double item={item} key={index} />}
                    </Fade>
                })
            }
        </div>
    </div>
}