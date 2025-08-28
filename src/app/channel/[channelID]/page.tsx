"use client"

import { Channel, channelInfo } from "@/app/channel";
import { useEffect, useState } from "react";


import Image from "../../../../node_modules/next/image";
import { useParams, useRouter } from "../../../../node_modules/next/navigation"
import ReactPlayer from 'react-player';

import {
  MediaController,
  MediaControlBar,
  MediaVolumeRange,
  MediaPlayButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";

import { GetServerSideProps,InferGetServerSidePropsType } from "../../../../node_modules/next/types";
import { GET } from "@/app/api/get-location/route";




const ChannelID = () => {
 
  
    const params=useParams();
    const router =useRouter();
    const [numberCH,setNumberCH]=useState<number>()
    const [msg, setMsg] = useState<string|null>("0");
    const [filterCH,setFilterCH]= useState<Channel[]>()
    const num:number= Number(params.channelID);
    const filter:Channel[] = channelInfo.filter((item)=>item.id==num);
    const filtertwo:string[]= filter.map((item)=>item.url);
    const parse:string =filtertwo.join()
    const url2: number[] = filter
    .filter(item => item.urlTwo !== undefined)
    .flatMap(item => item.urlTwo!);
    const expires = Date.now() + 5 * 60 * 1000;
   const key=Math.random().toString(36).substring(2, 15);
  let u:number[]=[]
    for(let i:number=0;i<=parse.length-1;i++){
       u.push(parse.charCodeAt(i)-num);
      
    }
console.log("urlTwo:[",u.join(),"],");

    
    let decoded:string = "";
    for (let i = 0; i < url2.length; i++) {
        //decoded += String.fromCharCode(url2[i] + num);
if(url2[i]==0){
  decoded="false";
}else{
  decoded="true";
}
    }


    useEffect(()=>{
     if(decoded=="false"){
      fetch(`/api/get-location?url=${encodeURIComponent(parse)}`)
      .then((res) => res.json())
      .then((data) => setMsg(data.location))
      .catch(() => setMsg("Error fetching"));}
      else{
        setMsg(parse);
      }
        setNumberCH(num);
        setFilterCH(filter);
       /* const interval = setInterval(() => {
          if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
            console.log("DevTools открыт!");
          }
        }, 1000);
    
        
        return () => clearInterval(interval);
        */
  
    },[params]);
    useEffect(() => {
      
      const handleKeyDown = (event: KeyboardEvent) => {
        // Проверка на F12 или Ctrl + Shift + I
        if (
          event.key === 'F12' || // F12
          (event.ctrlKey && event.shiftKey && event.key === 'I') // Ctrl + Shift + I
        ) {
          router.push('/');
          
        } 
      
        else if (
          event.metaKey &&   // Cmd (Meta key на Mac)
          event.altKey &&    // Option (Alt key на Mac)
          event.key === 'I' // Клавиша I
        ) {
          router.push('/');
          
        }
      };
  
      // Добавляем обработчик события
      window.addEventListener('keydown', handleKeyDown);
  
      // Очистка при размонтировании компонента
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);


    
    
  return (
    
      <section>
    
    {filterCH?(filterCH.map((item)=>
        (<div key={item.id} className="custom_container">
        <div className="flex items-start gap-5"><Image style={{ backgroundColor: `${item.bgColor}`, borderRadius: "14px"  }} src={item.img} height={150} alt="channel"/> <p>{item.description}</p></div>
        
        
        <div >
        
        <MediaController
      style={{
        width: "100%",
        aspectRatio: "16/9",
      }}
    > 
      <ReactPlayer  
        slot="media"
        src={msg}
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
        <MediaFullscreenButton className="mbtn" />
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