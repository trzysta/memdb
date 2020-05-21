/*
  wszelkie prawa zastrzeżone, biblioteka funkcji wykorzystywanych przez
  aplikację utworzoną dla 300 Sp. z o.o.
*/






var LIB_SALARIES_NAME = "Wypłaty";
var LIB_SPANDINGS_NAME = "Wydatki";
var LIB_BUDGETS_NAME = "Budżet";
var LIB_CONTRACTS_NAME = "Osiedla";
var LIB_CHECKS_NAME = "Kontrole";
var LIB_ACTIVITIES_NAME = "Kalendarz zadań";

var LIB_SALARIES_SHORT_NAME = "SAL";
var LIB_SPANDINGS_SHORT_NAME = "SPE";
var LIB_BUDGETS_SHORT_NAME = "BDG";
var LIB_CONTRACTS_SHORT_NAME = "CON";
var LIB_CHECKS_SHORT_NAME = "CHK";
var LIB_ACTIVITIES_SHORT_NAME = "ACT";




const LIB_SALARIES_NAME = "Wypłaty";
const LIB_SPANDINGS_NAME = "Wydatki";
const LIB_BUDGETS_NAME = "Budżet";
const LIB_CONTRACTS_NAME = "Osiedla";
const LIB_CHECKS_NAME = "Kontrole";
const LIB_ACTIVITIES_NAME = "Kalendarz zadań";

const arrMonths_pl = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecien",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "wrzesień",
  "listopad",
  "grudzień",
];
const arrEditors = [
  "MalgorzataG",
  "ElzbietaZ",
  "trzystaIZABELA",
  "MarceliM",
  "trzysta",
];
const arrManagers = ["trzysta"];
const arrNames = [
  "Małgorzata Grabowska",
  "Elżbieta Zdziech",
  "Izabela Skowrońska",
  "Marceli Matynia",
  "Administrator",
];
const WITHDRWAL_MAKER = "Marceli Matynia";

const FIELD_EDITOR = "Editor";
const FIELD_IS_NEW = "new";
const FIELD_REF = "REF";
const FIELD_REF_PARTENT = "parentREF";
const FIELD_IS_PARENT = "isParent";
const FIELD_IS_HIDDEN = "Ukryte";
const FIELD_CAN_ACCESS = "canAccess";
const FIELD_DISPLAY_NAME = "displayName";
const MSG_UPDATING = "uaktualniam";
const MSG_COPYING = "kopiuję";
const MSG_ENTRIES = "wpisów";
const MSG_FINISHED = "Zakończono!";
const VALUE_MAIL = "e-mail";

// const LIB_SALARIES_NAME = "Wypłaty";
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
const SAL_FIELD_
const SAL_FIELD_HOLIDAY = "Urlop";
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

const EMP_FIELD_FULLNAME = "Imie i nazwisko";
const EMP_FIELD_HOLIDAY_TOTAL = "Wymiar urlopu";
const EMP_FIELD_HOLIDAY_LEFT = "Urlop pozostały";
const EMP_FIELD_HOLIDAY_USED = "Urlop wykorzystany";
const EMP_MSG_HOLIDAY_RECALCED = "Przeliczam urlop - wykorzystane dni urlopu to: ";


// zmienne
var arrMonths_pl = ["styczeń", "luty", "marzec", "kwiecien", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "listopad", "grudzień"];
var arrEditors = ["MalgorzataG", "ElzbietaZ", "trzystaIZABELA", "MarceliM", "trzysta"];
var arrManagers = ["trzysta"];
var arrNames = ["Małgorzata Grabowska", "Elżbieta Zdziech", "Izabela Skowrońska", "Marceli Matynia", "Administrator"];
var withdrawalMaker = "Marceli Matynia";
const HR = "--------------------------------------------------\n";
const BR = "\n";
const BR2 = "\n\n";
const SEP = ", ";
const UNDEF = "undefined";

var htmlMailHeader = "To jest mail wysłany automatycznie. W przypadku wysyłania odpowiedzi prosimy o utrzymanie w temacie numeru referencyjnego REF";
var htmlMailBody_CONTROL = "<p>";
var htmlSubject_CONTROL = "Raport z kontroli";

var htmlMailFooter = "<p><p>";
var htmlMailSignature = "";
var cssP = "";
var cssLI = "";

