import React, { useState, useEffect, useRef } from 'react'
import Layout from '../componenti/Layout'
import { Link } from 'react-router-dom';
import ServiziGet from '../componenti/ServiziGet';
import Percorso from './Percorso';
import ComboBox from '../componenti/ComboBox';



function Modifica ()  {

  const[richiesta, setRichiesta] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);// Current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  
    // Numero Ticket
 const [numeroTicket, setNumeroTicket] = useState("");



 // Oggetto
 const [oggetto, setOggetto] = useState("");
  const handleOggettoChange = (event) => {
   setOggetto(event.target.value);
 }
 

 // Applicativo
 const [applicativo, setApplicativo] = useState([]);
 const [applicativoId, setApplicativoId] = useState("");
 const handleApplicativoChange = (event, outerIndex, innerIndex) => {

  const { value } = event.target;

  // Copia l'array richiesta
  const updatedRichiesta = [...richiesta];

  // Modifica il valore di commessaOsId per l'elemento specificato
  updatedRichiesta[outerIndex][innerIndex].statoRichiestaConsap.statoRichiestaConsapId = value;

  // Aggiorna lo stato con l'array modificato
  setRichiesta(updatedRichiesta);


 //  setApplicativoId(event.target.value);
 };


 // Data Creazione
 const [dataCreazione, setDataCreazione] = useState("");
 const handleDataCreazioneChange = (event) => {

   setDataCreazione(event.target.value);
 }


 // Stato Richiesta Consap
 const [statoRichiestaConsap, setStatoRichiestaConsap] = useState([]);
 const [statoRichiestaConsapId, setStatoRichiestaConsapId] = useState("");
 const handleStatoRichiestaConsapChange = (event, outerIndex, innerIndex) => {
  const { value } = event.target;

  // Copia l'array richiesta
  const updatedRichiesta = [...richiesta];

  // Modifica il valore di commessaOsId per l'elemento specificato
  updatedRichiesta[outerIndex][innerIndex].statoRichiestaConsap.statoRichiestaConsapId = value;

  // Aggiorna lo stato con l'array modificato
  setRichiesta(updatedRichiesta);
  console.log("nuova stampa"+statoRichiestaConsapId + ' ' + outerIndex + ' ' + innerIndex + handleStatoRichiestaConsapChange);
 }

 // Stato Approvazione Consap
 const [statoApprovazioneConsap, setStatoApprovazioneConsap] = useState([]);
 const [statoApprovazioneConsapId, setStatoApprovazioneConsapId] = useState("");
 const handleStatoApprovazioneConsapChange = (event, outerIndex, innerIndex) => {
  const { value } = event.target;

  // Copia l'array richiesta
  const updatedRichiesta = [...richiesta];

  // Modifica il valore di commessaOsId per l'elemento specificato
  updatedRichiesta[outerIndex][innerIndex].statoApprovazioneConsap.statoApprovazioneConsapId = value;

  // Aggiorna lo stato con l'array modificato
  setRichiesta(updatedRichiesta);
  console.log(statoApprovazioneConsapId);
 }


 // Stato Richiesta Os
 const [statoRichiestaOs, setStatoRichiestaOs] = useState([]);
 const [statoRichiestaOsId, setStatoRichiestaOsId] = useState("");
 const handleStatoRichiestaOsChange = (event, outerIndex, innerIndex) => {
  const { value } = event.target;

  // Copia l'array richiesta
  const updatedRichiesta = [...richiesta];

  // Modifica il valore di commessaOsId per l'elemento specificato
  updatedRichiesta[outerIndex][innerIndex].statoRichiestaOs.statoRichiestaOsId = value;

  // Aggiorna lo stato con l'array modificato
  setRichiesta(updatedRichiesta);
   
 }


 // Stato Approvazione Os
 const [statoApprovazioneOs, setStatoApprovazioneOs] = useState([]);
 const [statoApprovazioneOsId, setStatoApprovazioneOsId] = useState("");
 const handleStatoApprovazioneOsChange = (event ,outerIndex, innerIndex) => {
  const { value } = event.target;

  // Copia l'array richiesta
  const updatedRichiesta = [...richiesta];

 
  updatedRichiesta[outerIndex][innerIndex].statoApprovazioneOs.statoApprovazioneOsId = value;

  // Aggiorna lo stato con l'array modificato
  setRichiesta(updatedRichiesta);
};
   



 // Data Stima Fine
