// zmienne
var arrMonths_pl  = ["styczeń", "luty", "marzec", "kwiecien", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "listopad", "grudzień"];
var arrEditors    = ["MalgorzataG", "ElzbietaZ", "trzystaIZABELA", "trzysta"];
var arrManagers   = ["trzysta"];
var arrNames      = ["Małgorzata Grabowska", "Elżbieta Zdziech", "Izabela Skowrońska", "Marceli Matynia"];
var withdrawalMaker = "Marceli Matynia";

// wspólne
var FIELD_EDITOR = "Editor";
var FIELD_IS_NEW = "Nowy";
var FIELD_IS_HIDDEN = "Ukryte";
var FIELD_CAN_ACCESS = "canAccess";

var VALUE_DAYNUMBER_MONDAY    = 1;
var VALUE_DAYNUMBER_TUESDAY   = 2;
var VALUE_DAYNUMBER_WEDNESDAY = 3;
var VALUE_DAYNUMBER_THURSDAY  = 4;
var VALUE_DAYNUMBER_FRIDAY    = 5;
var VALUE_DAYNUMBER_SATURDAY  = 6;
var VALUE_DAYNUMBER_SUNDAY    = 7;
var VIEW_SEP = " >>> ";

// ***** baza wydatki
var S_FIELD_IMPORTED = "Rozliczony";
var S_FIELD_AMOUNT = "Kwota";
var S_FIELD_DATE = "Data transakcji";
var S_FIELD_TYPE = "Typ transakcji";
var S_FIELD_TYPE_VALUE_EMPLOYEE_WITHDRAWAL = "Rozliczenie przelewem z pracownikiem"; // wartość pola
var S_FIELD_TYPE_VALUE_EMPLOYEE_CASH = "Rozliczenie gotówką z pracownikiem";
var S_FIELD_TYPE_VALUE_ADVANCEPAYMENT_CASH = "Wypłacona gotówką zaliczka";
var S_FIELD_TYPE_VALUE_ADVANCEPAYMENT_WITHDRAWAL = "Wypłacona przelewem zaliczka";
var S_FIELD_BUDGET_LINK = "Budżet";
var S_FIELD_BUDGET_LINK_AMOUNT = "Kwota";

var S_FIELD_COST_ALLOCATION_LINK = "Robicie kosztu na osiedla";
var S_FIELD_COST_ALLOCATION_LINK_AMOUNT = "Kwota";

var S_FIELD_CREATOR = "Dokonujący transakcji";
var S_FIELD_CATEGORY = "Kategoria";
var S_FIELD_RECIPIENT = "Przekazano osobie";
var S_FIELD_SUPPLIER = "Dostawca";
var S_FIELD_EMPLOYEE_LINK = "Pracownik";
var S_FIELD_DESCRIPTION = "Opis";
var S_FIELD_INVOICE_IMG = "Faktura";
var S_FIELD_IS_FIELD_PAYED = "Do zapłaty";
var S_FIELD_IS_FIELD_REINVOICE = "Czy wydatek należy refakturować";
var S_FIELD_REINVOICE_CONTRACT_LINK = "Osiedle do faktury";
var S_FIELD_NR = "Nr";
var S_FIELD_NR_ASSIGNED = "Nr powiązany";
var S_FIELD_DESCRIPTION_DISPLAY = "Opis";
var S_FIELD_COST_ALLOCATION_LEFT = "Kwota pozostała do rozpisania";

// ***** baza WYPŁATY
var P_FIELD_CLOSED = "Rozliczony";
var P_FIELD_CLOSED_VALUE_YES  = "Rozliczony";
var P_FIELD_CLOSED_VALUE_NO   = "W trakcie rozliczania";
var P_FIELD_CASH_AMOUNT = "Wypłacono w gotówce";
var P_FIELD_CASH_DATE = "Data wypłaty gotówki";
var P_FIELD_WITHDRAWAL_AMOUNT = "Wpłacono na konto";
var P_FIELD_WITHDRAWAL_DATE = "Data przelewu";
var P_FIELD_EMPLOYEE_LINK = "Pracownik";
var P_SPEND_LINK = "Wydatek";
var P_FIELD_DESCRIPTION = "Uwagi";
var P_FIELD_MONTH = "Miesiąc";
var P_FIELD_PAYER = "Dokonujący wypłaty";
var P_FIELD_ADVANCE_PAYMENT = "Zaliczki";
var P_FIELD_WEEKENDS = "Dni wolne";

