import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

function Header() {
    const [mobileMenu, setMobile] = useState(false);

    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.logo}>
                    <p>
                        Besek Kalinanas
                    </p>
                </div>
                <ul className={mobileMenu ? styles.view : null} >
                    <li className={styles.menu}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={styles.menu}>
                        <Link href='/gallery'>Gallery</Link>
                    </li>
                    <li className={styles.menu}>
                        <Link href='/about'>About</Link>
                    </li>
                </ul>
                <div className={styles.button} onClick={(e) => setMobile(!mobileMenu)}>
                    <FiMenu size={30} />
                </div>
            </nav>
        </header>
    )
}

export default Header
