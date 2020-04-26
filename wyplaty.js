/*
Baza Memento Database na Androida. Autor Marceli Matynia 300 Sp. z o.o.

! wymagane dodanie budzet.js
*/


const SAL_FIELD_CLOSED              = "Rozliczony";
const SAL_FIELD_CLOSED_VALUE_YES    = "Rozliczony";
const SAL_FIELD_CLOSED_VALUE_NO     = "W trakcie rozliczania";
const SAL_FIELD_CASH_AMOUNT         = "Wypłacono w gotówce";
const SAL_FIELD_CASH_DATE           = "Data wypłaty gotówki";
const SAL_FIELD_WITHDRAWAL_AMOUNT   = "Wpłacono na konto";
const SAL_FIELD_WITHDRAWAL_DATE     = "Data przelewu";
const SAL_FIELD_EMPLOYEE_LINK       = "Pracownik";
const SAL_FIELD_CONTRACT            = "Osiedle";
const SAL_FIELD_SPEND_LINK          = "Wydatek";
const SAL_FIELD_DESCRIPTION         = "Uwagi";
const SAL_FIELD_MONTH               = "Miesiąc";
const SAL_FIELD_PAYER               = "Dokonujący wypłaty";
const SAL_FIELD_ADVANCE_PAYMENT     = "Zaliczki";
const SAL_FIELD_WEEKENDS            = "Dni wolne";
const SAL_FIELD_PAYMENT_TYPE        = "Rodzaj wynagrodzenia";

const SAL_ADD_DESCRIPTION_WITHDRAWAL = " wypłata przelewem za ";
const SAL_ADD_DESCRIPTION_CASH      = " wypłata gotówki za ";

const SAL_ERR_CLOSED_OR_NOACCESS    = "Wpis już rozliczony lub nie masz uprawnień do zamknięcia rozliczenia";
const SAL_ERR_NO_AMOUNT             = "Uzupełnij kwoty wypłat, gotówka lub przelew. Jeśli rozliczenie jest bez wypłaty w polach kwot wstaw zero";
const SAL_MSG_CLOSING               = "Zamykam rozliczenie: ";
const SAL_MSG_CREATING_SPEND        = "Tworzę wydatek: ";
const SAL_MSG_ADVANCE_PAYMENT       = "Szukam zaliczek... ";
const SAL_MSG_VALIDATION_ERR        = "Nie można zapisać, popraw następujące błędy:";
const SAL_MSG_VALIDATION_ERR_NO_WITHDRWAL = "- podaj datę i kwotę przelewu";
const SAL_MSG_VALIDATION_ERR_NO_CASH = "- podaj datę i kwotę wypłaty gotówki";
const SAL_MSG_RUNING_FINDADVANCEPAYMENT = "szukam zaliczek dla wpisu...";


/* 
  ---------------------------------------------
   FUNCKJE PUBLICZNE, TZN. UMOWNIE PUBLICZNE 
   WYWOŁYWANE WPROST Z BAZY
  ---------------------------------------------
*/


function Salary (e) {

  this.entrySalary       = null;
  this.amountCash        = 0;
  this.amountWithdrwal   = 0;
  this.dateCash          = null;
  this.dateWithdrwal     = null;
  this.isClosed          = false;
  this.entryEmployee     = null;
  this.visible           = false;
  this.payerName         = "";
  this.description       = "";
  this.type              = "";
  this.libSalaries       = null;

  this.closeSettlement = function() {
    message("aaaaaaa");
  }

  this.canCloseSettlement = function() {
  }

  this.setValues  = function() {
  }

  this.validateBeforeSave = function() {
  }




}









function closeSettlement(e, reopenEntry) {
  entrySalary = e;
  setValues();
  message( SAL_MSG_CLOSING + entryEmployee.name );

  if (canCloseSettlement()) {
    if (!visible) entry.set(FIELD_CAN_ACCESS, true);

    if ((dateWithdrwal != null) && (amountWithdrwal > 0)) {
      var spendWithdrwal = createSpendEntry(amountWithdrwal, dateWithdrwal, withdrawalMaker, description, entryEmployee, true);
      entrySalary.link( SAL_FIELD_SPEND_LINK, spendWithdrwal );
    };

    if ((dateCash != null) && (amountCash > 0)) {
      var spendCash = createSpendEntry(amountCash, dateCash, payerName, description, entryEmployee, false);
      entrySalary.link( SAL_FIELD_SPEND_LINK, spendCash );
    };
    entrySalary.set(FIELD_CAN_ACCESS, visible);
    entrySalary.set(SAL_FIELD_CLOSED, SAL_FIELD_CLOSED_VALUE_YES);
    entrySalary.recalc();
    if (reopenEntry) entrySalary.show();
  } else {
    message (SAL_MSG_CLOSED_OR_NOACCESS);
  }
};

