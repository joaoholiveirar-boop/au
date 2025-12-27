import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Live.module.css';
import { FaBell, FaCalendar, FaUser, FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Live() {
  const [countdown, setCountdown] = useState('--:--:--');
  
  const eventDate = new Date('2024-02-20T21:30:00-03:00').getTime();

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      if (distance < 0) {
        setCountdown('AO VIVO AGORA!');
        return;
      }
      
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setCountdown(
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
    
    return () => clearInterval(interval);
  }, []);

  const setNotification = () => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Apple TV+ Live', {
        body: 'Você será notificado quando a transmissão ao vivo começar!',
        icon: 'https://www.apple.com/favicon.ico'
      });
      alert('Você será notificado quando a transmissão começar!');
    } else if ('Notification' in window && Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          setNotification();
        }
      });
    } else {
      alert('Ative as notificações para ser avisado quando a transmissão começar!');
    }
  };

  const addToCalendar = (eventId) => {
    const events = {
      1: {
        title: 'NBA All-Star Halftime Show - Apple TV+',
        date: '20240220T213000',
        duration: 'PT2H',
        description: 'Transmissão ao vivo exclusiva do show de intervalo do NBA All-Star Game.'
      },
      2: {
        title: 'Lady Gaga Apple Music Live - Apple TV+',
        date: '20240315T200000',
        duration: 'PT2H',
        description: 'Performance exclusiva do Apple Music Fenty Bowl.'
      },
      3: {
        title: 'Taylor Swift: The Eras Tour Live - Apple TV+',
        date: '20240330T220000',
        duration: 'PT3H',
        description: 'Show ao vivo direto do Eras Tour.'
      }
    };
    
    const event = events[eventId];
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.date}/${event.date}&details=${encodeURIComponent(event.description)}&location=Apple TV+&sf=true&output=xml`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <>
      <Head>
        <title>Live Stream | Apple TV+</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header active="live" />
      
      <main className={styles.mainContent}>
        {/* Hero Live */}
        <section className={styles.liveHero}>
          <div className={styles.liveBadge}>
            <div className={styles.liveDot}></div>
            <span>AO VIVO AGORA</span>
          </div>
          
          <h1 className={styles.liveTitle}>Apple Music Live</h1>
          <p className={styles.liveSubtitle}>Transmissões exclusivas ao vivo dos maiores artistas do mundo. Só no Apple TV+.</p>
        </section>
        
        {/* Player Live */}
        <section className={styles.livePlayerSection}>
          <div className={styles.playerContainer}>
            <div className={styles.playerWrapper}>
              <div className={styles.livePlaceholder}>
                <div className={styles.liveCountdown}>
                  <div className={styles.countdownTitle}>PRÓXIMA TRANSMISSÃO EM</div>
                  <div className={styles.countdownTimer}>{countdown}</div>
                </div>
                
                <div className={styles.liveInfo}>
                  <h3>NBA All-Star Halftime Show: Transmissão ao Vivo</h3>
                  <p>Não perca a transmissão ao vivo exclusiva do show de intervalo do NBA All-Star Game. Performance especial de Louise com produção cinematográfica premium Apple TV+.</p>
                </div>
                
                <button className={styles.liveNotifyBtn} onClick={setNotification}>
                  <FaBell />
                  Notificar-me quando começar
                </button>
              </div>
              
              <div id="liveStreamPlayer" style={{ display: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
            </div>
          </div>
        </section>
        
        {/* Próximas Lives */}
        <section className={styles.upcomingLives}>
          <h2 className={styles.sectionTitle}>Próximas Transmissões</h2>
          
          <div className={styles.upcomingGrid}>
            <div className={styles.upcomingCard}>
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX_x5vkq65cDMXsp5-Mwdf9CvReUI9cKiJOEcuZplLmQktIVP2a-of9cUxrjz6H-mmlZjGx9Il9OhZRG4UtmdgnhpVv-opRoT9rXWTQcKOtdD45njyKSZAFHJjzFKixuFylSOIz12UbU-B6xdmQjcNzKrJmERnm9hsdiZSpmzsmUxt4fIdyRtBx38LYyJw/s800/alltst.png" 
                alt="NBA All-Star" 
                className={styles.upcomingImage}
              />
              <div className={styles.upcomingContent}>
                <div className={styles.upcomingTime}>
                  <FaCalendar />
                  <span>20 FEV 2024 • 21:30 BR</span>
                </div>
                <h3 className={styles.upcomingTitle}>NBA All-Star Halftime Show</h3>
                <p className={styles.upcomingDescription}>Show exclusivo de Louise no intervalo do All-Star Game. Transmissão ao vivo em 4K.</p>
                <button className={styles.upcomingBtn} onClick={() => addToCalendar(1)}>Adicionar à Agenda</button>
              </div>
            </div>
            
            <div className={styles.upcomingCard}>
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX9P2j2MjIjIzkO-yNB3HtENFWk2dp2DE_ripgV5okgFZcc5Al5czn3H61sGZfouOj6Lv0nV7nxMCbIRjz-Ye93NsOBsRrCgmOy10rQj7JjsIY64aLwAGw4skd-kTR9hlHYJzJzmofcav_ww9nlRWHwOjWhm51nWOPV4X4Jd6Vd_xQCO8H5GGVBxKrjp_P/s800/poster.png" 
                alt="Lady Gaga" 
                className={styles.upcomingImage}
              />
              <div className={styles.upcomingContent}>
                <div className={styles.upcomingTime}>
                  <FaCalendar />
                  <span>15 MAR 2024 • 20:00 BR</span>
                </div>
                <h3 className={styles.upcomingTitle}>Lady Gaga Apple Music Live</h3>
                <p className={styles.upcomingDescription}>Performance exclusiva do Apple Music Fenty Bowl. Transmissão global.</p>
                <button className={styles.upcomingBtn} onClick={() => addToCalendar(2)}>Adicionar à Agenda</button>
              </div>
            </div>
            
            <div className={styles.upcomingCard}>
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9Q1J0fNN4g0_UbqgG7S-OldHmABwQ3VwIqrcL2bWvnC8uQvbM7r4Q7YuhAhzA9KZPJ9mm5CRK_-r9DshoafDUY7L_rJYhP7t6Qs6ZfU7SQyf-rDSrVllS3iC5f6z5B3Zhm2kRl3aLhXqg8QdpxAl2SDYX_HB1hUyE27Ys/s800/taylor-swift-apple-music.jpg" 
                alt="Taylor Swift" 
                className={styles.upcomingImage}
              />
              <div className={styles.upcomingContent}>
                <div className={styles.upcomingTime}>
                  <FaCalendar />
                  <span>30 MAR 2024 • 22:00 BR</span>
                </div>
                <h3 className={styles.upcomingTitle}>Taylor Swift: The Eras Tour Live</h3>
                <p className={styles.upcomingDescription}>Show ao vivo direto do Eras Tour. Produção exclusiva Apple TV+.</p>
                <button className={styles.upcomingBtn} onClick={() => addToCalendar(3)}>Adicionar à Agenda</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}