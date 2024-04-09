import React, { useState, useEffect } from 'react'
import './Filtri.css'
import icona from 'bootstrap-italia/dist/svg/sprites.svg'

const Filtri = () => {

  const [isButtonActive, setIsButtonActive] = useState(false);

  
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


 useEffect(() => {
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

  fetchAndPopulateData();
}, []);




useEffect(() => {
  // Controlla la lunghezza del campo "Numero Ticket" e imposta lo stato del pulsante di conseguenza
  const isNumeroTicketValid = /* numeroTicket.length === 0 || */ numeroTicket.length === 5;
    const isOggettoSelected = oggetto !== '' ;
    const isApplicativoSelected = applicativoId !== '';
    const isStatoRichiestaConsapSelected = statoRichiestaConsapId !== '';
    const isStatoRichiestaOsSelected = statoRichiestaOsId !== '';
    const isStatoApprovazioneConsapSelected = statoApprovazioneConsapId !== '';
    const isStatoApprovazioneOsSelected = statoApprovazioneOsId !== '';
   
   
   
    setIsButtonActive(isNumeroTicketValid || (isOggettoSelected && isApplicativoSelected) || 
    (isStatoRichiestaConsapSelected && isStatoRichiestaOsSelected) ||
    (isStatoApprovazioneConsapSelected && isStatoApprovazioneOsSelected) );

    
}, [numeroTicket, oggetto, applicativoId, statoRichiestaConsapId, 
  statoRichiestaOsId, statoApprovazioneConsapId, statoApprovazioneOsId]); // Aggiungi numeroTicket come dipendenza dell'effetto per eseguirlo ogni volta che il valore cambia





const handleFiltraClick = () => {
  // La logica di filtraggio qui
  console.log("Numero Ticket:", numeroTicket);
  console.log("Applicativo ID:", applicativoId);
  console.log("Oggetto:", oggetto);
  // Aggiungi altre logiche di filtro se necessario
}





















  return (
    <div>
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
    value={oggetto} onChange={handleOggettoChange} />
              </div>

              <div className="dropdown-item list-item">
                 <span>Applicativo:</span> 
                <select className="form-select" id="applicativoId" 
  value={applicativoId} onChange={handleApplicativoChange}>
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
        <button className="btn btn-primary"   onClick={handleFiltraClick}
        disabled={!isButtonActive}>Filtra</button>
      </div>

<div className="text-center mt-3">
        <button className="btn btn-primary"   onClick={()=> window.location.reload()}
        >Repristina Filtra</button>
      </div>

          </ul>
        </div>
      </div>

    </div>
   


  </div>
  )
}

export default Filtri
