
const Task = function (e) {

  log("Task: " + String(e));
  let err;
  this.entry = e;

  try {

    this.saveEntry = function () {

      let dtStart = this.entry.field(TAS_FIELD_DATE_START);
      let weekNr = moment(dtStart).week();
      this.entry.set(TAS_FIELD_WEEK, weekNr);

    }
  } catch (err) {
    log("Salary: " + err);
  }



}


