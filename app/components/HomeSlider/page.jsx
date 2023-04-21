
"use client"
import styles from './page.module.css'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
import firstSlide from '../../../public/images/slide.webp'
import secondSlide from '../../../public/images/slide1.webp'
import thirdSlide from '../../../public/images/slide2.webp'
import fourthSlide from '../../../public/images/slide3.webp'

export default function HomeSlider() {
    const [sliderRef] = useKeenSlider({
        mode: "snap",
        loop: true,
        slides: {
            origin: "center",
            perView: 1.2,
            spacing: 15,
        }},
    
        [
            (slider) => {
              let timeout
              let mouseOver = false
              function clearNextTimeout() {
                clearTimeout(timeout)
              }
              function nextTimeout() {
                clearTimeout(timeout)
                if (mouseOver) return
                timeout = setTimeout(() => {
                  slider.next()
                }, 2000)
              }
              slider.on("created", () => {
                slider.container.addEventListener("mouseover", () => {
                  mouseOver = true
                  clearNextTimeout()
                })
                slider.container.addEventListener("mouseout", () => {
                  mouseOver = false
                  nextTimeout()
                })
                nextTimeout()
              })
              slider.on("dragStarted", clearNextTimeout)
              slider.on("animationEnded", nextTimeout)
              slider.on("updated", nextTimeout)
            },
          ]
    )

    return (
        <>
            <div className="pt-5">
                <div ref={sliderRef} className="keen-slider pt-5">
                    <div className="keen-slider__slide number-slide1">
                        <Image src={firstSlide} alt={'slider Image'} />
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <Image src={secondSlide} alt={'slider Image'} />
                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <Image src={thirdSlide} alt={'slider Image'} />
                    </div>
                    <div className="keen-slider__slide number-slide4">
                        <Image src={fourthSlide} alt={'slider Image'} />
                    </div>
                </div>
            </div>
        </>
    )
}