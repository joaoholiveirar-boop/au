import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Posts.module.css';
import { FaCalendar, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const allPostsData = [
  {
    id: 1,
    title: "Lady Gaga Halftime Show",
    excerpt: "Performance exclusiva da Lady Gaga no Apple Music Fenty Bowl com produção cinematográfica premium.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX9P2j2MjIjIzkO-yNB3HtENFWk2dp2DE_ripgV5okgFZcc5Al5czn3H61sGZfouOj6Lv0nV7nxMCbIRjz-Ye93NsOBsRrCgmOy10rQj7JjsIY64aLwAGw4skd-kTR9hlHYJzJzmofcav_ww9nlRWHwOjWhm51nWOPV4X4Jd6Vd_xQCO8H5GGVBxKrjp_P/s2100/poster.png",
    date: "15 Out 2023",
    category: "shows"
  },
  {
    id: 2,
    title: "NBA All-Star Halftime Show Louise",
    excerpt: "Louise apresenta show histórico no intervalo do NBA All-Star Game com produção em 4K Dolby Vision.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX_x5vkq65cDMXsp5-Mwdf9CvReUI9cKiJOEcuZplLmQktIVP2a-of9cUxrjz6H-mmlZjGx9Il9OhZRG4UtmdgnhpVv-opRoT9rXWTQcKOtdD45njyKSZAFHJjzFKixuFylSOIz12UbU-B6xdmQjcNzKrJmERnm9hsdiZSpmzsmUxt4fIdyRtBx38LYyJw/s2100/alltst.png",
    date: "20 Nov 2023",
    category: "shows"
  },
  {
    id: 3,
    title: "Apple Music Live: Taylor Swift",
    excerpt: "Show íntimo exclusivo do Apple Music com Taylor Swift. Gravação ao vivo no Dolby Theatre.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9Q1J0fNN4g0_UbqgG7S-OldHmABwQ3VwIqrcL2bWvnC8uQvbM7r4Q7YuhAhzA9KZPJ9mm5CRK_-r9DshoafDUY7L_rJYhP7t6Qs6ZfU7SQyf-rDSrVllS3iC5f6z5B3Zhm2kRl3aLhXqg8QdpxAl2SDYX_HB1hUyE27Ys/s2100/taylor-swift-apple-music.jpg",
    date: "10 Set 2023",
    category: "shows"
  },
  {
    id: 4,
    title: "The Morning Show: Temporada 3",
    excerpt: "Nova temporada do sucesso original do Apple TV+. Drama e intriga nos bastidores da televisão.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKz-L-CfIk2z3Q_QOSAeICrUu7M0zALB-Q9Fob8ilWXW1y_26UePxxt9yI8_5C7MXz0HSvI9L7cC9uBf8T4IGVXmOFls9SfN_ndG8P1PSpVjBqJkKzrF9z2vMVyMsFw6W6gxT0S2RcR8u6mkwBkyFm7cxhWcS6v1_Q/s2100/morning-show-season3.jpg",
    date: "05 Nov 2023",
    category: "series"
  },
  {
    id: 5,
    title: "Killers of the Flower Moon",
    excerpt: "Filme exclusivo Apple TV+ dirigido por Martin Scorsese. Estrelando Leonardo DiCaprio.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEn1C4nsp2IOgELhU-S_n-4Ix1IIifCcgHprTTRMZqkZPmkzcnvIQlfDBdINpvs5D6oTFKKJ-UFPHLzA8lXnxuJAvpLzDyZRhE54H8I_Gcdp_8o2YZwYyF5nIX8sEY06g3w8qGlBngnuW89KcOJ2Bih2xT9_ruPp5f4Is/s2100/killers-flower-moon.jpg",
    date: "20 Out 2023",
    category: "movies"
  },
  {
    id: 6,
    title: "Ted Lasso: Temporada Final",
    excerpt: "Despedida emocionante do treinador mais amado da televisão. Última temporada disponível.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgenFHyiAf1Ph_wBm1G-0n2x96Q5EdzDcfpkgKGeasvjTSt1LLtF0-TZ6XhNfC0VIN94ym8Xo2X_2UqVt0rg1uZpYZFzheLfFJlbnj64yY-zfLpz0UqYwRLpCkxNc9UzRScu3XGFY5IlmBePG7O83eZ7pQa7p9yNWeUkYI/s2100/ted-lasso-final.jpg",
    date: "15 Set 2023",
    category: "series"
  },
  {
    id: 7,
    title: "Foundation: Segunda Temporada",
    excerpt: "Baseada na obra de Isaac Asimov. A saga épica continua com efeitos visuais revolucionários.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhP7Y_TVX96ezMFasjY7lZAKY-CPvQBlP2OKxrK-E3i9Pm4Kd8aj2lC-wkfOV7wbgqSSvWY9CfjCjqE1YZ84K-FfSnSWSJ2JmC16aT2ADMhH9U6lOc9zMXpCl_R8zIvmATsS-XAUd-zPM2Zz0J7SJypnln2vFmQOtuS6Y0/s2100/foundation-season2.jpg",
    date: "30 Out 2023",
    category: "series"
  },
  {
    id: 8,
    title: "See: O Mundo dos Cegos",
    excerpt: "Mundo pós-apocalíptico onde a humanidade perdeu o sentido da visão. Com Jason Momoa.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaX_8Fmqq5a0WQeK7NCCOT8FbRxbkV1f3Dp07yf3iB2y9Q6j_6kIto7m8togO9aiBYC7f2xP3ZbDkOjkPjwE9osbw-n4NUtZ0WflfP17Y7wWWoOkEYByzECk5VYJJljNcmQiYJ_lN70ce7cvF7GrdtBRTrVHJl0sXfQzI/s2100/see-season3.jpg",
    date: "25 Set 2023",
    category: "series"
  }
];

export default function Posts() {
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = filter === 'all' 
    ? allPostsData 
    : allPostsData.filter(post => post.category === filter);

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleFilterClick = (filterType) => {
    setFilter(filterType);
    setCurrentPage(1);
  };

  return (
    <>
      <Head>
        <title>Todos os Posts | Apple TV+</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header active="posts" />
      
      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Todos os Posts</h1>
          <p className={styles.pageSubtitle}>Descubra todo o conteúdo exclusivo do Apple TV+ em um só lugar.</p>
        </div>
        
        {/* Filtros */}
        <div className={styles.filters}>
          <button 
            className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`} 
            onClick={() => handleFilterClick('all')}
          >
            Todos
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'shows' ? styles.active : ''}`} 
            onClick={() => handleFilterClick('shows')}
          >
            Shows
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'series' ? styles.active : ''}`} 
            onClick={() => handleFilterClick('series')}
          >
            Séries
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'movies' ? styles.active : ''}`} 
            onClick={() => handleFilterClick('movies')}
          >
            Filmes
          </button>
        </div>
        
        {/* Grid de Posts */}
        <div className={styles.postsGrid}>
          {currentPosts.map(post => (
            <div key={post.id} className={styles.postCard}>
              <img src={post.image} alt={post.title} className={styles.postImage} />
              <div className={styles.postContent}>
                <span className={styles.postCategory}>{post.category.toUpperCase()}</span>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postMeta}>
                  <span className={styles.postDate}>
                    <FaCalendar /> {post.date}
                  </span>
                  <a href="#" className={styles.readMore}>
                    Ver mais <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Paginação */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button 
              className={styles.pageBtn} 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <FaChevronLeft />
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`${styles.pageBtn} ${currentPage === i + 1 ? styles.active : ''}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            
            <button 
              className={styles.pageBtn} 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}