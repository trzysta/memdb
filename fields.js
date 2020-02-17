
// wspólne
const FIELD_EDITOR = "Edytor";
const FIELD_IS_NEW = "Nowy";
const FIELD_IS_HIDDEN = "Ukryte"

// ***** baza wydatki
const S_FIELD_IMPORTED = "Rozliczony";
const S_FIELD_AMOUNT = "Kwota";
const S_FIELD_DATE = "Data transakcji";
const S_FIELD_TYPE = "Typ operacji";
const S_FIELD_BUDGET_LINK = "Budżet";
const S_FIELD_CREATOR = "Dokonujący transakcji";
const S_FIELD_CATEGORY = "Kategoria";
const S_FIELD_RECIPIENT = "Przekazano osobie";
const S_FIELD_SUPPLIER = "Dostawca";
const S_FIELD_EMPLOYEE_LINK = "Pracownik";
const S_FIELD_DESCRIPTION = "Opis";
const S_FIELD_INVOICE_IMG = "Faktura";
const S_FIELD_IS_FIELD_PAYED = "Do zapłaty";
const S_FIELD_COST_ALLOCATION_LINK = "Robicie kosztu na osiedla";
const S_FIELD_IS_FIELD_REINVOICE = "Czy wydatek należy refakturować";
const S_FIELD_REINVOICE_CONTRACT_LINK = "Osiedle do faktury";
const S_FIELD_NR = "Nr";
const S_FIELD_NR_ASSIGNED = "Nr powiązany";
const S_FIELD_DESCRIPTION_DISPLAY = "Opis";

// ***** baza WYPŁATY
const P_FIELD_CLOSED = "Rozliczony";
  const P_FIELD_CLOSED_VALUE_YES  = "Rozliczony";
  const P_FIELD_CLOSED_VALUE_NO   = "W trakcie rozliczania"
  const P_MSG_CLOSED_NOACCESS = "Wpis już rozliczony lub nie masz uprawnień do zamknięcia rozliczenia";


// ***** baza BUDŻET
const B_FIELD_LIMIT = "Limit";
const B_FIELD_BALANCE = "Saldo";
const B_FIELD_LEFT = "Zostało";
const B_FIELD_AMOUNT = "Kwota"

// zmienne
var arrMonths_pl = ["styczeń", "luty", "marzec", "kwiecien", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "listopad", "grudzień"];
var arrEditors = ["MalgorzataG", "ElzbietaZ", "trzystaIZABELA", "trzysta"];
var arrManagers = ["trzysta"];
var arrManagers = ["Małgorzata Grabowska", "Elżbieta Zdziech", "Izabela Skowrońska", "Marceli Matynia"];
var libWyplaty = libByName("Wypłaty");
var libWydatki = libByName("Wydatki");
var libBudzet =  libByName("Budżet");
var libOsiedla = libByName("Osiedla");
