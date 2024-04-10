import React, { useState } from 'react';
import './Login.css';
import Layout from '../componenti/Layout';
//import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
//import { useHistory } from 'react-router-dom'; // Importa useHistory per gestire la navigazione

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null); // Stato per tenere traccia del token
  const [error, setError] = useState(''); // Stato per gestire gli errori

  
  function navigazioneInserimento() {
   
    window.location.href('/inserimento');
  }

 

 /*  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita il comportamento predefinito del submit del modulo */

    const handleLogin = async () => {
        console.log('Tentativo di accesso...');

    // Crea un oggetto con i dati di accesso
    const credentials = {
      username: username,
      password: password
    };

    try {
      // Invia la richiesta POST al backend
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      if (response.ok) {
        // La richiesta è andata a buon fine
        console.log('Accesso effettuato con successo!');
        // Esegui altre azioni come il reindirizzamento alla pagina successiva
        const token = response.headers.get('access_token');

        // Memorizza il token nel localStorage
        localStorage.setItem('token', token);

        // Imposta lo stato del token
        setToken(token);
       //navigazioneInserimento();
       return true;
      
      } else {
        // Se la risposta non è OK, gestisci l'errore
        console.error('Errore durante l\'accesso:', response.statusText);
        // Imposta lo stato dell'errore per mostrare un messaggio all'utente
        setError('Accesso negato. Controlla le credenziali e riprova.');
      }
    } catch (error) {
      // Gestisci gli errori di rete o di altro tipo
      console.error('Errore durante la richiesta:', error);
      // Imposta lo stato dell'errore per mostrare un messaggio all'utente
      setError('Si è verificato un errore durante la richiesta. Riprova più tardi.');
    }
  };

  return (
    
    <div className="content">
      <div className="container">
        <h1>Login</h1>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form >
          <div className="form-group">
            <label htmlFor="username"></label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Inserisci il tuo nome utente"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Inserisci la tua password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
          
           <button type="button" className="btn btn-success" onClick={async () => {
    const loginSuccess = await handleLogin();
    if (loginSuccess) {
      window.location.href = "/elenco";
    }
  }}>
            Accedi
          </button> 

          
          </div>

         

         
          
        </form>
      </div>
    </div>
   
  );
}

export default Login;
