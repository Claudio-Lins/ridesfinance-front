import useEffect from 'react'

export default function Clock() {
  
  
  return (
    <div className="mt-0 flex justify-end space-x-1 text-white text-lg sm:space-x-0 sm:text-sm sm:font-light">
      <p>{hour}</p>
      <p className=" animate-pulse">:</p>
      <p>{min}</p>
      <p className=" animate-pulse">:</p>
      <p>{seg}</p>
    </div>
  );
}

let myDate = new Date();

let hour = myDate.getHours();
let min = myDate.getMinutes();
let seg = myDate.getSeconds();

