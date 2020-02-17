


function closePayment() {

  var dokonujacyPrzelewu = "Marceli Matynia"
  var selected = selectedEntries();

  var srch, rok, tag, mc
  var isTransferLink = false;
  var notVisible = false;

  var entWyplata = entry();


  // sprawdzanie warunków czy może zamykać rozliczenie i czy rozliczenie jest otwarte
  var entryPayout = entry();
  if ( (entryPayout.field(P_FIELD_CLOSED) == P_FIELD_CLOSED_VALUE_YES) || ( !isManager() ) ) {
    message(P_MSG_CLOSED_NOACCESS);
    cancel();




  } else if ( (entWyplata.field("Wypłacono w gotówce") == null) && (entWyplata.field("Wpłacono na konto") == null)  ) {
    // sprawdzenie czy są wpisane kwoty, musi być coś wpisane jeśli nie ma wypłąt należy wpisać zero, pole nie może być puste
    message("Uzupełnij kwoty wypłat, gotówka lub przelew. Jeśli rozliczenie jest bez wypłaty w polach kwot wstaw zero");
    cancel();

  } else {

    message ( "zamykam rozliczenie " + ": "+ entWyplata.field("Pracownik")[0].field("Imie i nazwisko") );
    // któreś z pól gotówka lub przelew nie jest NULL więc zamykam rozliczenie

    // rozliczenie przelewu sprawdzenie czy przelew już jest
    for (i=0; i < entWyplata.field("Wydatek").length; i++) {
        var e = entWyplata.field("Wydatek")[i];
        if ((Math.abs(e.field("Kwota")) == entWyplata.field("Kwota")) &&
            (e.field("Data transakcji") == entWyplata.field("Data przelewu"))) {
           isTransferLink = true; // jest już link do przelewu
           }
        }
    if (entWyplata.field("canAccess") == false )  {
        entWyplata.set("canAccess", true);
        notVisible = true;
        }

    entWyplata.recalc();
    if ((!isTransferLink) && (entWyplata.field("Data przelewu") != null) ) {
        var entPracownik = entWyplata.field("Pracownik")[0];
        var entWydatek = new Object;
        entWydatek = libWydatki.create(entWydatek);
        entWyplata.link("Wydatek", entWydatek );
        if (entWyplata.field("Data przelewu") != "") {
          dtTransfer = entWyplata.field("Data przelewu");
          }
        entWydatek.set("Kwota", (0 - entWyplata.field("Wpłacono na konto")));
        entWydatek.set("Data transakcji", entWyplata.field("Data przelewu"));
        entWydatek.set("Typ transakcji", "Rozliczenie przelewem z pracownikiem");
        entWydatek.set("Dokonujący transakcji", dokonujacyPrzelewu);    // do bazy wypłat dodać wypłacającego
        entWydatek.set("Pracownik", entWyplata.field("Pracownik"));

        var opis =  entWyplata.field("Uwagi") + ' wypłata przelewem za ' + moment(entWyplata.field("Miesiąc")).format('MM') +
                    "-" + moment(entWyplata.field("Miesiąc")).format('YYYY');
        entWydatek.set("Opis", opis);

        // dodawanie budzetu do rozliczenia
        var allBugetsByOsiedle = new Array
        allBugetsByOsiedle = libBudzet.linksTo( entWyplata.field("Osiedle")[0] );
        for (i=0; i < allBugetsByOsiedle.length; i++) {
          var entBudget = allBugetsByOsiedle[i];
          var prevMonthBudget = moment(entBudget.field("Miesiąc")).startOf('month').add(-1, 'month').format("MMYYYY");
          var currentMonthWyplata = moment(entWyplata.field("Miesiąc")).format("MMYYYY");

          if ( prevMonthBudget == currentMonthWyplata ) {
            message ("znaleziono budzet:" + prevMonthBudget +" "+currentMonthWyplata);
            entWydatek.link("Budżet", entBudget );
            entBudget.set("Saldo", (entBudget.field("Saldo") + Math.abs(entWydatek.field("Kwota"))));
            entBudget.set("Zostało", (entBudget.field("Limit") - entBudget.field("Saldo")));
          } else {
            message ("nie znaleziono budzetu:" + prevMonthBudget +" "+currentMonthWyplata);
          }

        }
        // koniec dodawania budżetu

        entWydatek.recalc();
        }
        // koniec rozliczenia przelewu


    // tworzenie wpisu gotówki
    if ((entWyplata.field("Data wypłaty gotówki") != null) ) {
        var entWydatek = new Object;
        entWydatek = libWydatki.create(entWydatek);
        entWyplata.link("Wydatek", entWydatek );
        entWydatek.set("Kwota", (0 - entWyplata.field("Wypłacono w gotówce")));
        entWydatek.set("Data transakcji", entWyplata.field("Data wypłaty gotówki"));
        entWydatek.set("Typ transakcji", "Rozliczenie gotówką z pracownikiem");
        entWydatek.set("Dokonujący transakcji", entWyplata.field("Dokonujący wypłaty"));    // do bazy wypłat dodać wypłacającego
        entWydatek.set("Pracownik", entWyplata.field("Pracownik"));

        var opis =  entWyplata.field("Uwagi") + ' wypłata gotówki za ' + moment(entWyplata.field("Miesiąc")).format('MM') +
                    "-" + moment(entWyplata.field("Miesiąc")).format('YYYY');
        entWydatek.set("Opis", opis);

        // dodawanie budzetu do rozliczenia
        var allBugetsByOsiedle = new Array
        allBugetsByOsiedle = libBudzet.linksTo( entWyplata.field("Osiedle")[0] );
        for (i=0; i < allBugetsByOsiedle.length; i++) {
          var entBudget = allBugetsByOsiedle[i];
          var prevMonthBudget = moment(entBudget.field("Miesiąc")).startOf('month').add(-1, 'month').format("MMYYYY");
          var currentMonthWyplata = moment(entWyplata.field("Miesiąc")).format("MMYYYY");

          if ( prevMonthBudget == currentMonthWyplata ) {
            message ("znaleziono budzet:" + prevMonthBudget +" "+currentMonthWyplata);
            entWydatek.link("Budżet", entBudget );
            entBudget.set("Saldo", (entBudget.field("Saldo") + Math.abs(entWydatek.field("Kwota"))));
            entBudget.set("Zostało", (entBudget.field("Limit") - entBudget.field("Saldo")));
          } else {
            message ("nie znaleziono budzetu:" + prevMonthBudget +" "+currentMonthWyplata);
          }
        }
        // koniec dodawania budżetu

        entWydatek.recalc();
        }
        // koniec tworzenia gotówki

      if (notVisible)  {
         entWyplata.set("canAccess", false);
         }
      entWyplata.set("Editor", "");
      entWyplata.set("Rozliczony", "Rozliczony");


      entWyplata.recalc();
  }




}
