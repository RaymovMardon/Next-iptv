import Image from "../../../node_modules/next/image"
import img1 from "../../../public/img/devices.webp"
import img2 from "../../../public/img/herobutt.svg"
import ChannelList from "../Components/channelL/index"

const page = () => {
  return (
    <div>
    <section className="hero">
   <div className="hero_bg">
    <div className="custom_container ">
      <div className="flex flex-col items-center"><h2 className="text-white text-center">Televidenie bez granic</h2>
      <p className="text-white text-center">140+ kanalov v HD kachestvo v lubom ustroystve</p>
      <button>Channel</button>
      </div>
      <div className="flex flex-col items-center">
        <Image src={img1} height={63} alt="img"></Image>
      </div>
    </div>
    
    </div >
    <div className="img_hero_button"><Image src={img2} height={30} alt="img"></Image></div>
    </section>
<ChannelList/>
    </div>
  )
}

export default page