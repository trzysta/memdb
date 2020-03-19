
// zmienne
var arrMonths_pl  = ["styczeń", "luty", "marzec", "kwiecien", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "listopad", "grudzień"];
var arrEditors    = ["MalgorzataG", "ElzbietaZ", "trzystaIZABELA", "MarceliM", "trzysta"];
var arrManagers   = ["trzysta"];
var arrNames      = ["Małgorzata Grabowska", "Elżbieta Zdziech", "Izabela Skowrońska", "Marceli Matynia", "Administrator"];
var withdrawalMaker = "Marceli Matynia";
const HR = "--------------------------------------------------";
const BR = "\n";


// wspólne
var FIELD_EDITOR = "Editor";
var FIELD_IS_NEW = "Nowy";
var FIELD_IS_HIDDEN = "Ukryte";
var FIELD_CAN_ACCESS = "canAccess";
var MSG_UPDATING = "uaktualniam";
var MSG_COPYING = "kopiuję";
var MSG_ENTRIES = "wpisów";
var MSG_FINISHED = "Zakończono!";


var VALUE_DAYNUMBER_MONDAY    = 1;
var VALUE_DAYNUMBER_TUESDAY   = 2;
var VALUE_DAYNUMBER_WEDNESDAY = 3;
var VALUE_DAYNUMBER_THURSDAY  = 4;
var VALUE_DAYNUMBER_FRIDAY    = 5;
var VALUE_DAYNUMBER_SATURDAY  = 6;
var VALUE_DAYNUMBER_SUNDAY    = 7;
var VIEW_SEP = " >>> ";



// ****************************************************************************
// ~~~ BAZA WYDATKI
// ****************************************************************************
var SPE_FIELD_IMPORTED            = "Rozliczony";
var SPE_FIELD_AMOUNT              = "Kwota";
var SPE_FIELD_DATE                = "Data transakcji";
var SPE_FIELD_TYPE                = "Typ transakcji";
var SPE_FIELD_TYPE_VALUE_EMPLOYEE_WITHDRAWAL = "Rozliczenie przelewem z pracownikiem";
var SPE_FIELD_TYPE_VALUE_EMPLOYEE_CASH = "Rozliczenie gotówką z pracownikiem";
var SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_CASH = "Wypłacona gotówką zaliczka";
var SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_WITHDRAWAL = "Wypłacona przelewem zaliczka";
var SPE_FIELD_BUDGET_LINK         = "Budżet";
var SPE_FIELD_BUDGET_LINK_AMOUNT  = "Kwota";

var SPE_FIELD_COST_ALLOCATION_LINK = "Robicie kosztu na osiedla";
var SPE_FIELD_COST_ALLOCATION_LINK_AMOUNT = "Kwota";

var SPE_FIELD_CREATOR             = "Dokonujący transakcji";
var SPE_FIELD_CATEGORY            = "Kategoria";
var SPE_FIELD_RECIPIENT           = "Przekazano osobie";
var SPE_FIELD_SUPPLIER            = "Dostawca";
var SPE_FIELD_EMPLOYEE_LINK       = "Pracownik";
var SPE_FIELD_DESCRIPTION         = "Opis";
var SPE_FIELD_INVOICE_IMG         = "Faktura";
var SPE_FIELD_ISPE_FIELD_PAYED      = "Do zapłaty";
var SPE_FIELD_ISPE_FIELD_REINVOICE  = "Czy wydatek należy refakturować";
var SPE_FIELD_REINVOICE_CONTRACT_LINK = "Osiedle do faktury";
var SPE_FIELD_NR                  = "Nr";
var SPE_FIELD_NR_ASSIGNED         = "Nr powiązany";
var SPE_FIELD_DESCRIPTION_DISPLAY = "Opis";
var SPE_FIELD_COST_ALLOCATION_LEFT = "Kwota pozostała do rozpisania";


// ****************************************************************************
// ~~~ BAZA WYPŁATY
// ****************************************************************************
var SAL_FIELD_CLOSED              = "Rozliczony";
var SAL_FIELD_CLOSED_VALUE_YES    = "Rozliczony";
var SAL_FIELD_CLOSED_VALUE_NO     = "W trakcie rozliczania";
var SAL_FIELD_CASH_AMOUNT         = "Wypłacono w gotówce";
var SAL_FIELD_CASH_DATE           = "Data wypłaty gotówki";
var SAL_FIELD_WITHDRAWAL_AMOUNT   = "Wpłacono na konto";
var SAL_FIELD_WITHDRAWAL_DATE     = "Data przelewu";
var SAL_FIELD_EMPLOYEE_LINK       = "Pracownik";
var SAL_FIELD_CONTRACT            = "Osiedle";
var SAL_FIELD_SPEND_LINK          = "Wydatek";
var SAL_FIELD_DESCRIPTION         = "Uwagi";
var SAL_FIELD_MONTH               = "Miesiąc";
var SAL_FIELD_PAYER               = "Dokonujący wypłaty";
var SAL_FIELD_ADVANCE_PAYMENT     = "Zaliczki";
var SAL_FIELD_WEEKENDS            = "Dni wolne";
var SAL_FIELD_PAYMENT_TYPE        = "Rodzaj wynagrodzenia";