// wspólne
var FIELD_EDITOR = "Editor";
var FIELD_IS_NEW = "new";
var FIELD_REF = "REF";
var FIELD_REF_PARTENT = "parentREF";
var FIELD_IS_PARENT = "isParent";
var FIELD_IS_HIDDEN = "Ukryte";
var FIELD_CAN_ACCESS = "canAccess";
var FIELD_DISPLAY_NAME = "displayName";
var MSG_UPDATING = "uaktualniam";
var MSG_COPYING = "kopiuję";
var MSG_ENTRIES = "wpisów";
var MSG_FINISHED = "Zakończono!";
var VALUE_MAIL = "e-mail";

var VALUE_DAYNUMBER_MONDAY = 1;
var VALUE_DAYNUMBER_TUESDAY = 2;
var VALUE_DAYNUMBER_WEDNESDAY = 3;
var VALUE_DAYNUMBER_THURSDAY = 4;
var VALUE_DAYNUMBER_FRIDAY = 5;
var VALUE_DAYNUMBER_SATURDAY = 6;
var VALUE_DAYNUMBER_SUNDAY = 7;
var VIEW_SEP = " >>> ";

// ****************************************************************************
// ~~~ BAZA WYDATKI
// ****************************************************************************
var SPE_FIELD_IMPORTED = "Rozliczony";
var SPE_FIELD_AMOUNT = "Kwota";
var SPE_FIELD_DATE = "Data transakcji";
var SPE_FIELD_TYPE = "Typ transakcji";
var SPE_FIELD_TYPE_VALUE_EMPLOYEE_WITHDRAWAL = "Rozliczenie przelewem z pracownikiem";
var SPE_FIELD_TYPE_VALUE_EMPLOYEE_CASH = "Rozliczenie gotówką z pracownikiem";
var SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_CASH = "Wypłacona gotówką zaliczka";
var SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_WITHDRAWAL = "Wypłacona przelewem zaliczka";
var SPE_FIELD_BUDGET_LINK = "Budżet";
var SPE_FIELD_BUDGET_LINK_AMOUNT = "Kwota";

var SPE_FIELD_COST_ALLOCATION_LINK = "Robicie kosztu na osiedla";
var SPE_FIELD_COST_ALLOCATION_LINK_AMOUNT = "Kwota";

var SPE_FIELD_CREATOR = "Dokonujący transakcji";
var SPE_FIELD_CATEGORY = "Kategoria";
var SPE_FIELD_RECIPIENT = "Przekazano osobie";
var SPE_FIELD_SUPPLIER = "Dostawca";
var SPE_FIELD_EMPLOYEE_LINK = "Pracownik";
var SPE_FIELD_DESCRIPTION = "Opis";
var SPE_FIELD_INVOICE_IMG = "Faktura";
var SPE_FIELD_ISPE_FIELD_PAYED = "Do zapłaty";
var SPE_FIELD_ISPE_FIELD_REINVOICE = "Czy wydatek należy refakturować";
var SPE_FIELD_REINVOICE_CONTRACT_LINK = "Osiedle do faktury";
var SPE_FIELD_NR = "Nr";
var SPE_FIELD_NR_ASSIGNED = "Nr powiązany";
var SPE_FIELD_DESCRIPTION_DISPLAY = "Opis";
var SPE_FIELD_COST_ALLOCATION_LEFT = "Kwota pozostała do rozpisania";


// ****************************************************************************
// ~~~ BAZA WYPŁATY
// ****************************************************************************
var SAL_FIELD_CLOSED = "Rozliczony";
var SAL_FIELD_CLOSED_VALUE_YES = "Rozliczony";
var SAL_FIELD_CLOSED_VALUE_NO = "W trakcie rozliczania";
var SAL_FIELD_CASH_AMOUNT = "Wypłacono w gotówce";
var SAL_FIELD_CASH_DATE = "Data wypłaty gotówki";
var SAL_FIELD_WITHDRAWAL_AMOUNT = "Wpłacono na konto";
var SAL_FIELD_WITHDRAWAL_DATE = "Data przelewu";
var SAL_FIELD_EMPLOYEE_LINK = "Pracownik";
var SAL_FIELD_CONTRACT = "Osiedle";
var SAL_FIELD_SPEND_LINK = "Wydatek";
var SAL_FIELD_DESCRIPTION = "Uwagi";
var SAL_FIELD_MONTH = "Miesiąc";
var SAL_FIELD_PAYER = "Dokonujący wypłaty";
var SAL_FIELD_ADVANCE_PAYMENT = "Zaliczki";
var SAL_FIELD_WEEKENDS = "Dni wolne";
var SAL_FIELD_PAYMENT_TYPE = "Rodzaj wynagrodzenia";

