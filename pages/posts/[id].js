import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoPlayer from '../../components/VideoPlayer';
import RelatedPosts from '../../components/RelatedPosts';
import { getPostById, getRelatedPosts } from '../../lib/posts';
import styles from '../../styles/Post.module.css';
import { FaStar, FaClock, FaHd, FaPlay, FaPlus, FaDownload, FaShare } from 'react-icons/fa';

export default function PostPage({ post, relatedPosts }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  const handlePlayVideo = () => {
    // Lógica para reproduzir vídeo
    alert(`Reproduzindo: ${post.title}`);
  };

  const handleAddToWatchlist = () => {
    alert('Adicionado à sua lista!');
  };

  const handleDownload = () => {
    alert('Iniciando download...');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <>
      <Head>
        <title>{post.title} | Apple TV+</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header active="posts" />
      
      <main className={styles.mainContent}>
        {/* VIDEO PLAYER SECTION */}
        <section className={styles.videoPlayerSection}>
          <div className={styles.videoHeader}>
            <div className={styles.videoMeta}>
              <div className={styles.videoBadge}>
                <FaStar />
                <span>{post.content.badge}</span>
              </div>
              <div className={styles.videoDuration}>
                <FaClock />
                <span>{post.content.duration}</span>
              </div>
              <div className={styles.videoQuality}>
                <FaHd />
                <span>{post.content.quality}</span>
              </div>
            </div>
            
            <h1 className={styles.videoTitle}>{post.title}</h1>
          </div>
          
          {/* VIDEO PLAYER COMPONENT */}
          <VideoPlayer 
            placeholderImage={post.content.placeholderImage}
            title={post.title}
            videoUrl={post.content.videoUrl}
          />
        </section>
        
        {/* VIDEO INFO SECTION */}
        <section className={styles.videoInfoSection}>
          <div className={styles.videoDescription}>
            {post.content.description.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          {/* ACTION BUTTONS */}
          <div className={styles.actionButtons}>
            <button className={`${styles.actionBtn} ${styles.primary}`} onClick={handlePlayVideo}>
              <FaPlay />
              Assistir Agora
            </button>
            <button className={styles.actionBtn} onClick={handleAddToWatchlist}>
              <FaPlus />
              Minha Lista
            </button>
            <button className={styles.actionBtn} onClick={handleDownload}>
              <FaDownload />
              Download
            </button>
            <button className={styles.actionBtn} onClick={handleShare}>
              <FaShare />
              Compartilhar
            </button>
          </div>
          
          {/* RELATED CONTENT */}
          <RelatedPosts posts={relatedPosts} />
        </section>
      </main>

      <Footer />
    </>
  );
}

// Gera as páginas estáticas em build time
export async function getStaticPaths() {
  const posts = getAllPosts();
  
  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }));

  return {
    paths,
    fallback: false // Gera 404 para páginas não existentes
  };
}

// Busca os dados do post em build time
export async function getStaticProps({ params }) {
  const post = getPostById(parseInt(params.id));
  
  if (!post) {
    return {
      notFound: true
    };
  }

  const relatedPosts = getRelatedPosts(post.content.relatedPosts);

  return {
    props: {
      post,
      relatedPosts
    }
  };
}