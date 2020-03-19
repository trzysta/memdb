
// zmienne
var arrMonths_pl  = ["styczeń", "luty", "marzec", "kwiecien", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "listopad", "grudzień"];
var arrEditors    = ["MalgorzataG", "ElzbietaZ", "trzystaIZABELA", "MarceliM", "trzysta"];
var arrManagers   = ["trzysta"];
var arrNames      = ["Małgorzata Grabowska", "Elżbieta Zdziech", "Izabela Skowrońska", "Marceli Matynia", "Administrator"];
var withdrawalMaker = "Marceli Matynia";
const HR = "--------------------------------------------------";
const BR = "\n";
const SEP = ", ";

var htmlMailHeader        = "<p>To jest mail wysłany automatycznie. W przypadku wysyłania odpowiedzi prosimy o utrzymanie w temacie numeru referencyjnego <b>REF</b></p>";
var htmlMailBody_CONTROL  = "<p>";
var htmlSubject_CONTROL   = "Raport z kontroli";

var htmlMailFooter        = "<p><p>";
var htmlMailSignature     = "";
var cssP                  = "";
var cssLI                 = "";

// wspólne
var FIELD_EDITOR        = "Editor";
var FIELD_IS_NEW        = "new";
var FIELD_REF           = "REF";
var FIELD_REF_PARTENT   = "parentREF";
var FIELD_IS_PARENT     = "isParent";
var FIELD_IS_HIDDEN     = "Ukryte";
var FIELD_CAN_ACCESS    = "canAccess";
var FIELD_DISPLAY_NAME  = "displayName";
var MSG_UPDATING        = "uaktualniam";
var MSG_COPYING         = "kopiuję";
var MSG_ENTRIES         = "wpisów";
var MSG_FINISHED        = "Zakończono!";
var VALUE_MAIL          = "E-mail";

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
//var CHK_FIELD_CONTRACT      = "Osiedle";
//var CON_FIELD_SHORTNAME     = "Nazwa potoczna";
var CON_FIELD_TAG         = "Skrót";
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



// ****************************************************************************
// ~~~ KONTROLE, CHECKS
// ****************************************************************************

var CHK_FIELD_CONTRACT_LINK   = "Osiedle";
var CHK_FIELD_FREQENCY        = "Częstotliwość";
var CHK_FILED_TYPE            = "Typ kontroli";

/*  0-5  częstotliwość częściej niż raz miesiącu */
/*  6-16 czstotliwość raz w miesiącu i rzadziej */
var CHK_FIELD_FREQENCY_VALUES = [ "Codziennie",
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
var CHK_FIELD_ACTION_LINK       = "Czynności do wykonania wg umowy";
var CHK_FIELD_ACTION_LINK_ATTR_RESULT = "Wykonanie";
var CHK_FIELD_MAILBODY          = "mailBody";
var CHK_FIELD_CONTROL_DATETIME  = "Data i godzina kontroli";

var CHK_FIELD_ACTION_DOMAIN     = "Kontrolowany obszar";
var CHK_FIELD_ACTION_AREA       = "Budynek i klatka";
var CHK_FIELD_CLOSED            = "Kontrola zakończona, zamknij możliwość zmiany i wyślij e-mail z raportem";
var CHK_FIELDCHECKS             = "Zauważone problemy - ";
var CHK_FIELDCHECKS_AREA_OK     = "Brak uwag - ";
var CHK_FIELDCHECKS_AREA_NOK    = "Do poprawy - ";

var CHK_FIELD_MAIL_RECIPIENTS   = "";
var CHK_ACTION_CLOSE_CONFIRM_NAME   = "potwierdzam zamknięcie kontroli i wysłanie raportu";
