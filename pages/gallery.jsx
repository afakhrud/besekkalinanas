import Head from 'next/head';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import styles from '../styles/Gallery.module.css';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

function gallery() {
    
    const [modalState, setModal] = useState({show: false, src: ''});
    const handleOpen = (source) => {
        setModal({show: true, src: source});
        console.log('true');
    }
    const handleClose = () => {
        setModal({show : false});
    }
    let [rata, setTinggi] = useState({});
    let [layarLebar, setLayar] = useState(); 
    const handleLayar = () => {
        setLayar(window.innerWidth);
    }
    const ref = useRef();
    
    useEffect(() => {
        window.addEventListener('resize', handleLayar);
    })

    useEffect(() => {
        const scaled = 720/1280*ref.current.clientWidth;
        setTinggi({maxHeight: scaled});
    }, [layarLebar]);
    


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
                        {galleryContent.map((item, index) => {
                            return (
                                <li key={index} ref={(index === 1) ? ref : null} style={rata} onClick={(e) => handleOpen(item.src)} >
                                    <Image src={item.src} alt={item.alt} layout='responsive' width={item.width} height={item.height} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Content>
            <Footer />
            {modalState.show &&  <Modal close={handleClose}>
                <img src={modalState.src} alt=''/>
            </Modal>}
        </div>
    )
}

export default gallery

const galleryContent = [
    {
        src: '/img/1.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/2.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/3.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/4.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/5.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/6.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/7.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/8.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/9.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/10.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/11.jpeg',
        alt: '',
        width: 720,
        height: 1280
    },
    {
        src: '/img/12.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/13.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/14.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/15.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/16.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/17.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/18.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/19.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/20.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/21.jpeg',
        alt: '',
        width: 720,
        height: 1280
    },
    {
        src: '/img/22.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/23.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/24.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/25.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/26.jpeg',
        alt: '',
        width: 1280,
        height: 720
    },
    {
        src: '/img/27.jpeg',
        alt: '',
        width: 780,
        height: 1040
    },
    {
        src: '/img/28.jpeg',
        alt: '',
        width: 780,
        height: 1040
    },
    {
        src: '/img/29.jpeg',
        alt: '',
        width: 780,
        height: 1040
    },
    {
        src: '/img/30.jpeg',
        alt: '',
        width: 721,
        height: 1280
    }
]