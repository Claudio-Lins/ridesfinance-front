import DayWeek from "./DayWeek";
import MesAno from "./MesAno";

export default function DaysOfWeek() {
  let myDate = new Date();
  // let diaSemana = myDate.getDay() - 1;
  // let diaAtual = myDate.getDay();
  // let segunda, terca, quarta, quinta, sexta, sabado, domingo;

  //SEGUNDA-FEIRA
  function dayOneOfWeek() {
    let dayOneWeek =
      myDate.getDate() - myDate.getDay() + (myDate.getDay() === 0 ? -6 : 1);
    return new Date(myDate.setDate(dayOneWeek));
  }
  let diaUmSemana = dayOneOfWeek(myDate).getDate();
  // TERÇA-FEIRA
  function dayTwoOfWeek() {
    let dayTwoWeek =
      myDate.getDate() - myDate.getDay() + (myDate.getDay() === 0 ? -5 : 2);
    return new Date(myDate.setDate(dayTwoWeek));
  }
  let diaDoisSemana = dayTwoOfWeek(myDate).getDate();
  // QUARTA-FEIRA
  function dayThreeOfWeek() {
    let dayThreeWeek =
      myDate.getDate() - myDate.getDay() + (myDate.getDay() === 0 ? -4 : 3);
    return new Date(myDate.setDate(dayThreeWeek));
  }
  let diaTresSemana = dayThreeOfWeek(myDate).getDate();
  // QUINTA-FEIRA
  function dayFourOfWeek() {
    let dayFourWeek =
      myDate.getDate() - myDate.getDay() + (myDate.getDay() === 0 ? -3 : 4);
    return new Date(myDate.setDate(dayFourWeek));
  }
  let diaQuatroSemana = dayFourOfWeek(myDate).getDate();
  // SEXTA-FEIRA
  function dayFiveOfWeek() {
    let dayFiveWeek =
      myDate.getDate() - myDate.getDay() + (myDate.getDay() === 0 ? -2 : 5);
    return new Date(myDate.setDate(dayFiveWeek));
  }
  let diaCincoSemana = dayFiveOfWeek(myDate).getDate();
  // SABADO
  function daySixOfWeek() {
    let daySixWeek =
      myDate.getDate() - myDate.getDay() + (myDate.getDay() === 0 ? -1 : 6);
    return new Date(myDate.setDate(daySixWeek));
  }
  let diaSeisSemana = daySixOfWeek(myDate).getDate();
  // DOMINGO
  function daySevenOfWeek() {
    let daySevenWeek =
      myDate.getDate() - myDate.getDay() + (myDate.getDay() === 0 ? 0 : 7);
    return new Date(myDate.setDate(daySevenWeek));
  }
  let diaSeteSemana = daySevenOfWeek(myDate).getDate();
  ////////////////////////////////

  let semana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  let d = new Date();
  
  // switch (diaSemana) {
    //   case 0:
    //     segunda = "presentDay";
    //     break;
    //   case 1:
    //     terca = "presentDay";
    //     break;
    //   case 2:
    //     quarta = "presentDay";
    //     break;
    //   case 3:
    //     quinta = "presentDay";
    //     break;
    //   case 4:
    //     sexta = "presentDay";
    //     break;
    //   case 5:
    //     sabado = "presentDay";
    //     break;
    //   case 6:
    //     domingo = "presentDay";
    //     break;
    
    //   default:
    //     break;
    // }
    // console.log("diaSemana: " + diaSemana);
    // console.log("diaAtual: " + diaAtual);
    // console.log("diaUmSemana: " + diaUmSemana);
    // console.log("diaDoisSemana: " + diaDoisSemana);
    // console.log("dayOneOfWeek: " + dayOneOfWeek());
    // console.log("dayTwoOfWeek: " + dayTwoOfWeek());
    // console.log("dayThreeOfWeek: " + dayThreeOfWeek());
    // console.log(semana[d.getDay()]);
    


  //COMPONENT
  return (
    <div className="">
      <div className="">
        <MesAno />
      </div>
      <div className="mt-0 flex justify-evenly gap-2">
        <DayWeek
          dayName="Seg"
          dayNumber={diaUmSemana}
          Style={semana[d.getDay()] === "Seg" ? "presentDay" : "boxEmpty"}
        />
        <DayWeek
          dayName="Ter"
          dayNumber={diaDoisSemana}
          Style={semana[d.getDay()] === "Ter" ? "presentDay" : "boxEmpty"}
          // Style={terca || "boxEmpty"}
        />
        <DayWeek
          dayName="Qua"
          dayNumber={diaTresSemana}
          Style={semana[d.getDay()] === "Qua" ? "presentDay" : "boxEmpty"}
        />
        <DayWeek
          dayName="Qui"
          dayNumber={diaQuatroSemana}
          Style={semana[d.getDay()] === "Qui" ? "presentDay" : "boxEmpty"}
        />
        <DayWeek
          dayName="Sex"
          dayNumber={diaCincoSemana}
          Style={semana[d.getDay()] === "Sex" ? "presentDay" : "boxEmpty"}
        />
        <DayWeek
          dayName="Sab"
          dayNumber={diaSeisSemana}
          Style={semana[d.getDay()] === "Sab" ? "presentDay" : "boxEmpty"}
        />
        <DayWeek
          dayName="Dom"
          dayNumber={diaSeteSemana}
          Style={semana[d.getDay()] === "Dom" ? "presentDay" : "boxEmpty"}
        />
      </div>
    </div>
  );
}
