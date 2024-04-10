import React, { useState, useRef, useEffect } from 'react'
import icona from 'bootstrap-italia/dist/svg/sprites.svg'
import '../index.css'

const Navbars = () => {


  const [showLogout, setShowLogout] = useState(false);
   const myInputLogout = useRef(null);
 
   const handleCloseLogout = () => setShowLogout(false);
   const handleShowLogout = () => setShowLogout(true);
 
   // Questa funzione viene chiamata ogni volta che lo stato 'show' cambia
   useEffect(() => {
     if (showLogout) {
       myInputLogout.current.focus();
     }
   }, [showLogout]);


   const handleLogout = () => {
    // Rimuovi il token dal localStorage
    localStorage.removeItem('token');
    // Esegui altre azioni necessarie per il logout, come reindirizzare l'utente alla pagina di login
    // window.location.href = '/login'; // Ad esempio, reindirizza l'utente alla pagina di login
  };







  return (
    



 
<nav class="navbar navbar-expand-lg has-megamenu colore" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="menu" aria-expanded="false" data-bs-toggle="navbarcollapsible" data-bs-target="#navbar-A">
      <span>
        <svg role="img" class="icon"><use href={`${icona}#it-burger`}></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="navbar-A">
    <div class="overlay fade"></div>
    <div class="close-div">
      <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
        <span><svg role="img" class="icon"><use href={`${icona}#it-close-big`}></use></svg></span>
      </button>
    </div>






    <div class="menu-wrapper justify-content-lg-between">
      <ul class="navbar-nav">
        
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3 active" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-completo-A1" data-focus-mouse="false">
              <span>Gestione Richiesete</span><svg role="img" class="icon icon-xs ms-1"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-completo-A1">
            <div class="megamenu pb-5 pt-3 py-lg-0">
              <div class="row">
                <div class="col-xs-12 col-lg-4 px-0">
                  <div class="row">
                    <div class="col-12 it-vertical it-description pb-lg-3">
                      <div class="description-content ps-4 ps-sm-5 ms-3">
                        <div class="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                          <figure class="figure">
                            <img src='https://www.consap.it/media/cl1ddv23/procedure_modulistica_1203097687.jpg' class="figure-img img-fluid rounded" alt="Segnaposto"/>
                          </figure>
                        </div>
                        <p>
                          In questa sezione è possibile inserire, modificare e consultare le 
                          <strong> Richieste</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-8">
                  <div class="it-heading-link-wrapper">
                    <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                    <span>Esplora la sezione per gestire le richieste</span>
                    </a>
                  </div>
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item dropdown-item" href="/inserimento">
                              <svg role="img" class="icon icon-sm me-2"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Inserimento Richiesta</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item" href="/elenco">
                              <svg role="img" class="icon icon-sm me-2"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Elenco Richieste</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 3</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 4</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 5</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 6</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
       
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-completo-A2" data-focus-mouse="false">
              <span>Gestione Commessa</span><svg role="img" class="icon icon-xs ms-1"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-completo-A2">
            <div class="megamenu pb-5 pt-3 py-lg-0">
              <div class="row">
                <div class="col-xs-12 col-lg-4 px-0">
                  <div class="row">
                    <div class="col-12 it-vertical it-description pb-lg-3">
                      <div class="description-content ps-4 ps-sm-5 ms-3">
                        <div class="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
                          <figure class="figure">
                            <img src="https://via.placeholder.com/560x240/ebebeb/808080/?text=Immagine" class="figure-img img-fluid rounded" alt="Segnaposto"/>
                          </figure>
                        </div>
                        <p>
                          Testo utile a fornire una descrizione dei contenuti della sezione <strong>megamenu 2</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-8">
                  <div class="it-heading-link-wrapper">
                    <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                    <span>Esplora la sezione megamenu 2</span>
                    </a>
                  </div>
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 7</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 8</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 9</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 10</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 11</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-arrow-right-triangle"></use></svg>
                              <span>Link lista 12</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="it-access-top-wrapper">
              {/* <a class="btn btn-primary btn-sm" href="#">Logout</a> */}
              <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#myModal"
         onClick={handleShowLogout}>Logout</button> 
            </div>





            <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Sei sicuro di voler uscire dalla tua area riservata?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseLogout}></button>
            </div>
            <div className="modal-body">
              <input ref={myInputLogout} type="text" />
            </div>
            <div className="modal-footer">
            <button class="btn btn-outline-primary btn-sm" type="button" data-bs-dismiss="modal" onClick={handleCloseLogout}
             >No</button>
               <button class="btn btn-successs btn-sm" type="button" onClick={()=>{
               handleLogout() ;
              window.location.href = "/";
                } }
                 >Si</button>
            </div>
          </div>
        </div>
      </div>
</nav>







  )
}

export default Navbars
