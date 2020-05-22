/*
  wszelkie prawa zastrzeżone, biblioteka funkcji wykorzystywanych przez
  aplikację utworzoną dla 300 Sp. z o.o.
*/
try {

  // const LIB_SALARIES_SHORT_NAME = "SAL";
  // const LIB_SPANDINGS_SHORT_NAME = "SPE";
  // const LIB_BUDGETS_SHORT_NAME = "BDG";
  // const LIB_CONTRACTS_SHORT_NAME = "CON";
  // const LIB_CHECKS_SHORT_NAME = "CHK";
  // const LIB_ACTIVITIES_SHORT_NAME = "ACT";

  let LIB_SALARIES_NAME = "Wypłaty";
  let LIB_SPANDINGS_NAME = "Wydatki";
  let LIB_BUDGETS_NAME = "Budżet";
  let LIB_CONTRACTS_NAME = "Osiedla";
  let LIB_CHECKS_NAME = "Kontrole";
  let LIB_ACTIVITIES_NAME = "Kalendarz zadań";
  let LIB_EMPLOYEES_NAME = "Pracownicy";

  let WEEKDAYS_EN = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let WEEKDAYS_PL = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
  let WEEKDAYS2_PL = ["PN", "WT", "ŚR", "CZ", "PT", "SO", "ND"];
  let MONTHS_PL = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
  let MONTHS3_PL = ["STY", "LUT", "MAR", "KWI", "MAJ", "CZE", "LIP", "SIE", "WRZ", "PAŹ", "LIS", "GRU"];

  let ARR_EDITORS = [
    "MalgorzataG",
    "ElzbietaZ",
    "trzystaIZABELA",
    "MarceliM",
    "trzysta",
  ];
  let ARR_MANAGERS = ["trzysta", "Marceli Matynia"];
  let arrNames = [
    "Małgorzata Grabowska",
    "Elżbieta Zdziech",
    "Izabela Skowrońska",
    "Marceli Matynia",
    "Administrator",
  ];


  let FIELD_EDITOR = "Editor";
  let FIELD_IS_NEW = "new";
  let FIELD_REF = "REF";
  let FIELD_REF_PARTENT = "parentREF";
  let FIELD_IS_PARENT = "isParent";
  let FIELD_IS_HIDDEN = "Ukryte";
  let FIELD_CAN_ACCESS = "canAccess";
  let FIELD_DISPLAY_NAME = "displayName";
  let MSG_UPDATING = "uaktualniam";
  let MSG_COPYING = "kopiuję";
  let MSG_ENTRIES = "wpisów";
  let MSG_FINISHED = "Zakończono!";
  let VALUE_MAIL = "e-mail";

  let SAL_WITHDRWAL_MAKER = "Marceli Matynia";
  let SAL_FIELD_CLOSED = "Rozliczony";
  let SAL_FIELD_CLOSED_VALUE_YES = "Rozliczony";
  let SAL_FIELD_CLOSED_VALUE_NO = "W trakcie rozliczania";
  let SAL_FIELD_CASH_AMOUNT = "Wypłacono w gotówce";
  let SAL_FIELD_CASH_DATE = "Data wypłaty gotówki";
  let SAL_FIELD_WITHDRAWAL_AMOUNT = "Wpłacono na konto";
  let SAL_FIELD_WITHDRAWAL_DATE = "Data przelewu";
  let SAL_FIELD_EMPLOYEE_LINK = "Pracownik";
  let SAL_FIELD_CONTRACT = "Osiedle";
  let SAL_FIELD_SPEND_LINK = "Wydatek";
  let SAL_FIELD_DESCRIPTION = "Uwagi";
  let SAL_FIELD_MONTH = "Miesiąc";
  let SAL_FIELD_PAYER = "Dokonujący wypłaty";
  let SAL_FIELD_ADVANCE_PAYMENT = "Zaliczki";
  let SAL_FIELD_WEEKENDS = "Dni wolne";
  let SAL_FIELD_PAYMENT_TYPE = "Rodzaj wynagrodzenia";
  let SAL_FIELD_WEEKENDDUTY = "Dyżur";
  let SAL_FIELD_HOLIDAY = "Urlop";
  let SAL_FIELD_ABSENCE = "Nieobecność";
  let SAL_FIELD_SICK = "Zwolnienie";
  let SAL_ADD_DESCRIPTION_WITHDRAWAL = " wypłata przelewem za ";
  let SAL_ADD_DESCRIPTION_CASH = " wypłata gotówki za ";
  let SAL_ERR_CLOSED_OR_NOACCESS = "Wpis już rozliczony lub nie masz uprawnień do zamknięcia rozliczenia";
  let SAL_ERR_NO_AMOUNT = "Uzupełnij kwoty wypłat, gotówka lub przelew. Jeśli rozliczenie jest bez wypłaty w polach kwot wstaw zero";
  let SAL_MSG_CLOSING = "Zamykam rozliczenie: ";
  let SAL_MSG_CREATING_SPEND = "Tworzę wydatek: ";
  let SAL_MSG_ADVANCE_PAYMENT = "Szukam zaliczek... ";
  let SAL_MSG_VALIDATION_ERR = "Nie można zapisać, popraw następujące błędy:";
  let SAL_MSG_VALIDATION_ERR_NO_WITHDRWAL = "- podaj datę i kwotę przelewu";
  let SAL_MSG_VALIDATION_ERR_NO_CASH = "- podaj datę i kwotę wypłaty gotówki";
  let SAL_MSG_RUNING_FINDADVANCE = "szukam zaliczek dla wpisu...";


  let EMP_FIELD_FULLNAME = "Imie i nazwisko";
  let EMP_FIELD_HOLIDAY_TOTAL = "Wymiar urlopu";
  let EMP_FIELD_HOLIDAY_LEFT = "Urlop pozostały";
  let EMP_FIELD_HOLIDAY_USED = "Urlop wykorzystany";
  let EMP_MSG_HOLIDAY_RECALCED = "Przeliczam urlop - wykorzystane dni urlopu to: ";

  let htmlMailHeader = "To jest mail wysłany automatycznie. W przypadku wysyłania odpowiedzi prosimy o utrzymanie w temacie numeru referencyjnego REF";
  let htmlMailBody_CONTROL = "<p>";
  let htmlSubject_CONTROL = "Raport z kontroli";

  let htmlMailFooter = "<p><p>";
  let htmlMailSignature = "";
  let cssP = "";
  let cssLI = "";

  // // wspólne
  // const FIELD_EDITOR = "Editor";
  // const FIELD_IS_NEW = "new";
  // const FIELD_REF = "REF";
  // const FIELD_REF_PARTENT = "parentREF";
  // const FIELD_IS_PARENT = "isParent";
  // const FIELD_IS_HIDDEN = "Ukryte";
  // const FIELD_CAN_ACCESS = "canAccess";
  // const FIELD_DISPLAY_NAME = "displayName";
  // const MSG_UPDATING = "uaktualniam";
  // const MSG_COPYING = "kopiuję";
  // const MSG_ENTRIES = "wpisów";
  // const MSG_FINISHED = "Zakończono!";
  // const VALUE_MAIL = "e-mail";

  // const VALUE_DAYNUMBER_MONDAY = 1;
  // const VALUE_DAYNUMBER_TUESDAY = 2;
  // const VALUE_DAYNUMBER_WEDNESDAY = 3;
  // const VALUE_DAYNUMBER_THURSDAY = 4;
  // const VALUE_DAYNUMBER_FRIDAY = 5;
  // const VALUE_DAYNUMBER_SATURDAY = 6;
  // const VALUE_DAYNUMBER_SUNDAY = 7;
  // const VIEW_SEP = " >>> ";

  // ****************************************************************************
  // ~~~ BAZA WYDATKI
  // ****************************************************************************
  let SPE_FIELD_IMPORTED = "Rozliczony";
  let SPE_FIELD_AMOUNT = "Kwota";
  let SPE_FIELD_DATE = "Data transakcji";
  let SPE_FIELD_TYPE = "Typ transakcji";
  let SPE_FIELD_TYPE_VALUE_EMPLOYEE_WITHDRAWAL = "Rozliczenie przelewem z pracownikiem";
  let SPE_FIELD_TYPE_VALUE_EMPLOYEE_CASH = "Rozliczenie gotówką z pracownikiem";
  let SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_CASH = "Wypłacona gotówką zaliczka";
  let SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_WITHDRAWAL = "Wypłacona przelewem zaliczka";
  let SPE_FIELD_BUDGET_LINK = "Budżet";
  let SPE_FIELD_BUDGET_LINK_AMOUNT = "Kwota";

  let SPE_FIELD_COST_ALLOCATION_LINK = "Robicie kosztu na osiedla";
  let SPE_FIELD_COST_ALLOCATION_LINK_AMOUNT = "Kwota";
  let SPE_FIELD_COST_ALLOCATION_LEFT = "Kwota pozostała do rozpisania";

  let SPE_FIELD_CREATOR = "Dokonujący transakcji";
  let SPE_FIELD_CATEGORY = "Kategoria";
  let SPE_FIELD_RECIPIENT = "Przekazano osobie";
  let SPE_FIELD_SUPPLIER = "Dostawca";
  let SPE_FIELD_EMPLOYEE_LINK = "Pracownik";
  let SPE_FIELD_DESCRIPTION = "Opis";
  let SPE_FIELD_INVOICE_IMG = "Faktura";
  let SPE_FIELD_ISPE_FIELD_PAYED = "Do zapłaty";
  let SPE_FIELD_ISPE_FIELD_REINVOICE = "Czy wydatek należy refakturować";
  let SPE_FIELD_REINVOICE_CONTRACT_LINK = "Osiedle do faktury";
  let SPE_FIELD_NR = "Nr";
  let SPE_FIELD_NR_ASSIGNED = "Nr powiązany";
  let SPE_FIELD_DESCRIPTION_DISPLAY = "Opis";


  Array.prototype.unique = function () {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (arr.indexOf(this[i]) < 0) {
        arr.push(this[i]);
      }
    }
    return arr;
  }

  // /

  // // ****************************************************************************
  // // ~~~ BAZA OSIEDLA
  // // ****************************************************************************
  // //const CHK_FIELD_CONTRACT        = "Osiedle";
  // //const CON_FIELD_SHORTNAME       = "Nazwa potoczna";
  // const CON_FIELD_TAG = "Skrót";
  // const CON_FIELD_RAPORT_RECIPIENT = "Lista adresów e-mail odbiorców raportu";
  // //const CN_FIELD_BUILDINGS        = "Budynki i klatki";



  // // ***** baza BUDŻET
  // const B_FIELD_LIMIT = "Limit";
  // const B_FIELD_BALANCE = "Saldo";
  // const B_FIELD_LEFT = "Zostało";
  // const B_FIELD_AMOUNT = "Kwota";
  // const B_FIELD_CONTRACT_LINK = "Osiedle";
  // const B_FIELD_MONTH = "Miesiąc";
  // const B_FIELD_TYPE = "Rodzaj";
  // const B_FIELD_TYPE_VALUE_PAYOUTS = "Wynagrodzenia";
  // const B_MSG_BUDGET_FOUND = "...znaleziono budżet: ";

  // const BUD_TYPE_PAYOUT = "Wynagrodzenia";
  // const BUD_TYPE_PURCHASES = "Zakupy";
  // const BUD_TYPE_FIXED = "Stałe koszty";

  // // ****************************************************************************
  // // ~~~ KALENDARZ ZADAŃ, ACTIVITIES
  // // ****************************************************************************
  // const ACT_FIELD_MONTH = "Miesiąc";
  // const ACT_FIELD_DATES = "Daty";
  // const ACT_FIELD_WEEKDAYS = "Dni tygodnia";
  // const ACT_FIELD_TYPE = "Typ";
  // const ACT_FIELD_TYPE_VALUE_TEMPLATE = "Definicja czynności";
  // const ACT_FIELD_TYPE_VALUE_INSTANCE = "Pozycja harmonogramu";
  // const ACT_FIELD_CONTRACT = "Osiedle";
  // const ACT_FIELD_ACTION = "Czynność";
  // const ACT_FIELD_ACTION_DOMAIN = "Obszar";
  // const ACT_FIELD_ACTION_DOMAIN_VALUES = ["Klatki", "Garaż", "Teren", "Zieleń", "Biuro"];
  // const ACT_FIELD_ACTION_CHECKS = "Potencjalne problemy";
  // const ACT_FIELD_FREQUENCY = "Częstotliwość";


  // // ****************************************************************************
  // // ~~~ KONTROLE, CHECKS
  // // ****************************************************************************

  // const CHK_FIELD_CONTRACT_LINK = "Osiedle";
  // const CHK_FIELD_FREQENCY = "Częstotliwość";
  // const CHK_FILED_TYPE = "Typ kontroli";

  // /*  0-5  częstotliwość częściej niż raz miesiącu */
  // /*  6-16 czstotliwość raz w miesiącu i rzadziej */
  // const CHK_FIELD_FREQENCY_VALUES = ["Codziennie",
  //   "1 raz w tygodniu",
  //   "2 razy w tygodniu",
  //   "3 razy w tygodniu",
  //   "4 razy w tygodniu",
  //   "1 raz na dwa tygodnie",
  //   "1 raz w miesiącu",
  //   "2 razy w miesiącu",
  //   "3 razy w miesiącu",
  //   "4 razy w miesiącu",
  //   "1 raz w kwartale",
  //   "2 razy w kwartale",
  //   "3 razy w kwartale",
  //   "1 raz w roku",
  //   "2 razy w roku",
  //   "3 razy w roku",
  //   "wg potrzeb"];
  // const CHK_FIELD_ACTION_LINK = "Czynności do wykonania wg umowy";
  // const CHK_FIELD_ACTION_LINK_ATTR_RESULT = "Wykonanie";
  // const CHK_FIELD_CONTROL_DATETIME = "Data i godzina kontroli";

  // const CHK_FIELD_ACTION_DOMAIN = "Kontrolowany obszar";
  // const CHK_FIELD_ACTION_AREA = "Budynek i klatka";
  // const CHK_FIELD_CLOSED = "Kontrola zakończona, zamknij możliwość zmiany i wyślij e-mail z raportem";
  // const CHK_FIELDCHECKS = "Zauważone problemy - ";
  // const CHK_FIELDCHECKS_AREA_OK = "Brak uwag - ";
  // const CHK_FIELDCHECKS_AREA_NOK = "Do poprawy - ";

  // const CHK_FIELD_REPORT_RECIPIENTS = "Adresy na jakie wysłano raport";
  // const CHK_ACTION_CLOSE_CONFIRM_NAME = "potwierdzam zamknięcie kontroli i wysłanie raportu";
  // const CHK_FIELD_MAILBODY = "htmlBody";
  // const CHK_FIELD_GROUPBY = "groupBy";
  // const CHK_FIELD_MAIL_DATETIME = "Data wysłania maila z raportem";
  // const CHK_FIELD_CHEKCS_RAPORTED_LINK = "Kontrole wysłane w mailu";
  // const CHK_FIELD_CHEKCS_MAIL_LINK = "Mail z raportem";






































  // const MONTHS_PL = ["styczeń", "luty", "marzec", "kwiecien", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "listopad", "grudzień"];
  // const ARR_EDITORS = ["MalgorzataG", "ElzbietaZ", "trzystaIZABELA", "MarceliM", "trzysta"];
  // const ARR_MANAGERS = ["trzysta"];
  // const arrNames = ["Małgorzata Grabowska", "Elżbieta Zdziech", "Izabela Skowrońska", "Marceli Matynia", "Administrator"];
  // const withdrawalMaker = "Marceli Matynia";

  // const FIELD_EDITOR = "Editor";
  // const FIELD_IS_NEW = "new";
  // const FIELD_REF = "REF";
  // const FIELD_REF_PARTENT = "parentREF";
  // const FIELD_IS_PARENT = "isParent";
  // const FIELD_IS_HIDDEN = "Ukryte";
  // const FIELD_CAN_ACCESS = "canAccess";
  // const FIELD_DISPLAY_NAME = "displayName";
  // const MSG_UPDATING = "uaktualniam";
  // const MSG_COPYING = "kopiuję";
  // const MSG_ENTRIES = "wpisów";
  // const MSG_FINISHED = "Zakończono!";
  // const VALUE_MAIL = "e-mail";



  // const InitLibaries = function () {

  //   const libSalaries = libByName(LIB_SALARIES_NAME);
  //   const libSpendings = libByName(LIB_SPANDINGS_NAME);
  //   const libBudget = libByName(LIB_BUDGETS_NAME);
  //   const libContracts = libByName(LIB_CONTRACTS_NAME);
  //   const libChecks = libByName(LIB_CHECKS_NAME);
  //   const libActivities = libByName(LIB_ACTIVITIES_NAME);

  // }


  // const HuubTools = function (e) {

  //   this.entry = e;

  //   this.setEntryDefaultValues = function () {
  //     if (e != null) {
  //       this.entry.set(FIELD_EDITOR, ARR_EDITORS);
  //       this.entry.set(FIELD_IS_NEW, true);
  //     }
  //   }
  // };











  // function setRef(base) {

  //   const tmpLib;
  //   switch (base) {
  //     case LIB_SALARIES_SHORT_NAME:
  //       tmpLib = libSalaries;
  //       break;
  //     case LIB_SPANDINGS_SHORT_NAME:
  //       tmpLib = libSpendings;
  //       break;
  //     case LIB_BUDGETS_SHORT_NAME:
  //       tmpLib = libBudget;
  //       break;
  //     case LIB_CONTRACTS_SHORT_NAME:
  //       tmpLib = libContracts;
  //       break;
  //     case LIB_CHECKS_SHORT_NAME:
  //       tmpLib = libChecks;
  //       break;
  //     case LIB_ACTIVITIES_SHORT_NAME:
  //       tmpLib = libActivities;
  //       break;
  //     default:
  //       tmpLib = lib();
  //   }

  //   const newRef = base + Math.floor(10000 + (Math.random() * 90000));
  //   result = tmpLib.find(newRef);

  //   while (result.length != 0) {
  //     newRef = base + Math.floor(10000 + (Math.random() * 90000));
  //     result = tmpLib.find(newRef);
  //   };
  //   return newRef;
  // }





  // // *^*^*^*  sprawdza czy jest Edytorem
  // function isEditor() {
  //   const u = user().username;
  //   const is = false;
  //   if (ARR_EDITORS.indexOf(u) >= 0) is = true;
  //   return is;
  // }


  // // *^*^*^*  sprawdza czy jest Managerem
  // function isManager() {
  //   const u = user().username;
  //   const is = false;
  //   if (ARR_MANAGERS.indexOf(u) >= 0) is = true;
  //   return is;
  // }






  // *^*^*^*  odpalana Creating Entry, Opening an Entry Card
  function setEntryDefaultValues(e) {
    e.set(FIELD_EDITOR, ARR_EDITORS);
    e.set(FIELD_IS_NEW, true);
  }


  // *^*^*^*  sprawdza czy entrySearchFor jest w arrayOfLinks
  function isEntryLinked(arrayOfLinks, entrySearchFor) {
    let is = false;
    let i = 0;
    while (i < arrayOfLinks.length) {
      if (arrayOfLinks[i].id === entrySearchFor.id) {
        is = true;
        i = arrayOfLinks.length + 1;
      } else {
        i++;
      }
    }
    return is;
  };


  // // *^*^*^*  odpalana Creating Entry, After Save
  // function saveFirstTime(e) {
  //   e.set(FIELD_IS_NEW, false);
  // }




  // *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
  // *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
  // *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
  // dodaje wartości do tablicy
  // function appendToArray(sourceArray, valueToAppend) {

  //   if (!Array.isArray(sourceArray)) { sourceArray = new Array() };
  //   if (Array.isArray(valueToAppend)) {
  //     for (let i = 0; i < valueToAppend.length; i++)
  //       sourceArray.push(valueToAppend[i])
  //   } else {
  //     sourceArray.push(valueToAppend)
  //   }
  //   return sourceArray.unique();
  // }



  // *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
  // *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
  // *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*



  // function addCounter(sourceArray) {

  //   const newArray = new Array();
  //   const newValue;

  //   for (let i = 0; i < sourceArray.length; i++) {
  //     c = i + 1;
  //     newValue = c + ") " + sourceArray[i];
  //     newArray.push(newValue);
  //   }
  //   return newArray;
  // }




  // /*
  // *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^

  //     BAZA BUDŻET, FUNCKJE I WARTOŚCI PÓL OBLICZANYCH

  //  *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
  // */

  // function addBudgetSpending(entryBudget, entrySpending) {

  //   if (entryBudget !== undefined)
  //     entryBudget = entry();

  //   if (entrySpending !== undefined)
  //     entrySpending = masterEntry();
  //   const newBalance = 0;
  //   newBalance = entryBudget.field(B_FIELD_BALANCE) + Math.abs(entrySpending.field(SPE_FIELD_AMOUNT));    //plus bo wydatki są zawsze ujemne
  //   entryBudget.set(B_FIELD_BALANCE, newBalance);
  //   entryBudget.set(B_FIELD_LEFT, entryBudget.field(B_FIELD_LIMIT) - newBalance);
  // }



  // function removeBudgetSpending(entryBudget, entrySpending) {

  // }




  // function postSave() {
  //   const currentEntry = entry();
  //   const linkedEntry = l.linksTo(currentEntry)[0];
  //   currentEntry.link("Link", linkedEntry);
  // }


} catch (error) {
  log(error);
}