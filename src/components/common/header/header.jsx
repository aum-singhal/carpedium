import { useNavigate } from "react-router-dom";
import "./header.css";
import { useState } from "react";

export default function Header(){
    const nav = useNavigate();
    const [selected, setSelected] = useState("/")
    const headerData = [
        {name: "Home", link: "/"},
        {name: "Service", link: "/services"},
        {name: "Work", link: "/work"},
    ];
    return <div className="header">
        <div className="header-wrapper flex-a-cen">
            {
                headerData.map((item, index)=>{
                    return <div 
                        className={`header-item font-14 medium-bold ${selected===item.link?"selected" : ""}`} 
                        key={index}
                        onClick={()=>{nav(item.link); setSelected(item.link)}}
                    >
                        {item.name}
                    </div>
                })
            }
        </div>
    </div>
}