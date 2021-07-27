export default function DayWeek(props) {
 

  return (
    <div className="mt-4">
      <div className={props.Style}>
        <p className="text-[10px]">{props.dayName}</p>
        <p className=" text-base font-semibold ">{props.dayNumber}</p>
      </div>
      
    </div>
  );
}

// let boxDay = document.querySelector("#boxDay");
