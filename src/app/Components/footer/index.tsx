import Image from "../../../../node_modules/next/image"
import Link from "../../../../node_modules/next/link"
import img1 from "../../../../public/img/fottertop.svg"
import img2 from "../../../../public/img/pattern.png"
const Footer = () => {
  return (
      
    <footer>
        <div><Image src={img1} height={50} alt="img"/></div>
        <div className="footer_wrp">
<div className="custom_container flex justify-between">
<div>
    <div><Link href={"/home"}>NextTV</Link></div>
    <p className="text-white max-w-[250px]">IPTV services to stream your favorite channels.</p>
</div>
<div><ul>
<li>Home</li>
        <li>Channel</li>
        <li>Kategory</li>
        <li>Favorite</li></ul> </div>
</div>
        </div>
    </footer>
  )
}

export default Footer