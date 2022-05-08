import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import TextInSwiper from '../components/text_in_swiper'
import Layout from '../components/layout'

const About: NextPage = () => {

  const first_imgs = ['wallpaperbetter_1.jpg', 'wallpaperbetter_2.jpg', 'wallpaperbetter_3.jpg'];

  return (
    <div className={styles.container}>
      <Layout>
          楽々楽ら
      </Layout>
    </div>
  )
}

export default About