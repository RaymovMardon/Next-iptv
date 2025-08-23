"use client"
import { channelInfo } from "@/app/channel"
import Image from "../../../../node_modules/next/image"
import Link from "../../../../node_modules/next/link"
import style from "./channel.module.scss"
const ChannelList = () => {
  return (
    
    <section>
    <div className="custom_container ">
      <div className="grid grid-cols-4 gap-3">
        {channelInfo.map((item)=>(<Link key={item.id} href={`channel/${item.id}`}><div className={`  ${style.ch_title}`}><Image style={{ backgroundColor: `${item.bgColor}` }} src={item.img} height={150} alt="channel"/> <p>{item.name}</p> </div></Link>))}
        
        
      </div>
      </div>
    </section>
  )
}

export default ChannelList