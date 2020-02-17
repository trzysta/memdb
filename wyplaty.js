

function closePayment() {

  var isTransferLink = false;
  var notVisible = false;

  // sprawdzanie warunków czy może zamykać rozliczenie i czy rozliczenie jest otwarte
  var entryPayout = entry();

  if ((entryPayout.field(P_FIELD_CLOSED) == P_FIELD_CLOSED_VALUE_YES) || ( !isManager() ) ) {

    message(P_MSG_CLOSED_OR_NOACCESS);
    cancel();

  // sprawdzenie czy są wpisane kwoty, musi być coś wpisane jeśli nie ma wypłąt należy wpisać zero, pole nie może być puste
  } else if ((entryPayout.field(P_FIELD_CASH_AMOUNT) == null) && (entryPayout.field(P_FIELD_WITHDRAWAL) == null)) {

    message(P_MSG_NO_AMONT);
    cancel();

  } else {
    message ( P_MSG_CLOSING + entryPayout.field(P_EMPLOYEE_LINK)[0].field(E_FIELD_FULLNAME) );
    // któreś z pól gotówka lub przelew nie jest NULL więc zamykam rozliczenie

    if (entryPayout.field(FIELD_CAN_ACCESS) == false )  {
        entryPayout.set(FIELD_CAN_ACCESS, true);
        notVisible = true;
    }

    entryPayout.recalc();

    // dodawanie wpisu do bazy wydatków o przelewie
    if ( entryPayout.field(P_FIELD_WITHDRAWAL_DATE) != null ) {

        var entPracownik = entryPayout.field(P_EMPLOYEE_LINK)[0];
        var entrySpend = new Object;

        entrySpend = libWydatki.create(entrySpend);
        entryPayout.link(P_SPEND_LINK, entrySpend );
        dtTransfer = entryPayout.field(P_FIELD_WITHDRAWAL_DATE);

        entrySpend.set(S_FIELD_AMOUNT,(0 - entryPayout.field(P_FIELD_WITHDRAWAL_AMOUNT)));
        entrySpend.set(S_FIELD_DATE, entryPayout.field(P_FIELD_WITHDRAWAL_DATE));
        entrySpend.set(S_FIELD_TYPE, S_FIELD_TYPE_VALUE_EMPLOYEE_WITHDRAWAL);
        entrySpend.set(S_FIELD_CREATOR, withdrawalMaker);    // do bazy wypłat dodać wypłacającego
        entrySpend.set(S_FIELD_EMPLOYEE_LINK, entryPayout.field(P_EMPLOYEE_LINK));

        var desc =  entryPayout.field(P_FIELD_DESCRIPTION) + P_ADD_DESCRIPTION_WITHDRAWAL + moment(entryPayout.field(P_FIELD_MONTH)).format('MM') +
                    "-" + moment(entryPayout.field(P_FIELD_MONTH)).format('YYYY');
        entrySpend.set(S_FIELD_DESCRIPTION, desc);

        // dodawanie budzetu do rozliczenia
        var allBugetsByOsiedle = new Array;
        allBugetsByOsiedle = libBudzet.linksTo( entryPayout.field(B_FIELD_CONTRACT_LINK)[0] );

        for (i=0; i < allBugetsByOsiedle.length; i++) {
          var entBudget = allBugetsByOsiedle[i];
          var prevMonthBudget = moment(entBudget.field(B_FIELD_MONTH)).startOf('month').add(-1, 'month').format("MMYYYY");
          var currentMonthWyplata = moment(entryPayout.field(P_FIELD_MONTH)).format("MMYYYY");
          if ( (prevMonthBudget == currentMonthWyplata) && (entBudget.field(B_FIELD_TYPE) == B_FIELD_TYPE_VALUE_PAYOUTS) ) {
            message (B_MSG_BUDGET_FOUND + entBudget.field(B_FIELD_TYPE) + " " + currentMonthWyplata);
            entrySpend.link(S_FIELD_BUDGET_LINK, entBudget );
            entBudget.set(B_FIELD_BALANCE, (entBudget.field(B_FIELD_BALANCE) + Math.abs(entrySpend.field(B_FIELD_AMOUNT))));
            entBudget.set(B_FIELD_LEFT, (entBudget.field(B_FIELD_LIMIT) - entBudget.field(B_FIELD_BALANCE)));
          }
        }
        // koniec dodawania budżetu
        entrySpend.recalc();
    }
    // koniec rozliczenia przelewu


    // tworzenie wpisu gotówki
    if ( (entryPayout.field(P_FIELD_CASH_DATE) != null) ) {

      var entrySpend = new Object;
      entrySpend = libWydatki.create(entrySpend);
      entryPayout.link(P_SPEND_LINK, entrySpend );
      entrySpend.set(S_FIELD_AMOUNT, (0 - entryPayout.field(P_FIELD_CASH_AMOUNT)));
      entrySpend.set(S_FIELD_DATE, entryPayout.field(P_FIELD_CASH_DATE));
      entrySpend.set(S_FIELD_TYPE, S_FIELD_TYPE_VALUE_EMPLOYEE_CASH);
      entrySpend.set(S_FIELD_CREATOR, entryPayout.field(P_FIELD_PAYER));    // do bazy wypłat dodać wypłacającego
      entrySpend.set(S_FIELD_EMPLOYEE_LINK, entryPayout.field(P_EMPLOYEE_LINK));

      var desc =  entryPayout.field(P_FIELD_DESCRIPTION) + P_ADD_DESCRIPTION_CASH + moment(entryPayout.field(P_FIELD_MONTH)).format('MM') +
                    "-" + moment(entryPayout.field(P_FIELD_MONTH)).format('YYYY');
      entrySpend.set(S_FIELD_DESCRIPTION, desc);

      // dodawanie budzetu do rozliczenia
      var allBugetsByOsiedle = new Array;
      allBugetsByOsiedle = libBudzet.linksTo( entryPayout.field(B_FIELD_CONTRACT_LINK)[0] );

      for (i=0; i < allBugetsByOsiedle.length; i++) {
        var entBudget = allBugetsByOsiedle[i];
        var prevMonthBudget = moment(entBudget.field(B_FIELD_MONTH)).startOf('month').add(-1, 'month').format("MMYYYY");
        var currentMonthWyplata = moment(entryPayout.field(P_FIELD_MONTH)).format("MMYYYY");
        if ( (prevMonthBudget == currentMonthWyplata) && (entBudget.field(B_FIELD_TYPE) == B_FIELD_TYPE_VALUE_PAYOUTS) ) {
          message (B_MSG_BUDGET_FOUND + entBudget.field(B_FIELD_TYPE) + " " + currentMonthWyplata);
          entrySpend.link(S_FIELD_BUDGET_LINK, entBudget );
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
  entryPayout.set(P_FIELD_CLOSED, P_FIELD_CLOSED_VALUE_YES);
  entryPayout.recalc();
  }

}
