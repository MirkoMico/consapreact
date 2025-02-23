import React from 'react'
import './Filtri.css'
import icona from 'bootstrap-italia/dist/svg/sprites.svg'

const Filtri = () => {
  return (
    <div class="dropdown text-center">
  <a class="btn btn-dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Apri dropdown
    <svg class="icon-expand icon icon-sm icon-primary"><use href={`${icona}#it-expand`}></use></svg>
  </a>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
        <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Filtri
