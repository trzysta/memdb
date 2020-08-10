
const Task = function (e) {

  log("Task: " + String(e));
  let err;

  const entry = e;

  try {

    const setDefault = function (currentUser) {

      try {

        this.entry.set(TAS_FIELD_COORDINATOR,

          TAS_FIELD_COORDINATOR


        );
        this.entry.set(SAL_FIELD_MONTH, prevMonth.toDate());



      } catch (err) {
        log("Task::setDefault " + err);
      }

    }


    const saveEntry = function () {
      this.entry.set("Author", this.entry.author)
    }

  } catch (err) {
    log("Salary: " + err);
  }



}


