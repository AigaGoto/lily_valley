import TestCarousel from "./my-swiper"

export default function TextInSwiper (props: any) {
    let text: string = props.text

    return (
        <div className="text-in-img">
            <TestCarousel />
            <p>{text}</p>	
        </div>
    )
 }