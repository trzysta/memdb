/*
Baza Memento Database na Androida. Autor Marceli Matynia 300 Sp. z o.o.

! wymagane dodanie budzet.js, common.js
*/

function Salary(e) {

  const LIB_SALARIES_NAME = "Wypłaty";
  const SAL_FIELD_CLOSED = "Rozliczony";
  const SAL_FIELD_CLOSED_VALUE_YES = "Rozliczony";
  const SAL_FIELD_CLOSED_VALUE_NO = "W trakcie rozliczania";
  const SAL_FIELD_CASH_AMOUNT = "Wypłacono w gotówce";
  const SAL_FIELD_CASH_DATE = "Data wypłaty gotówki";
  const SAL_FIELD_WITHDRAWAL_AMOUNT = "Wpłacono na konto";
  const SAL_FIELD_WITHDRAWAL_DATE = "Data przelewu";
  const SAL_FIELD_EMPLOYEE_LINK = "Pracownik";
  const SAL_FIELD_CONTRACT = "Osiedle";
  const SAL_FIELD_SPEND_LINK = "Wydatek";
  const SAL_FIELD_DESCRIPTION = "Uwagi";
  const SAL_FIELD_MONTH = "Miesiąc";
  const SAL_FIELD_PAYER = "Dokonujący wypłaty";
  const SAL_FIELD_ADVANCE_PAYMENT = "Zaliczki";
  const SAL_FIELD_WEEKENDS = "Dni wolne";
  const SAL_FIELD_PAYMENT_TYPE = "Rodzaj wynagrodzenia";
  const SAL_ADD_DESCRIPTION_WITHDRAWAL = " wypłata przelewem za ";
  const SAL_ADD_DESCRIPTION_CASH = " wypłata gotówki za ";
  const SAL_ERR_CLOSED_OR_NOACCESS = "Wpis już rozliczony lub nie masz uprawnień do zamknięcia rozliczenia";
  const SAL_ERR_NO_AMOUNT = "Uzupełnij kwoty wypłat, gotówka lub przelew. Jeśli rozliczenie jest bez wypłaty w polach kwot wstaw zero";
  const SAL_MSG_CLOSING = "Zamykam rozliczenie: ";
  const SAL_MSG_CREATING_SPEND = "Tworzę wydatek: ";
  const SAL_MSG_ADVANCE_PAYMENT = "Szukam zaliczek... ";
  const SAL_MSG_VALIDATION_ERR = "Nie można zapisać, popraw następujące błędy:";
  const SAL_MSG_VALIDATION_ERR_NO_WITHDRWAL = "- podaj datę i kwotę przelewu";
  const SAL_MSG_VALIDATION_ERR_NO_CASH = "- podaj datę i kwotę wypłaty gotówki";
  const SAL_MSG_RUNING_FINDADVANCE = "szukam zaliczek dla wpisu...";

  this.entry = e;
  this.amountCash = 0;
  this.amountWithdrwal = 0;
  this.dateCash = null;
  this.dateWithdrwal = null;
  this.isClosed = false;
  this.entryEmployee = null;
  this.visible = false;
  this.payerName = "";
  this.description = "";
  this.type = "";

  this.libSalaries    = libByName(LIB_SALARIES_NAME);
  this.payerName      = this.entry.field(SAL_FIELD_PAYER);
  this.description    = this.entry.field(SAL_FIELD_DESCRIPTION);
  this.type           = this.entry.field(SAL_FIELD_DESCRIPTION);
  this.visible        = this.entry.field(FIELD_CAN_ACCESS);
  if (this.entry.field(SAL_FIELD_EMPLOYEE_LINK).length > 0)             this.entryEmployee    = this.entry.field(SAL_FIELD_EMPLOYEE_LINK)[0];
  if (!isNaN(this.entry.field(SAL_FIELD_CASH_AMOUNT)))                  this.amountCash       = this.entry.field(SAL_FIELD_CASH_AMOUNT);
  if (!isNaN(this.entry.field(SAL_FIELD_WITHDRAWAL_AMOUNT)))            this.amountWithdrwal  = this.entry.field(SAL_FIELD_WITHDRAWAL_AMOUNT);
  if (this.entry.field(SAL_FIELD_CLOSED) == SAL_FIELD_CLOSED_VALUE_YES) this.isClosed         = true;
  if (this.entry.field(SAL_FIELD_WITHDRAWAL_DATE) != "")                this.dateWithdrwal    = this.entry.field(SAL_FIELD_WITHDRAWAL_DATE);
  if (this.entry.field(SAL_FIELD_CASH_DATE) != "")                      this.dateCash         = this.entry.field(SAL_FIELD_CASH_DATE);

  var hTools = new HuubTools( this.entry )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

  this.closeSettlement = function (reopenEntry) {

    message(SAL_MSG_CLOSING + entryEmployee.name);

    if (canCloseSettlement()) {
      if (!visible) entry.set(FIELD_CAN_ACCESS, true);
      if ((dateWithdrwal != null) && (amountWithdrwal > 0)) {
        var spendWithdrwal = createSpendEntry(amountWithdrwal, dateWithdrwal, withdrawalMaker, description, entryEmployee, true);
        entry.link(SAL_FIELD_SPEND_LINK, spendWithdrwal);
      };
      if ((dateCash != null) && (amountCash > 0)) {
        var spendCash = createSpendEntry(amountCash, dateCash, payerName, description, entryEmployee, false);
        entry.link(SAL_FIELD_SPEND_LINK, spendCash);
      };
      entry.set(FIELD_CAN_ACCESS, visible);
      entry.set(SAL_FIELD_CLOSED, SAL_FIELD_CLOSED_VALUE_YES);
      entry.recalc();
      if (reopenEntry) entry.show();
    } else {
      message(SAL_MSG_CLOSED_OR_NOACCESS);
    }
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

  this.validateBeforeSave = function () {

    var msg = SAL_MSG_VALIDATION_ERR;

    if ((amountWithdrwal > 0) && (dateWithdrwal == null)) {
      msg += "\n" + SAL_MSG_VALIDATION_ERR_NO_WITHDRWAL;
      canSave = false;
    } else {
      canSave = true;
    }

    if ((amountCash > 0) && (dateCash == null)) {
      msg += "\n" + SAL_MSG_VALIDATION_ERR_NO_CASH;
      canSave = false;
    } else {
      canSave = true;
    }

    if (!canSave) { message(msg) };
    return canSave;
  }


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

  /*
  funkcja wyszukująca w bazie wydatków wpisów o zaliczkach i dodająca do wypłaty
  zakres wyszukiwania jest od 18 dnia poprzedniego miesiąca do bieżącej daty
  */

  this.findAdvances = function (show) {

    message(SAL_MSG_RUNING_FINDADVANCE);

    if ((this.entryEmployee != null) && (!this.isClosed)) {
      var spendsAdvanceTypes = new Array(SPE_FIELD_TYPE_VALUE_ADVANCE_CASH, SPE_FIELD_TYPE_VALUE_ADVANCE_WITHDRAWAL);
      var entiesSpend = libSpendings.linksTo(this.entry.field(SAL_FIELD_EMPLOYEE_LINK)[0]);

      for (i = 0; i < entiesSpend.length; i++) {
        var entrySpend = entiesSpend[i];
        var momEntry = moment(entrySpend.field(SPE_FIELD_DATE));
        var momStart = moment().startOf('month').add({ days: 18, months: -1 });
        var momEnd = moment();

        if ((spendsAdvanceTypes.indexOf(entrySpend.field(SPE_FIELD_TYPE)) >= 0) &&
          momEntry.isBetween(momStart, momEnd) &&
          (!isEntryLinked(this.entry.field(SAL_FIELD_ADVANCE_PAYMENT), entrySpend))) {
          this.entry.link(SAL_FIELD_ADVANCE_PAYMENT, entrySpend);
        }
      }
      this.entry.recalc();
      if (show) { this.entry.show() };
    }
  }
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

  this.newEntry_opening = function() {

    var prevMonth = moment().startOf('month').add(-1, 'month');
    var dayEnd = parseInt(moment().startOf('month').add(-1, 'month').endOf('month').format('D'));
    var weekends = new Array();
    var payer = arrNames[arrEditors.indexOf(user().username)];

    this.entry.set(SAL_FIELD_PAYER, payer);
    this.entry.set(SAL_FIELD_MONTH, prevMonth.toDate());

    hTools.setDefault();

    var i = 1;
    while (i <= dayEnd) {
      if (prevMonth.isoWeekday() == 6 || prevMonth.isoWeekday() == 7) { weekends.push(i); };
      prevMonth = prevMonth.add(1, 'day');
      i++;
    };
    this.entry.set(SAL_FIELD_WEEKENDS, weekends);
    
  }


  // prywatne metody
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

  var createSpendEntry = function (amount, date, payer, description, entryEmployee, isWithdrwal) {

    var entrySpend;
    var libSpendings;
    message(SAL_MSG_CREATING_SPEND + amount + ", " + ", " + payer);

    entrySpend = new Object;
    libSpendings = libByName(LIB_SPANDINGS_NAME);
    entrySpend = libSpendings.create(entrySpend);
    entrySpend.set(SPE_FIELD_AMOUNT, (0 - Math.abs(amount)));
    entrySpend.set(SPE_FIELD_DATE, date);
    entrySpend.set(SPE_FIELD_CREATOR, payer);
    entrySpend.set(SPE_FIELD_EMPLOYEE_LINK, entryEmployee);
    entrySpend.set(SPE_FIELD_DESCRIPTION, description);
    if (isWithdrwal) {
      entrySpend.set(SPE_FIELD_TYPE, SPE_FIELD_TYPE_VALUE_EMPLOYEE_WITHDRAWAL);
    } else {
      entrySpend.set(SPE_FIELD_TYPE, SPE_FIELD_TYPE_VALUE_EMPLOYEE_CASH);
    };
    assignToBudget(entrySpend);
    entrySpend.recalc();
    return entrySpend;

  };

  // --------------------------------------------- 

  var canCloseSettlement = function (showAlert) {

    var c = false;
    if ((this.amountCash + this.amountWithdrwal > 0) && (this.isClosed == false)) {
      c = true;
    } else if (showAlert) {
      message(SAL_ERR_CLOSED_OR_NOACCESS)
    };
    return c;
  };

















};















// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^









// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^









function ___copyToMonth(selected, month) {

  var dt = moment(month).startOf('month');
  var dayEnd = parseInt(moment(month).endOf('month').format('D'));
  var weekDays = new Array();

  var i = 1;
  while (i <= dayEnd) {

    if (dt.isoWeekday() == 6 || dt.isoWeekday() == 7) { weekDays.push(i) };
    dt = dt.add(1, 'day');
    i++;
  };


  // kopiowanie
  dt = moment(month).startOf('month');
  message(MSG_UPDATING + " " + selected.length + " " + MSG_ENTRIES);
  for (count = 0; count < selected.length; count++) {

    var entrySource = selected[count];
    var entryTarget = new Object();
    entryTarget[SAL_FIELD_MONTH] = dt.toDate();
    entryTarget[FIELD_EDITOR] = arrEditors;
    entryTarget[SAL_FIELD_WEEKENDS] = weekDays;
    entryTarget[SAL_FIELD_EMPLOYEE_LINK] = entrySource.field(SAL_FIELD_EMPLOYEE_LINK)[0];
    entryTarget[SAL_FIELD_CONTRACT] = entrySource.field(SAL_FIELD_CONTRACT)[0];
    entryTarget[SAL_FIELD_PAYMENT_TYPE] = entrySource.field(SAL_FIELD_PAYMENT_TYPE);
    entryTarget[SAL_FIELD_PAYER] = entrySource.field(SAL_FIELD_PAYER);
    entryTarget[SAL_FIELD_CLOSED] = SAL_FIELD_CLOSED_VALUE_NO;

    entryTarget = libSalaries.create(entryTarget);
    findADVANCE(entryTarget, false);
  }

  message(MSG_FINISHED);

}








// ****