var SAL_ADD_DESCRIPTION_WITHDRAWAL = " wypłata przelewem za ";
var SAL_ADD_DESCRIPTION_CASH = " wypłata gotówki za ";

var SAL_MSG_CLOSED_OR_NOACCESS = "Wpis już rozliczony lub nie masz uprawnień do zamknięcia rozliczenia";
var SAL_MSG_NO_AMONT = "Uzupełnij kwoty wypłat, gotówka lub przelew. Jeśli rozliczenie jest bez wypłaty w polach kwot wstaw zero";
var SAL_MSG_CLOSING = "Zamykam rozliczenie: ";
var SAL_MSG_ADVANCE_PAYMENT = "Szukam zaliczek... ";
var SAL_MSG_VALIDATION_ERR = "Nie można zapisać, popraw następujące błędy:";
var SAL_MSG_VALIDATION_ERR_NO_WITHDRWAL = "- podaj datę i kwotę przelewu";
var SAL_MSG_VALIDATION_ERR_NO_CASH = "- podaj datę i kwotę wypłaty gotówki";
var SAL_MSG_RUNING_FINDADVANCEPAYMENT = "szukam zaliczek dla wpisu...";

// ***** baza PRACOWNICY
var E_FIELD_FULLNAME = "Imie i nazwisko";
var EMP_FIELD_EMPLOYEE_HOLIDAY_TOTAL = "Wymiar urlopu";
var EMP_FIELD_EMPLOYEE_HOLIDAY_LEFT = "Urlop pozostały";
var EMP_FIELD_EMPLOYEE_HOLIDAY_USED = "Urlop wykorzystany";

// ****************************************************************************
// ~~~ BAZA OSIEDLA
// ****************************************************************************
//var CHK_FIELD_CONTRACT        = "Osiedle";
//var CON_FIELD_SHORTNAME       = "Nazwa potoczna";
var CON_FIELD_TAG = "Skrót";
var CON_FIELD_RAPORT_RECIPIENT = "Lista adresów e-mail odbiorców raportu";
//var CN_FIELD_BUILDINGS        = "Budynki i klatki";



// ***** baza BUDŻET
var B_FIELD_LIMIT = "Limit";
var B_FIELD_BALANCE = "Saldo";
var B_FIELD_LEFT = "Zostało";
var B_FIELD_AMOUNT = "Kwota";
var B_FIELD_CONTRACT_LINK = "Osiedle";
var B_FIELD_MONTH = "Miesiąc";
var B_FIELD_TYPE = "Rodzaj";
var B_FIELD_TYPE_VALUE_PAYOUTS = "Wynagrodzenia";
var B_MSG_BUDGET_FOUND = "...znaleziono budżet: ";

var BUD_TYPE_PAYOUT = "Wynagrodzenia";
var BUD_TYPE_PURCHASES = "Zakupy";
var BUD_TYPE_FIXED = "Stałe koszty";

// ****************************************************************************
// ~~~ KALENDARZ ZADAŃ, ACTIVITIES
// ****************************************************************************
var ACT_FIELD_MONTH = "Miesiąc";
var ACT_FIELD_DATES = "Daty";
var ACT_FIELD_WEEKDAYS = "Dni tygodnia";
var ACT_FIELD_TYPE = "Typ";
var ACT_FIELD_TYPE_VALUE_TEMPLATE = "Definicja czynności";
var ACT_FIELD_TYPE_VALUE_INSTANCE = "Pozycja harmonogramu";
var ACT_FIELD_CONTRACT = "Osiedle";
var ACT_FIELD_ACTION = "Czynność";
var ACT_FIELD_ACTION_DOMAIN = "Obszar";
var ACT_FIELD_ACTION_DOMAIN_VALUES = ["Klatki", "Garaż", "Teren", "Zieleń", "Biuro"];
var ACT_FIELD_ACTION_CHECKS = "Potencjalne problemy";
var ACT_FIELD_FREQUENCY = "Częstotliwość";


