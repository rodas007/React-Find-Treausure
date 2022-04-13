

import React, {  useState} from "react";
import './Tablero.css'






export default function Tablero({ carta, index,random,counter,setCounter}) {


    const [cara, setCara]= useState(carta.x)
    const [clicked, setClicked] = useState(false);


   
    const cambiaCara = (index,random) => {
        
        if (index === random && clicked === false){
            
            setCara(carta.chest);
            setTimeout(() => {
            alert('Lo conseguiste en ' + (counter + 1)+' intentos, Enhorabuena!!!!!');
            setClicked(true);
            window.location.reload();
            }, 150);
            
        }else if (clicked === false){
            setCara(carta.skull)
            setCounter(counter + 1)
            setClicked(true);
            console.log("cfszdffg");
        }
    }


  return (

    <div className="app">



    
    <img  className="carta" onClick={()=> cambiaCara(index,random)}  src = {cara} alt={carta.random}></img>

    </div>
  )
}

    


   