var SAL_ADD_DESCRIPTION_WITHDRAWAL = " wypłata przelewem za ";
var SAL_ADD_DESCRIPTION_CASH      = " wypłata gotówki za ";

var SAL_MSG_CLOSED_OR_NOACCESS    = "Wpis już rozliczony lub nie masz uprawnień do zamknięcia rozliczenia";
var SAL_MSG_NO_AMONT              = "Uzupełnij kwoty wypłat, gotówka lub przelew. Jeśli rozliczenie jest bez wypłaty w polach kwot wstaw zero";
var SAL_MSG_CLOSING               = "Zamykam rozliczenie: ";
var SAL_MSG_ADVANCE_PAYMENT       = "Szukam zaliczek... ";
var SAL_MSG_VALIDATION_ERR        = "Nie można zapisać, popraw następujące błędy:";
var SAL_MSG_VALIDATION_ERR_NO_WITHDRWAL = "- podaj datę i kwotę przelewu";
var SAL_MSG_VALIDATION_ERR_NO_CASH = "- podaj datę i kwotę wypłaty gotówki";
var SAL_MSG_RUNING_FINDADVANCEPAYMENT = "szukam zaliczek dla wpisu...";

// ***** baza PRACOWNICY
var E_FIELD_FULLNAME = "Imie i nazwisko";

// ****************************************************************************
// ~~~ BAZA OSIEDLA
// ****************************************************************************
//var CON_FIELD_CONTRACT      = "Osiedle";
//var CN_FIELD_SHORTNAME     = "Nazwa potoczna";
//var CN_FIELD_TAG           = "Skrót";
//var CN_FIELD_BUILDINGS     = "Budynki i klatki";

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



// ****************************************************************************
// ~~~ KALENDARZ ZADAŃ, ACTIVITIES
// ****************************************************************************
var ACT_FIELD_MONTH                 = "Miesiąc";
var ACT_FIELD_DATES                 = "Daty";
var ACT_FIELD_WEEKDAYS              = "Dni tygodnia";
var ACT_FIELD_TYPE                  = "Typ";
var ACT_FIELD_TYPE_VALUE_TEMPLATE   = "Definicja czynności";
var ACT_FIELD_TYPE_VALUE_INSTANCE   = "Pozycja harmonogramu";
var ACT_FIELD_CONTRACT              = "Osiedle";
var ACT_FIELD_ACTION                = "Czynność";
var ACT_FIELD_ACTION_DOMAIN         = "Obszar";
var ACT_FIELD_ACTION_DOMAIN_VALUES  = ["Klatki","Garaż","Teren","Zieleń","Biuro"];
var ACT_FIELD_ACTION_CHECKS         = "Potencjalne problemy";
var ACT_FIELD_FREQUENCY             = "Częstotliwość";



// ***** baza KONTROLA
var CON_FIELD_BUILDING        = "Budynek i klatka";
var CON_FIELD_CONTRACT_LINK   = "Osiedle";
var CON_FIELD_FREQENCY        = "Częstotliwość";

/*  0-5  częstotliwość częściej niż raz miesiącu */
/*  6-16 czstotliwość raz w miesiącu i rzadziej */
var CON_FIELD_FREQENCY_VALUES = [ "Codziennie",
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
var CON_FIELD_ACTION_LINK       = "Czynności do wykonania wg umowy";
var CON_FIELD_ACTION_LINK_ATTR_RESULT = "Wykonanie";
var CON_FIELD_MAILBODY          = "mailBody";
var CON_FIELD_CONTROL_DATETIME  = "Data i godzina kontroli";

var CON_FIELD_ACTION_DOMAIN     = "Kontrolowany obszar";
var CON_FIELD_CLOSED            = "Kontrola zakończona, zamknij możliwość zmiany i wyślij e-mail z raportem";
var CON_FILED_CHECKS            = "Zauważone problemy - ";
var R_LABEL_1 = "Oceń stan posadzki, oceń płytki fugi i cokoły. Sprawdź spoczniki (półpiętra), podstopnice i boczki schodów. Patrz także na posadzkę pod światło.";
var R_LABEL_2 = "Kosmetyka, oceń usunięcie kurzu, śladów po palcach na szybach, czystość elementów wyposażenia klatki schodowej (szachty itp), kurz na włącznikach, elementach wystających";
var R_LABEL_3 = "Winda, oceń prace wykonane w środku windy a także stan drzwi i portali na piętrach.";
var R_LABEL_4 = "Sufit i elementy nad głową. Oceń czy są widoczne zabrudzenia pod sufitem, pajęczyny, brudne wyloty powietrza, rogi itp.";
var R_LABEL_5 = "Inne istotne punkty i oceny.";
