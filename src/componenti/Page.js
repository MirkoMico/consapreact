import React from 'react'

const Page = () => {
  return (
    <div class="sidebar-wrapper">
    <div class="sidebar-linklist-wrapper">
      <div class="link-list-wrapper">
        <ul class="link-list">
          <li>
            <h3>Header</h3>
          </li>
          <li><a class="list-item medium active" href="#"><span>Link lista 1 (attivo)</span></a>
          </li>
          <li><a class="list-item medium disabled" href="#"><span>Link lista 2 (disabilitato)</span></a>
          </li>
          <li><a class="list-item medium" href="#"><span>Link lista 3</span></a>
          </li>
          <li><a class="list-item medium" href="#"><span>Link lista 4</span></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="sidebar-linklist-wrapper linklist-secondary">
      <div class="link-list-wrapper">
        <ul class="link-list">
          <li><a class="list-item" href="#"><span>Link secondario 1</span></a>
          </li>
          <li><a class="list-item active" href="#"><span>Link secondario 2 (attivo)</span></a>
          </li>
          <li><a class="list-item disabled" href="#"><span>Link secondario 3 (disabilitato)</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Page
