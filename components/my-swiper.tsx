import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセルに必要なタグをインポート
import { Pagination, Autoplay, EffectFade} from 'swiper' //欲しい機能をインポート
import 'swiper/css'
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// 自動スライドの画像
const header_images = [
  '/wallpaperbetter_1.jpg',
  '/wallpaperbetter_2.jpg',
  '/wallpaperbetter_3.jpg'
]

export default function TestCarousel () {
  return (
    <Swiper
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            waitForTransition: false,
        }}
        speed={2000}
        // pagination={{
        //     clickable: false,
        // }}
        modules={[EffectFade, Autoplay, Pagination]}
        loop={true}
        className='mv01'
    >
      {header_images.map((src: string, index: number) => {
        return (
          <SwiperSlide key={`${index}`}>
            <Image
              src={src}
              layout="responsive"
              width={640}
              height={400}
              alt="test_image"
              className='swiper-img'
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}