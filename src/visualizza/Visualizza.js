import React, {useState, useEffect} from 'react'
import Layout from '../componenti/Layout'

function Visualizza ()  {

    const [richiesta, setRichiesta] = useState([]);

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
      })
      .catch(error => {
        console.error('Errore durante il recupero della richiesta:', error);
      });
  }, []);






  return (
    <Layout>

    <article className='row'>
    
        <p></p>
    
    <h1>Visualizza Richiesta</h1>
    </article>
     <p></p>
    <div className='row'>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly value={richiesta? richiesta.numeroTicket : ''} />
    </div>
    </div>
    
    <div className='col-8'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly value={richiesta? richiesta.oggetto : ''}/>
    </div>
    </div>
    </div>
    
    
    <p></p>
    
    
    <div className='row'>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly 
      value={richiesta? richiesta.applicativo?.descApplicativo : ''}/>
    </div>
    </div>
    
    <div className='col-4'>
    <div class="form-group">
        <label class="active" for="dateStandard"></label>
        <input type="date" id="dateStandard" name="dateStandard" readOnly value={richiesta? richiesta.dataCreazione : ''}/>
    </div>
    </div>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly 
      value={richiesta? richiesta.statoRichiestaConsap?.descStatoRichiestaConsap : ''}/>
    </div>
    </div>
    </div>
    
    
    <p></p>
    
    
    
    <div className='row'>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly 
      value={richiesta? richiesta.statoApprovazioneConsap?.descStatoApprovazioneConsap : ''}/>
    </div>
    </div>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly 
      value={richiesta? richiesta.statoRichiestaOs?.descStatoRichiestaOs : ''}/>
    </div>
    </div>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly 
      value={richiesta? richiesta.statoApprovazioneOs?.descStatoApprovazioneOs : ''}/>
    </div>
    </div>
    </div>
    
    
    <p></p>
    
    <div className='row'>
    
    <div className='col-4'>
    <div class="form-group">
        <label class="active" for="dateStandard"></label>
        <input type="date" id="dateStandard" name="dateStandard" readOnly value={richiesta? richiesta.dataStimaFine : ''}/>
    </div>
    </div>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly value={richiesta? richiesta.importo : ''}/>
    </div>
    </div>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" readOnly value={richiesta? richiesta.commessaOs?.numeroCommessa : ''}/>
    </div>
    </div>
    </div>
    
    <p></p>
    
    <div className='row'>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder='Inserisci'/>
    </div>
    </div>
    
    <div className='col-4'>
            <div class="form-group">
      <label for="formGroupExampleInput"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder='Inserisci'/>
    </div>
    </div>

    
    </div>


    <div className='col-4 ' >
  <button type="button" class="btn btn-outline-primary" onClick={() => window.location.href = "../elenco"} 
  style={{marginLeft: '10px'}}>Elenco</button>

<button type="button" class="btn btn-outline-success" 
  style={{marginLeft: '10px'}}>Stampa</button>
</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        </Layout>
  )
}

export default Visualizza
