import MesAno from "../datas/MesAno"

export default function DayWeek(props) {
  return (
    <div className="mt-4">
      <div className={props.Style}>
        <p className="text-[8px]">{props.dayName}</p>
        <p className="">{props.dayNumber}</p>
      </div>
    </div>
  );
}
