const Task = function (e) {

  log("Task: " + String(e));
  let err;
  this.entry = e;

  try {

    this.saveEntry = function () {

      this.entry.recalc();

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
      let desc = "zadań: ";

      if (this.entry.field(TAS_FIELD_WEEKSTATUS) == TAS_VALUE_WEEKSTATUS_CLOSED) {

        for (let i = 1; i < 10; i++) {
          if (this.entry.field(TAS_FIELD_TASK + i).length > 0) countTotal += 1;
          if (this.entry.field(TAS_FIELD_STATUS + i) == TAS_VALUE_STATUS_CLOSED) countClosed += 1;
          if (this.entry.field(TAS_FIELD_STATUS + i) == TAS_VALUE_STATUS_RUNNING) countRunning += 1;
          if (this.entry.field(TAS_FIELD_STATUS + i) == TAS_VALUE_STATUS_NOTCLOSED) countNotclosed += 1;
        };
        desc += countTotal + " (" + countClosed + " zamkn. | " + countRunning + " w trakcie | " + countNotclosed + " nie zamkn.)";
      } else {

        for (let i = 1; i < 10; i++) {
          if (this.entry.field(TAS_FIELD_TASK + i).length > 0) countTotal += 1;
        }
        desc += countTotal;
      }

      this.entry.set(TAS_FIELD_TASKCOUNT, countTotal);
      this.entry.set(TAS_FIELD_DESCRIPTION, desc);

    }
  } catch (err) {
    log("Salary: " + err);
  }



}