const [dataStimaFine, setDataStimaFine] = useState("");

const handleDataStimaFineChange = (event, outerIndex, innerIndex) => {
  const { value } = event.target;

  // Copia l'array richiesta
  const updatedRichiesta = [...richiesta];

  // Modifica il valore di dataStimaFine per l'elemento specificato
  updatedRichiesta[outerIndex][innerIndex].dataStimaFinale = value;

  // Aggiorna lo stato con l'array modificato
  setRichiesta(updatedRichiesta);
};


 // Commessa Os
 const [commessaOs, setCommessaOs] = useState([]);
 const [commessaOsId, setCommessaOsId] = useState("");
/*  const handleCommessaOsChange = (event) => {
   setCommessaOsId(event.target.value);
 } */
 const handleCommessaOsChange = (event, outerIndex, innerIndex) => {
  const { value } = event.target;

  // Copia l'array richiesta
  const updatedRichiesta = [...richiesta];

  // Modifica il valore di commessaOsId per l'elemento specificato
  updatedRichiesta[outerIndex][innerIndex].commessaOs.commessaOsId = value;

  // Aggiorna lo stato con l'array modificato
  setRichiesta(updatedRichiesta);
};



 
 const [importo, setImporto] = useState("");
 const handleImportoChange = (event, index, innerIndex) => {
  const { value } = event.target;

  // Copia l'array richiesta
  const updatedRichiesta = [...richiesta];

  // Modifica il valore di importo per l'elemento specificato
  updatedRichiesta[index][innerIndex].importo = value;

  // Aggiorna lo stato con l'array modificato
  setRichiesta(updatedRichiesta);
};


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
                  "id": richiestaId,
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
            const data = await response.json();
             // Parsa l'importo come stringa anziché numero
             const richiestaConImportoStringa = data.elenco.map(item => ({
              ...item,
              importo: item.importo.toString()
          }));
          return richiestaConImportoStringa;
      });



