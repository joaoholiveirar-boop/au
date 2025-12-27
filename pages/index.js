import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import styles from '../styles/Home.module.css';
import { FaStar, FaPlay, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';

export default function Home() {
  const nbaLouiseUrl = "https://tvappletv.blogspot.com/p/nba-louise.html";

  const irParaNbaLouise = () => {
    window.open(nbaLouiseUrl, '_blank');
  };

  const maisInfoLouise = () => {
    alert("Louise apresenta um show exclusivo no intervalo do NBA All-Star Game, com produção cinematográfica premium da Apple TV+.");
  };

  return (
    <>
      <Head>
        <title>CBS+ | Apple TV</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <Popup />
      
      <Header active="inicio" />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <FaStar />
            <span>EXCLUSIVO APPLE TV+</span>
          </div>
          
          <h1 className={styles.heroTitle}>NBA All-Star Halftime Show Louise</h1>
          
          <p className={styles.heroDescription}>
            O espetáculo mais esperado do ano! Assista à performance inédita de Louise no intervalo do NBA All-Star Game, com produção cinematográfica premium da Apple TV+.
          </p>
          
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary} onClick={irParaNbaLouise}>
              <FaPlay />
              Assistir Agora
            </button>
            <button className={styles.btnSecondary} onClick={maisInfoLouise}>
              <FaInfoCircle />
              Mais Informações
            </button>
          </div>
        </div>
      </section>

      {/* Originals Section */}
      <section className={styles.originalsSection} id="originais">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Originais</h2>
        </div>
        
        <div className={styles.postersGrid}>
          {/* Poster 1 - Lady Gaga */}
          <div className={styles.posterContainer} id="openPopup">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX9P2j2MjIjIzkO-yNB3HtENFWk2dp2DE_ripgV5okgFZcc5Al5czn3H61sGZfouOj6Lv0nV7nxMCbIRjz-Ye93NsOBsRrCgmOy10rQj7JjsIY64aLwAGw4skd-kTR9hlHYJzJzmofcav_ww9nlRWHwOjWhm51nWOPV4X4Jd6Vd_xQCO8H5GGVBxKrjp_P/s2100/poster.png" 
              alt="Lady Gaga Halftime Show" 
              className={styles.posterImage}
            />
            <div className={styles.posterOverlay}>
              <FaPlay className={styles.playIcon} />
            </div>
          </div>
          
          {/* Poster 2 - NBA All-Star */}
          <div className={styles.posterContainer} onClick={irParaNbaLouise}>
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX_x5vkq65cDMXsp5-Mwdf9CvReUI9cKiJOEcuZplLmQktIVP2a-of9cUxrjz6H-mmlZjGx9Il9OhZRG4UtmdgnhpVv-opRoT9rXWTQcKOtdD45njyKSZAFHJjzFKixuFylSOIz12UbU-B6xdmQjcNzKrJmERnm9hsdiZSpmzsmUxt4fIdyRtBx38LYyJw/s2100/alltst.png" 
              alt="NBA All-Star Halftime Show Louise" 
              className={styles.posterImage}
            />
            <div className={styles.posterOverlay}>
              <FaPlay className={styles.playIcon} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}