// ****************************************************************************
// ~~~ KONTROLE, CHECKS
// ****************************************************************************

var CHK_FIELD_CONTRACT_LINK = "Osiedle";
var CHK_FIELD_FREQENCY = "Częstotliwość";
var CHK_FILED_TYPE = "Typ kontroli";

/*  0-5  częstotliwość częściej niż raz miesiącu */
/*  6-16 czstotliwość raz w miesiącu i rzadziej */
var CHK_FIELD_FREQENCY_VALUES = ["Codziennie",
  "1 raz w tygodniu",
  "2 razy w tygodniu",
  "3 razy w tygodniu",
  "4 razy w tygodniu",
  "1 raz na dwa tygodnie",
  "1 raz w miesiącu",
  "2 razy w miesiącu",
  "3 razy w miesiącu",
  "4 razy w miesiącu",
  "1 raz w kwartale",
  "2 razy w kwartale",
  "3 razy w kwartale",
  "1 raz w roku",
  "2 razy w roku",
  "3 razy w roku",
  "wg potrzeb"];
var CHK_FIELD_ACTION_LINK = "Czynności do wykonania wg umowy";
var CHK_FIELD_ACTION_LINK_ATTR_RESULT = "Wykonanie";
var CHK_FIELD_CONTROL_DATETIME = "Data i godzina kontroli";

var CHK_FIELD_ACTION_DOMAIN = "Kontrolowany obszar";
var CHK_FIELD_ACTION_AREA = "Budynek i klatka";
var CHK_FIELD_CLOSED = "Kontrola zakończona, zamknij możliwość zmiany i wyślij e-mail z raportem";
var CHK_FIELDCHECKS = "Zauważone problemy - ";
var CHK_FIELDCHECKS_AREA_OK = "Brak uwag - ";
var CHK_FIELDCHECKS_AREA_NOK = "Do poprawy - ";

var CHK_FIELD_REPORT_RECIPIENTS = "Adresy na jakie wysłano raport";
var CHK_ACTION_CLOSE_CONFIRM_NAME = "potwierdzam zamknięcie kontroli i wysłanie raportu";
var CHK_FIELD_MAILBODY = "htmlBody";
var CHK_FIELD_GROUPBY = "groupBy";
var CHK_FIELD_MAIL_DATETIME = "Data wysłania maila z raportem";
var CHK_FIELD_CHEKCS_RAPORTED_LINK = "Kontrole wysłane w mailu";
var CHK_FIELD_CHEKCS_MAIL_LINK = "Mail z raportem";




function setEntryDefaultValues(e) {
  if (e !== undefined) {
    e.set(FIELD_EDITOR, arrEditors);
    e.set(FIELD_IS_NEW, true);
  }
};




































const arrMonths_pl = ["styczeń", "luty", "marzec", "kwiecien", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "listopad", "grudzień"];
const arrEditors = ["MalgorzataG", "ElzbietaZ", "trzystaIZABELA", "MarceliM", "trzysta"];
const arrManagers = ["trzysta"];
const arrNames = ["Małgorzata Grabowska", "Elżbieta Zdziech", "Izabela Skowrońska", "Marceli Matynia", "Administrator"];
const withdrawalMaker = "Marceli Matynia";

const FIELD_EDITOR = "Editor";
const FIELD_IS_NEW = "new";
const FIELD_REF = "REF";
const FIELD_REF_PARTENT = "parentREF";
const FIELD_IS_PARENT = "isParent";
const FIELD_IS_HIDDEN = "Ukryte";
const FIELD_CAN_ACCESS = "canAccess";
const FIELD_DISPLAY_NAME = "displayName";
const MSG_UPDATING = "uaktualniam";
const MSG_COPYING = "kopiuję";
const MSG_ENTRIES = "wpisów";
const MSG_FINISHED = "Zakończono!";
const VALUE_MAIL = "e-mail";



const InitLibaries = function () {

  var libSalaries = libByName(LIB_SALARIES_NAME);
  var libSpendings = libByName(LIB_SPANDINGS_NAME);
  var libBudget = libByName(LIB_BUDGETS_NAME);
  var libContracts = libByName(LIB_CONTRACTS_NAME);
  var libChecks = libByName(LIB_CHECKS_NAME);
  var libActivities = libByName(LIB_ACTIVITIES_NAME);

}


