

const Task = function (e) {

  log("Task: " + String(e.name));

  try {

    this.entry = e;
    this.status = this.entry.field(TAS_FIELD_WEEKSTATUS);
    this.dateStart = this.entry.field(TAS_FIELD_DATE_START);
    this.dateEnd = moment(this.dateStart).add(4, 'days').toDate();
    this.tasks = new Array;
    this.tasksPrevWeek = new Array;
    this.entryContract = this.entry.field(TAS_FIELD_CONTRACT)[0];
    this.weekNr = this.entry.field(TAS_FIELD_WEEK);
    this.libTasks = libByName(LIB_TASKS_NAME);

    for (let i = 1; i < 10; i++) {

      if (this.entry.field(TAS_FIELD_TASK + i).length > 0) {

        this.tasks[this.tasks.length] = {

          content: this.entry.field(TAS_FIELD_TASK + i)

        }

      }

      if (this.entry.field(TAS_FIELD_TASK_PREVWEEK + i).length > 0) {

        this.tasksPrevWeek[this.tasksPrevWeek.length] = {

          content: this.entry.field(AS_FIELD_TASKPREVWEEK + i),
          status: this.entry.field(TAS_FIELD_STATUSPREVWEEK + i),
          notes: this.entry.field(TAS_FIELD_NOTESPREVWEEK + i)

        }

      }

    }

    // * * * * * * * * * * * * * * * * * * * *
    this.closeWeek = function () {

      this.entryNextWeek = this.libTasks.linksTo(this.entry)[0];

      if (this.entryNextWeek === undefined || this.entryNextWeek === null) {

        this.createNewWeekplan();

      } else {

        log(this.entryNextWeek.name + ' ' + this.entry.name);

        for (let i = 0; i < this.tasks.length; i++) {

          this.entryNextWeek.set(TAS_FIELD_TASK_PREVWEEK + (i + 1), this.tasks[i].content);

        }

      }

      this.entryNextWeek.set(TAS_FIELD_WEEKSTATUS, TAS_VALUE_WEEKSTATUS_RUNNING);
      this.entry.set(TAS_FIELD_WEEKSTATUS, TAS_VALUE_WEEKSTATUS_CLOSED);
      this.entryNextWeek.recalc();
      this.entryNextWeek.show();

    }


    // * * * * * * * * * * * * * * * * * * * *
    this.createNewWeekplan = function () {

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

    };

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

    // * * * * * * * * * * * * * * * * * * * *
    this.beforeSavingEntry = function () {

      this.entry.set(TAS_FIELD_TASKCOUNT, this.tasks.length + 1);
      this.entry.set(TAS_FIELD_TASKCOUNT_PREVWEEK, this.tasksPrevWeek.length + 1);

    }


  } catch (err) {
    log("Task: " + err);
  }
}



