import React, { useEffect, useState } from 'react'
import Layout from '../componenti/Layout'
import Filtri from '../componenti/Filtri';
import Spinner from '../componenti/Spinner';
import icona from 'bootstrap-italia/dist/svg/sprites.svg'
import Page from '../componenti/Page';
import "../home/Home.css";

function Elenco  ()  {

 
     // Numero Ticket
 const [numeroTicket, setNumeroTicket] = useState("");
 const handleNumeroTicketChange = (event) => {
   const cleanedValueNumeroTicket = event.target.value.replace(/[^0-9]/g, "");
   setNumeroTicket(cleanedValueNumeroTicket);
 };
 // Oggetto
 const [oggetto, setOggetto] = useState("");
 const handleOggettoChange = (event) => {
   setOggetto(event.target.value);
 }


 // Applicativo
 const [applicativo, setApplicativo] = useState([]);
 const [applicativoId, setApplicativoId] = useState("");
 const handleApplicativoChange = (event) => {
   setApplicativoId(event.target.value);
 };

 
 // Stato Richiesta Consap
 const [statoRichiestaConsap, setStatoRichiestaConsap] = useState([]);
 const [statoRichiestaConsapId, setStatoRichiestaConsapId] = useState("");
 const handleStatoRichiestaConsapChange = (event) => {
   setStatoRichiestaConsapId(event.target.value);
 }

 // Stato Approvazione Consap
 const [statoApprovazioneConsap, setStatoApprovazioneConsap] = useState([]);
 const [statoApprovazioneConsapId, setStatoApprovazioneConsapId] = useState("");
 const handleStatoApprovazioneConsapChange = (event) => {
   setStatoApprovazioneConsapId(event.target.value);
 }


 // Stato Richiesta Os
 const [statoRichiestaOs, setStatoRichiestaOs] = useState([]);
 const [statoRichiestaOsId, setStatoRichiestaOsId] = useState("");
 const handleStatoRichiestaOsChange = (event) => {
   setStatoRichiestaOsId(event.target.value);
 }


 // Stato Approvazione Os
 const [statoApprovazioneOs, setStatoApprovazioneOs] = useState([]);
 const [statoApprovazioneOsId, setStatoApprovazioneOsId] = useState("");
 const handleStatoApprovazioneOsChange = (event) => {
   setStatoApprovazioneOsId(event.target.value);
 }
 



   const [richiesta, setRichiesta] = useState([]);
   const [filteredRichiesta, setFilteredRichiesta] = useState([]); // Stato per l'elenco delle richieste filtrate

 



  const [richieste, setRichieste] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);// Current page
    const [pageSize, setPageSize] = useState(10); // Number of items per page
    const [totalPages, setTotalPages] = useState(4);

  useEffect(() => {
    const fetchAndPopulateData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          // Gestisci il caso in cui il token non sia presente nel localStorage
          console.error('Token non trovato nel localStorage');
          return;
        }

      


        const urls = [
          `http://localhost:8080/richiesta/${currentPage}-${pageSize}`,
        ];
        
  
        const requests = urls.map(async (url) => {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}` // Include il token nell'header Authorization
            },
            body: JSON.stringify({
              erroreDTO: null,
              filtri: {
                "id": null,
                "numeroTicket": null,
                "applicativoId": null,
                "oggetto": null,
                "statoRichiestaConsapId": null,
                "dataCreazione": null,
                "statoApprovazioneConsapId": null,
                "statoApprovazioneOsId": null,
                "statoRichiestaOsId": null,
                "dataStimaFinale": null,
                "importo": null,
                "commessaOsId": null
              },
              elenco: null,
            }),
          });
  
          if (response.ok) {
          const data = await response.json();
          const totalItems = data.length; // Assumi che la risposta contenga un array di elementi
        const totalPages = Math.ceil(totalItems / pageSize);
        setTotalPages(totalPages);
        console.log("Total Pages:", totalPages);

          return data.elenco;
       } });
  
        const richiestaData = await Promise.all(requests);
        setRichiesta(richiestaData);
        
        console.log("RichiestaData:", richiestaData);
        console.log("Richiesta:", richiesta);
      } catch (error) {
        console.error("Errore durante il recupero dei dati delle richieste:", error);
      }
    };
  
    fetchAndPopulateData();
  }, [currentPage, pageSize]);
  
 // Funzione per gestire il cambio di pagina
 const handlePageChange = (newPage) => {
  
  setCurrentPage(newPage);
 }


 


   const prendiId = (id)=>{
    localStorage.setItem("richiesta_id",id)
    console.log(id);
   }













   //inizio filtro
   useEffect(() => {
    const fetchAndPopulateDataComboBox = async () => {
      try {
        const token = localStorage.getItem('token');
  
        if (!token) {
          // Gestisci il caso in cui il token non sia presente nel localStorage
          console.error('Token non trovato nel localStorage');
          return;
        }
        const urls = [
          "http://localhost:8080/applicativo",
          "http://localhost:8080/statoRichiestaConsap",
          "http://localhost:8080/approvazioneConsap",
          "http://localhost:8080/statoRichiestaOs",
          "http://localhost:8080/statoApprovazioneOs",
          "http://localhost:8080/commessaOs",
        ];
  
        const requests = urls.map(async (url) => {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}` // Include il token nell'header Authorization
            },
            body: JSON.stringify({
              erroreDTO: null,
              filtri: {
                id: null,
                descrizione: null,
              },
              elenco: null,
            }),
          });
          const data = await response.json();
          return data.elenco;
        });
  
        const [
          applicativoData,
          statoRichiestaConsapData,
          statoApprovazioneConsapData,
          statoRichiestaOsData,
          statoApprovazioneOsData,
         
        ] = await Promise.all(requests);
  
        setApplicativo(applicativoData);
        setStatoRichiestaConsap(statoRichiestaConsapData);
        setStatoApprovazioneConsap(statoApprovazioneConsapData);
        setStatoRichiestaOs(statoRichiestaOsData);
        setStatoApprovazioneOs(statoApprovazioneOsData);
       
        console.log("Applicativo:", applicativoData);
        console.log("Stato Richiesta Consap:", statoRichiestaConsapData);
        console.log("Stato Approvazione Consap:", statoApprovazioneConsapData);
        console.log("Stato Richiesta Os:", statoRichiestaOsData);
        console.log("Stato Approvazione Os:", statoApprovazioneOsData);
       
      } catch (error) {
        console.error("Errore durante il recupero dei dati:", error);
      }
    };
  
    fetchAndPopulateDataComboBox();
  }, []);

  const [isButtonActive, setIsButtonActive] = useState(false);
  useEffect(() => {
    const isNumeroTicketValid = numeroTicket.length === 5;
    const isOggettoSelected = oggetto !== '';
    const isApplicativoSelected = applicativoId !== '';
    const isStatoRichiestaConsapSelected = statoRichiestaConsapId !== '';
    const isStatoRichiestaOsSelected = statoRichiestaOsId !== '';
    const isStatoApprovazioneConsapSelected = statoApprovazioneConsapId !== '';
    const isStatoApprovazioneOsSelected = statoApprovazioneOsId !== '';

    const coupleOggettiApplicativi = isOggettoSelected && isApplicativoSelected;
    const coupleStatoRichiestaConsapStatoRichiestaOs = isStatoRichiestaConsapSelected && isStatoRichiestaOsSelected;
    const coupleStatoApprovazioneConsapStatoApprovazioneOs = isStatoApprovazioneConsapSelected && isStatoApprovazioneOsSelected;
  
    // Conta il numero di campi selezionati escludendo numeroTicket
    const selectedFieldsCount =
      (isOggettoSelected ? 1 : 0) +
      (isApplicativoSelected ? 1 : 0) +
      (isStatoRichiestaConsapSelected ? 1 : 0) +
      (isStatoRichiestaOsSelected ? 1 : 0) +
      (isStatoApprovazioneConsapSelected ? 1 : 0) +
      (isStatoApprovazioneOsSelected ? 1 : 0);

      
  
    // Controlla se il numero di campi selezionati escludendo numeroTicket è pari
    const isEvenSelectedFieldsCount = selectedFieldsCount % 2 === 0 && (coupleOggettiApplicativi || 
      coupleOggettiApplicativi && coupleStatoApprovazioneConsapStatoApprovazioneOs || coupleOggettiApplicativi && 
      coupleStatoApprovazioneConsapStatoApprovazioneOs && coupleStatoRichiestaConsapStatoRichiestaOs ||
       coupleStatoRichiestaConsapStatoRichiestaOs || coupleStatoApprovazioneConsapStatoApprovazioneOs ||
       coupleStatoRichiestaConsapStatoRichiestaOs && coupleStatoApprovazioneConsapStatoApprovazioneOs);
  
    // Aggiungi il controllo sull'attivazione del pulsante
    setIsButtonActive(
      isNumeroTicketValid ||
       (isOggettoSelected && isApplicativoSelected && isEvenSelectedFieldsCount) ||
      (isStatoRichiestaConsapSelected && isStatoRichiestaOsSelected && isEvenSelectedFieldsCount) ||
      (isStatoApprovazioneConsapSelected && isStatoApprovazioneOsSelected && isEvenSelectedFieldsCount) || 
      (isEvenSelectedFieldsCount && (isOggettoSelected || isApplicativoSelected || isStatoRichiestaConsapSelected ||
         isStatoRichiestaOsSelected || isStatoApprovazioneConsapSelected || isStatoApprovazioneOsSelected)) 
         // Il pulsante è attivo solo se il numero di campi selezionati escludendo numeroTicket è pari
    );
  }, [numeroTicket, oggetto, applicativoId, statoRichiestaConsapId, statoRichiestaOsId, statoApprovazioneConsapId, statoApprovazioneOsId]);
  


    




   const fetchFiltro = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        // Gestisci il caso in cui il token non sia presente nel localStorage
        console.error('Token non trovato nel localStorage');
        return;
      }

    


      const urls = [
        `http://localhost:8080/richiesta/${currentPage}-${pageSize}`,
      ];
      
        //const numeroTicketValue=88888
      const requests = urls.map(async (url) => {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // Include il token nell'header Authorization
          },
          body: JSON.stringify({
            erroreDTO: null,
            filtri: {
              "id": null,
              "numeroTicket": numeroTicket,
              "applicativo": {
                "applicativoId": applicativoId
              },
              "oggetto": oggetto,
              "statoRichiestaConsap":  {
                "statoRichiestaConsapId": statoRichiestaConsapId},
              "dataCreazione": null,
              "statoApprovazioneConsap":{
                "statoApprovazioneConsapId": statoApprovazioneConsapId
              } ,
              "statoApprovazioneOs": {
                "statoApprovazioneOsId": statoApprovazioneOsId},
              "statoRichiestaOs": {
                "statoRichiestaOsId": statoRichiestaOsId},
              "dataStimaFinale": null,
              "importo": null,
              "commessaOsId": null
            },
            elenco: null,
          }),
        });

        if (response.ok) {
        const data = await response.json();
        const totalItems = data.length; // Assumi che la risposta contenga un array di elementi
      const totalPages = Math.ceil(totalItems / pageSize);
      setTotalPages(totalPages);
      console.log("Total Pages:", totalPages);
      console.log(statoRichiestaConsapId + "stato");

        return data.elenco;
     } });

      const richiestaData = await Promise.all(requests);
      setRichiesta(richiestaData);
      
      console.log("RichiestaData:", richiestaData);
      console.log("Richiesta:", richiesta);
    } catch (error) {
      console.error("Errore durante il recupero dei dati delle richieste:", error);
    }
  }; 
