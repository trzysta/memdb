var entrySalary       = null;
var amountCash        = 0;
var amountWithdrwal   = 0;
var dateCash          = null;
var dateWithdrwal     = null;
var isClosed          = false;
var entryEmployee     = null;
var visible           = false;
var entriesSpend      = new Array;
var payerName         = "";
var description       = "";
var type              = "";
var libSalaries       = null;


function closeSalary(e, show) {
  entrySalary = e;
  setValues();
  message( "startuję dla " + entryEmployee.name );

  if (canClose()) {
    if (!visible) entry.set(FIELD_CAN_ACCESS, true);

    if ((dateWithdrwal != null) && (amountWithdrwal > 0)) {
      var spendWithdrwal = createSpendSalary(amountWithdrwal, dateWithdrwal, withdrawalMaker, description, entryEmployee, true);
      entrySalary.link( SAL_FIELD_SPEND_LINK, spendWithdrwal );
    };

    if ((dateCash != null) && (amountCash > 0)) {
      var spendCash = createSpendSalary(amountCash, dateCash, payerName, description, entryEmployee, false);
      entrySalary.link( SAL_FIELD_SPEND_LINK, spendCash );
    };
    entrySalary.set(FIELD_CAN_ACCESS, visible);
  }
  
  entrySalary.recalc();
  if (show) entrySalary.show();

};

function createSpendSalary(amount, date, payer, description, entryEmployee, isWithdrwal) {

    var entry;
    var libSpendings; 
    message( "tworzę wydatek " + amount + " " + date + " " + payer );

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
    entry.recalc();
  return entry;     
};

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


function canClose() {
  var c = false;
  if ((amountCash + amountWithdrwal > 0) && (isClosed == false)) c = true;
  return c;
};




















