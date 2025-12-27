import { FaSearch, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ active }) {
  const router = useRouter();

  return (
    <header className="apple-header">
      <div className="apple-logo">
        <img 
          src="https://hyken.com/wp-content/uploads/2023/01/Apple-TV-Logo-2019-present.png" 
          alt="Apple TV Logo" 
        />
      </div>
      
      <nav className="apple-nav">
        <Link href="/" className={active === 'inicio' ? 'active' : ''}>
          Início
        </Link>
        <Link href="/live" className={active === 'live' ? 'active' : ''}>
          Live
        </Link>
        <Link href="/posts" className={active === 'posts' ? 'active' : ''}>
          Posts
        </Link>
      </nav>
      
      <div className="apple-actions">
        <button className="search-btn">
          <FaSearch />
        </button>
        <button className="user-btn">
          <FaUser />
        </button>
      </div>

      <style jsx>{`
        .apple-header {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 20px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(20px);
          z-index: 1000;
        }

        .apple-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .apple-logo img {
          height: 30px;
          width: auto;
        }

        .apple-nav {
          display: flex;
          gap: 40px;
        }

        .apple-nav a {
          color: #f5f5f7;
          text-decoration: none;
          font-size: 17px;
          font-weight: 400;
          transition: color 0.3s;
          padding: 8px 0;
        }

        .apple-nav a.active {
          color: #0071e3;
          position: relative;
        }

        .apple-nav a.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #0071e3;
        }

        .apple-nav a:hover {
          color: #0071e3;
        }

        .apple-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .search-btn, .user-btn {
          background: none;
          border: none;
          color: #f5f5f7;
          font-size: 18px;
          cursor: pointer;
        }

        .user-btn {
          background: #0071e3;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .apple-header {
            padding: 15px 20px;
          }
          
          .apple-nav {
            gap: 15px;
            font-size: 15px;
          }
        }
      `}</style>
    </header>
  );
}