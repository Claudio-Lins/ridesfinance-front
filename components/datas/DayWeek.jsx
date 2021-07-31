export default function DayWeek(props) {
 
  return (
    <div className="mt-4">
      <div className={props.Style}>
        <p className="text-[10px]">{props.dayName}</p>
        <p className="">{props.dayNumber}</p>
      </div>
      
    </div>
  );
}

