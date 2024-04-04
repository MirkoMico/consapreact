import React from 'react'
import Navbars from './Navbars'
import Footers from './Footers'
import Indietro from './Indietro'


const Layout = ({children}) => {
  return (
    <div>
        <Navbars/>
        <Indietro/>
        
        
        {children}

        <br></br>
        


        <Footers/>
    
      
    </div>
  )
}

export default Layout
