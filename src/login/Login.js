import React from 'react'
import './Login.css';
//import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';


function Login ()  {
  return (
    
    
    
          <div className="content">
            <div className="container">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username"></label>
                        <input type="text" className="form-control" id="username" placeholder="Inserisci il tuo nome utente" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input type="password" className="form-control" id="password" placeholder="Inserisci la tua password" />
                    </div>
                    <button type="submit" className="btn btn-primary" href="/inserimento" >Accedi</button>
                </form>
            </div>
            </div>
        );
    }


export default Login
