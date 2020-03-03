
// wspólne
const FIELD_EDITOR = "Editor";
const FIELD_IS_NEW = "Nowy";
const FIELD_IS_HIDDEN = "Ukryte";
const FIELD_CAN_ACCESS = "canAccess";

const VALUE_DAYNUMBER_MONDAY    = 1;
const VALUE_DAYNUMBER_TUESDAY   = 2;
const VALUE_DAYNUMBER_WEDNESDAY = 3;
const VALUE_DAYNUMBER_THURSDAY  = 4;
const VALUE_DAYNUMBER_FRIDAY    = 5;
const VALUE_DAYNUMBER_SATURDAY  = 6;
const VALUE_DAYNUMBER_SUNDAY    = 7;
const VIEW_SEP = " >>> ";

// ***** baza wydatki
const S_FIELD_IMPORTED = "Rozliczony";
const S_FIELD_AMOUNT = "Kwota";
const S_FIELD_DATE = "Data transakcji";
const S_FIELD_TYPE = "Typ transakcji";
const S_FIELD_TYPE_VALUE_EMPLOYEE_WITHDRAWAL = "Rozliczenie przelewem z pracownikiem"; // wartość pola
const S_FIELD_TYPE_VALUE_EMPLOYEE_CASH = "Rozliczenie gotówką z pracownikiem";
const S_FIELD_TYPE_VALUE_ADVANCEPAYMENT_CASH = "Wypłacona gotówką zaliczka";
const S_FIELD_TYPE_VALUE_ADVANCEPAYMENT_WITHDRAWAL = "Wypłacona przelewem zaliczka";
const S_FIELD_BUDGET_LINK = "Budżet";
const S_FIELD_BUDGET_LINK_AMOUNT = "Kwota";

const S_FIELD_COST_ALLOCATION_LINK = "Robicie kosztu na osiedla";
const S_FIELD_COST_ALLOCATION_LINK_AMOUNT = "Kwota";

const S_FIELD_CREATOR = "Dokonujący transakcji";
const S_FIELD_CATEGORY = "Kategoria";
const S_FIELD_RECIPIENT = "Przekazano osobie";
const S_FIELD_SUPPLIER = "Dostawca";
const S_FIELD_EMPLOYEE_LINK = "Pracownik";
const S_FIELD_DESCRIPTION = "Opis";
const S_FIELD_INVOICE_IMG = "Faktura";
const S_FIELD_IS_FIELD_PAYED = "Do zapłaty";
const S_FIELD_IS_FIELD_REINVOICE = "Czy wydatek należy refakturować";
const S_FIELD_REINVOICE_CONTRACT_LINK = "Osiedle do faktury";
const S_FIELD_NR = "Nr";
const S_FIELD_NR_ASSIGNED = "Nr powiązany";
const S_FIELD_DESCRIPTION_DISPLAY = "Opis";
const S_FIELD_COST_ALLOCATION_LEFT = "Kwota pozostała do rozpisania";

// ***** baza WYPŁATY
const P_FIELD_CLOSED = "Rozliczony";
const P_FIELD_CLOSED_VALUE_YES  = "Rozliczony";
const P_FIELD_CLOSED_VALUE_NO   = "W trakcie rozliczania";
const P_FIELD_CASH_AMOUNT = "Wypłacono w gotówce";
const P_FIELD_CASH_DATE = "Data wypłaty gotówki";
const P_FIELD_WITHDRAWAL_AMOUNT = "Wpłacono na konto";
const P_FIELD_WITHDRAWAL_DATE = "Data przelewu";
const P_FIELD_EMPLOYEE_LINK = "Pracownik";
const P_SPEND_LINK = "Wydatek";
const P_FIELD_DESCRIPTION = "Uwagi";
const P_FIELD_MONTH = "Miesiąc";
const P_FIELD_PAYER = "Dokonujący wypłaty";
const P_FIELD_ADVANCE_PAYMENT = "Zaliczki";
const P_FIELD_WEEKENDS = "Dni wolne";

const P_ADD_DESCRIPTION_WITHDRAWAL = " wypłata przelewem za ";
const P_ADD_DESCRIPTION_CASH = " wypłata gotówki za ";

const P_MSG_CLOSED_OR_NOACCESS = "Wpis już rozliczony lub nie masz uprawnień do zamknięcia rozliczenia";
const P_MSG_NO_AMONT = "Uzupełnij kwoty wypłat, gotówka lub przelew. Jeśli rozliczenie jest bez wypłaty w polach kwot wstaw zero";
const P_MSG_CLOSING = "Zamykam rozliczenie: ";
const P_MSG_ADVANCE_PAYMENT = "Szukam zaliczek... ";
const P_MSG_VALIDATION_ERR = "Nie można zapisać, popraw następujące błędy:";
const P_MSG_VALIDATION_ERR_NO_WITHDRWAL = "- podaj datę i kwotę przelewu";
const P_MSG_VALIDATION_ERR_NO_CASH = "- podaj datę i kwotę wypłaty gotówki";

// ***** baza PRACOWNICY
const E_FIELD_FULLNAME = "Imie i nazwisko";


// ***** baza Osiedla, kontrakty
const P_FIELD_CONTRACT      = "Osiedle";
const P_FIELD_SHORTNAME     = "Nazwa potoczna";
const P_FIELD_TAG           = "Skrót";
const P_FIELD_BUILDINGS     = "Budynki i klatki";
const aaaaaa                = "";

// ***** baza BUDŻET
const B_FIELD_LIMIT         = "Limit";
const B_FIELD_BALANCE       = "Saldo";
const B_FIELD_LEFT          = "Zostało";
const B_FIELD_AMOUNT        = "Kwota";
const B_FIELD_CONTRACT_LINK = "Osiedle";
const B_FIELD_MONTH         = "Miesiąc";
const B_FIELD_TYPE          = "Rodzaj";
const B_FIELD_TYPE_VALUE_PAYOUTS = "Wynagrodzenia";
const B_MSG_BUDGET_FOUND    = "...znaleziono budżet: ";


// ***** baza KALENDARZ ZADAŃ
const C_FIELD_MONTH                 = "Miesiąc";
const C_FIELD_DATES                 = "Daty";
const C_FIELD_DATES_DAYS            = "Dni";
const C_FIELD_TYPE                  = "Typ";
const C_FIELD_TYPE_VALUE_TEMPLATE   = "Definicja czynności";
const C_FIELD_TYPE_VALUE_INSTANCE   = "Pozycja harmonogramu";
const C_FIELD_CONTRACT              = "Osiedle";
const C_FIELD_ACTION                = "Czynność";
const C_FIELD_ACTION_DOMAIN         = "Obszar";


// ***** baza KONTROLA
const R_FIELD_CHECKPOINT_LABELS = [ "Posadzka, płytki, kamień, fugi \n czy są ślady po brudnym mopie, slady złego mycia przy rogach",
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
const R_FIELD_BUILDING          = "Budynek i klatka";
const R_CONTRACT_LINK           = "Osiedle";
const R_FREQ_LINKED             = ["Codziennie",
                                  "1 raz w tygodniu",
                                  "2 razy w tygodniu",
                                  "3 razy w tygodniu",
                                  "1 raz na dwa tygodnie"];




const R_FIELD_ACTIONS_LINK = "Czynności do wykonania wg umowy";
