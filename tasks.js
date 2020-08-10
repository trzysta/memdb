
const Task = function (e) {

  log("Task: " + String(e));
  let err;

  try {

    const entry = e;
    const dtStart = entry.field(TAS_FIELD_DATE_START);




    this.saveEntry = function () {
      const dtText =
        moment(dtStart).startOf('week').format('DD') + ' - ' +
        moment(dtStart).startOf('week').moment(dtStart).add(5, 'day').format('DD') + ' ' +
        MONTHS_PL[moment(dtStart).format('MM')];

      this.entry.set(TAS_FIELD_WEEK, dtText);
    }

  } catch (err) {
    log("Salary: " + err);
  }



}


