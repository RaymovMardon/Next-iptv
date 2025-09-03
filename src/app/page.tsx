//import Image from "next/image";
import { Suspense } from "react";
import dynamic from "../../node_modules/next/dynamic";
import Image from "../../node_modules/next/image";
import img1 from "../../public/img/devices.webp"
import img2 from "../../public/img/herobutt.svg"
import BackgroundS from "./Components/BackroundS/index";
import ChannelList from "./Components/channelL/index";
import SectionQ from "./Components/SectionQ/index";
//import ChannelList from "./Components/channelL";
//const BackgroundS = dynamic(()=>import("./Components/BackroundS/index"),{ssr:false})
export default function Home() {
  return (
    
    <div>
    <section className="hero">
   <div className="hero_bg">
     
   <BackgroundS/>
   
    <div className="custom_container ">
      <div className="flex flex-col items-center"><h2 className="text-white text-center">Телевидение без границ</h2>
      <p className="text-white px-[1rem] text-center sm:px-[5px]">140+ каналов в HD качество в любом устройстве</p>
      <button>Channel</button>
      </div>
      <div className="flex flex-col items-center">
        <Image className="px-[10px] sm:px-[3px]" src={img1} height={63} alt="img"></Image>
      </div>
    </div>
    
    </div >
    <div className="img_hero_button"><Image src={img2} height={30} alt="img"></Image></div>
    </section>
    
<ChannelList data="true"/>

<div className="custom_container">
<SectionQ/>
</div>
    </div>
  );
}
