import Head from 'next/head';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

function about() {
    return (
        <div className='app'>
            <Head>
                <title>Tentang</title>
            </Head>
            <Header />
            <Content>
               <div>
                    <h2>Tentang Kelompok Pengrajin Besek di Desa Kalinanas</h2>
                    <p>Kalinanas</p>
               </div>
               <div>

               </div>
            </Content>
            <Footer />
        </div>
    )
}

export default about