/* 
  fetchFiltro();
}, [currentPage, pageSize]);
 */




  return (
    
    <Layout>
      <Spinner>


        
       
    

<article  >
<p></p>
<div class="h1" style={{marginLeft:"10px"}}>Elenco <span class="badge bg-primary">Richieste</span></div>
</article>
<p></p>

{/*  <Filtri />  */}


<div className="dropdown text-center">
      <a className="btn btn-dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Mostra Filtri
        <svg className="icon-expand icon icon-sm icon-primary"><use href={`${icona}#it-expand`}></use></svg>
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <div className="link-list-wrapper">
          <ul className="link-list">
            <div className="d-flex">
              <div className="dropdown-item list-item">
                <span>Numero Ticket:</span>
                <input type="text" class="form-control" id="formGroupExampleInput"
   placeholder='Numero Ticket' maxLength="5"
    value={numeroTicket} onChange={handleNumeroTicketChange}   />
              </div>
            </div>
            <div className="d-flex">
              <div className="dropdown-item list-item">
                <span>Oggetto:</span>
                <input type="text" class="form-control" id="formGroupExampleInput"
   placeholder='Oggetto'
     value={oggetto} onChange={handleOggettoChange}  />
              </div>

              <div className="dropdown-item list-item">
                 <span>Applicativo:</span> 
                <select className="form-select" id="applicativoId" 
   value={applicativoId} onChange={handleApplicativoChange} >
    <option value="" disabled selected>- Seleziona Applicativo -</option>
    {applicativo.map((applicativo,applicativoId) => (
      <option key={applicativoId} value={applicativo.applicativoId}>
        {applicativo.descApplicativo}</option>
        ))}
  </select>
              </div>
            </div>

           


            <div className="d-flex">
              <div className="dropdown-item list-item">
                 <span>Stato Richiesta Consap:</span> 
                <select className="form-select" 
                id="statoRichiestaConsap" value={statoRichiestaConsapId} onChange={handleStatoRichiestaConsapChange}>
         <option value="" disabled selected>- Seleziona Stato Richiesta Consap -</option>
           {statoRichiestaConsap.map((statoRichiestaConsap, statoRichiestaConsapId) => (
             <option
               key={statoRichiestaConsapId}
               value={statoRichiestaConsap.statoRichiestaConsapId}
             >
               {statoRichiestaConsap.descStatoRichiestaConsap}
             </option>
           ))}
         </select>
              </div>
              <div className="dropdown-item list-item">
                 <span>Stato Richiesta Os:</span> 
                <select className="form-select" id="statoRichiestaOSId"
   placeholder='Stato Richiesta OS'value={statoRichiestaOsId} onChange={handleStatoRichiestaOsChange}>
    <option value="" disabled selected>- Seleziona Stato Richiesta OS -</option>
   {statoRichiestaOs.map((statoRichiestaOs, statoRichiestaOsId) => (
     <option
       key={statoRichiestaOsId}
       value={statoRichiestaOs.statoRichiestaOsId}
     >
       {statoRichiestaOs.descStatoRichiestaOs}
     </option>
   ))}
  </select>
              </div>
            </div>

            <div className="d-flex">
              <div className="dropdown-item list-item">
                <span>Stato Approvazione Consap:</span> 
                <select className="form-select"  id="statoApprovazioneConsapId"
   placeholder='Stato Approvazione Consap'value={statoApprovazioneConsapId} onChange={handleStatoApprovazioneConsapChange}>
    <option value="" disabled selected>- Seleziona Stato Approvazione Consap -</option>
   {statoApprovazioneConsap.map((statoApprovazioneConsap, statoApprovazioneConsapId) => (
     <option
       key={statoApprovazioneConsapId}
       value={statoApprovazioneConsap.statoApprovazioneConsapId}
     >
       {statoApprovazioneConsap.descStatoApprovazioneConsap}
     </option>
   ))}
  </select>
              </div>

              <div className="dropdown-item list-item">
                 <span>Stato Approvazione Os:</span> 
                <select className="form-select"  id="statoApprovazioneOsId"
   placeholder='Stato Approvazione OS'value={statoApprovazioneOsId} onChange={handleStatoApprovazioneOsChange}>
    <option value="" disabled selected>- Seleziona Stato Approvazione OS -</option>
   {statoApprovazioneOs.map((statoApprovazioneOs, statoApprovazioneOsId) => (
     <option
       key={statoApprovazioneOsId}
       value={statoApprovazioneOs.statoApprovazioneOsId}
     >
       {statoApprovazioneOs.descStatoApprovazioneOs}
     </option>
   ))}
  </select>
              </div>
            </div>
            <div className="text-center mt-3">
        <button className="btn btn-primary"   onClick={fetchFiltro}
         disabled={!isButtonActive} >Filtra</button>
      </div>

<div className="text-center mt-3">
        <button className="btn btn-primary"   onClick={()=> window.location.reload()}
        >Repristina Filtra</button>
      </div>

          </ul>
        </div>
      </div>

    </div> 

   {/*  fine filtro
 */}

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
      <th>Stato Approvazione Consap</th>
      <th>Azione</th>
    </tr>
  </thead>
  <tbody>
   
  {richiesta.map((arrayInterno, index) => (
    arrayInterno.map((riga) => (
          <tr key={riga.numeroTicket}>
            <td>{riga.numeroTicket}</td>
            <td>{riga.oggetto}</td>
            <td>{riga.applicativo?.descApplicativo}</td>
            <td>{riga.dataCreazione}</td>
            <td>{riga.statoRichiestaConsap?.descStatoRichiestaConsap}</td>
            <td>{riga.statoApprovazioneConsap?.descStatoApprovazioneConsap}</td>
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
    ))
        ))}
      </tbody>
</table>



<nav class="pagination-wrapper justify-content-center" aria-label="Navigazione centrata">
  <ul class="pagination">
    <li class={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
      <a class="page-link" href="#"   tabindex="-1"  aria-hidden="true" onClick={() => handlePageChange(currentPage - 1)}>
        <svg class="icon icon-primary"><use href={`${icona}#it-chevron-left`}></use></svg>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
    </li>

   
    

    <li class="page-item"><a class="page-link" href="#" onClick={() => setCurrentPage(1)} 
    aria-current={currentPage === 1 ? 'page' : null}>Prima</a></li>

{/* <li class="page-item"><span class="page-link">...</span></li>
    

     {Array.from({ length: totalPages - 2 }, (_, index) => (
      <li key={index +1} class={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
        <a class="page-link" href="#" onClick={() => setCurrentPage(index + 1)} 
        aria-current={currentPage === index + 1 ? 'page' : null}>{index + 2}</a>
      </li>
    ))} 



<li class="page-item"><span class="page-link">...</span></li> */}

<li class="page-item"><span class="page-link">{currentPage}</span></li>

  <li class="page-item"><a class="page-link" href="#" onClick={() => setCurrentPage(4 )}
aria-current={currentPage === totalPages   ? 'page' : null}>
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

     
</Spinner>
      
    </Layout>
  )
}

export default Elenco
