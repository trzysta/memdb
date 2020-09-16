

const Task = function (e) {

  log("Task: " + String(e.name));

  try {

    this.entry = e;
    this.status = this.entry.field(TAS_FIELD_WEEKSTATUS);
    this.dateStart = this.entry.field(TAS_FIELD_DATE_START);
    this.dateEnd = moment(this.dateStart).add(4, 'days').toDate();
    this.tasks = new Array;
    this.entryContract = this.entry.field(TAS_FIELD_CONTRACT)[0];
    this.weekNr = this.entry.field(TAS_FIELD_WEEK);
    this.libTasks = libByName(LIB_TASKS_NAME);

    for (let i = 1; i < 10; i++) {
      if (this.entry.field(TAS_FIELD_TASK + i).length > 0) {
        this.tasks[this.tasks.length] = {
          content: this.entry.field(TAS_FIELD_TASK + i),
          status: this.entry.field(TAS_FIELD_STATUS + i),
          notes: this.entry.field(TAS_FIELD_NOTES + i)
        };
        // log("długość" + String(this.tasks[this.tasks.length]));
      }
    }



    // * * * * * * * * * * * * * * * * * * * *
    this.closeWeek = function () {
      // sprawdź czy istnieje już dokuent na przyszły tydzien - numer tygodnia i osiedle
      //   - jeśli istnieje i nie ma zadań do sprawdzenia to
      //     - dopisz wszystkie - sprawdż teksty czy są równe(OCZYŚĆ, MAŁĘLITERY) i jak nie to dopisz do pustego
      //   - jeśli nie istnieje zrób nowy
      //   - otówrz
      try {

        // let query = (parseInt(this.weekNr) + 1) + TAS_VALUE_NAME + this.entryContract.name;
        // this.entryNextWeek = this.libTasks.findByKey(query);
        // log("search");

        this.entryNextWeek = this.libTasks.linksTo(this.entry)[0];

        if (this.entryNextWeek === undefined || this.entryNextWeek === null) {
          this.createNewWeekplan();

        } else {

          log(this.entryNextWeek.name + ' ' + this.entry.name);
          for (let i = 0; i < this.tasks.length; i++) {
            let n = TAS_FIELD_TASK_PREVWEEK + (i + 1);
            log(this.entryNextWeek.field(n) + " " + this.tasks[i].content);
          }
        }

        this.entryNextWeek.recalc();
        this.entryNextWeek.show();
        this.entry.set(TAS_FIELD_WEEKSTATUS, TAS_VALUE_WEEKSTATUS_CLOSED);

      } catch (err) {
        log("Task::closeWeek:" + err);
      }
    }



    // * * * * * * * * * * * * * * * * * * * *
    this.createNewWeekplan = function () {
      try {

        this.entryNextWeek = new Object();
        this.entryNextWeek = this.libTasks.create(this.entryNextWeek);
        this.entryNextWeek.set(TAS_FIELD_WEEKSTATUS, TAS_VALUE_WEEKSTATUS_RUNNING);
        this.entryNextWeek.set(TAS_FIELD_CONTRACT, this.entryContract);
        this.entryNextWeek.set(TAS_FIELD_DATE_START, moment(this.dateStart).add(7, 'days').toDate());
        this.entryNextWeek.set(TAS_FIELD_DATE_END, moment(this.dateStart).add(11, 'days').toDate());
        this.entryNextWeek.set(TAS_FIELD_WEEK, moment(this.dateStart).add(7, 'days').week());
        this.entryNextWeek.set(TAS_FIELD_COORDINATOR, this.entry.field(TAS_FIELD_COORDINATOR));
        this.entryNextWeek.set(TAS_FIELD_TASKCOUNT_PREVWEEK, this.tasks.length);

        for (let i = 0; i < this.tasks.length; i++) {
          this.entryNextWeek.set(TAS_FIELD_TASK_PREVWEEK + (i + 1), this.tasks[i].content);
        };
        this.entryNextWeek.link(TAS_FIELD_PREVWEEK, this.entry);

      } catch (err) {
        log("Task::createNewWeekplan:" + err);
      }
    }

    // * * * * * * * * * * * * * * * * * * * *
    this.prepareEmail = function () {

      log("prepareEmail");
      let subject = "Zadania na tydzień " + moment(this.dateStart).format("DD-MM-YYY");
      let body = "";

      for (let i = 1; i < this.tasks.length; i++) {

        body += "* * *\n" +
          "zadanie " + i + ": " + this.tasks[i].content + "\n" +
          " ma status: " + this.tasks[i].status + "\n" +
          " opis wykonania: " + this.tasks[i].notes + "\n\n\n";
      }
      this.entryContract.field(CON_FIELD_RAPORT_RECIPIENT).sendEmail(subject, body);
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

  } catch (err) {
    log("Task: " + err);
  }



}