var HuubTools = function (e) {

  this.entry = e;

  this.setEntryDefaultValues = function () {
    if (e != null) {
      this.entry.set(FIELD_EDITOR, arrEditors);
      this.entry.set(FIELD_IS_NEW, true);
    }
  }
};











function setRef(base) {

  var tmpLib;
  switch (base) {
    case LIB_SALARIES_SHORT_NAME:
      tmpLib = libSalaries;
      break;
    case LIB_SPANDINGS_SHORT_NAME:
      tmpLib = libSpendings;
      break;
    case LIB_BUDGETS_SHORT_NAME:
      tmpLib = libBudget;
      break;
    case LIB_CONTRACTS_SHORT_NAME:
      tmpLib = libContracts;
      break;
    case LIB_CHECKS_SHORT_NAME:
      tmpLib = libChecks;
      break;
    case LIB_ACTIVITIES_SHORT_NAME:
      tmpLib = libActivities;
      break;
    default:
      tmpLib = lib();
  }

  var newRef = base + Math.floor(10000 + (Math.random() * 90000));
  result = tmpLib.find(newRef);

  while (result.length != 0) {
    newRef = base + Math.floor(10000 + (Math.random() * 90000));
    result = tmpLib.find(newRef);
  };
  return newRef;
}





// *^*^*^*  sprawdza czy jest Edytorem
function isEditor() {
  var u = user().username;
  var is = false;
  if (arrEditors.indexOf(u) >= 0) is = true;
  return is;
}


// *^*^*^*  sprawdza czy jest Managerem
function isManager() {
  var u = user().username;
  var is = false;
  if (arrManagers.indexOf(u) >= 0) is = true;
  return is;
}


// *^*^*^*  sprawdza czy entrySearchFor jest w arrayOfLinks
function isEntryLinked(arrayOfLinks, entrySearchFor) {

  var is = false;
  var i = 0;
  while (i < arrayOfLinks.length) {
    if (arrayOfLinks[i].id == entrySearchFor.id) {
      is = true;
      i = arrayOfLinks.length + 1;
    } else {
      i++;
    }
  }

  return is;
};



// *^*^*^*  odpalana Creating Entry, Opening an Entry Card
function setEntryDefaultValues(e) {
  e.set(FIELD_EDITOR, arrEditors);
  e.set(FIELD_IS_NEW, true);
}


// *^*^*^*  odpalana Creating Entry, After Save
function saveFirstTime(e) {
  e.set(FIELD_IS_NEW, false);
}




// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
// dodaje wartości do tablicy
function appendToArray(sourceArray, valueToAppend) {

  if (!Array.isArray(sourceArray)) { sourceArray = new Array() };
  if (Array.isArray(valueToAppend)) {
    for (let i = 0; i < valueToAppend.length; i++)
      sourceArray.push(valueToAppend[i])
  } else {
    sourceArray.push(valueToAppend)
  }
  return sourceArray.unique();
}



// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*



function addCounter(sourceArray) {

  var newArray = new Array();
  var newValue;

  for (let i = 0; i < sourceArray.length; i++) {
    c = i + 1;
    newValue = c + ") " + sourceArray[i];
    newArray.push(newValue);
  }
  return newArray;
}





// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
Array.prototype.unique = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (arr.indexOf(this[i]) < 0) {
      arr.push(this[i]);
    }
  }
  return arr;
}


/*
*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^

    BAZA BUDŻET, FUNCKJE I WARTOŚCI PÓL OBLICZANYCH

 *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
*/

function addBudgetSpending(entryBudget, entrySpending) {

  if (entryBudget !== undefined)
    entryBudget = entry();

  if (entrySpending !== undefined)
    entrySpending = masterEntry();
  var newBalance = 0;
  newBalance = entryBudget.field(B_FIELD_BALANCE) + Math.abs(entrySpending.field(SPE_FIELD_AMOUNT));    //plus bo wydatki są zawsze ujemne
  entryBudget.set(B_FIELD_BALANCE, newBalance);
  entryBudget.set(B_FIELD_LEFT, entryBudget.field(B_FIELD_LIMIT) - newBalance);
}



function removeBudgetSpending(entryBudget, entrySpending) {

}




function postSave() {
  var currentEntry = entry();
  var linkedEntry = l.linksTo(currentEntry)[0];
  currentEntry.link("Link", linkedEntry);
}
