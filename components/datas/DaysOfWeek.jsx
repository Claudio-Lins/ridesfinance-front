import DayWeek from "./DayWeek";
import MesAno from "./MesAno";

export default function DaysOfWeek() {

  
    let myDate = new Date();
    let diaSemana = myDate.getDay() - 1;
    let diaAtual = myDate.getDay();
    let segunda, terca, quarta, quinta, sexta, sabado, domingo;
      
    if (diaAtual == dayOneWeek) {
        segunda = 'presentDay';
      } else if (diaAtual == dayTwoWeek) {
        terca = 'presentDay';
      } else if (diaAtual == dayThreeWeek) {
        quarta = 'presentDay';
      } else if (diaAtual == dayFourWeek) {
        quinta = 'presentDay';
      } else if (diaAtual == dayFiveWeek) {
        sexta = 'presentDay';
      } else if (diaAtual == daySixWeek) {
        sabado = 'presentDay';
      } else if (diaAtual == daySevenWeek) {
        domingo = 'presentDay';
      } else {
        'boxEmpty'
      }
    

  
//COMPONENT
  return (
    <div className="">
        <div className=""><MesAno /></div>
        <div className="mt-0 flex justify-evenly gap-2">
        <DayWeek dayName="Seg" dayNumber={diaUmSemana} Style={segunda || "boxEmpty"} />
        <DayWeek dayName="Ter" dayNumber={diaDoisSemana} Style={terca || "boxEmpty"} />
        <DayWeek dayName="Qua" dayNumber={diaTresSemana} Style={quarta || "boxEmpty"} />
        <DayWeek dayName="Qui" dayNumber={diaQuatroSemana} Style={quinta || "boxEmpty"} />
        <DayWeek dayName="Sex" dayNumber={diaCincoSemana} Style={sexta || "boxEmpty"} />
        <DayWeek dayName="Sab" dayNumber={diaSeisSemana} Style={sabado || "boxEmpty"} />
        <DayWeek dayName="Dom" dayNumber={diaSeteSemana} Style={domingo || "boxEmpty"} />
      </div>
    </div>
  );
}
// let myDate = new Date();
// let diaSemana = myDate.getDate();
let dt = new Date();
let dayOneWeek = dayOneOfWeek(dt).getDay();
let dayTwoWeek = dayTwoOfWeek(dt).getDay();
let dayThreeWeek = dayThreeOfWeek(dt).getDay();
let dayFourWeek = dayFourOfWeek(dt).getDay();
let dayFiveWeek = dayFiveOfWeek(dt).getDay();
let daySixWeek = daySixOfWeek(dt).getDay();
let daySevenWeek = daySevenOfWeek(dt).getDay();
//SEGUNDA-FEIRA
function dayOneOfWeek(date) {
  let dayOneWeek = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
  return new Date(date.setDate(dayOneWeek));
}
let diaUmSemana = dayOneOfWeek(dt).getDate();
// TERÇA-FEIRA
function dayTwoOfWeek(date) {
  let dayTwoWeek = date.getDate() - date.getDay() + (date.getDay() === 0 ? -5 : 2);
  return new Date(date.setDate(dayTwoWeek));
}
let diaDoisSemana = dayTwoOfWeek(dt).getDate();
// QUARTA-FEIRA
function dayThreeOfWeek(date) {
  let dayThreeWeek = date.getDate() - date.getDay() + (date.getDay() === 0 ? -4 : 3);
  return new Date(date.setDate(dayThreeWeek));
}
let diaTresSemana = dayThreeOfWeek(dt).getDate();
// QUINTA-FEIRA
function dayFourOfWeek(date) {
  let dayFourWeek = date.getDate() - date.getDay() + (date.getDay() === 0 ? -3 : 4);
  return new Date(date.setDate(dayFourWeek));
}
let diaQuatroSemana = dayFourOfWeek(dt).getDate();
// SEXTA-FEIRA
function dayFiveOfWeek(date) {
  let dayFiveWeek = date.getDate() - date.getDay() + (date.getDay() === 0 ? -2 : 5);
  return new Date(date.setDate(dayFiveWeek));
}
let diaCincoSemana = dayFiveOfWeek(dt).getDate();
// SABADO
function daySixOfWeek(date) {
  let daySixWeek = date.getDate() - date.getDay() + (date.getDay() === 0 ? -1 : 6);
  return new Date(date.setDate(daySixWeek));
}
let diaSeisSemana = daySixOfWeek(dt).getDate();
// DOMINGO
function daySevenOfWeek(date) {
  let daySevenWeek = date.getDate() - date.getDay() + (date.getDay() === 0 ? 0 : 7);
  return new Date(date.setDate(daySevenWeek));
}
let diaSeteSemana = daySevenOfWeek(dt).getDate();



