
try {

  const Employee = function (e) {
    log("SUCCESS employee.js::Employee: " + e.name);

    this.holidayUsed = 0;
    this.holidayTotal = 0;
    this.holidayLeft = 0;
    this.entry = e;

    this.holidayUsed = this.entry.field(EMP_FIELD_HOLIDAY_USED);
    this.holidayTotal = this.entry.field(EMP_FIELD_HOLIDAY_TOTAL);
    this.holidayLeft = this.holidayTotal - this.holidayUsed;

    this.recalcHoliday = function () {
      log("SUCCESS recalcHoliday start");

      try {
        let libSalary = libByName(LIB_SALARIES_NAME);
        let arrSalaries = libSalary.linksTo(e);
        let newHolidayUsed = 0;

        for (let i = 0; i <= arrSalaries.length; i++) {
          log("VERB ______ " + String(arrSalaries[i]));
          newHolidayUsed += arrSalaries[i].field(SAL_FIELD_HOLIDAY).length;
        }

        this.holidayUsed = newHolidayUsed;
        this.holidayLeft = this.holidayTotal - this.holidayUsed;
        this.entry.set(EMP_FIELD_HOLIDAY_USED, this.holidayUsed)
        this.entry.set(EMP_FIELD_HOLIDAY_TOTAL, this.holidayTotal)
        this.entry.set(EMP_FIELD_HOLIDAY_LEFT, this.holidayLeft)
        message(EMP_MSG_HOLIDAY_RECALCED + this.holidayUsed);
        log("SUCCESS recalcHoliday: total:" + this.holidayTotal + "; used:" + this.holidayUsed + "; left:" + this.holidayLeft);

      } catch (err) {
        log("ERR employee.js::Employee::recalcHoliday: " + err);
      }
    }
  }

} catch (err) {
  log("ERR employee.js: " + err);
}


