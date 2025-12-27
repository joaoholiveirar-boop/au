import { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaBackward, FaForward, FaVolumeUp, FaVolumeMute, FaExpand } from 'react-icons/fa';
import styles from '../styles/Post.module.css';

export default function VideoPlayer({ placeholderImage, title, videoUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const totalTime = 8040; // 2h14min em segundos

  // Formatar tempo
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  // Progresso do vídeo
  const progressPercent = (currentTime / totalTime) * 100;

  // Controle do vídeo
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= totalTime) {
            setIsPlaying(false);
            return totalTime;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalTime]);

  // Funções do player
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const skipBackward = () => {
    setCurrentTime(prev => Math.max(0, prev - 10));
  };

  const skipForward = () => {
    setCurrentTime(prev => Math.min(totalTime, prev + 30));
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Sair do fullscreen quando apertar ESC
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className={styles.videoContainer} ref={containerRef} id="videoPlayer">
      <div className={styles.videoWrapper}>
        <div 
          className={styles.videoPlaceholder} 
          style={{ 
            background: isPlaying 
              ? '#000' 
              : `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${placeholderImage}') center/cover no-repeat`
          }}
        >
          {!isPlaying ? (
            <button className={styles.playButtonLarge} onClick={togglePlay}>
              <FaPlay />
            </button>
          ) : (
            <div className={styles.videoPlayingOverlay}>
              <div className={styles.videoPlayingIcon}>
                <FaPlay />
                <p>Vídeo em reprodução</p>
              </div>
              <p className={styles.videoPlayingText}>
                Nesta área você incorporaria o player de vídeo real (YouTube, Vimeo, ou player customizado)
              </p>
            </div>
          )}
        </div>
        
        {/* CONTROLES DO VÍDEO */}
        <div className={styles.videoControls}>
          <div className={styles.controlGroup}>
            <button className={styles.controlBtn} onClick={togglePlay}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button className={styles.controlBtn} onClick={skipBackward}>
              <FaBackward />
            </button>
            <button className={styles.controlBtn} onClick={skipForward}>
              <FaForward />
            </button>
          </div>
          
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${progressPercent}%` }}></div>
          </div>
          
          <div className={styles.timeDisplay}>
            <span>{formatTime(currentTime)}</span> / <span>{formatTime(totalTime)}</span>
          </div>
          
          <div className={styles.controlGroup}>
            <button className={styles.controlBtn} onClick={toggleMute}>
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <button className={styles.controlBtn} onClick={toggleFullscreen}>
              <FaExpand />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}