// dodać że ja nie ma osiedla to wtedy budżet wynagrodzenia bez Osiedla
function closePayment( entryPayout ) {

  var notVisible = false;

  // sprawdzanie warunków czy może zamykać rozliczenie i czy rozliczenie jest otwarte
  if ((entryPayout.field(SAL_FIELD_CLOSED) == SAL_FIELD_CLOSED_VALUE_YES) || ( !isEditor() ) ) {

    message(SAL_MSG_CLOSED_OR_NOACCESS);
    cancel();

  // sprawdzenie czy są wpisane kwoty, musi być coś wpisane jeśli nie ma wypłąt należy wpisać zero, pole nie może być puste
  } else if ((entryPayout.field(SAL_FIELD_CASH_AMOUNT) == null) && (entryPayout.field(SAL_FIELD_WITHDRAWAL_AMOUNT) == null)) {

    message(SAL_MSG_NO_AMONT);
    cancel();

  } else {

    message ( SAL_MSG_CLOSING + entryPayout.field(SAL_FIELD_EMPLOYEE_LINK)[0].field(E_FIELD_FULLNAME) );
    
    // któreś z pól gotówka lub przelew nie jest NULL więc zamykam rozliczenie
    if (entryPayout.field(FIELD_CAN_ACCESS) == false )  {
        entryPayout.set(FIELD_CAN_ACCESS, true);
        notVisible = true;
    }

    entryPayout.recalc();
    var desc; 

    // dodawanie wpisu do bazy wydatków o przelewie
    if ( (entryPayout.field(SAL_FIELD_WITHDRAWAL_DATE) != "") && (entryPayout.field(SAL_FIELD_WITHDRAWAL_AMOUNT) > 0)) {

        var entrySpendWithdrwal = new Object;
        entrySpendWithdrwal = libSpendings.create(entrySpendWithdrwal);
        entryPayout.link(SAL_FIELD_SPEND_LINK, entrySpendWithdrwal );

        dtTransfer = entryPayout.field(SAL_FIELD_WITHDRAWAL_DATE);

        entrySpendWithdrwal.set(SPE_FIELD_AMOUNT,        (0 - entryPayout.field(SAL_FIELD_WITHDRAWAL_AMOUNT)));
        entrySpendWithdrwal.set(SPE_FIELD_DATE,          entryPayout.field(SAL_FIELD_WITHDRAWAL_DATE));
        entrySpendWithdrwal.set(SPE_FIELD_TYPE,          SPE_FIELD_TYPE_VALUE_EMPLOYEE_WITHDRAWAL);
        entrySpendWithdrwal.set(SPE_FIELD_CREATOR,       withdrawalMaker);                         // do bazy wypłat dodać wypłacającego
        entrySpendWithdrwal.set(SPE_FIELD_EMPLOYEE_LINK, entryPayout.field(SAL_FIELD_EMPLOYEE_LINK));

        desc =  entryPayout.field(SAL_FIELD_DESCRIPTION) + SAL_ADD_DESCRIPTION_WITHDRAWAL + moment(entryPayout.field(SAL_FIELD_MONTH)).format('MM') +
                "-" + moment(entryPayout.field(SAL_FIELD_MONTH)).format('YYYY');
        entrySpendWithdrwal.set(SPE_FIELD_DESCRIPTION, desc);
        entrySpendWithdrwal.recalc();       
    }
    
    // dodawanie wpisu do bazy wydatków o gotówkę
    if ( (entryPayout.field(SAL_FIELD_CASH_DATE) != "" ) && (entryPayout.field(SAL_FIELD_CASH_AMOUNT) > 0)) {

      var entrySpendCash = new Object;
      entrySpendCash = libSpendings.create(entrySpendCash);

      entryPayout.link(SAL_FIELD_SPEND_LINK,  entrySpendCash );
      entrySpendCash.set(SPE_FIELD_AMOUNT,        (0 - entryPayout.field(SAL_FIELD_CASH_AMOUNT)));
      entrySpendCash.set(SPE_FIELD_DATE,          entryPayout.field(SAL_FIELD_CASH_DATE));
      entrySpendCash.set(SPE_FIELD_TYPE,          SPE_FIELD_TYPE_VALUE_EMPLOYEE_CASH);
      entrySpendCash.set(SPE_FIELD_CREATOR,       entryPayout.field(SAL_FIELD_PAYER));    
      entrySpendCash.set(SPE_FIELD_EMPLOYEE_LINK, entryPayout.field(SAL_FIELD_EMPLOYEE_LINK));

      desc =  entryPayout.field(SAL_FIELD_DESCRIPTION) + SAL_ADD_DESCRIPTION_CASH + moment(entryPayout.field(SAL_FIELD_MONTH)).format('MM') +
               "-" + moment(entryPayout.field(SAL_FIELD_MONTH)).format('YYYY');
      entrySpendCash.set(SPE_FIELD_DESCRIPTION, desc);
      entrySpendCash.recalc();
    }

    var entryContract = entryPayout.field(B_FIELD_CONTRACT_LINK)[0];
    var allContractBugets = new Array;

    if (entryContract != "") allContractBugets = libBudget.linksTo( entryContract );

    var budgetNth = 0;
    var notFound = true;
    var monthPayout = moment(entryPayout.field(SAL_FIELD_MONTH)).format("MMYYYY");

    // dodawanie budzetu do rozliczenia
    while ( budgetNth < allContractBugets.length && notFound ) {
      var entBudget   = allContractBugets[budgetNth];
      var monthBudget = moment(entBudget.field(B_FIELD_MONTH)).startOf('month').add(-1, 'month').format("MMYYYY");
      budgetNth++;

      // szukanie budżetu miesiąc wypłaty == miesiąc budżetu i typ wynagrodzenia
      if ( (monthBudget == monthPayout) && (entBudget.field(BUD_FIELD_TYPE) == BUD_TYPE_PAYOUT) ) {
          message (B_MSG_BUDGET_FOUND + entBudget.field(B_FIELD_TYPE) + " " + monthPayout);
          var newBalance = entBudget.field(B_FIELD_BALANCE);
          if (entrySpendWithdrwal != UNDEF) {
            entrySpendWithdrwal.link(SPE_FIELD_BUDGET_LINK, entBudget );
            newBalance += Math.abs(entrySpendWithdrwal.field(B_FIELD_AMOUNT))
          };
          if (entrySpendCash != UNDEF) {
            entrySpendCash.link(SPE_FIELD_BUDGET_LINK, entBudget );
            newBalance += Math.abs(entrySpendCash.field(B_FIELD_AMOUNT))
          };

          entBudget.set(B_FIELD_BALANCE,  newBalance );
          entBudget.set(B_FIELD_LEFT,     entBudget.field(B_FIELD_LIMIT) - entBudget.field(B_FIELD_BALANCE));
          notFound = false;
        }

    }

    if (notVisible) entryPayout.set(FIELD_CAN_ACCESS, false);
    entryPayout.set(FIELD_EDITOR, "");
    entryPayout.set(SAL_FIELD_CLOSED, SAL_FIELD_CLOSED_VALUE_YES);
    entryPayout.recalc();
    entryPayout.show();
  }
};








// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
/*
funkcja wyszukująca w bazie wydatków wpisów o zaliczkach i dodająca do wypłaty
zakres wyszukiwania jest od 18 dnia poprzedniego miesiąca do bieżącej daty
*/

function findAdvancePayment( entryPayout, show ) {

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

function newPayoutOpening( entryPayout ) {

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

function validateSaving( entryPayout ) {

  var amountWithdrwal = entryPayout.field(SAL_FIELD_WITHDRAWAL_AMOUNT);
  var amountCash      = entryPayout.field(SAL_FIELD_CASH_AMOUNT);
  var canSave         = false;
  var msg             = SAL_MSG_VALIDATION_ERR;

  if ( (amountWithdrwal > 0) && (entryPayout.field(SAL_FIELD_WITHDRAWAL_DATE) == null) ) {
    msg += "\n" + SAL_MSG_VALIDATION_ERR_NO_WITHDRWAL;
    canSave = false;
  } else {
    canSave = true;
  }

  if ( (amountCash > 0) && (entryPayout.field(SAL_FIELD_CASH_DATE) == null) ) {
    msg += "\n" + SAL_MSG_VALIDATION_ERR_NO_CASH;
    canSave = false;
  } else {
    canSave = true;
  }

  if (!canSave) { message(msg) };
  return canSave;

}







function copyToMonth( selected, month ) {

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
