const Employee = function (e) {

  this.holidayUsed = 0;
  let arrSalaries = new Array;

  if (e !== undefined) {
    let entry = e;
    this.holidayUsed = entry.field(EMP_FIELD_HOLIDAY_USED);
  }

  this.recalcHoliday = function (libSalary) {

    arrSalaries = libSalary.linksTo(entry);
    let newHolidayUsed = 0;
    for (let i = 0; i <= arrSalaries.length; i++) {
      if (arrSalaries[i] !== undefined) {
        newHolidayUsed += arrSalaries[i].field(SAL_FIELD_HOLIDAY).length
      }
    }

    this.holidayUsed = newHolidayUsed;

    entry.set(EMP_FIELD_HOLIDAY_USED, this.holidayUsed)

    message(EMP_MSG_HOLIDAY_RECALCED + this.holidayUsed);

  }
}