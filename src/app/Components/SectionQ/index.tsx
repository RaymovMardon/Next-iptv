import Image from "../../../../node_modules/next/image"
import Link from "../../../../node_modules/next/link"

import img1 from "../../../../public/img/telegram.svg"

const SectionQ = () => {
  return (
      
      <section>
     <div className="grid bg-[#023E8A] rounded-[50px] h-auto my-[3rem]  grid-cols-1 sm:grid-cols-2 h-[200px]">
          <div className="flex flex-col text-center justify-center gap-3 !p-[30px] h-[200px]"><h2 className="text-white font-bold uppercase text-[1.5rem] md:text-[2rem] ">Have Questions?</h2>
          <p className="text-white"> Our dedicated support team is here for you 24/7, ready to assist with all your inquiries and concerns.</p></div>
          <div className="flex flex-col text-white text-center justify-center gap-3 !p-[30px] h-[200px] hover:text-[#61CE70]">
          <Link className="flex flex-col justify-center gap-3" href={"https://t.me/MardonRaymov"}>
            <div className="!mx-auto">
              <Image  src={img1} height={90} alt="telegram"></Image>
            </div>
            
            <p className="text-[20] font-medium">Contact us</p>
            </Link>
          </div>

        </div>
    </section>
  )
}

export default SectionQ