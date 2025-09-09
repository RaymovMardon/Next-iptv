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
import SectionQ from "@/app/Components/SectionQ/index";




const ChannelID = () => {
 
  
    const params=useParams();
    const router =useRouter();
    const [numberCH,setNumberCH]=useState<number>()
    const [msg, setMsg] = useState<string|undefined>("/video/loadingTwo.mp4");
    const [filterCH,setFilterCH]= useState<Channel[]>()
    const num:number= Number(params.channelID);
    const filter:Channel[] = channelInfo.filter((item)=>item.id==num);
    const filtertwo:string[]= filter.map((item)=>item.url);
    const filterthree: string[] = filter.flatMap(item =>
      item.urlThree ? [item.urlThree] : []
    );
    const parse:string =filtertwo.join();
    const parseThree:string =filterthree.join();
    const url2: number[] = filter
    .filter(item => item.urlTwo !== undefined)
    .flatMap(item => item.urlTwo!);
  const u:number[]=[]
    for(let i:number=0;i<=parse.length-1;i++){
       u.push(parse.charCodeAt(i)-num);
      
    }

    
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
      .then((data) => {if(data?.location){
        setMsg(data.location)}
      else{
    setMsg(parseThree);
      }})
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
    <span className="NumCh_hidden">{numberCH}</span>
    {filterCH?(filterCH.map((item)=>
        (<div key={item.id} className="custom_container">
        <div className="flex flex-col pt-[95px] pb-[50px] px-[5px] items-center text-justify gap-5 md:px-[30px] md:flex-row"><Image style={{ backgroundColor: `${item.bgColor}`, borderRadius: "14px"  }} src={item.img} height={150} alt="channel"/> <p className="text-[14px] text-[#000040] sm:text-[1rem]">{item.description}</p></div>
        
        
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
        
        
        playing={true}
        muted={true}
        controls={false}
      ></ReactPlayer>
      
      <MediaControlBar className="mcontrolbar">
        <MediaPlayButton className="mbtn"/>
        <MediaMuteButton className="mbtn"/>
        <MediaVolumeRange className="mbtn"/>
        <MediaFullscreenButton className="mbtn" />
      </MediaControlBar >
    </MediaController>

        </div>
        <SectionQ/>
        </div>)
    
    )
    ):("")
}
        
    
    </section>
  )
}

export default ChannelID


