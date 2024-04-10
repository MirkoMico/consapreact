import React, { useState,useEffect } from 'react'
import Layout from '../componenti/Layout'
import '../inserimento/Inserimento.css'
import axios from 'axios'

function Inserimento  ()  {

   
 

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
 const [dataStimaFinale, setDataStimaFinale] = useState("");
 const handleDataStimaFineChange = (event) => {
   setDataStimaFinale(event.target.value);
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
 const formattedImporto = event.target.value.replace(/[^\d.]/g, '');
  
   setImporto(formattedImporto); 
 } 
 



 // Data Inserimento
 /* const [dataInserimento, setDataInserimento] = useState("");
 const handleDataInserimentoChange = (event) => {
   setDataInserimento(event.target.value);
 } */


 // Utente Inserimento
/*  const [utenteInserimento, setUtenteInserimento] = useState("");
 const handleUtenteInserimentoChange = (event) => {
   setUtenteInserimento(event.target.value);
 } */


 




 /* useEffect(() => {
  const fetchAndPopulateData = async () => {
    try {
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

  fetchAndPopulateData();
}, []);

 */

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

  fetchAndPopulateData();
}, []);






const salvaRichiesta = async () => {
  try {


    const token = localStorage.getItem('token');

      if (!token) {
        // Gestisci il caso in cui il token non sia presente nel localStorage
        console.error('Token non trovato nel localStorage');
        return;
      }




    // Converti i valori stringa in numeri
    const parsedNumeroTicket = parseInt(numeroTicket);
    const parsedApplicativoId = parseInt(applicativoId);
    const parsedStatoRichiestaConsapId = parseInt(statoRichiestaConsapId);
    const parsedStatoApprovazioneConsapId = parseInt(statoApprovazioneConsapId);
    const parsedStatoRichiestaOsId = parseInt(statoRichiestaOsId);
    const parsedStatoApprovazioneOsId = parseInt(statoApprovazioneOsId);
    const parsedCommessaOsId = parseInt(commessaOsId);
    const parsedImporto = importo;

    
   

    const data = {
      erroreDTO: null,
      filtri: null,
      elenco:  [
          {
              numeroTicket: parsedNumeroTicket,
              applicativo: {
                  applicativoId: parsedApplicativoId
              },
              oggetto,
               statoRichiestaConsap: {
                  statoRichiestaConsapId: parsedStatoRichiestaConsapId
              },
              dataCreazione: dataCreazione,
              statoApprovazioneConsap: {
                  statoApprovazioneConsapId: parsedStatoApprovazioneConsapId
              },
              statoApprovazioneOs: {
                  statoApprovazioneOsId: parsedStatoApprovazioneOsId
              },
              statoRichiestaOs: {
                  statoRichiestaOsId: parsedStatoRichiestaOsId
              },
              dataStimaFinale: dataStimaFinale,
               importo: parsedImporto, 
              commessaOs: {
                  commessaOsId: parsedCommessaOsId
              } 
          }
      ]
    };

    console.log(JSON.stringify(data) + "data");

    const response = await fetch("http://localhost:8080/richiesta/new", {
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
    console.log("Dati salvati con successo:", responseData);
    // Aggiungi eventuali azioni aggiuntive dopo il salvataggio dei dati
  } catch (error) {
    console.error("Errore durante il salvataggio dei dati:", error);
  }
};






 

 




 /* const salvaRichiesta = () => {
  // Creazione dell'oggetto con i campi da inviare al server
  const data = {
    numeroTicket,
    oggetto,
    applicativo:{applicativoId},
    dataCreazione,
    statoRichiestaConsap:{statoRichiestaConsapId},
    statoApprovazioneConsap:{statoApprovazioneConsapId},
    statoRichiestaOs:{statoRichiestaOsId},
    statoApprovazioneOs:{statoApprovazioneOsId},
    dataStimaFine,
    commessaOs:{commessaOsId},
    importo,
   // dataInserimento,
   // utenteInserimento
  };
  console.log(data +"data")
  // Effettua la richiesta POST al server
  fetch("http://localhost:8080/richiesta/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore durante il salvataggio dei dati");
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Dati salvati con successo:", responseData);
      // Aggiungi eventuali azioni aggiuntive dopo il salvataggio dei dati
    })
    .catch((error) => {
      console.error("Errore durante il salvataggio dei dati:", error);
    });



  }; */


  
  

  
  
  
  
  


  return (
    <Layout>

<article className='row'>

    <p></p>

    <div class="h1">Inserimento <span class="badge bg-primary">Richiesta</span></div>
</article>
 <p></p>
<div className='row'>

<div className='col-4'>
        <div class="form-group">
  <label for="formGroupExampleInput"></label>
  <input type="text" class="form-control" id="formGroupExampleInput"
   placeholder='Numero Ticket' maxLength="5"
    value={numeroTicket} onChange={handleNumeroTicketChange}   />
</div>
</div>

<div className='col-8'>
        <div class="form-group">
  <label for="formGroupExampleInput"></label>
  <input type="text" class="form-control" id="formGroupExampleInput"
   placeholder='Oggetto'
    value={oggetto} onChange={handleOggettoChange} />
</div>
</div>
</div>


<p></p>


<div className='row'>


<div className='col-4'>
<div class="select-wrapper">
  <label for="defaultSelect"></label>
  <select id="applicativoId" 
  value={applicativoId} onChange={handleApplicativoChange}>
    <option value="" disabled selected>- Seleziona Applicativo -</option>
    {applicativo.map((applicativo,applicativoId) => (
      <option key={applicativoId} value={applicativo.applicativoId}>
        {applicativo.descApplicativo}</option>
        ))}
  </select>
</div>
</div>

<div className='col-4'>
<div class="form-group">
    <label class="active" for="dateStandard">Data Creazione</label>
    <input type="date" id="dateStandard" name="dateStandard"
    value={dataCreazione} onChange={handleDataCreazioneChange} />
</div>
</div>

<div className='col-4'>
<div class="select-wrapper">
  <label for="defaultSelect"></label>
         <label htmlFor="statoRichiestaConsap"></label>
         <select id="statoRichiestaConsap" value={statoRichiestaConsapId} onChange={handleStatoRichiestaConsapChange}>
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
       </div>

</div>


<p></p>



<div className='row'>

<div className='col-4'>
        <div class="select-wrapper">
  <label for="defaultSelect"></label>
  <select  id="statoApprovazioneConsapId"
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
</div>

<div className='col-4'>
        <div class="select-wrapper">
  <label for="defaultSelect"></label>
  <select  id="statoRichiestaOSId"
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

<div className='col-4'>
        <div class="select-wrapper">
  <label for="defaultSelect"></label>
  <select  id="statoApprovazioneOsId"
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
</div>


<p></p>

<div className='row'>
<p></p>
<div className='col-4'>
<div class="form-group">
    <label class="active" for="dateStandard">Data Stima Fine</label>
    <input type="date" id="dateStandard" name="dateStandard"
     value={dataStimaFinale} onChange={handleDataStimaFineChange}/>
</div>
</div>

<div className='col-4'>
        <div class="select-wrapper">
  <label for="defaultSelect"></label>
  <select  id="commessaOsId"
   placeholder='Commessa OS'value={commessaOsId} onChange={handleCommessaOsChange}>
    <option value="" disabled selected>- Seleziona Commessa OS -</option>
   {commessaOs.map((commessaOs, commessaOsId) => (
     <option
       key={commessaOsId}
       value={commessaOs.commessaOsId}
     >
       {commessaOs.codiceCommessaOs}
     </option>
   ))}
  </select>
</div>
</div>

<div className='col-4'>
        <div class="form-group">
  <label for="formGroupExampleInput"></label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder='Importo'
  value={importo} onChange={handleImportoChange}/>
</div>
</div>
</div>

<p></p>

{/* <div className='row'>

<div className='col-4'>
        <div class="form-group">
  <label for="formGroupExampleInput"></label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder='Utente Inserimento'
  value={utenteInserimento} onChange={handleUtenteInserimentoChange}/>
</div>
</div>

<div className='col-4'>
        <div class="form-group">
  <label for="formGroupExampleInput"></label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder='Data Inserimento'
  value={dataInserimento} onChange={handleDataInserimentoChange}/>
</div>
</div>
</div>
 */}
<p></p>

<div className='row'>
<div className='col-4'>

<button type="button" class="btn btn-outline-primary" onClick={salvaRichiesta} >Salva</button>

</div>
</div>




















    </Layout>
  )
}


  

export default Inserimento
