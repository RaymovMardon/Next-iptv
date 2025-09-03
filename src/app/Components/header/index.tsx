"use client"
import { useState } from "react"
import Link from "../../../../node_modules/next/link"
import style from "./header.module.scss"
const Header = () => {
  const [kategory,setKategory]= useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const CloseKategory = ()=>{
    setKategory(false);
    console.log("kategory");
    
  }
  return (
    <>
    <header>
        <div className="custom_container flex items-center justify-between gap-4">

<div><Link href={"/"}><span> NextTV</span></Link></div>
<nav className="header_nav hidden sm:block">
    <ul className="flex gap-8 ">
        <li><Link href={"/"}> Home</Link></li>
        <li><Link href={"/channel"}> Channel</Link></li>
        <li className="cursor-pointer" onClick={()=>setKategory(!kategory)}>Kategory</li>
        
        
    </ul>
</nav>

<div className="header_button flex items-center gap-3">
<div> <button
      onClick={() => {setOpen(!open); setKategory(false)}}
      aria-label={open ? "Close menu" : "Open menu"}
      className="relative w-11 h-11 flex items-center justify-center bg-transparent focus:outline-none sm:hidden"
    >
      <span
        className={`absolute block h-[3px] w-7 rounded bg-white transform transition-transform duration-300 ${
          open ? "translate-y-0 rotate-45" : "-translate-y-2.5"
        }`}
      />
      <span
        className={`absolute block h-[3px] w-7 rounded bg-white transform transition-all duration-300 ${
          open ? "opacity-0 scale-x-90" : "opacity-100 translate-y-0"
        }`}
      />
      <span
        className={`absolute block h-[3px] w-7 rounded bg-white transform transition-transform duration-300 ${
          open ? "translate-y-0 -rotate-45" : "translate-y-2.5"
        }`}
      />
    </button></div>

<div>
lng</div>
  </div>

        </div>
        
    </header>
    {kategory?(
        <div className={style.kateegory_btn}>
        <ul className="">
        <li>Узбекские</li>
        <li>Спортивные</li>
        <li>Музыкальные</li>
        <li>Кино</li>
        <li>Новостные</li>
        <li>Познавательные</li>
        <li>Развлекательные</li>
        <li>Детские</li>
    </ul>
        </div>):(<div className={style.kateegory_btn_hidden}></div>)}
    {
      open?(
        <nav className={style.nav_mobile}>
        <ul className="flex flex-col gap-2 ">
      <li><Link href={"/"}> Home</Link></li>
      <li><Link href={"/channel"}> Channel</Link></li>
      <li className="cursor-pointer" onClick={()=>setKategory(!kategory)}>Kategory</li>
      
      
  </ul></nav>):("")
    }
    
    </>
  )
}

export default Header