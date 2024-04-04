import React, { useEffect, useState } from 'react'
import Layout from '../componenti/Layout'
import Filtri from '../componenti/Filtri';
import icona from 'bootstrap-italia/dist/svg/sprites.svg'

function Elenco  ()  {

    const [richiesta, setRichiesta]= useState([]);

    /* useEffect(()=>{
        fetch("http://localhost:8080/richiesta")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setRichiesta(data)
        })
        .catch((error)=>{
            console.error("dati non caricati",error);
        })
   },[]) */

   const [richieste, setRichieste] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);// Current page
    const [pageSize, setPageSize] = useState(2); // Number of items per page
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        // Fetch data from your API endpoint
        async function fetchRichieste() {
            try {
                const response = await fetch(`http://localhost:8080/richiesta/page?page=${currentPage}&size=${pageSize}`);
                if (response.ok) {
                    const data = await response.json();
                    setRichieste(data.content);
                    setTotalPages(data.totalPages);
                } else {
                    console.error('Error fetching data');
                }
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }

        fetchRichieste();
    }, [currentPage, pageSize]);

     // Funzione per gestire il cambio di pagina
     const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
  };



   const prendiId = (id)=>{
    localStorage.setItem("richiesta_id",id)
    console.log(id);
   }






  return (
    
    <Layout>
    

<article  >
<p></p>
<div class="h1" style={{marginLeft:"10px"}}>Elenco <span class="badge bg-primary">Richieste</span></div>
</article>
<p></p>

<Filtri/>
<br></br>

<table class="table" style={{marginLeft:"10px"}}>
  <thead>
    <tr>
     {/*  <th scope="col">#</th> */}
      <th scope="col">Numero Ticket</th>
      <th scope="col">Oggetto</th>
      <th scope="col">Applicatico</th>
      <th>Data Creazione</th>
      <th>Stato Richiesta Consap</th>
      <th>Azione</th>
    </tr>
  </thead>
  <tbody>
   
  {richieste.map((riga) => (
          <tr key={riga.numeroTicket}>
            <td>{riga.numeroTicket}</td>
            <td>{riga.oggetto}</td>
            <td>{riga.applicativo?.descApplicativo}</td>
            <td>{riga.dataCreazione}</td>
            <td>{riga.statoRichiestaConsap?.descStatoRichiestaConsap}</td>
            <td><div class="btn-group">
  <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Gestisci Richiesta
    <svg class="icon-expand icon icon-sm icon-light"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use></svg>
  </button>
  <div class="dropdown-menu">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="dropdown-item list-item" href="/visualizza" onClick={()=>prendiId(riga.id)}><span>Visualizza</span></a></li>
        <li><a class="dropdown-item list-item" href="/modifica" onClick={()=>prendiId(riga.id)}><span>Modifica</span></a></li>
        
      </ul>
    </div>

  </div>
</div></td>
          </tr>
        ))}
      </tbody>
</table>



<nav class="pagination-wrapper justify-content-center" aria-label="Navigazione centrata">
  <ul class="pagination">
    <li class={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
      <a class="page-link" href="#"   tabindex="-1"  aria-hidden="true" onClick={() => handlePageChange(currentPage - 1)}>
        <svg class="icon icon-primary"><use href={`${icona}#it-chevron-left`}></use></svg>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
    </li>

    <li class="page-item"><a class="page-link" href="#" onClick={() => setCurrentPage(0)} 
    aria-current={currentPage === 0 ? 'page' : null}>Prima</a></li>

<li class="page-item"><span class="page-link">...</span></li>
    

     {Array.from({ length: totalPages - 2 }, (_, index) => (
      <li key={index +1} class={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
        <a class="page-link" href="#" onClick={() => setCurrentPage(index + 1)} 
        aria-current={currentPage === index + 1 ? 'page' : null}>{index + 2}</a>
      </li>
    ))} 



<li class="page-item"><span class="page-link">...</span></li>

<li class="page-item"><a class="page-link" href="#" onClick={() => setCurrentPage(totalPages - 1)}
aria-current={currentPage === totalPages - 1 ? 'page' : null}>
      Ultima</a></li>


    <li class={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
      <a class="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>
        <span class="visually-hidden">Pagina successiva</span>
        <svg class="icon icon-primary"><use href={`${icona}#it-chevron-right`}></use></svg>
      </a>
    </li>

    


  </ul>

  <div class="dropdown">
    <button class="btn btn-dropdown dropdown-toggle" type="button" id="pagerChanger" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Salta alla pagina">
    {pageSize}/pagina
    <svg class="icon icon-primary icon-sm"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use></svg>
    </button>
    <div class="dropdown-menu" aria-labelledby="pagerChanger">
      <div class="link-list-wrapper">
        <ul class="link-list">
           <li><a class="list-item active" href="#" aria-current="page" onClick={() => setPageSize(2)}><span>2/pagina</span></a></li>
           <li><a class="dropdown-item list-item" href="#" onClick={() => setPageSize(5)}><span>5/pagina</span></a></li>
           <li><a class="dropdown-item list-item" href="#" onClick={() => setPageSize(10)}><span>10/pagina</span></a></li>
           <li><a class="dropdown-item list-item" href="#" onClick={() => setPageSize(15)}><span>15/pagina</span></a></li>
         
        </ul>
      </div>
    </div>
  </div>


</nav>
      
    </Layout>
  )
}

export default Elenco
