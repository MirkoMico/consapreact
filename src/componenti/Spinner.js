import React, { useEffect, useState } from "react";

const Spinner = ({ children }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Funzione per rendere il progress spinner attivo per 3 secondi
    const attivaSpinner = () => {
      // Mostra il contenuto dopo 3 secondi
      setTimeout(() => {
        setShowContent(true);
      }, 2300); // 3000 millisecondi = 3 secondi
    };

    // Chiama la funzione per attivare il progress spinner
    attivaSpinner();
  }, []);

  return (
    <div >
      {showContent ? (
        children
      ) : (
        <div className="d-flex justify-content-center align-items-center"style={{ height: "100vh" }}>
          <div className="row">
            <div className="col-6 col-lg-3 mt-3 mt-lg-0">
              <p className="mb-3">
                <strong>Caricamento...</strong>
              </p>
              <div className="progress-spinner progress-spinner-double size-xl progress-spinner-active">
                <div className="progress-spinner-inner"></div>
                <div className="progress-spinner-inner"></div>
                <span className="visually-hidden">Caricamento...</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Spinner;