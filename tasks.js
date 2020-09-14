
const Task = function (e) {

  log("Task: " + String(e));
  let err;

  try {

    this.saveEntry = function () {

      let dtStart = e.field(TAS_FIELD_DATE_START);
      let weekNr = moment(dtStart).week();
      e.set(TAS_FIELD_WEEK, weekNr);

    }
  } catch (err) {
    log("Salary: " + err);
  }



}


