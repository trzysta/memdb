


function closePayment() {

  var dokonujacyPrzelewu = "Marceli Matynia"
  var selected = selectedEntries();
  var srch, rok, tag, mc
  var isTransferLink = false;
  var notVisible = false;

  // sprawdzanie warunków czy może zamykać rozliczenie i czy rozliczenie jest otwarte
  var entryPayout = entry();
  if ((entryPayout.field(P_FIELD_CLOSED) == P_FIELD_CLOSED_VALUE_YES) || ( !isManager() ) ) {
    message(P_MSG_CLOSED_NOACCESS);
    cancel();

  // sprawdzenie czy są wpisane kwoty, musi być coś wpisane jeśli nie ma wypłąt należy wpisać zero, pole nie może być puste
  } else if ((entryPayout.field("Wypłacono w gotówce") == null) && (entryPayout.field("Wpłacono na konto") == null)) {
    message("Uzupełnij kwoty wypłat, gotówka lub przelew. Jeśli rozliczenie jest bez wypłaty w polach kwot wstaw zero");
    cancel();
  } else {
    message ( "zamykam rozliczenie " + ": "+ entryPayout.field("Pracownik")[0].field("Imie i nazwisko") );
    // któreś z pól gotówka lub przelew nie jest NULL więc zamykam rozliczenie
    // rozliczenie przelewu sprawdzenie czy przelew już jest
    for (i=0; i < entryPayout.field("Wydatek").length; i++) {
        var e = entryPayout.field("Wydatek")[i];
        if ((Math.abs(e.field("Kwota")) == entryPayout.field("Kwota")) &&
            (e.field("Data transakcji") == entryPayout.field("Data przelewu"))) {
           isTransferLink = true; // jest już link do przelewu
           }
        }
    if (entryPayout.field("canAccess") == false )  {
        entryPayout.set("canAccess", true);
        notVisible = true;
        }

    entryPayout.recalc();
    if ((!isTransferLink) && (entryPayout.field("Data przelewu") != null) ) {
        var entPracownik = entryPayout.field("Pracownik")[0];
        var entWydatek = new Object;
        entWydatek = libWydatki.create(entWydatek);
        entryPayout.link("Wydatek", entWydatek );
        if (entryPayout.field("Data przelewu") != "") {
          dtTransfer = entryPayout.field("Data przelewu");
          }
        entWydatek.set("Kwota", (0 - entryPayout.field("Wpłacono na konto")));
        entWydatek.set("Data transakcji", entryPayout.field("Data przelewu"));
        entWydatek.set("Typ transakcji", "Rozliczenie przelewem z pracownikiem");
        entWydatek.set("Dokonujący transakcji", dokonujacyPrzelewu);    // do bazy wypłat dodać wypłacającego
        entWydatek.set("Pracownik", entryPayout.field("Pracownik"));

        var opis =  entryPayout.field("Uwagi") + ' wypłata przelewem za ' + moment(entryPayout.field("Miesiąc")).format('MM') +
                    "-" + moment(entryPayout.field("Miesiąc")).format('YYYY');
        entWydatek.set("Opis", opis);

        // dodawanie budzetu do rozliczenia
        var allBugetsByOsiedle = new Array
        allBugetsByOsiedle = libBudzet.linksTo( entryPayout.field("Osiedle")[0] );
        for (i=0; i < allBugetsByOsiedle.length; i++) {
          var entBudget = allBugetsByOsiedle[i];
          var prevMonthBudget = moment(entBudget.field("Miesiąc")).startOf('month').add(-1, 'month').format("MMYYYY");
          var currentMonthWyplata = moment(entryPayout.field("Miesiąc")).format("MMYYYY");

          if ( prevMonthBudget == currentMonthWyplata ) { // trzeba odfiltrować zakupy
            message ("znaleziono budzet: " + prevMonthBudget +" "+currentMonthWyplata);
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
    if ((entryPayout.field("Data wypłaty gotówki") != null) ) {
        var entWydatek = new Object;
        entWydatek = libWydatki.create(entWydatek);
        entryPayout.link("Wydatek", entWydatek );
        entWydatek.set("Kwota", (0 - entryPayout.field("Wypłacono w gotówce")));
        entWydatek.set("Data transakcji", entryPayout.field("Data wypłaty gotówki"));
        entWydatek.set("Typ transakcji", "Rozliczenie gotówką z pracownikiem");
        entWydatek.set("Dokonujący transakcji", entryPayout.field("Dokonujący wypłaty"));    // do bazy wypłat dodać wypłacającego
        entWydatek.set("Pracownik", entryPayout.field("Pracownik"));

        var opis =  entryPayout.field("Uwagi") + ' wypłata gotówki za ' + moment(entryPayout.field("Miesiąc")).format('MM') +
                    "-" + moment(entryPayout.field("Miesiąc")).format('YYYY');
        entWydatek.set("Opis", opis);

        // dodawanie budzetu do rozliczenia
        var allBugetsByOsiedle = new Array
        allBugetsByOsiedle = libBudzet.linksTo( entryPayout.field("Osiedle")[0] );
        for (i=0; i < allBugetsByOsiedle.length; i++) {
          var entBudget = allBugetsByOsiedle[i];
          var prevMonthBudget = moment(entBudget.field("Miesiąc")).startOf('month').add(-1, 'month').format("MMYYYY");
          var currentMonthWyplata = moment(entryPayout.field("Miesiąc")).format("MMYYYY");

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
         entryPayout.set("canAccess", false);
         }
      entryPayout.set("Editor", "");
      entryPayout.set("Rozliczony", "Rozliczony");


      entryPayout.recalc();
  }