var P_ADD_DESCRIPTION_WITHDRAWAL = " wypłata przelewem za ";
var P_ADD_DESCRIPTION_CASH = " wypłata gotówki za ";

var P_MSG_CLOSED_OR_NOACCESS = "Wpis już rozliczony lub nie masz uprawnień do zamknięcia rozliczenia";
var P_MSG_NO_AMONT = "Uzupełnij kwoty wypłat, gotówka lub przelew. Jeśli rozliczenie jest bez wypłaty w polach kwot wstaw zero";
var P_MSG_CLOSING = "Zamykam rozliczenie: ";
var P_MSG_ADVANCE_PAYMENT = "Szukam zaliczek... ";
var P_MSG_VALIDATION_ERR = "Nie można zapisać, popraw następujące błędy:";
var P_MSG_VALIDATION_ERR_NO_WITHDRWAL = "- podaj datę i kwotę przelewu";
var P_MSG_VALIDATION_ERR_NO_CASH = "- podaj datę i kwotę wypłaty gotówki";

// ***** baza PRACOWNICY
var E_FIELD_FULLNAME = "Imie i nazwisko";


// ***** baza Osiedla, kontrakty
var P_FIELD_CONTRACT      = "Osiedle";
var P_FIELD_SHORTNAME     = "Nazwa potoczna";
var P_FIELD_TAG           = "Skrót";
var P_FIELD_BUILDINGS     = "Budynki i klatki";

// ***** baza BUDŻET
var B_FIELD_LIMIT         = "Limit";
var B_FIELD_BALANCE       = "Saldo";
var B_FIELD_LEFT          = "Zostało";
var B_FIELD_AMOUNT        = "Kwota";
var B_FIELD_CONTRACT_LINK = "Osiedle";
var B_FIELD_MONTH         = "Miesiąc";
var B_FIELD_TYPE          = "Rodzaj";
var B_FIELD_TYPE_VALUE_PAYOUTS = "Wynagrodzenia";
var B_MSG_BUDGET_FOUND    = "...znaleziono budżet: ";


// ***** baza KALENDARZ ZADAŃ
var C_FIELD_MONTH                 = "Miesiąc";
var C_FIELD_DATES                 = "Daty";
var C_FIELD_DATES_DAYS            = "Dni";
var C_FIELD_TYPE                  = "Typ";
var C_FIELD_TYPE_VALUE_TEMPLATE   = "Definicja czynności";
var C_FIELD_TYPE_VALUE_INSTANCE   = "Pozycja harmonogramu";
var C_FIELD_CONTRACT              = "Osiedle";
var C_FIELD_ACTION                = "Czynność";
var C_FIELD_ACTION_DOMAIN         = "Obszar";
var C_FIELD_ACTION_DOMAIN_VALUES  = ["Klatki","Garaż","Teren","Zieleń","Biuro"];


// ***** baza KONTROLA
var R_FIELD_CHECKPOINT_LABELS = ["Posadzka, płytki, kamień, fugi czy są ślady po brudnym mopie, slady złego mycia przy rogach",
                              "Zapach",
                              "Parapety: kurz, martwe owady",
                              "Przeszklenia, drzwi",
                              "Pajęczyny",
                              "Kurz na włącznikach, elementach wystających",
                              "Kurz na cokołach, brudne cokoły",
                              "Schody: spoczniki i podstopnice",
                              "Schody: zacieki na bokach",
                              "Windy: stal, ślady, zacieki z oliwki",
                              "Windy: posadzka",
                              "Windy: lustra",
                              "Barierki, poręcze" ];
var R_FIELD_BUILDING        = "Budynek i klatka";
var R_FIELD_CONTRACT_LINK   = "Osiedle";
var R_FIELD_FREQENCY        = "Częstotliwość";
var R_FIELD_FREQENCY_VALUES = [ "Codziennie",
                                "1 raz w tygodniu",
                                "2 razy w tygodniu",
                                "3 razy w tygodniu",
                                "4 razy w tygodniu",
                                "1 raz na dwa tygodnie", /*  0-5  częstotliwość częściej niż raz miesiącu */
                                "1 raz w miesiącu", /* 6-15 czstotliwość raz w miesiącu i rzadziej */
                                "2 razy w miesiącu",
                                "3 razy w miesiącu",
                                "4 razy w miesiącu",
                                "1 raz w kwartale",
                                "2 razy w kwartale",
                                "3 razy w kwartale",
                                "1 raz w roku",
                                "2 razy w roku",
                                "3 razy w roku"];

var R_FIELD_ACTION_LINK     = "Czynności do wykonania wg umowy";
