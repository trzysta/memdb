// dodać że ja nie ma osiedla to wtedy budżet wynagrodzenia bez Osiedla

function closePayment() {

  var isTransferLink = false;
  var notVisible = false;

  // sprawdzanie warunków czy może zamykać rozliczenie i czy rozliczenie jest otwarte
  var entryPayout = entry();
  //log(user().username + " closePayment() START");

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

    // dodawanie wpisu do bazy wydatków o przelewie
    if ( entryPayout.field(SAL_FIELD_WITHDRAWAL_DATE) != null ) {

        var entPracownik = entryPayout.field(SAL_FIELD_EMPLOYEE_LINK)[0];
        var entrySpend = new Object;

        entrySpend = libSpendings.create(entrySpend);
        entryPayout.link(SAL_FIELD_SPEND_LINK, entrySpend );
        dtTransfer = entryPayout.field(SAL_FIELD_WITHDRAWAL_DATE);

        entrySpend.set(SPE_FIELD_AMOUNT,(0 - entryPayout.field(SAL_FIELD_WITHDRAWAL_AMOUNT)));
        entrySpend.set(SPE_FIELD_DATE, entryPayout.field(SAL_FIELD_WITHDRAWAL_DATE));
        entrySpend.set(SPE_FIELD_TYPE, SPE_FIELD_TYPE_VALUE_EMPLOYEE_WITHDRAWAL);
        entrySpend.set(SPE_FIELD_CREATOR, withdrawalMaker);     // do bazy wypłat dodać wypłacającego
        entrySpend.set(SPE_FIELD_EMPLOYEE_LINK, entryPayout.field(SAL_FIELD_EMPLOYEE_LINK));

        var desc =  entryPayout.field(SAL_FIELD_DESCRIPTION) + SAL_ADD_DESCRIPTION_WITHDRAWAL + moment(entryPayout.field(SAL_FIELD_MONTH)).format('MM') +
                    "-" + moment(entryPayout.field(SAL_FIELD_MONTH)).format('YYYY');
        entrySpend.set(SPE_FIELD_DESCRIPTION, desc);

        // dodawanie budzetu do rozliczenia
        var allBugetsByOsiedle = new Array;
        allBugetsByOsiedle = libBudget.linksTo( entryPayout.field(B_FIELD_CONTRACT_LINK)[0] );

        for (i=0; i < allBugetsByOsiedle.length; i++) {
          var entBudget = allBugetsByOsiedle[i];
          var prevMonthBudget = moment(entBudget.field(B_FIELD_MONTH)).startOf('month').add(-1, 'month').format("MMYYYY");
          var currentMonthWyplata = moment(entryPayout.field(SAL_FIELD_MONTH)).format("MMYYYY");
          if ( (prevMonthBudget == currentMonthWyplata) && (entBudget.field(B_FIELD_TYPE) == B_FIELD_TYPE_VALUE_PAYOUTS) ) {
            message (B_MSG_BUDGET_FOUND + entBudget.field(B_FIELD_TYPE) + " " + currentMonthWyplata);
            entrySpend.link(SPE_FIELD_BUDGET_LINK, entBudget );
            entBudget.set(B_FIELD_BALANCE, (entBudget.field(B_FIELD_BALANCE) + Math.abs(entrySpend.field(B_FIELD_AMOUNT))));
            entBudget.set(B_FIELD_LEFT, (entBudget.field(B_FIELD_LIMIT) - entBudget.field(B_FIELD_BALANCE)));
          }
        }
        // koniec dodawania budżetu
        entrySpend.recalc();
    }
    // koniec rozliczenia przelewu

    // tworzenie wpisu gotówki
    if ( (entryPayout.field(SAL_FIELD_CASH_DATE) != null) ) {

      var entrySpend = new Object;
      entrySpend = libSpendings.create(entrySpend);
      entryPayout.link(SAL_FIELD_SPEND_LINK, entrySpend );
      entrySpend.set(SPE_FIELD_AMOUNT, (0 - entryPayout.field(SAL_FIELD_CASH_AMOUNT)));
      entrySpend.set(SPE_FIELD_DATE, entryPayout.field(SAL_FIELD_CASH_DATE));
      entrySpend.set(SPE_FIELD_TYPE, SPE_FIELD_TYPE_VALUE_EMPLOYEE_CASH);
      entrySpend.set(SPE_FIELD_CREATOR, entryPayout.field(SAL_FIELD_PAYER));    // do bazy wypłat dodać wypłacającego
      entrySpend.set(SPE_FIELD_EMPLOYEE_LINK, entryPayout.field(SAL_FIELD_EMPLOYEE_LINK));

      var desc =  entryPayout.field(SAL_FIELD_DESCRIPTION) + SAL_ADD_DESCRIPTION_CASH + moment(entryPayout.field(SAL_FIELD_MONTH)).format('MM') +
                    "-" + moment(entryPayout.field(SAL_FIELD_MONTH)).format('YYYY');
      entrySpend.set(SPE_FIELD_DESCRIPTION, desc);

      // dodawanie budzetu do rozliczenia
      var allBugetsByOsiedle = new Array;
      allBugetsByOsiedle = libBudget.linksTo( entryPayout.field(B_FIELD_CONTRACT_LINK)[0] );

      for (i=0; i < allBugetsByOsiedle.length; i++) {
        var entBudget = allBugetsByOsiedle[i];
        var prevMonthBudget = moment(entBudget.field(B_FIELD_MONTH)).startOf('month').add(-1, 'month').format("MMYYYY");
        var currentMonthWyplata = moment(entryPayout.field(SAL_FIELD_MONTH)).format("MMYYYY");
        if ( (prevMonthBudget == currentMonthWyplata) && (entBudget.field(B_FIELD_TYPE) == B_FIELD_TYPE_VALUE_PAYOUTS) ) {
          message (B_MSG_BUDGET_FOUND + entBudget.field(B_FIELD_TYPE) + " " + currentMonthWyplata);
          entrySpend.link(SPE_FIELD_BUDGET_LINK, entBudget );
          entBudget.set(B_FIELD_BALANCE, (entBudget.field(B_FIELD_BALANCE) + Math.abs(entrySpend.field(B_FIELD_AMOUNT))));
          entBudget.set(B_FIELD_LEFT, (entBudget.field(B_FIELD_LIMIT) - entBudget.field(B_FIELD_BALANCE)));
        }
      }
      // koniec dodawania budżetu
      entrySpend.recalc();
    }

  // koniec tworzenia gotówki
  if (notVisible)  {
      entryPayout.set(FIELD_CAN_ACCESS, false);
  }
  entryPayout.set(FIELD_EDITOR, "");
  entryPayout.set(SAL_FIELD_CLOSED, SAL_FIELD_CLOSED_VALUE_YES);
  entryPayout.recalc();
  entryPayout.show();
  }
  //log(user().username + " closePayment() STOP");
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
     var entriesSpend = libSpendings.linksTo( entryPayout.field(SAL_FIELD_EMPLOYEE_LINK)[0] );
     for (i=0; i < entriesSpend.length; i++ ) {
        var entrySpend = entriesSpend[i];
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
