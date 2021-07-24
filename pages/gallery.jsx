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
                            <Image src='/img/1.jpeg' alt='' layout='responsive' width={1280} height={720}/>
                        </li>
                        <li>
                            <Image src='/img/2.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/img/3.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/img/4.jpeg' alt='' layout='responsive' width={1280} height={720}/>
                        </li>
                        <li>
                            <Image src='/img/5.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/img/6.jpeg' alt='' layout='responsive' width={1280} height={720}/>
                        </li>
                        <li>
                            <Image src='/img/7.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/img/8.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/img/9.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/img/10.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/img/11.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/img/12.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/img/13.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/img/14.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/img/15.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/img/16.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                        <li>
                            <Image src='/img/17.jpeg' alt='' layout='responsive' width={1280} height={720}/>   
                        </li>
                    </ul>
                </div>
            </Content>
            <Footer />
        </div>
    )
}

export default gallery
