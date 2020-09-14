const Task = function (e) {

  log("Task: " + String(e));
  let err;
  this.entry = e;

  try {

    this.saveEntry = function () {

      const dtStart = this.entry.field(TAS_FIELD_DATE_START);
      const dtEnd = moment(dtStart).add(4, 'days').format("DD.MM.YYYY");
      const weekNr = moment(dtStart).week();

      this.entry.set(TAS_FIELD_WEEK, weekNr)
      this.entry.set(TAS_FIELD_DATE_END, dtEnd.toDate());

    }
  } catch (err) {
    log("Salary: " + err);
  }



}


