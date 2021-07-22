import Head from 'next/head';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

function gallery() {
    return (
        <div className='app'>
            <Head>
                <title>Gallery</title>
            </Head>
            <Header />
            <Content>
                <p>
                    Grid Gallery
                </p>
            </Content>
            <Footer />
        </div>
    )
}

export default gallery
