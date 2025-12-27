import { FaExclamationTriangle } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Popup() {
  useEffect(() => {
    const openPopup = () => {
      document.getElementById('cbsPopup').style.display = 'flex';
      document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
      document.getElementById('cbsPopup').style.display = 'none';
      document.body.style.overflow = 'auto';
    };

    const openPopupBtn = document.getElementById('openPopup');
    if (openPopupBtn) {
      openPopupBtn.addEventListener('click', openPopup);
    }

    const popup = document.getElementById('cbsPopup');
    if (popup) {
      popup.addEventListener('click', function(e) {
        if (e.target === this) {
          closePopup();
        }
      });
    }

    return () => {
      if (openPopupBtn) {
        openPopupBtn.removeEventListener('click', openPopup);
      }
    };
  }, []);

  const fecharPopup = () => {
    document.getElementById('cbsPopup').style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="popup-overlay" id="cbsPopup" style={{ display: 'none' }}>
      <div className="popup-content">
        <div className="popup-icon">
          <FaExclamationTriangle />
        </div>
        <h2 className="popup-title">Direitos de Transmissão</h2>
        <p className="popup-message">
          A CBS não possui os direitos de transmissão do Lady Gaga Apple Music Fenty Bowl.<br /><br />
          Este conteúdo está disponível exclusivamente no Apple TV+.
        </p>
        <button className="popup-button" onClick={fecharPopup}>
          Entendi
        </button>
      </div>

      <style jsx>{`
        .popup-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          z-index: 2000;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(10px);
        }

        .popup-content {
          background: #1d1d1f;
          padding: 40px;
          border-radius: 20px;
          max-width: 500px;
          width: 90%;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        .popup-icon {
          font-size: 60px;
          color: #ff3b30;
          margin-bottom: 20px;
        }

        .popup-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #fff;
        }

        .popup-message {
          font-size: 18px;
          line-height: 1.5;
          color: #a2a2a2;
          margin-bottom: 30px;
        }

        .popup-button {
          background: #0071e3;
          color: white;
          border: none;
          padding: 15px 40px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .popup-button:hover {
          background: #0077ed;
          transform: scale(1.03);
        }

        @media (max-width: 576px) {
          .popup-content {
            padding: 30px 20px;
          }
          
          .popup-title {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}