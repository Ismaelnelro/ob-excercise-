import React, { useEffect, useState } from 'react'
import '../styles/clock.scss'

export const Clock = () => {

   const [persona, setPersona] = useState(
      {
         fecha: new Date(),
         edad: 0,
         nombre: "Martin",
         apellidos: "San Jose"
      }
   )


   useEffect(() => {
      const timerID = setInterval(
         () => tick(), 1000
      );

      return () => {
         clearInterval(timerID);
      }
   });


   const tick = () => {
      setPersona((persona) => {
         let edad = persona.edad + 1;
         return {
            ...persona,
            fecha: new Date(),
            edad
         }
      })
   }


   return (
      <div className='info'>
         <div className='hora'>
             Hora Actual 
            {" " + persona.fecha.toLocaleTimeString()}
         </div>
         <h3 className='nombre'>{persona.nombre} {persona.apellidos}</h3>
         <h1 className='edad'>Edad: {persona.edad}</h1>
      </div>
   )



}

