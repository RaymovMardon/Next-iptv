import Image from "../../../../node_modules/next/image"
import Link from "../../../../node_modules/next/link"
import img1 from "../../../../public/img/fottertop.svg"
import img2 from "../../../../public/img/pattern.png"
const Footer = () => {
  return (
      
    <footer>
        <div><Image src={img1} height={50} alt="img"/></div>
        <div className="footer_wrp">
<div className="custom_container flex flex-col justify-between !py-5 sm:flex-row">
<div className="pb-[2rem] sm:pb-1">
    <div ><Link className="text-[2.5rem] text-white " href={"/"}>NextTV</Link></div>
    <p className="text-white w-full sm:max-w-[250px]">IPTV services to stream your favorite channels.</p>
</div>
<div className="pb-[2rem] sm:pb-1">
        <h3 className="text-lg text-white font-semibold mb-3">Навигация</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/" className="text-[15px] text-white hover:text-blue-200 transition">Home</Link>
          </li>
          <li>
            <Link href="/channel" className="text-[15px] text-white hover:text-blue-200 transition">Channel</Link>
          </li>
          <li>
            <Link href="/category" className="text-[15px] text-white hover:text-blue-200 transition">Category</Link>
          </li>
        </ul>
      </div>

      {/* Contacts / Social */}
      <div>
        <h3 className="text-lg text-white font-semibold mb-3">Контакты</h3>
        <p className="text-sm text-gray-200">support@nexttv.com</p>
        <div className=" mt-4">
          <a href="#" className="text-white text-[15px] hover:text-blue-300 transition">Telegram</a>
         
        </div>
      </div>
    
</div>
<div>
  <hr  className="text-[#b1b1b1]"/>
  <div className="border-t border-blue-700 py-2.5 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} NextTV. Все права защищены.
      </div>
</div>
        </div>
    </footer>
  )
}

export default Footer