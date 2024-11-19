import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Style.css"

const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
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
            <div ref={sliderRef} className="keen-slider">
                <div className="relative keen-slider__slide number-slide1 w-full ">
                    <img className="w-full h-full brightness-50" src="/public/assets/pexels1.jpg" alt="" />
                    <div className="absolute top-[25%] space-y-5 text-white  text-center px-4">
                        <header>
                        <h3 className="text-xl font-semibold">Use Coupon Code AND Save Your Money </h3>
                            <h1 className="text-7xl font-semibold font-family tracking-tighter brightness-90">Welcome to OfferHaven</h1>
                        </header>
                        <p className="w-[70%] mx-auto">Save more on your favorite products! Discover the best coupons, exclusive discounts, and unbeatable deals all in one place. Start collecting your coupons now and never pay full price again!</p>
                    </div>
                </div>

                <div className="relative keen-slider__slide number-slide2">
                    <img className="w-full h-full brightness-50" src="/public/assets/pexels2.jpg" alt="" />
                    <div className="absolute top-[25%] space-y-5 text-white w-1/2 text-center px-4">
                        <header>
                            <h1 className="text-7xl font-semibold font-family tracking-tighter brightness-90">It looks like its
                                been furnished
                                by discount
                                stores.</h1>
                        </header>
                        <p>Save more on your favorite products! Discover the best coupons, exclusive discounts, and unbeatable deals all in one place. Start collecting your coupons now and never pay full price again!</p>
                    </div>
                </div>
                {/* <div className="keen-slider__slide number-slide3">                <img className="w-full h-full" src="/assets/bannerImageByChatgpt.webp" alt="" />
                </div>
                <div className="keen-slider__slide number-slide4">                <img className="w-full h-full" src="/assets/bannerImageByChatgpt.webp" alt="" />
                </div>
                <div className="keen-slider__slide number-slide5">                <img className="w-full h-full" src="/assets/bannerImageByChatgpt.webp" alt="" />
                </div>
                <div className="keen-slider__slide number-slide6">                <img className="w-full h-full" src="/assets/bannerImageByChatgpt.webp" alt="" />
                </div> */}
            </div>
        </>
    )
}
export default Banner