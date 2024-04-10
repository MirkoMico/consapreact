import React, {useState, useEffect} from 'react'
import Layout from '../componenti/Layout'
import Percorso from './Percorso';

function Visualizza ()  {

    



  const [richiesta, setRichiesta] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);// Current page
  const [pageSize, setPageSize] = useState(10); // Number of items per page

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
          return data.elenco;
        });
  
        const richiestaData = await Promise.all(requests);
        setRichiesta(richiestaData);
        console.log("RichiestaData:", richiestaData);
        console.log("Richiesta:", richiesta);
      } catch (error) {
        console.error("Errore durante il recupero dei dati delle richieste:", error);
      }
    };
  
    fetchAndPopulateData();
  }, []);
  






  return (
    <Layout>

<Percorso/>

 


  
    <article className='row'>
      <h1>Visualizza Richiesta</h1>
    </article>


    {richiesta.map((arrayInterno, index) => (
     arrayInterno.map((item) => ( 
      <div key={index}>

<div  className='row'>

<div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
       <input type="text" class="form-control" id="formGroupExampleInput" readOnly value={item.numeroTicket} /> 
    </div>
    </div>

       <div className='col-8'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly value={item.oggetto}/>
    </div>
    </div>
    </div>
    
    
    
    <p></p>

    <div className='row'>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly 
      value={item.applicativo ? item.applicativo.descApplicativo : ''}/>
    </div>
    </div>
    
    <div className='col-4'>
    <div class="form-group">
        <label class="active" for="dateStandard"></label>
        <input type="date" id="dateStandard" name="dateStandard" readOnly value={item.dataCreazione}/>
    </div>
    </div>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly 
      value={item.statoRichiestaConsap ? item.statoRichiestaConsap.descStatoRichiestaConsap : ''}/>
    </div>
    </div>
    </div>
    
    
    <p></p>

    <div className='row'>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly 
      value={item.statoApprovazioneConsap ? item.statoApprovazioneConsap.descStatoApprovazioneConsap : ''}/>
    </div>
    </div>
    
    <div className='col-4'>
    <div class="form-group">
        <label class="active" for="dateStandard"></label>
        <input type="text" id="dateStandard" name="dateStandard" readOnly 
        value={item.statoRichiestaOs ? item.statoRichiestaOs.descStatoRichiestaOs : ''}/>
    </div>
    </div>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly 
      value={item.statoApprovazioneOs ? item.statoApprovazioneOs.descStatoApprovazioneOs : ''}/>
    </div>
    </div>
    </div>

    <p></p>

    <div className='row'>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="date" class="form-control" id="formGroupExampleInput" readOnly 
      value={item.dataStimaFinale}/>
    </div>
    </div>
    
    <div className='col-4'>
    <div class="form-group">
        <label class="active" for="dateStandard"></label>
        <input type="number" id="dateStandard" name="dateStandard" readOnly 
        value={item.importo}/>
    </div>
    </div>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly 
      value={item.commessaOs ? item.commessaOs.codiceCommessaOs : ''}/>
    </div>
    </div>
    </div>


<p></p>

      </div>
    )))
  )}


<p></p>

       
   

    <div className='col-4'>
      <p></p>
      <button type="button" className="btn btn-outline-primary" onClick={() => window.location.href = "../elenco"} style={{marginLeft: '10px'}}>Elenco</button>
      <button type="button" className="btn btn-outline-success" style={{marginLeft: '10px'}}>Stampa</button>
    </div>

 
  
  </Layout>
  


);

    
    
    
    
    
    
    
    
    
    
    
       
  
}

export default Visualizza
