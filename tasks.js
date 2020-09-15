const Task = function (e) {

  log("Task: " + String(e));
  let err;
  try {

    this.entry = e;
    this.status = this.entry.field(TAS_FIELD_WEEKSTATUS);
    this.dateStart = this.entry.field(TAS_FIELD_DATE_START);
    this.dateEnd = moment(this.dateStart).add(4, 'days').toDate();

    for (let i = 1; i < 10; i++) {
      if (this.entry.field(TAS_FIELD_TASK + i).length > 0) {
        let task = {
          content: this.entry.field(TAS_FIELD_TASK + i),
          status: this.entry.field(TAS_FIELD_STATUS + i),
          notes: this.entry.field(TAS_FIELD_DESCRIPTION + i)
        };
        this.tasks.push(task);
      }
    }

    // this.postSaveEntry = function () {

    //   const dtStart = this.entry.field(TAS_FIELD_DATE_START);
    //   const dtEnd = moment(dtStart).add(4, 'days').toDate();
    //   const weekNr = moment(dtStart).week();

    //   let countTotal = 0;
    //   let countClosed = 0;
    //   let countRunning = 0;
    //   let countNotclosed = 0;

    //   this.entry.set(TAS_FIELD_WEEK, weekNr)
    //   this.entry.set(TAS_FIELD_DATE_END, dtEnd);
    //   let desc = "zadań: ";

    //   switch (this.status) {
    //     case TAS_VALUE_WEEKSTATUS_CLOSED:

    //       for (let i = 1; i < 10; i++) {
    //         if (this.entry.field(TAS_FIELD_TASK + i).length > 0) countTotal += 1;
    //         if (this.entry.field(TAS_FIELD_STATUS + i) == TAS_VALUE_STATUS_CLOSED) { countClosed += 1 };
    //         if (this.entry.field(TAS_FIELD_STATUS + i) == TAS_VALUE_STATUS_RUNNING) { countRunning += 1 };
    //         if (this.entry.field(TAS_FIELD_STATUS + i) == TAS_VALUE_STATUS_NOTCLOSED) { countNotclosed += 1 };
    //       }
    //       desc += countTotal + "   (" + countClosed + " wykonane, " + countRunning + " w trakcie, " + countNotclosed + " nie wykonane)";
    //       break;

    //     default:
    //       break;
    //   }




    //   if (this.entry.field(TAS_FIELD_WEEKSTATUS) == TAS_VALUE_WEEKSTATUS_CLOSED) {



    //   } else {
    //     for (let i = 1; i < 10; i++) {
    //       if (this.entry.field(TAS_FIELD_TASK + i).length > 0) countTotal += 1;
    //     }
    //     desc += countTotal;
    //   }

    //   this.entry.set(TAS_FIELD_TASKCOUNT, countTotal);
    //   this.entry.set(TAS_FIELD_DESCRIPTION, desc);
    //   this.entry.set(TAS_FIELD_COORDINATOR, this.entry.field(TAS_FIELD_CONTRACT)[0].field(CON_FIELD_COORDINATOR));

    //   message(this.entry.field(TAS_FIELD_CONTRACT)[0].field(CON_FIELD_RAPORT_RECIPIENT));

    //   this.entry.set(TAS_FIELD_RAPORT_RECIPIENT, this.entry.field(TAS_FIELD_CONTRACT)[0].field(CON_FIELD_RAPORT_RECIPIENT))
    //   this.entry.recalc();

    // }



    this.prepareEmail = function () {

      let subject = "Zadania na nadchodzący tydzień";
      let body = "";

      for (let i = 1; i < this.tasks.length; i++) {

        body += "Zadanie " + i + " : " + this.tasks[i].content + "\n" +
          " ma status: " + this.tasks[i].status + "\n" +
          " opis wykonania: " + this.tasks[i].notes + "\n\n\n\n";
      }
      this.entry.field(TAS_FIELD_CONTRACT)[0].field(CON_FIELD_RAPORT_RECIPIENT).sendEmail(subject, body);
    }


  } catch (err) {
    log("Task: " + err);
  }



}


