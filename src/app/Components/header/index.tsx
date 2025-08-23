import Link from "../../../../node_modules/next/link"

const Header = () => {
  return (
    <>
    <header>
        <div className="custom_container flex items-center justify-between gap-4">

<div><Link href={"/home"}><span> NextTV</span></Link></div>
<nav className="my-5">
    <ul className="flex gap-4 ">
        <li>Home</li>
        <li>Channel</li>
        <li>Kategory</li>
        <li>Favorite</li>
        
    </ul>
</nav>
<div>lng</div>
        </div>
    </header>
    </>
  )
}

export default Header