"use client"
import BackgroundSlider from "react-background-slider";

const BackgroundS = () => {
  return (
    <BackgroundSlider
        images={["/img/backround.webp", "/img/backround_two.jpg","/img/backround_three.jpg",]}
        duration={10}     // сколько секунд показывается картинка
        transition={2}   // время анимации перехода
      />
  )
}

export default BackgroundS