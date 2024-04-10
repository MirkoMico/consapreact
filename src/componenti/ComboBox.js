import React, { useState, useEffect } from 'react'

const ComboBox = () => {
  const[richiesta, setRichiesta] = useState([]);


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









  return (
    <div class="row">

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
    {statoRichiestaConsap.map((stato, index) => (
      <option
        key={index}
        value={stato.statoRichiestaConsapId}
      >
        {stato.descStatoRichiestaConsap}
      </option>
    ))}
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
  
</div>
  )
}

export default ComboBox