// ---------------------------------------------

function validateBeforeSave( e ) {

  entrySalary = e;
  setValues();
  var msg = SAL_MSG_VALIDATION_ERR;

  if ( (amountWithdrwal > 0) && (dateWithdrwal == null) ) {
    msg += "\n" + SAL_MSG_VALIDATION_ERR_NO_WITHDRWAL;
    canSave = false;
  } else {
    canSave = true;
  }

  if ( (amountCash > 0) && (dateCash == null) ) {
    msg += "\n" + SAL_MSG_VALIDATION_ERR_NO_CASH;
    canSave = false;
  } else {
    canSave = true;
  }

  if (!canSave) { message(msg) };
  return canSave;

}






// ---------------------------------------------


function createSpendEntry ( amount, date, payer, description, entryEmployee, isWithdrwal ) {

    var entry;
    var libSpendings; 
    message( SAL_MSG_CREATING_SPEND + amount + ", " + ", " + payer );

    entry = new Object;
    libSpendings = libByName(LIB_SPANDINGS_NAME);
    entry = libSpendings.create(entry);
    entry.set(SPE_FIELD_AMOUNT, (0 - Math.abs(amount)));
    entry.set(SPE_FIELD_DATE, date);
    entry.set(SPE_FIELD_CREATOR, payer);                        
    entry.set(SPE_FIELD_EMPLOYEE_LINK, entryEmployee );
    entry.set(SPE_FIELD_DESCRIPTION, description);
    if (isWithdrwal) {
      entry.set(SPE_FIELD_TYPE, SPE_FIELD_TYPE_VALUE_EMPLOYEE_WITHDRAWAL);
    } else {
      entry.set(SPE_FIELD_TYPE, SPE_FIELD_TYPE_VALUE_EMPLOYEE_CASH);
    };
    assignToBudget(entry); 

    entry.recalc();
  return entry;     

};

// ---------------------------------------------

function setValues() {

  libSalaries = libByName(LIB_SALARIES_NAME);
  payerName = entrySalary.field(SAL_FIELD_PAYER);
  description = entrySalary.field(SAL_FIELD_DESCRIPTION);
  type = entrySalary.field(SAL_FIELD_DESCRIPTION);
  visible = entrySalary.field(FIELD_CAN_ACCESS);
  if (entrySalary.field(SAL_FIELD_EMPLOYEE_LINK).length > 0)        entryEmployee = entrySalary.field(SAL_FIELD_EMPLOYEE_LINK)[0];
  if (!isNaN(entrySalary.field(SAL_FIELD_CASH_AMOUNT)))             amountCash = entrySalary.field(SAL_FIELD_CASH_AMOUNT);
  if (!isNaN(entrySalary.field(SAL_FIELD_WITHDRAWAL_AMOUNT)))       amountWithdrwal = entrySalary.field(SAL_FIELD_WITHDRAWAL_AMOUNT);
  if (entrySalary.field(SAL_FIELD_CLOSED) == SAL_FIELD_CLOSED_VALUE_YES) isClosed = true;
  if (entrySalary.field(SAL_FIELD_WITHDRAWAL_DATE) != "")           dateWithdrwal = entrySalary.field(SAL_FIELD_WITHDRAWAL_DATE);
  if (entrySalary.field(SAL_FIELD_CASH_DATE) != "")                 dateCash = entrySalary.field(SAL_FIELD_CASH_DATE);

};

// --------------------------------------------- 

function canCloseSettlement(showAlert) {
  
  var c = false;
  if ((amountCash + amountWithdrwal > 0) && (isClosed == false)) {
    c = true;
  } else if (showAlert) {
    message( SAL_ERR_CLOSED_OR_NOACCESS )
  }; 
  return c;
};











// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
/*
funkcja wyszukująca w bazie wydatków wpisów o zaliczkach i dodająca do wypłaty
zakres wyszukiwania jest od 18 dnia poprzedniego miesiąca do bieżącej daty
*/

