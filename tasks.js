const Task = function (e) {

  log("Task: " + String(e));
  let err;
  this.entry = e;

  try {

    this.postSaveEntry = function () {

      const dtStart = this.entry.field(TAS_FIELD_DATE_START);
      const dtEnd = moment(dtStart).add(4, 'days').toDate();
      const weekNr = moment(dtStart).week();

      let countTotal = 0;
      let countClosed = 0;
      let countRunning = 0;
      let countNotclosed = 0;

      this.entry.set(TAS_FIELD_WEEK, weekNr)
      this.entry.set(TAS_FIELD_DATE_END, dtEnd);
      let desc = "zadań: ";

      if (this.entry.field(TAS_FIELD_WEEKSTATUS) == TAS_VALUE_WEEKSTATUS_CLOSED) {

        for (let i = 1; i < 10; i++) {
          if (this.entry.field(TAS_FIELD_TASK + i).length > 0) countTotal += 1;
          if (this.entry.field(TAS_FIELD_STATUS + i) == TAS_VALUE_STATUS_CLOSED) { countClosed += 1 };
          if (this.entry.field(TAS_FIELD_STATUS + i) == TAS_VALUE_STATUS_RUNNING) { countRunning += 1 };
          if (this.entry.field(TAS_FIELD_STATUS + i) == TAS_VALUE_STATUS_NOTCLOSED) { countNotclosed += 1 };
        }
        desc += countTotal + "   (" + countClosed + " wykonane, " + countRunning + " w trakcie, " + countNotclosed + " nie wykonane)";

      } else {
        for (let i = 1; i < 10; i++) {
          if (this.entry.field(TAS_FIELD_TASK + i).length > 0) countTotal += 1;
        }
        desc += countTotal;
      }

      this.entry.set(TAS_FIELD_TASKCOUNT, countTotal);
      this.entry.set(TAS_FIELD_DESCRIPTION, desc);
      this.entry.set(TAS_FIELD_COORDINATOR, this.entry.field(TAS_FIELD_CONTRACT)[0].field(CON_FIELD_COORDINATOR));

      message(this.entry.field(TAS_FIELD_CONTRACT)[0].field(CON_FIELD_RAPORT_RECIPIENT));

      this.entry.set(TAS_FIELD_RAPORT_RECIPIENT, this.entry.field(TAS_FIELD_CONTRACT)[0].field(CON_FIELD_RAPORT_RECIPIENT))
      this.entry.recalc();

    }



    this.prepareEmail = function () {

      this.entry.field(TAS_FIELD_CONTRACT)[0].field(CON_FIELD_RAPORT_RECIPIENT).sendEmail("temat testowy", "to jest wiadomość testowa");

    }




  } catch (err) {
    log("Task: " + err);
  }



}


