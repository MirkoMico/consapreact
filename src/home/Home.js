import React from 'react'
import icona from 'bootstrap-italia/dist/svg/sprites.svg'
import './Home.css'
import { VideoPlayer } from 'bootstrap-italia/dist/js/bootstrap-italia.bundle.min'
import Carosello from '../componenti/Carosello'


//import './Home.css';

const Home =  ()=>  {
  return (

    <div>
    <nav class="navbar navbar-expand-lg has-megamenu" aria-label="Menu principale">
  <button type="button" aria-label="Mostra o nascondi il menu" class="custom-navbar-toggler" aria-controls="menu" aria-expanded="false" data-bs-toggle="navbarcollapsible" data-bs-target="#navbar-E">
      <span>
        <svg role="img" class="icon"><use href={`${icona}#it-burger`}></use></svg>
      </span>
  </button>
  <div class="navbar-collapsable" id="navbar-E">
    <div class="overlay fade"></div>
    <div class="close-div">
      <button type="button" aria-label="Chiudi il menu" class="btn close-menu">
        <span><svg role="img" class="icon"><use href={`${icona}#it-close-big`}></use></svg></span>
      </button>
    </div>

   


    <div class="menu-wrapper justify-content-lg-between">
      <ul class="navbar-nav">
        <li class="nav-item dropdown megamenu">
          <button type="button" class="nav-link dropdown-toggle px-lg-2 px-xl-3" data-bs-toggle="dropdown" aria-expanded="false" id="megamenu-base-E" data-focus-mouse="false">
              <span>Consap Menù</span><svg role="img" class="icon icon-xs ms-1"><use href={`${icona}#it-expand`}></use></svg>
          </button>
          <div class="dropdown-menu shadow-lg" role="region" aria-labelledby="megamenu-base-E">
            <div class="megamenu pb-5 pt-3 py-lg-0">
              <div class="row">
                <div class="col-12">
                  <div class="it-heading-link-wrapper">
                    <a class="it-heading-link" href="#"><svg role="img" class="icon icon-sm me-2 mb-1">
                      <use href={`${icona}#it-arrow-right-triangle`}></use></svg><span>Esplora la sezione menu</span>
                    </a>
                  </div>
                  <div class="row">
                    <div class="col-12 col-lg-4">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href={`${icona}#it-arrow-right-triangle`}></use></svg>
                              <span>Chi siamo</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item" href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href={`${icona}#it-arrow-right-triangle`}></use></svg>
                              <span>Servizi</span>
                            </a>
                          </li>
                          <li>
                            <a class="list-item dropdown-item " href="#">
                              <svg role="img" class="icon icon-sm me-2"><use href={`${icona}#it-arrow-right-triangle`}></use></svg>
                              <span>Contatti</span>
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
              <a class="btn btn-primary btn-sm" href="/login">Accedi</a>
            </div>
</nav>


{/* carosello */}



<Carosello/>
</div>




   
   

    
  

  )
}

export default Home
