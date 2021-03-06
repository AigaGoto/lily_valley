import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import TextInSwiper from '../components/text_in_swiper'
import Layout from '../components/layout'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <TextInSwiper text='Lily of the Valley' />
      <Layout>
      </Layout>
    </div>
  )
}

export default Home
