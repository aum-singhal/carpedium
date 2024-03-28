import { useNavigate } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function Header(){
    const nav = useNavigate();
    const [selected, setSelected] = useState("/")
    const headerData = [
        {name: "Home", link: "/"},
        {name: "About Us", link:"/#about"},
        {name: "Team", link:"/#team"},
        {name: "Service", link: "/services"},
        {name: "Work", link: "/work"},
        {name: "Connect", link: "#connect"}
    ];
    return <div className="header">
        <div className="header-wrapper flex-a-cen">
            {
                headerData.map((item, index)=>{
                    return item.link.includes("#")?<HashLink className={`header-item font-14 medium-bold ${selected===item.link?"selected" : ""}`}
                    onClick={()=>{setSelected(item.link)}} to={item.link}>{item.name}</HashLink> 
                    : <div 
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