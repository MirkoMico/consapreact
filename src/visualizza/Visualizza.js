import React, {useState, useEffect} from 'react'
import Layout from '../componenti/Layout'

function Visualizza ()  {

    

 /*   useEffect(() => {
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
      })
      .catch(error => {
        console.error('Errore durante il recupero della richiesta:', error);
      });
  }, []);  */


  const [richiesta, setRichiesta] = useState([]);

  useEffect(() => {
      // Recupera l'ID della richiesta dal localStorage
      const richiestaId = localStorage.getItem('richiesta_id');

      // Se non è presente un ID nel localStorage, non fare nulla
      if (!richiestaId) return;
    const fetchAndPopulateData = async () => {
      try {
        const urls = [
          "http://localhost:8080/richiesta",
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
      value={item.statoRichiestaConsap ? item.statoRichiestaConsap.descStatoRichiestaConsap : ''}/>
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
