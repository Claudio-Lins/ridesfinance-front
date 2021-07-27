

dt = new Date();

function dayOneOfWeek(date) {
    var dayOneWeek =
      date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    return new Date(date.setDate(dayOneWeek));
  }
  let diaUmSemana = document.querySelector("#dayOneOfWeek").innerHTML = dayOneOfWeek(dt).getDate();