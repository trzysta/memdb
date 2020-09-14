const Task = function (e) {

  log("Task: " + String(e));
  let err;
  this.entry = e;

  try {

    this.saveEntry = function () {

      const dtStart = this.entry.field(TAS_FIELD_DATE_START);
      const dtEnd = moment(dtStart).add(4, 'days').toDate();
      const weekNr = moment(dtStart).week();

      let countTotal = 0;
      let countClosed = 0;
      let countRunning = 0;
      let countNotclosed = 0;

      //TAS_FIELD_DESCRIPTION
      TAS_FIELD_TASK = "task"
      TAS_FIELD_STATUS = "Status"
      TAS_FIELD_NOTES = "Uwagi"

      this.entry.set(TAS_FIELD_WEEK, weekNr)
      this.entry.set(TAS_FIELD_DATE_END, dtEnd);

      if (isWeekClosed) {
        for (let i = 1; i < 10; i++) {
          if (this.entry.field(TAS_FIELD_TASK & i).length > 0) countTotal += 1;
          if (this.entry.field(TAS_FIELD_STATUS & i) == TAS_VALUE_STATUS_CLOSED) countClosed += 1;
          if (this.entry.field(TAS_FIELD_STATUS & i) == TAS_VALUE_STATUS_RUNNING) countRunning += 1;
          if (this.entry.field(TAS_FIELD_STATUS & i) == TAS_VALUE_STATUS_NOTCLOSED) countNotclosed += 1;
        }
        let d = "zadań " + countTotal + ", w tym " + countClosed + " zamkniętych, " + countRunning + " w trakcie, " + countNotclosed + " nie zamkniętych";
      } else {
        for (let i = 1; i < 10; i++) {
          if (this.entry.field(TAS_FIELD_TASK & i).length > 0) countTotal += 1;
        }
        let d = "zadań: " + countTotal;
      }

      this.entry.set(TAS_FIELD_DESCRIPTION, d);

    }
  } catch (err) {
    log("Salary: " + err);
  }



}


