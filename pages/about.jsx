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
                    <p>Desa Kalinanas terletak di Kecamatan Wonosamodro, Kabupaten Boyolali, Provinsi Jawa Tengah. Di Desa ini terdapat kelompok-kelompok masyarakat yang memproduksi anyaman besek ukuran sedang. Besek-besek tersebut biasa dijual ke Jepara untuk wadah ikan. Laba dari penjualan besek dibagikan ke tiap anggota. Satu kelompok pengrajin besek mampu menghasilkan 2-4 ikat (125 pcs/ikat) setiap pertemuan atau kegiatan. Pertemuan biasa dilakukan seminggu sekali di hari minggu. Harga satu ikat besek dipatok di kisaran 10 ribu rupiah.</p>
               </div>
               <div>
                    <p>Kolom masukan</p>
                    <button type="submit">Kirim</button>
               </div>
               <section>
                    <p>
                        <strong>Tentang web ini</strong> - Web ini dibuat dengan tujuan untuk membantu memperluas pasar dari pengrajin-pengrajin besek di Desa Kalinanas.
                    </p>
               </section>
            </Content>
            <Footer />
        </div>
    )
}

export default about
