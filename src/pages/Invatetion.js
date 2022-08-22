import React from 'react'
import {backGroundPics} from './mockData' 


function Invatetion() {

    const pics = backGroundPics.map((pic,i)=>{
        let p = new URL(pic,import.meta.url)
        return (
                <div key={i}>
                    <h1>{`pic number ${i}`}</h1>
                    <img src={p}></img>
                </div>
                
                
                

        )
    })
  return (
    <div>
        <h1> Invatetion </h1>
      
    {pics}


    </div>
  )
}

export default Invatetion