function ___findAdvancePayment( entryPayout, show ) {

  //var entryPayout = entry();

  message (SAL_MSG_RUNING_FINDADVANCEPAYMENT);
  var arrAdvancePaymentSpendType = new Array(SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_CASH, SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_WITHDRAWAL);

  if ( (entryPayout.field(SAL_FIELD_EMPLOYEE_LINK).length > 0) &&
       (entryPayout.field(SAL_FIELD_CLOSED) != SAL_FIELD_CLOSED_VALUE_YES) ) {

     message( entryPayout.field(SAL_FIELD_EMPLOYEE_LINK)[0].field(E_FIELD_FULLNAME) );
     var entsSpend = libSpendings.linksTo( entryPayout.field(SAL_FIELD_EMPLOYEE_LINK)[0] );
     for (i=0; i < entsSpend.length; i++ ) {
        var entrySpend = entsSpend[i];
        var momEntry = moment( entrySpend.field(SPE_FIELD_DATE) );
        var momStart = moment().startOf('month').add({days:18,months:-1});
        var momEnd = moment();

        if ( (arrAdvancePaymentSpendType.indexOf(entrySpend.field(SPE_FIELD_TYPE)) >= 0 ) &&
              momEntry.isBetween(momStart, momEnd) &&
              (!isEntryLinked( entryPayout.field(SAL_FIELD_ADVANCE_PAYMENT), entrySpend))) {
              entryPayout.link( SAL_FIELD_ADVANCE_PAYMENT, entrySpend );
        }
     }
  entryPayout.recalc();
  if (show) { entryPayout.show() };
  }
}







// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^

function ___newPayoutOpening( entryPayout ) {

  if ( entryPayout != undefined ) {
    var prevMonth   = moment().startOf('month').add(-1, 'month');
    var dayEnd      = parseInt(moment().startOf('month').add(-1, 'month').endOf('month').format('D'));
    var weekends    = new Array();
    var payer       = arrNames[ arrEditors.indexOf( user().username ) ];

    entryPayout.set( SAL_FIELD_PAYER, payer );
    entryPayout.set( SAL_FIELD_MONTH, prevMonth.toDate() );

    setDefault( entryPayout );

    var i = 1;
    while ( i <= dayEnd ) {
      if ( prevMonth.isoWeekday() == 6 || prevMonth.isoWeekday() == 7 ) {   weekends.push(i); };
      prevMonth = prevMonth.add(1, 'day');
      i++;
    };
    entryPayout.set( SAL_FIELD_WEEKENDS, weekends );
  }
}







// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^









function ___copyToMonth( selected, month ) {

  var dt = moment(month).startOf('month');
  var dayEnd = parseInt(moment(month).endOf('month').format('D'));
  var weekDays = new Array();

  var i = 1;
  while ( i <= dayEnd ) {

    if ( dt.isoWeekday() == 6 || dt.isoWeekday() == 7 ) { weekDays.push(i) };
    dt = dt.add(1, 'day');
    i++;
  };


  // kopiowanie
  dt = moment(month).startOf('month');
  message (MSG_UPDATING + " " + selected.length + " " + MSG_ENTRIES);
  for ( count = 0; count < selected.length; count++ ){

    var entrySource = selected[count];
    var entryTarget = new Object();
    entryTarget[SAL_FIELD_MONTH]          = dt.toDate();
    entryTarget[FIELD_EDITOR]           = arrEditors;
    entryTarget[SAL_FIELD_WEEKENDS]       = weekDays;
    entryTarget[SAL_FIELD_EMPLOYEE_LINK]  = entrySource.field(SAL_FIELD_EMPLOYEE_LINK)[0];
    entryTarget[SAL_FIELD_CONTRACT]       = entrySource.field(SAL_FIELD_CONTRACT)[0];
    entryTarget[SAL_FIELD_PAYMENT_TYPE]   = entrySource.field(SAL_FIELD_PAYMENT_TYPE);
    entryTarget[SAL_FIELD_PAYER]          = entrySource.field(SAL_FIELD_PAYER);
    entryTarget[SAL_FIELD_CLOSED]         = SAL_FIELD_CLOSED_VALUE_NO;

    entryTarget = libSalaries.create( entryTarget );
    findAdvancePayment( entryTarget, false );
  }

  message (MSG_FINISHED);

}








// ****
