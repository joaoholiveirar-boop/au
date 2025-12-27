import Link from 'next/link';
import styles from '../styles/Post.module.css';

export default function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className={styles.relatedSection}>
      <h3 className={styles.relatedTitle}>Conteúdo Relacionado</h3>
      <div className={styles.relatedGrid}>
        {posts.map(post => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <div className={styles.relatedItem}>
              <img src={post.image} alt={post.title} />
              <div className={styles.relatedOverlay}>
                <span className={styles.relatedPlayIcon}>
                  <FaPlay />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import { FaPlay } from 'react-icons/fa';