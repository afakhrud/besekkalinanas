import Head from 'next/head';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import styles from '../styles/Gallery.module.css';
import Image from 'next/image';

const galleryContent = {

}

function gallery() {
    return (
        <div className='app'>
            <Head>
                <title>Gallery</title>
            </Head>
            <Header />
            <Content>
                <h2 className={styles.title}>
                    Galeri
                </h2>
                <div >
                    <ul className={styles.gallery}>
                        <li>
                            <Image src='/front-1.jpeg' alt='' layout='responsive' width={1280} height={720}/>
                        </li>
                        <li>
                            <Image src='/front-1.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/front-1.jpeg' alt='' layout='responsive' width={1280} height={720}/>
                        </li>
                        <li>
                            <Image src='/front-1.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/front-1.jpeg' alt='' layout='responsive' width={1280} height={720}/>
                        </li>
                        <li>
                            <Image src='/front-1.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/front-1.jpeg' alt='' layout='responsive' width={1280} height={720}/>
                        </li>
                        <li>
                            <Image src='/front-1.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                    </ul>
                </div>
            </Content>
            <Footer />
        </div>
    )
}

export default gallery
