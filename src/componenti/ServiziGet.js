import React,{useEffect, useState} from 'react'

const ServiziGet = () => {

    const [statoRichiestaConsap, setStatoRichiestaConsap]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/statoRichiestaConsap")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setStatoRichiestaConsap(data)
        })
        .catch((error)=>{
            console.error("dati non caricati",error);
        })
   },[])




  return (
    <div>
      
    </div>
  )
}

export default ServiziGet
