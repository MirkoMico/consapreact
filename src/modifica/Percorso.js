import React from 'react'

const Percorso = () => {
  return (
    <nav className="breadcrumb-container" aria-label='Percorso di navigazione'>
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a><span class="separator">&gt;</span></li>
            <li className="breadcrumb-item"><a href="/elenco">Elenco</a><span class="separator">&gt;</span></li>
            <li className="breadcrumb-item active" aria-current="page">Modifica</li>
        </ol>


    </nav>
  )
}

export default Percorso
