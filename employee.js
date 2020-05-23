
try {

  const Employee = function (e) {
    log("Employee: " + String(e));

    this.holidayUsed = 0;
    this.holidayTotal = 0;
    this.holidayLeft = 0;

    if (e !== undefined) {
      this.entry = e;
      this.holidayUsed = this.entry.field(EMP_FIELD_HOLIDAY_USED);
      this.holidayTotal = this.entry.field(EMP_FIELD_HOLIDAY_TOTAL);
      this.holidayLeft = this.holidayTotal - this.holidayUsed;
    }

    this.recalcHoliday = function () {
      log("recalcHoliday");

      try {
        let libSalary = libByName(LIB_SALARIES_NAME);
        let salaries = libSalary.linksTo(entry);
        let newHolidayUsed = 0;

        for (let i = 0; i <= salaries.length; i++) {
          if (salaries[i] !== undefined) {
            newHolidayUsed += arrSalaries[i].field(SAL_FIELD_HOLIDAY).length
          }
        }

        this.holidayUsed = newHolidayUsed;
        this.holidayLeft = this.holidayTotal - this.holidayUsed;
        this.entry.set(EMP_FIELD_HOLIDAY_USED, this.holidayUsed)
        this.entry.set(EMP_FIELD_HOLIDAY_TOTAL, this.holidayTotal)
        this.entry.set(EMP_FIELD_HOLIDAY_LEFT, this.holidayLeft)
        message(EMP_MSG_HOLIDAY_RECALCED + this.holidayUsed);
        log("recalcHoliday: total:" + this.holidayTotal + "; used:" + this.holidayUsed + "; left:" + this.holidayLeft);

      } catch (er) {
        log("recalcHoliday: " + err);
      }
    }
  }






} catch (err) {
  log("employee.js: " + err);
}