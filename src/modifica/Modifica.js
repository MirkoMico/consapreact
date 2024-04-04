import React, { useState, useEffect, useRef } from 'react'
import Layout from '../componenti/Layout'
import { Link } from 'react-router-dom';
import ServiziGet from '../componenti/ServiziGet';



function Modifica ()  {

  const[richiesta, setRichiesta] = useState([]);
  
   // Numero Ticket
 const [numeroTicket, setNumeroTicket] = useState("");
 /* const handleNumeroTicketChange = (event) => {
   const cleanedValueNumeroTicket = event.target.value.replace(/[^0-9]/g, "");
   setNumeroTicket(cleanedValueNumeroTicket);
 }; */


 // Oggetto
 const [oggetto, setOggetto] = useState("");
 /* const handleOggettoChange = (event) => {
   setOggetto(event.target.value);
 }
 */

 // Applicativo
 //const [applicativo, setApplicativo] = useState([]);
 const [applicativoId, setApplicativoId] = useState("");
 //const handleApplicativoChange = (event) => {
 //  setApplicativoId(event.target.value);
 //};


 // Data Creazione
 const [dataCreazione, setDataCreazione] = useState("");
 const handleDataCreazioneChange = (event) => {
   setDataCreazione(event.target.value);
 }


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


 // Data Stima Fine
 const [dataStimaFine, setDataStimaFine] = useState("");
 const handleDataStimaFineChange = (event) => {
   setDataStimaFine(event.target.value);
 }


 // Commessa Os
 const [commessaOs, setCommessaOs] = useState([]);
 const [commessaOsId, setCommessaOsId] = useState("");
 const handleCommessaOsChange = (event) => {
   setCommessaOsId(event.target.value);
 }


 // Importo
 const [importo, setImporto] = useState("");
 const handleImportoChange = (event) => {
   setImporto(event.target.value);
 }


 // Data Modifica
 const [dataModifica, setDataModifica] = useState("");
 const handleDataModificaChange = (event) => {
   setDataModifica(event.target.value);
 }


 // Utente Modifica
 const [utenteModifica, setUtenteModifica] = useState("");
 const handleUtenteModificaChange = (event) => {
   setUtenteModifica(event.target.value);
 }

 // Utente Inserimento
 const [utenteInserimento, setUtenteInserimento] = useState("");
 //data inserimento
 const [dataInserimento, setDataInserimento] = useState("");


 //blocco bottone modifica
 const [bloccoModifica, setBloccoModifica] = useState(false);
 useEffect(() => {
   if(dataModifica && utenteModifica) {  //se i campi utenete mod e data mod hanno valore 
     setBloccoModifica(true);
 }else {
     setBloccoModifica(false);
 }
 }, [dataModifica, utenteModifica]);
 

    

    useEffect(() => {
        // Recupera l'ID della richiesta dal localStorage
        const richiestaId = localStorage.getItem('richiesta_id');
      
        // Se non è presente un ID nel localStorage, non fare nulla
        if (!richiestaId) return;
      
        // Effettua una richiesta GET al server per recuperare la richiesta con l'ID specificato
        fetch(`http://localhost:8080/richiesta/${richiestaId}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Errore durante il recupero della richiesta');
            }
            return response.json();
          })
          .then(data => {
            // Imposta lo stato con i dati della richiesta ottenuti dal server
            setRichiesta(data);
            console.log(data); // Stampa i dati acquisiti dal server


            setNumeroTicket(data.numeroTicket);
            setOggetto(data.oggetto);
            setApplicativoId(data.applicativo.applicativoId);
            setDataCreazione(data.dataCreazione);
            setImporto(data.importo);
            setStatoRichiestaConsapId(data.statoRichiestaConsap.statoRichiestaConsapId);
            setStatoApprovazioneConsapId(data.statoApprovazioneConsap.statoApprovazioneConsapId);
            setStatoRichiestaOsId(data.statoRichiestaOs.statoRichiestaOsId);
            setStatoApprovazioneOsId(data.statoApprovazioneOs.statoApprovazioneOsId);
            setCommessaOsId(data.commessaOs.commessaOsId);
            setDataStimaFine(data.dataStimaFine);
           // setDataModifica(data.dataModifica);
           // setUtenteModifica(data.utenteModifica);
            setUtenteInserimento(data.utenteInserimento);
            setDataInserimento(data.dataInserimento);
            console.log(data +"dati riportati");
          })
          .catch(error => {
            console.error('Errore durante il recupero della richiesta:', error);
          });
      
          Promise.all([
            
            fetch(`http://localhost:8080/statoRichiestaConsap`),
            fetch(`http://localhost:8080/statoApprovazioneConsap`),
            fetch(`http://localhost:8080/statoRichiestaOs`),
            fetch(`http://localhost:8080/statoApprovazioneOs`),
            fetch(`http://localhost:8080/commessaOs`)
          ])
            .then(responses => Promise.all(responses.map(response => {
              if (!response.ok) {
                throw new Error("Errore durante il recupero della richiesta");
              }
              return response.json();
            })))
            .then(data => {
              const [ statoRichiestaConsap, statoApprovazioneConsap, statoRichiestaOs, statoApprovazioneOs, commessaOs] = data;
              
              setStatoRichiestaConsap(statoRichiestaConsap);
              setStatoApprovazioneConsap(statoApprovazioneConsap);
              setStatoRichiestaOs(statoRichiestaOs);
              setStatoApprovazioneOs(statoApprovazioneOs);
              setCommessaOs(commessaOs);
              
              console.log("Stato Richiesta Consap:", statoRichiestaConsap);
              console.log("Stato Approvazione Consap:", statoApprovazioneConsap);
              console.log("Stato Richiesta Os:", statoRichiestaOs);
              console.log("Stato Approvazione Os:", statoApprovazioneOs);
              console.log("Commessa Os:", commessaOs);
            })
            .catch(error => {
              console.error("Errore durante il recupero della richiesta:", error);
            });
        


      }, []);
      


   const [showModifica, setShowModifica] = useState(false);
   const myInputModifica = useRef(null);
 
   const handleCloseModifica = () => setShowModifica(false);
   const handleShowModifica = () => setShowModifica(true);
 
   // Questa funzione viene chiamata ogni volta che lo stato 'show' cambia
   useEffect(() => {
     if (showModifica) {
       myInputModifica.current.focus();
     }
   }, [showModifica]);
 
 
   const [showCancella, setShowCancella] = useState(false);
   const myInputCancella = useRef(null);
 
   const handleCloseCancella = () => setShowCancella(false);
   const handleShowCancella = () => setShowCancella(true);
 
   // Questa funzione viene chiamata ogni volta che lo stato 'show' cambia
   useEffect(() => {
     if (showCancella) {
       myInputCancella.current.focus();
     }
   }, [showCancella]);


   



   // Funzione di gestione dell'invio del modulo

  
    
  

  const salvaRichiesta = () => {
    console.log("ho cliccato");
    // Creazione dell'oggetto con i campi da inviare al server
    const data = {
      numeroTicket,
      oggetto,
      applicativo:{applicativoId},
      dataCreazione:dataCreazione,
      statoRichiestaConsap:{statoRichiestaConsapId},
      statoApprovazioneConsap:{statoApprovazioneConsapId},
      statoRichiestaOs:{statoRichiestaOsId},
      statoApprovazioneOs:{statoApprovazioneOsId},
      dataStimaFine:dataStimaFine,
      commessaOs:{commessaOsId},
      importo:importo,
      dataModifica,
      utenteModifica,
      dataInserimento:dataInserimento,
      utenteInserimento:utenteInserimento
    };
    console.log(JSON.stringify(data) +  "prova1");
    // Effettua la richiesta POST al server


    const richiestaId = localStorage.getItem('richiesta_id');

    fetch(`http://localhost:8080/richiesta/${richiestaId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        
      } ,
      
      body: JSON.stringify(data),
      
    })
      .then((response) => {
        console.log(response + data + "prova");
        if (!response.ok) {
          throw new Error("Errore durante il salvataggio dei dati");
        }
        console.log("Dati salvati con successo" + response);
      })
      .catch((error) => {
        console.error("Errore durante il salvataggio dei dati:", error.message);
      });
 
  
 


    }


    // Metodo per eliminare una richiesta
const deleteRichiesta = () => {
  // Recupera l'ID della richiesta dal localStorage
  const richiestaId = localStorage.getItem("richiesta_id");
  // Se non è presente un ID nel localStorage, non fare nulla
  if (!richiestaId) return;

  // Effettua la richiesta DELETE al server
  fetch(`http://localhost:8080/richiesta/${richiestaId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore durante l'eliminazione della richiesta");
      }
      console.log("Richiesta eliminata con successo");
      // Aggiungi eventuali azioni aggiuntive dopo l'eliminazione
    })
    .catch((error) => {
      console.error("Errore durante l'eliminazione della richiesta:", error);
    });
};




  return (
    <Layout>

    <article className='row'>
    
        <p></p>
    
        <div class="h1">Modifica <span class="badge bg-primary">Richiesta</span></div>
    </article>
     <p></p>
     
    <div className='row'>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="number" class="form-control" id="formGroupExampleInput" 
      readOnly value={numeroTicket}
     /*  onChange={handleNumeroTicketChange} */ />
    </div>
    </div>
    
    <div className='col-8'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput"
       readOnly value={oggetto}
     /*   onChange={handleOggettoChange} *//>
    </div>
    </div>
    </div>
    
    
    <p></p>
    
    
    <div className='row'>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly 
      value={richiesta? richiesta.applicativo?.descApplicativo : ''}
       /* onChange={handleApplicativoChange}/>  *//>
    </div>
    </div>
    
    <div className='col-4'>
  <div className="form-group">
    <label htmlFor="dateStandard"></label>
    <input
      type="date"
      id="dateStandard"
      name="dateStandard"
      readOnly
      //onChange={handleDataCreazioneChange}
      value={dataCreazione}
     
    />
  </div>
</div>

    
    <div className='col-4'>
            <div class="select-wrapper">
            <label for="defaultSelect"></label>
         <select id="defaultSelect"
     
      onChange={handleStatoRichiestaConsapChange}
      value={statoRichiestaConsapId}>
       <option  value="" disabled selected>Stato Richiesta Consap</option>
  {statoRichiestaConsap.map((statoRichiestaConsap, statoRichiestaConsapId) => (
  <option key={statoRichiestaConsapId} 
  value={statoRichiestaConsap.statoRichiestaConsapId}>
    {statoRichiestaConsap.descStatoRichiestaConsap}</option>
          ))}
    
    </select>
    
    </div>
    </div> 


{/* <div className="form-group col-md-3 shadow select-wrapper">
          <div>Stato Richiesta CONSAP</div>
          <label htmlFor="statoRichiestaConsap"></label>
          <select
            id="statoRichiestaConsap"
            value={statoRichiestaConsapId}
            onChange={handleStatoRichiestaConsapChange}
          >
            <option value="" disabled selected>
              - Seleziona Stato Richiesta CONSAP -
            </option>
            
            {statoRichiestaConsap.map(
              (statoRichiestaConsap, statoRichiestaConsapId) => (
                <option
                  key={statoRichiestaConsapId}
                  value={statoRichiestaConsap.statoRichiestaConsapId}
                >
                  {statoRichiestaConsap.descStatoRichiestaConsap}
                </option>
              )
            )}
          </select>
        </div> */}
    </div>
    
    
    
    
    
    <p></p>
    
    
    
    <div className='row'>
    
    <div className='col-4'>
            <div class="select-wrapper">
            <label for="defaultSelect"></label>
         <select id="defaultSelect"
     
      onChange={handleStatoApprovazioneConsapChange}
      value={statoApprovazioneConsapId}>
       <option  value="" disabled selected>Stato Approvazione Consap</option>
  {statoApprovazioneConsap.map((statoApprovazioneConsap, statoApprovazioneConsapId) => (
  <option key={statoApprovazioneConsapId} 
  value={statoApprovazioneConsap.statoApprovazioneConsapId}>
    {statoApprovazioneConsap.descStatoApprovazioneConsap}</option>
          ))}
    
    </select>
    
    </div>
    </div>
    
    <div className='col-4'>
            <div class="select-wrapper">
            <label for="defaultSelect"></label>
         <select id="defaultSelect"
     
      onChange={handleStatoRichiestaOsChange}
      value={statoRichiestaOsId}>
       <option  value="" disabled selected>Stato Richiesta OS</option>
  {statoRichiestaOs.map((statoRichiestaOs, statoRichiestaOsId) => (
  <option key={statoRichiestaOsId} 
  value={statoRichiestaOs.statoRichiestaOsId}>
    {statoRichiestaOs.descStatoRichiestaOs}</option>
          ))}
    
    </select>
    
    </div>
    </div> 
    
    <div className='col-4'>
            <div class="select-wrapper">
            <label for="defaultSelect"></label>
         <select id="defaultSelect"
     
      onChange={handleStatoApprovazioneOsChange}
      value={statoApprovazioneOsId}>
       <option  value="" disabled selected>Stato Approvazione OS</option>
  {statoApprovazioneOs.map((statoApprovazioneOs, statoApprovazioneOsId) => (
  <option key={statoApprovazioneOsId} 
  value={statoApprovazioneOs.statoApprovazioneOsId}>
    {statoApprovazioneOs.descStatoApprovazioneOs}</option>
          ))}
    
    </select>
    
    </div>
    </div> 
    </div>
    
    
    <p></p>
    
    <div className='row'>

      <p></p>
    
      <div className='col-4'>
  <div className="form-group">
    <label htmlFor="dateStandard"></label>
    <input
      type="date"
      id="dateStandard"
      name="dateStandard"
      onChange={handleDataStimaFineChange}
      value={dataStimaFine}
     
    />
  </div>
</div>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="importo"></label>
      <input type="text" class="form-control" id="importo"
      onChange={handleImportoChange}
       value={importo}/>
    </div>
    </div>
    
    <div className='col-4'>
            <div class="select-wrapper">
            <label for="defaultSelect"></label>
         <select id="defaultSelect"
     
      onChange={handleCommessaOsChange}
      value={commessaOsId}>
       <option  value="" disabled selected>Commessa OS</option>
  {commessaOs.map((commessaOs, commessaOsId) => (
  <option key={commessaOsId} 
  value={commessaOs.commessaOsId}>
    {commessaOs.numeroCommessa}</option>
          ))}
    
    </select>
    
    </div>
    </div> 
    </div>
    
    <p></p>
    
    <div className='row'>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder='Utente Modifica'
      value={utenteModifica}
      onChange={handleUtenteModificaChange}/>

    </div>
    </div>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="date" class="form-control" id="formGroupExampleInput" placeholder='Data Modifica'
      value={dataModifica} onChange={handleDataModificaChange}/>
    </div>
    </div>
    </div>
    
    <p></p>


    <div className='row'>
    <div className='col-3'>

    <>
       <buttonGroup size="lg" className="mb-2"> 
        

         <div class="py-1">
        <div class="btn-example">
          {/* Abilita/disabilita il pulsante in base allo stato di modificaAbilitata */}
          {bloccoModifica ? (
            <Link to="/elenco" style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Modifica
              </button>
            </Link>
          ) : (
            <button type="button" className="btn btn-outline-primary" disabled>
              Modifica
            </button>
          )}
        <button type="button" className="btn btn-outline-success" onClick={()=> window.location.reload()}>
              Ripristina
            </button>
            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#myModal2"
          onClick={handleShowCancella}>Elimina</button>
           {/* <button type="button" class="btn btn-outline-primary" onClick={() => window.location.href = "../elenco"}>Elenco</button> */}
        </div>
        
          
      </div>



        {/* <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#myModal"
         onClick={handleShowModifica}>Modifica</button> */}


         
       </buttonGroup> 
      
    

 

  <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Sei sicuro di voler modificare la richiesta?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModifica}></button>
            </div>
            <div className="modal-body">
              <input ref={myInputModifica} type="text" />
            </div>
            <div className="modal-footer">
            <button class="btn btn-outline-primary btn-sm" type="button" data-bs-dismiss="modal" onClick={handleCloseModifica}
             >Annulla</button>
               <button class="btn btn-primary btn-sm" type="button"onClick={()=>{
              salvaRichiesta();
              window.location.href = "/elenco";
                } } >Salva</button>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="myModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Sei sicuro di voler eliminare la richiesta?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseCancella}></button>
            </div>
            <div className="modal-body">
              <input ref={myInputCancella} type="text" />
            </div>
            <div className="modal-footer">
            <button class="btn btn-outline-primary btn-sm" type="button" data-bs-dismiss="modal" onClick={handleCloseCancella}
             >Annulla</button>
               <button class="btn btn-primary btn-sm" type="button" onClick={() => {
                // Esegui la funzione di eliminazione delle richieste
                 deleteRichiesta();
                // Reindirizza l'utente alla pagina "Elenco"
                window.location.href = "../elenco";
                }} >Elimina</button>
            </div>
          </div>
        </div>
      </div>




      </>
    






      </div>

</div>



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        </Layout>
  )
}

export default Modifica