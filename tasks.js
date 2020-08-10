
const Task = function (e) {

  log("Task: " + String(e));
  let err;

  try {

    this.entry = e;

    this.saveEntry = function () {
      const dtStart = this.entry.field(TAS_FIELD_DATE_START);
      const dtText =
        moment(dtStart).startOf('week').format('DD') + ' - ' +
        moment(dtStart).startOf('week').add(5, 'day').format('DD') + ' ' +
        MONTHS_PL[moment(dtStart).format('M') - 1];

      this.entry.set(TAS_FIELD_WEEK, dtText);
    }

  } catch (err) {
    log("Salary: " + err);
  }



}


