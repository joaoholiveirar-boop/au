export default function Footer() {
  return (
    <footer className="apple-footer">
      <div className="footer-logo">
        <img 
          src="https://hyken.com/wp-content/uploads/2023/01/Apple-TV-Logo-2019-present.png" 
          alt="Apple TV Logo" 
        />
      </div>
      <p>Copyright © 2023 Apple Inc. Todos os direitos reservados.</p>
      <p>Conteúdos exclusivos disponíveis no Apple TV+</p>

      <style jsx>{`
        .apple-footer {
          padding: 40px 60px;
          background: rgba(0, 0, 0, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: #86868b;
          font-size: 14px;
          position: relative;
          z-index: 100;
        }

        .footer-logo {
          margin-bottom: 20px;
        }

        .footer-logo img {
          height: 40px;
          width: auto;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .apple-footer {
            padding: 30px 20px;
          }
        }
      `}</style>
    </footer>
  );
}