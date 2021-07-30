import React, {useEffect, useState, useRef} from 'react'

export default function Clock() {

  const [timeHours, setTimeHours] = useState('')
  const [timeMinutos, setTimeMinutos] = useState('')
  const [timeSegundos, setTimeSegundos] = useState('')

  let interval = useRef();

  const startTime = () => {
    
    // const myDate = new Date();
    
    interval = setInterval(() => {
      const time = new Date();
      const hours = time.getHours();
      const minutos = time.getMinutes();
      const segundos = time.getSeconds();
      
      setTimeHours(hours <= 9 ? "0" + hours : hours)
      setTimeMinutos(minutos <= 9 ? "0" + minutos : minutos)
      setTimeSegundos(segundos <= 9 ? "0" + segundos : segundos)
      

    }, 1000)
  }

  useEffect(() => {
    startTime()
  })
  
  
  return (
    <div className="mt-0 flex justify-end space-x-1 text-white text-lg sm:space-x-0 sm:text-sm sm:font-light">
      <p>{timeHours}</p>
      <p className=" animate-pulse">:</p>
      <p>{timeMinutos}</p>
      <p className=" animate-pulse">:</p>
      <p>{timeSegundos}</p>
    </div>
  );
}

// let myDate = new Date();

// let hour = myDate.getHours();
// let min = myDate.getMinutes();
// let seg = myDate.getSeconds();

