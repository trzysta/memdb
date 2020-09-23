

const Task = function (e) {

    log("Task: start");

    this.entry = e;
    this.dateStart = this.entry.field(TAS_FIELD_DATE_START);
    this.dateEnd = moment(this.dateStart).add(4, 'days').toDate();
    this.tasks = new Array;
    this.tasksPrevWeek = new Array;
    this.entryContract = this.entry.field(TAS_FIELD_CONTRACT)[0];
    this.weekNr = this.entry.field(TAS_FIELD_WEEK);
    this.libTasks = libByName(LIB_TASKS_NAME);

    for (let i = 1; i < 10; i++) {
        if (this.entry.field(TAS_FIELD_TASK + i).length > 0) {
            this.tasks[this.tasks.length] =
            {
                content: this.entry.field(TAS_FIELD_TASK + i)
            }
        }

        if (this.entry.field(TAS_FIELD_TASKPREVWEEK + i).length > 0) {
            this.tasksPrevWeek[this.tasksPrevWeek.length] =
            {
                content: this.entry.field(TAS_FIELD_TASKPREVWEEK + i),
                notes: this.entry.field(TAS_FIELD_NOTESPREVWEEK + i)
            }
        }
    };


    // * * * * * * * * * * * * * * * * * * * *
    this.closeWeek = function () {

        this.entryNextWeek = this.libTasks.linksTo(this.entry)[0];
        if (this.entryNextWeek === undefined || this.entryNextWeek === null) {
            this.createNewWeekplan();
        } else {
            log(this.entryNextWeek.name + ' ' + this.entry.name);
            for (let i = 0; i < this.tasks.length; i++) {
                this.entryNextWeek.set(TAS_FIELD_TASKPREVWEEK + (i + 1), this.tasks[i].content);
            }
        }

        this.entryNextWeek.recalc();
        this.entryNextWeek.show();
    }

    // * * * * * * * * * * * * * * * * * * * *
    this.createNewWeekplan = function () {

        this.entryNextWeek = new Object();
        this.entryNextWeek = this.libTasks.create(this.entryNextWeek);
        this.entryNextWeek.set(TAS_FIELD_CONTRACT, this.entryContract);
        this.entryNextWeek.set(TAS_FIELD_DATE_START, moment(this.dateStart).add(7, 'days').toDate());
        this.entryNextWeek.set(TAS_FIELD_DATE_END, moment(this.dateStart).add(11, 'days').toDate());
        this.entryNextWeek.set(TAS_FIELD_WEEK, moment(this.dateStart).add(7, 'days').week());
        this.entryNextWeek.set(TAS_FIELD_COORDINATOR, this.entry.field(TAS_FIELD_COORDINATOR));
        this.entryNextWeek.set(TAS_FIELD_TASKCOUNT_PREVWEEK, this.tasks.length);

        for (let i = 0; i < this.tasks.length; i++) {
            this.entryNextWeek.set(TAS_FIELD_TASKPREVWEEK + (i + 1), this.tasks[i].content);
        };
        this.entryNextWeek.link(TAS_FIELD_PREVWEEK, this.entry);

    };

    // * * * * * * * * * * * * * * * * * * * *
    this.prepareEmail = function () {

        log("prepareEmail");

        let subject = TAS_VALUE_EMAIL_SUBJECT.toString();
        let body = TAS_VALUE_EMAIL_PLAN.toString() + TAS_VALUE_EMAIL_PREVWEEK.toString();
        let bodyTasks = "";
        let bodyPrevTasks = "";
        let recip = this.entryContract.field(CON_FIELD_RAPORT_RECIPIENT);

        for (let i = 0; i < this.tasks.length; i++) {
            bodyTasks += (i + 1) + ") " + this.tasks[i].content + "\n\n";
        };
        for (let i = 0; i < this.tasksPrevWeek.length; i++) {
            bodyPrevTasks += (i + 1) + ") " + this.tasksPrevWeek[i].content + "\n" +
                TAS_VALUE_EMAIL_PREVWEEK_NOTES + this.tasksPrevWeek[i].notes + "\n\n"
        };

        subject = subject.replace("$WEEK_NR", this.weekNr);
        subject = subject.replace("$DATE_START", moment(this.dateStart).format("DD.MM.YYYY"));
        subject = subject.replace("$DATE_END", moment(this.dateEnd).format("DD.MM.YYYY"));
        subject = subject.replace("$CONTRACT", this.entryContract.name);

        body = body.replace("$WEEK_NR", this.weekNr);
        body = body.replace("$DATE_START", moment(this.dateStart).format("DD.MM.YYYY"));
        body = body.replace("$DATE_END", moment(this.dateEnd).format("DD.MM.YYYY"));
        body = body.replace("$TASKS", bodyTasks);
        body = body.replace("$PREV_TASK_ADD", this.entry.field(TAS_FIELD_TASKPREVWEEK_ADDITIONAL));
        body = body.replace("$PREV_TASKS", bodyPrevTasks);

        this.entry.set(TAS_FIELD_EMAILBODY, body);
        this.entry.set(TAS_FIELD_EMAILSUBJECT, subject);

        let intentMail = intent("android.intent.action.SENDTO");
        log(act);
        let act = "mailto:" + recip + "?cc=" + MAIL_CC_RECIPIENTS + "&subject=" + subject + "&body=" + body;
        intentMail.data(act);
        intentMail.send();

    }

    // * * * * * * * * * * * * * * * * * * * *
    this.beforeSavingEntry = function () {

        this.entry.set(TAS_FIELD_TASKCOUNT, this.tasks.length + 1);
        this.entry.set(TAS_FIELD_TASKCOUNT_PREVWEEK, this.tasksPrevWeek.length + 1);
        this.entry.set(TAS_FIELD_DATE_END, this.dateEnd.toDate());
        this.entry.set(TAS_FIELD_WEEK, this.weekNr);
        this.entry.set(TAS_FIELD_COORDINATOR, this.entryContract.field(CON_FIELD_COORDINATOR));

    }

    // * * * * * * * * * * * * * * * * * * * *

}



