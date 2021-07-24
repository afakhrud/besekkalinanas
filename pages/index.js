import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'
export default function Home() {
  return (
    <div className='app'>
      <Head>
        <title>Besek Kalinanas</title>
        <meta name="description" content="Mempromosikan besek buatan warga Desa Kalinanas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h3>Produk Besek Ikan Buatan Warga Desa Kalinanas</h3>
          </div>
          <div className={styles.heroImg}>
            {/* <Image src='/hero-section.png' width={583} height={303} /> */}
            <Image 
              src='/hero-section.png' 
              alt=''
              width={1167}
              height={606}
              layout='responsive' 
            />
          </div>
        </section>
        <section className="product">
        </section>
        <section className="details">

        </section>
          {/* <div className={styles.box}>
            
          </div> */}
      </Content>
      <Footer />
    </div>
  )
}

const circleWindowing = {

}