/* 
            return data.elenco;
          }); */
    
          const richiesta = await Promise.all(requests);
          setRichiesta(richiesta);
          console.log("Richiesta:", richiesta);
          //console.log("Richiesta:", richiesta);
        } catch (error) {
          console.error("Errore durante il recupero dei dati delle richieste:", error);
        }
        
      };
    
      fetchAndPopulateData();
    }, []); 

    





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
            commessaOsData,
          
          ] = await Promise.all(requests);
    
          setApplicativo(applicativoData);
          setStatoRichiestaConsap(statoRichiestaConsapData);
          setStatoApprovazioneConsap(statoApprovazioneConsapData);
          setStatoRichiestaOs(statoRichiestaOsData);
          setStatoApprovazioneOs(statoApprovazioneOsData);
          setCommessaOs(commessaOsData);
          
          console.log("Applicativo:", applicativoData);
          console.log("Stato Richiesta Consap:", statoRichiestaConsapData);
          console.log("Stato Approvazione Consap:", statoApprovazioneConsapData);
          console.log("Stato Richiesta Os:", statoRichiestaOsData);
          console.log("Stato Approvazione Os:", statoApprovazioneOsData);
          console.log("Commessa Os:", commessaOsData);
        } catch (error) {
          console.error("Errore durante il recupero dei dati:", error);
        }
      };
    
      fetchAndPopulateDataComboBox();
    }, []);
 




    
    
    console.log("Stato Richiesta Consap mappato:", statoRichiestaConsap[0]);
    
      


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


   




  
    
  

   const salvaRichiesta = async () => {
     // Ottieni i dati della richiesta dalla variabile di stato
     const richiestaId = localStorage.getItem('richiesta_id');
     
   

     const richiestaData = richiesta[0][0]; //per snidare l array di array
    // console.log(JSON.stringify(richiestaData) + "richiestaData ");

    try {

      const token = localStorage.getItem('token');

      if (!token) {
        // Gestisci il caso in cui il token non sia presente nel localStorage
        console.error('Token non trovato nel localStorage');
        return;
      }



      // Converti i valori stringa in numeri
       const parsedNumeroTicket = parseInt(richiestaData.numeroTicket);
      console.log(parsedNumeroTicket + "numero ticket");
      const parsedApplicativoId = parseInt(richiestaData.applicativo.applicativoId);
      console.log(parsedApplicativoId + "applicativo");
      const parsedStatoRichiestaConsapId = parseInt(richiestaData.statoRichiestaConsap.statoRichiestaConsapId);
      console.log(parsedStatoRichiestaConsapId + "stato richiesta consap");
      const parsedStatoApprovazioneConsapId = parseInt(richiestaData.statoApprovazioneConsap.statoApprovazioneConsapId);
      const parsedStatoRichiestaOsId = parseInt(richiestaData.statoRichiestaOs.statoRichiestaOsId);
      const parsedStatoApprovazioneOsId = parseInt(richiestaData.statoApprovazioneOs.statoApprovazioneOsId);
      const parsedCommessaOsId = parseInt(richiestaData.commessaOs.commessaOsId);
      const parsedImporto = richiestaData.importo;
      const oggettoMd = richiestaData.oggetto;
      const dataCreazioneMd = richiestaData.dataCreazione;
      const dataStimaFineMd = richiestaData.dataStimaFinale;

       
      
  
      const data = {
        erroreDTO: null,
        filtri: {
          id: richiestaId,
        },
        elenco:  [
            {
                numeroTicket: parsedNumeroTicket,
                applicativo: {
                    applicativoId: parsedApplicativoId
                },
                oggetto: oggettoMd,
                statoRichiestaConsap: {
                    statoRichiestaConsapId: parsedStatoRichiestaConsapId
                },
                dataCreazione: dataCreazioneMd,
                statoApprovazioneConsap: {
                    statoApprovazioneConsapId: parsedStatoApprovazioneConsapId
                },
                statoApprovazioneOs: {
                    statoApprovazioneOsId: parsedStatoApprovazioneOsId
                },
                statoRichiestaOs: {
                    statoRichiestaOsId: parsedStatoRichiestaOsId
                },
                dataStimaFinale: dataStimaFineMd,
                importo: parsedImporto, 
                commessaOs: {
                    commessaOsId: parsedCommessaOsId
                } 
            }
        ]
      };
  
      console.log("STAMPAJSONO  " + JSON.stringify(data));
  
      const response = await fetch("http://localhost:8080/richiesta/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Include il token nell'header Authorization
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Errore durante il salvataggio dei dati");
      }
  
      const responseData = await response.json();
      console.log("Dati salvati con successo:", JSON.stringify(responseData));
      // Aggiungi eventuali azioni aggiuntive dopo il salvataggio dei dati
    } catch (error) {
      console.error("Errore durante il salvataggio dei dati:", error);
    }
  };
  
  

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
      <Percorso/>

    <article className='row'>
    
        <p></p>
    
        <div class="h1">Modifica <span class="badge bg-primary">Richiesta</span></div>
    </article>
     <p></p>

      {richiesta.map((arrayInterno, outerIndex) => (
     arrayInterno.map((item, innerIndex) => ( 
      <div key={outerIndex}>

<div  className='row'>

<div className="form-group col-md-4 shadow select-wrapper">
            <div class="form-group">
      <label for="formGroupExampleInput">Numero Ticket</label>
       <input type="text" class="form-control" id="formGroupExampleInput" readOnly 
       value= {item.numeroTicket} />
    </div>
    </div>

       <div className="form-group col-md-8 shadow select-wrapper">
            <div class="form-group">
      <label for="formGroupExampleInput">Oggetto</label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly
       value={item.oggetto}/>
    </div>
    </div>
    </div>
    
    
    
    <p></p>

    <div className='row'>
    
     <div className="form-group col-md-4 shadow select-wrapper">
            <div class="form-group">
      <label for="formGroupExampleInput">Applicativo</label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly 
      value={item.applicativo ? item.applicativo.descApplicativo : ''}/>
    </div>
    </div> 



    
    <div className="form-group col-md-4 shadow select-wrapper">
    <div class="form-group">
        <label class="active" for="dateStandard">Data Creazione</label>
        <input type="date" id="dateStandard" name="dateStandard" readOnly value={item.dataCreazione}/>
    </div>
    </div>
    
    

 

{/*     <div className="form-group col-md-4 shadow select-wrapper">
  <label>Stato Richiesta CONSAP</label>
  <select
    id="statoRichiestaConsap"
    onChange={(event) => handleStatoRichiestaConsapChange(event, outerIndex, innerIndex)}
    value={item.statoRichiestaConsap.statoRichiestaConsapId} // Imposta il valore della combo-box con l'ID ereditato
  >
    <option value="" disabled>
      - Seleziona Stato Richiesta CONSAP -
    </option>

    
 
     {statoRichiestaConsap.map((stato, index) => (
  <option
    key={index}
    value={stato.statoRichiestaConsapId} 
  >
    {stato.descStatoRichiestaConsap} 
  </option>
))}  

  </select>
</div>   */}

<div className="form-group col-md-4 shadow select-wrapper">
  <label>Stato Richiesta CONSAP</label>
  <select
    id="statoRichiestaConsap"
    onChange={(event) => handleStatoRichiestaConsapChange(event, outerIndex, innerIndex)}
    value={item.statoRichiestaConsap.statoRichiestaConsapId} // Imposta il valore della combo-box con l'ID ereditato
  >
    <option value="" disabled>
      - Seleziona Stato Richiesta CONSAP -
    </option>
    
    {/* Filtra e mappa gli elementi con ID maggiore di item.statoRichiestaConsap.statoRichiestaConsapId */}
   {/*  {statoRichiestaConsap
      .filter((stato) => stato.statoRichiestaConsapId > item.statoRichiestaConsap.statoRichiestaConsapId +1)
      .map((stato, index) => (
        <option
          key={index}
          value={stato.statoRichiestaConsapId} 
        >
          {stato.descStatoRichiestaConsap} 
        </option>
      ))
    }   */}

   
   
       {/* Filtra e mappa solo l'elemento con lo stesso ID e successivo */}
    {statoRichiestaConsap.slice(outerIndex, outerIndex + 2)
      .map((stato, index) => (
        <option
          key={index}
          value={stato.statoRichiestaConsapId} 
        >
          {stato.descStatoRichiestaConsap} 
        </option>
      ))
    }  
  </select>
</div>







    </div>
      
    <p></p>

    <div className='row'>
    
     <div className="form-group col-md-4 shadow select-wrapper">
                 <label>Stato Approvazione CONSAP</label>
                 <label htmlFor="statoApprovazioneConsap"></label>
                 <select
                   id="statoApprovazioneConsap"
                   onChange={(event) => handleStatoApprovazioneConsapChange(event, outerIndex, innerIndex)}
                   value={item.statoApprovazioneConsap.statoApprovazioneConsapId} // Imposta il valore della combo-box con l'ID ereditato
                 >
                   <option value="" disabled>
                     - Seleziona Stato Approvazione CONSAP -
                   </option>
                   {statoApprovazioneConsap.map((stato, index) => (
                     <option
                       key={index}
                       value={stato.statoApprovazioneConsapId}
                     
                     >
                       {stato.descStatoApprovazioneConsap}
                     </option>
                   ))}
                 </select>
               </div> 



    
               <div className="form-group col-md-4 shadow select-wrapper">
                 <label>Stato Richiesta OS</label>
                 <label htmlFor="statoRichiestaOs"></label>
                 <select
                   id="statoRichiestaOs"
                   onChange={(event) => handleStatoRichiestaOsChange(event, outerIndex, innerIndex)}
                   value={item.statoRichiestaOs.statoRichiestaOsId} // Imposta il valore della combo-box con l'ID ereditato
                 >
                   <option value="" disabled>
                     - Seleziona Stato Richiesta OS -
                   </option>
                   {statoRichiestaOs.map((stato, index) => (
                     <option
                       key={index}
                       value={stato.statoRichiestaOsId}
                     
                     >
                       {stato.descStatoRichiestaOs}
                     </option>
                   ))}
                 </select>
               </div>
    
               <div className="form-group col-md-4 shadow select-wrapper">
                 <label>Stato Approvazione OS</label>
                 <label htmlFor="statoApprovazioneOs"></label>
                 <select
                   id="statoApprovazioneOs"
                   onChange={(event) => handleStatoApprovazioneOsChange(event, outerIndex, innerIndex)}
                   value={item.statoApprovazioneOs.statoApprovazioneOsId} // Imposta il valore della combo-box con l'ID ereditato
                 >
                   <option value="" disabled>
                     - Seleziona Stato Approvazione OS -
                   </option>
                   {statoApprovazioneOs.map((stato, index) => (
                     <option
                       key={index}
                       value={stato.statoApprovazioneOsId}
                      
                     >
                       {stato.descStatoApprovazioneOs}
                     </option>
                   ))}
                 </select>
               </div>
    </div>

    <p></p>

    <div className='row'>
    
    <div className="form-group col-md-4 shadow select-wrapper">
            <div class="form-group">
            <label htmlFor={`dataStimaFine-${outerIndex}-${innerIndex}`}>Data Stima Fine</label>
                <input
                  type="date"
                  className="form-control"
                  id={`dataStimaFine-${outerIndex}-${innerIndex}`}
                  value={item.dataStimaFinale || ''}
                  onChange={(event) => handleDataStimaFineChange(event, outerIndex, innerIndex)}
                />
    </div>
    </div>
    
    <div className="form-group col-md-4 shadow select-wrapper">
    <div class="form-group">
        <label class="active" for="dateStandard">Importo</label>
        <input
            type="number"
            id={`importo-${outerIndex}-${innerIndex}`}
            name={`importo-${outerIndex}-${innerIndex}`}
            value={item.importo !== null ? item.importo : ''}
            onChange={(event) => handleImportoChange(event, outerIndex, innerIndex)}
          />
    </div>
    </div>
    
    <div className="form-group col-md-4 shadow select-wrapper">
                 <label >COMMESSA OS</label>
                 <label htmlFor="commessaOs"></label>
                 <select
                   id="commessaOs"
                   onChange={(event) => handleCommessaOsChange(event, outerIndex, innerIndex)}
                   value={item.commessaOs.commessaOsId} // Imposta il valore della combo-box con l'ID ereditato
                 >
                   <option value="" disabled>
                     - Seleziona COMMESSA OS -
                   </option>
                   {commessaOs.map((stato, index) => (
                     <option
                       key={index}
                       value={stato.commessaOsId}
                       
                     >
                       {stato.codiceCommessaOs}
                     </option>
                   ))}
                 </select>
               </div>
    </div>


<p></p>

      </div>
    )))
  )} 

    

 

    
    <p></p>
    
   

    <div className='row'>
    <div className='col-3'>

    <>
       <buttonGroup size="lg" className="mb-2"> 
        

         <div class="py-1">
        <div class="btn-example">
         {/*  {/* Abilita/disabilita il pulsante in base allo stato di modificaAbilitata */}
         {/*  {bloccoModifica ? (
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
          )}  */}
            


        <button type="button" className="btn btn-outline-success"  onClick={()=> window.location.reload()}>
              Ripristina
            </button>
            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#myModal2"
          onClick={handleShowCancella}>Elimina</button>
           {/* <button type="button" class="btn btn-outline-primary" onClick={() => window.location.href = "../elenco"}>Elenco</button> */}
           
           <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#myModalModifica"
         onClick={handleShowModifica}>Modifica</button> 
     
           </div>
        </div> 


      


         
       </buttonGroup> 
      
    

 

  <div className="modal fade" id="myModalModifica" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
               <button class="btn btn-success btn-sm" type="button"onClick={()=>{
               salvaRichiesta() ;
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
               <button class="btn btn-success btn-sm" type="button" onClick={() => {
                // Esegui la funzione di eliminazione delle richieste
                  deleteRichiesta() ;
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