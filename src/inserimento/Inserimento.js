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


 // Data Inserimento
 const [dataInserimento, setDataInserimento] = useState("");
 const handleDataInserimentoChange = (event) => {
   setDataInserimento(event.target.value);
 }


 // Utente Inserimento
 const [utenteInserimento, setUtenteInserimento] = useState("");
 const handleUtenteInserimentoChange = (event) => {
   setUtenteInserimento(event.target.value);
 }


 

 useEffect(() => {

  Promise.all([
    fetch(`http://localhost:8080/applicativo`),
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
      const [applicativo, statoRichiestaConsap, statoApprovazioneConsap, statoRichiestaOs, statoApprovazioneOs, commessaOs] = data;
      setApplicativo(applicativo);
      setStatoRichiestaConsap(statoRichiestaConsap);
      setStatoApprovazioneConsap(statoApprovazioneConsap);
      setStatoRichiestaOs(statoRichiestaOs);
      setStatoApprovazioneOs(statoApprovazioneOs);
      setCommessaOs(commessaOs);
      console.log("Applicativo:", applicativo);
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
const salvaRichiesta = () => {
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
    dataInserimento,
    utenteInserimento
  };
  console.log(data +"data")
  // Effettua la richiesta POST al server
  fetch("http://localhost:8080/richiesta", {
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









  };
  
  


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
     value={dataStimaFine} onChange={handleDataStimaFineChange}/>
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
       {commessaOs.numeroCommessa}
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

<div className='row'>

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

<p></p>

<div className='row'>
<div className='col-4'>

<button type="button" class="btn btn-outline-primary" onClick={salvaRichiesta}>Salva</button>

</div>
</div>




















    </Layout>
  )
}


  

export default Inserimento
