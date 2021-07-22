import Image from 'next/image';
import logoKKN from '../public/logo-photoshop.png';
import styles from './Footer.module.css';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className={styles.footer}>
            <footer>
                <div className={styles.by}>

                    <Image src={logoKKN} width={60} height={70} />
                    <div>
                        <p>KKN-PPM UGM 2021-JT032<br/>
                        Wonosamodro, Boyolali</p>
                    </div>
                </div>
                <div className={styles.media}>
                    <p>Media:</p>
                    <div className={styles.mediaList}>
                        <a href='https://www.instagram.com/kknwonosamodro2021/' rel='noopener noreferer' target='_blank'>
                            <FaInstagram size={30}/>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
