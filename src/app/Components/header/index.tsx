"use client"
import { useState } from "react"
import Link from "../../../../node_modules/next/link"
import style from "./header.module.scss"
const Header = () => {
  const [kategory,setKategory]= useState<boolean>(false);
  return (
    <>
    <header>
        <div className="custom_container flex items-center justify-between gap-4">

<div><Link href={"/home"}><span> NextTV</span></Link></div>
<nav className="header_nav">
    <ul className="flex gap-4 ">
        <li>Home</li>
        <li>Channel</li>
        <li onClick={()=>setKategory(!kategory)}>Kategory</li>
        
        
    </ul>
</nav>
<div>lng</div>
        </div>
        {kategory?(
        <div className={style.kateegory_btn}>
        <ul className="flex items-center justify-center gap-4 ">
        <li>Uzb</li>
        <li>Спортивные</li>
        <li>Музыкальные</li>
        <li>Кино</li>
        <li>Новостные</li>
        <li>Познавательные</li>
        <li>Развлекательные</li>
        <li>Детские</li>
    </ul>
        </div>):("")}
    </header>
    </>
  )
}

export default Header