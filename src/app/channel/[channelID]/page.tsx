"use client"

import { Channel, channelInfo } from "@/app/channel";
import { useEffect, useState, useRef } from "react";
import Image from "../../../../node_modules/next/image";
import { useParams } from "../../../../node_modules/next/navigation"
import ReactPlayer from 'react-player'

import {
  MediaController,
  MediaControlBar,
  MediaVolumeRange,
  MediaPlayButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";
const ChannelID = () => {
  
    const params=useParams();
    const [numberCH,setNumberCH]=useState<number>()
    const [filterCH,setFilterCH]= useState<Channel[]>()
    const num:number= Number(params.channelID);
    const filter:Channel[] = channelInfo.filter((item)=>item.id==num);
    const filtertwo:string[]= filter.map((item)=>item.url);
    const parse:string =filtertwo.join()
    const url2: number[] = filter
    .filter(item => item.urlTwo !== undefined)
    .flatMap(item => item.urlTwo!);
  
  
  let u:number[]=[]
    for(let i:number=0;i<=parse.length-1;i++){
       u.push(parse.charCodeAt(i)-num);
      
    }
console.log("urlTwo:[",u.join(),"],");

    
    let decoded:string = "";
    for (let i = 0; i < url2.length; i++) {
        decoded += String.fromCharCode(url2[i] + num);
    }



    useEffect(()=>{
        
        setNumberCH(num);
        setFilterCH(filter)
    },[params]);
   /*
    setInterval(() => {
      if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
        console.log("DevTools открыт!");
      }
    }, 1000);
    */
  return (
      
      <section>
    
    {filterCH?(filterCH.map((item)=>
        (<div key={item.id} className="custom_container">
        <div className="flex items-start gap-5"><Image style={{ backgroundColor: `${item.bgColor}` }} src={item.img} height={150} alt="channel"/> <p>{item.description}</p></div>
        <h1>{decoded}</h1><br />
        <h2>{u}</h2>
        <div>
        <MediaController
      style={{
        width: "100%",
        aspectRatio: "16/9",
      }}
    >
      {console.log(item.url.charAt(length))}
      
      <ReactPlayer
        slot="media"
        src={decoded}
        controls={false}
        style={{
          width: "100%",
          height: "100%",
          "--controls": "none",
        }}
      ></ReactPlayer>
      <MediaControlBar className="mcontrolbar">
        <MediaPlayButton className="mbtn"/>
        <MediaMuteButton className="mbtn"/>
        <MediaVolumeRange className="mbtn"/>
        <MediaFullscreenButton className="mbtn"/>
      </MediaControlBar >
    </MediaController>

        </div>
        </div>)
    
    )
    ):("")
}
        
    
    </section>
  )
}

export default ChannelID