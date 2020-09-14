const Task = function (e) {

  log("Task: " + String(e));
  let err;
  this.entry = e;

  try {

    this.saveEntry = function () {

      const dtStart = moment(this.entry.field(TAS_FIELD_DATE_START)).startOf('week');
      const dtEnd = moment(dtStart).endOf('week');

      const weekNr = moment(dtStart).week();

      this.entry.set(TAS_FIELD_WEEK, weekNr);
      this.entry.set(TAS_FIELD_DATE_START, moment(dtStart).format('YYYY.MM.DD'));
      this.entry.set(TAS_FIELD_DATE_END, moment(dtEnd).format('YYYY.MM.DD'));

    }
  } catch (err) {
    log("Salary: " + err);
  }



}


