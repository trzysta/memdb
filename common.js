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

  const LIB_SALARIES_NAME = 'Wypłaty';
  const LIB_SPANDINGS_NAME = 'Wydatki';
  const LIB_BUDGETS_NAME = 'Budżet';
  const LIB_CONTRACTS_NAME = 'Osiedla';
  const LIB_CHECKS_NAME = 'Kontrole';
  const LIB_ACTIVITIES_NAME = 'Kalendarz zadań';
  const LIB_EMPLOYEES_NAME = 'Pracownicy';
  const LIB_TASKS_NAME = 'Zadania';


  const HOLYDAYS_2022 = [
    [1,2,6,8,9,15,16,22,23,29,30],
    [5,6,12,13,19,20,26,27],
    [5,6,12,13,19,20,26,27],
    [2,3,9,10,16,17,18,23,24,30],
    [1,3,7,8,14,15,21,22,28,29],
    [4,5,11,12,16,18,19,25,26],
    [2,3,9,10,16,17,23,24,30,31],	
    [6,7,13,14,15,20,21,27,28],
    [3,4,10,11,17,18,24,25],
    [1,2,8,9,15,16,22,23,29,30],	
    [1,5,6,11,12,13,19,20,26,27],	
    [3,4,10,11,17,18,24,25,26,31]
  ];
  const HOLYDAYS_2023 = [
    [1,6,7,8,14,15,21,22,28,29],
    [4,5,11,12,18,19,25,26],
    [4,5,11,12,18,19,25,26],
    [1,2,8,9,10,15,16,22,23,29,30],
    [1,3,6,7,13,14,20,21,27,28],
    [3,4,8,10,11,17,18,24,25,8],
    [1,2,8,9,15,16,22,23,29,30]
    [5,6,12,13,15,19,20,26,27],
    [2,3,9,10,16,17,23,24,30]
    [1,7,8,14,15,21,22,28,29],
    [1,4,5,11,12,18,19,25,26],
    [2,3,9,10,16,17,23,24,30,31,25,26]
  ];

  const WEEKDAYS_EN = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const WEEKDAYS_PL = [
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
    'Niedziela',
  ];
  const WEEKDAYS2_PL = ['PN', 'WT', 'ŚR', 'CZ', 'PT', 'SO', 'ND'];
  const MONTHS_PL = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień',
  ];
  const MONTHS3_PL = [
    'STY',
    'LUT',
    'MAR',
    'KWI',
    'MAJ',
    'CZE',
    'LIP',
    'SIE',
    'WRZ',
    'PAŹ',
    'LIS',
    'GRU',
  ];

  const arrEditors = [
    'MalgorzataG',
    'ElzbietaZ',
    'WojciechS',
    'KatarzynaD',
    'Ksiegowosc',
    'trzysta',
    'MagdalenaM'
  ];

  const arrNames = [
    'Małgorzata Grabowska',
    'Elżbieta Zdziech',
    'Wojciech Sygit',
    'Katarzyna Deputowska',
    'Ksiegowosc 300CS',
    'Administrator',
    'Magdalena Matynia'
  ];

  const ARR_MANAGERS = ['trzysta', 'Marceli Matynia'];

  const FIELD_EDITOR = 'Editor';
  const FIELD_IS_NEW = 'new';
  const FIELD_REF = 'REF';
  const FIELD_REF_PARTENT = 'parentREF';
  const FIELD_IS_PARENT = 'isParent';
  const FIELD_IS_HIDDEN = 'Ukryte';
  const FIELD_CAN_ACCESS = 'canAccess';
  const FIELD_DISPLAY_NAME = 'displayName';
  const MSG_UPDATING = 'uaktualniam';
  const MSG_COPYING = 'kopiuję';
  const MSG_ENTRIES = 'wpisów';
  const MSG_FINISHED = 'Zakończono!';
  const VALUE_MAIL = 'e-mail';

  const MAIL_CC_RECIPIENTS = 'raporty@trzysta.pl';

  const SAL_FIELD_CANREAD = 'canAccess';
  const SAL_WITHDRWAL_MAKER = 'Marceli Matynia';
  const SAL_FIELD_CLOSED = 'Rozliczony';
  const SAL_FIELD_CLOSED_VALUE_YES = 'Rozliczony';
  const SAL_FIELD_CLOSED_VALUE_NO = 'W trakcie rozliczania';
  const SAL_FIELD_CASH_AMOUNT = 'Wypłacono w gotówce';
  const SAL_FIELD_CASH_DATE = 'Data wypłaty gotówki';
  const SAL_FIELD_WITHDRAWAL_AMOUNT = 'Wpłacono na konto';
  const SAL_FIELD_WITHDRAWAL_DATE = 'Data przelewu';
  const SAL_FIELD_AMOUNTTOPAY =
    'Do wypłaty (kary+premie+zaliczki+dyżury)';
  const SAL_FIELD_EMPLOYEE_LINK = 'Pracownik';
  const SAL_FIELD_CONTRACT = 'Osiedle';
  const SAL_FIELD_SPEND_LINK = 'Wydatek';
  const SAL_FIELD_DESCRIPTION = 'Uwagi';
  const SAL_FIELD_MONTH = 'Miesiąc';
  const SAL_FIELD_PAYER = 'Dokonujący wypłaty';
  const SAL_FIELD_ADVANCE_PAYMENT = 'Zaliczki';
  const SAL_FIELD_WEEKENDS = 'Dni wolne';
  const SAL_FIELD_PAYMENT_TYPE = 'Rodzaj wynagrodzenia';
  const SAL_FIELD_DUTY = 'Dyżur';
  const SAL_FIELD_HOLIDAY = 'Urlop';
  const SAL_FIELD_ABSENCE = 'Nieobecność';
  const SAL_FIELD_SICK = 'Zwolnienie';
  const SAL_FIELD_RATE_MONTH = 'Stawka miesięczna';
  const SAL_FIELD_RATE_BONUS = 'Stała premia';
  const SAL_FIELD_RATE_DUTY = 'Stawka za dyżur';
  const SAL_FIELD_WORKINGHOURS = 'Ilość godzin pracy dzienne';
  const SAL_FIELD_COMMENT = 'Uwagi';
  const SAL_FIELD_HOUR = 'hour';
  const SAL_FIELD_JOB_POSITION_CODE = 'Kod stanowiska';

  const SAL_ADD_DESCRIPTION_WITHDRAWAL = ' wypłata przelewem za ';
  const SAL_ADD_DESCRIPTION_CASH = ' wypłata gotówki za ';
  const SAL_ERR_CLOSED_OR_NOACCESS =
    'Wpis już rozliczony lub nie masz uprawnień do zamknięcia rozliczenia';
  const SAL_ERR_NO_AMOUNT =
    'Uzupełnij kwoty wypłat, gotówka lub przelew. Jeśli rozliczenie jest bez wypłaty w polach kwot wstaw zero';
  const SAL_MSG_CLOSING = 'Zamykam rozliczenie: ';
  const SAL_MSG_CREATING_SPEND = 'Tworzę wydatek: ';
  const SAL_MSG_ADVANCE_PAYMENT = 'Szukam zaliczek... ';
  const SAL_MSG_VALIDATION_ERR =
    'Nie można zapisać, popraw następujące błędy:';
  const SAL_MSG_VALIDATION_ERR_NO_WITHDRWAL =
    '- podaj datę i kwotę przelewu';
  const SAL_MSG_VALIDATION_ERR_NO_CASH =
    '- podaj datę i kwotę wypłaty gotówki';
  const SAL_MSG_RUNING_FINDADVANCE = 'szukam zaliczek dla wpisu...';

  const EMP_FIELD_FULLNAME = 'Imie i nazwisko';
  const EMP_FIELD_HOLIDAY_TOTAL = 'Wymiar urlopu';
  const EMP_FIELD_HOLIDAY_LEFT = 'Urlop pozostały';
  const EMP_FIELD_HOLIDAY_USED = 'Urlop wykorzystany';
  const EMP_MSG_HOLIDAY_RECALCED =
    'Przeliczam urlop - wykorzystane dni urlopu to: ';

  const htmlMailHeader =
    'To jest mail wysłany automatycznie. W przypadku wysyłania odpowiedzi prosimy o utrzymanie w temacie numeru referencyjnego REF';
  const htmlMailBody_CONTROL = '<p>';
  const htmlSubject_CONTROL = 'Raport z kontroli';

  const htmlMailFooter = '<p><p>';
  const htmlMailSignature = '';
  const cssP = '';
  const cssLI = '';

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
  const SPE_FIELD_IMPORTED = 'Rozliczony';
  const SPE_FIELD_AMOUNT = 'Kwota';
  const SPE_FIELD_DATE = 'Data transakcji';
  const SPE_FIELD_TYPE = 'Typ transakcji';
  const SPE_FIELD_TYPE_VALUE_EMPLOYEE_WITHDRAWAL =
    'Rozliczenie przelewem z pracownikiem';
  const SPE_FIELD_TYPE_VALUE_EMPLOYEE_CASH =
    'Rozliczenie gotówką z pracownikiem';
  const SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_CASH =
    'Wypłacona gotówką zaliczka';
  const SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_WITHDRAWAL =
    'Wypłacona przelewem zaliczka';
  const SPE_FIELD_BUDGET_LINK = 'Wybierz budżet';
  const SPE_FIELD_BUDGET_LINK_AMOUNT = 'Kwota';

  const SPE_FIELD_COST_ALLOCATION_LINK = 'Robicie kosztu na osiedla';
  const SPE_FIELD_COST_ALLOCATION_LINK_ATTR_AMOUNT = 'Kwota';
  const SPE_FIELD_COST_ALLOCATION_LINK_ATTR_CATEGORY =
    'Kategoria wydatku';

  const SPE_FIELD_COST_ALLOCATION_LEFT =
    'Kwota pozostała do rozpisania';

  const SPE_FIELD_AUTOALLOCATION =
    'Dokonaj automatycznej alokacji kosztów';
  const SPE_FIELD_AUTOALLOCATION_VALUE_MANUALLY =
    'Nie rób nic, samodzielnie podzielę koszt na osiedla';
  const SPE_FIELD_AUTOALLOCATION_VALUE_ONLY_LISTED =
    'Podziel kwotę po wskazanych niżej osiedlach';
  const SPE_FIELD_AUTOALLOCATION_VALUE_MY_CONTRACTS =
    'Podziel kwotę po MOICH osiedlach';
  const SPE_FIELD_AUTOALLOCATION_VALUE_ALL_CONTRACTS =
    'Podziel kwotę po SZYSTKICH osiedlach';

  const SPE_FIELD_CREATOR = 'Dokonujący transakcji';
  const SPE_FIELD_CATEGORY = 'Kategoria';
  const SPE_FIELD_RECIPIENT = 'Przekazano osobie';
  const SPE_FIELD_SUPPLIER = 'Dostawca';
  const SPE_FIELD_EMPLOYEE_LINK = 'Pracownik';
  const SPE_FIELD_DESCRIPTION = 'Opis';
  const SPE_FIELD_INVOICE_IMG = 'Faktura';
  const SPE_FIELD_ISPE_FIELD_PAYED = 'Do zapłaty';
  const SPE_FIELD_ISPE_FIELD_REINVOICE =
    'Czy wydatek należy refakturować';
  const SPE_FIELD_REINVOICE_CONTRACT_LINK = 'Osiedle do faktury';
  const SPE_FIELD_NR = 'Nr';
  const SPE_FIELD_NR_ASSIGNED = 'Nr powiązany';
  const SPE_FIELD_DESCRIPTION_DISPLAY = 'Opis';
  const SPE_FIELD_JOB_POSITION_CODE = 'Kod stanowiska';
  const SPE_FIELD_SALARY_MONTH = 'Wynagrodzenie za miesiąc';
  const SPE_CATEGORY_EMPLOYEE = 'Wynagrodzenia';
  const SPE_VALUE_TYPE_1 = 'Zakup za gotówkę';
  const SPE_VALUE_TYPE_2 = 'Zakup z karty';
  const SPE_VALUE_TYPE_3 = 'Zakup na przelew';
  const SPE_VALUE_TYPE_4 = 'Wypłacona gotówką zaliczka';
  const SPE_VALUE_TYPE_5 = 'Rozliczenie gotówką z pracownikiem';
  const SPE_VALUE_TYPE_6 = 'Wypłacona przelewem zaliczka';
  const SPE_VALUE_TYPE_7 = 'Rozliczenie przelewem z pracownikiem';
  const SPE_VALUE_TYPE_8 = 'Przekazanie gotówki koordynatorowi';
  const SPE_VALUE_TYPE_9 = 'Wypłata z bankomatu';
  const SPE_VALUE_ISPAYED_TRUE = 'Zapłacone';

  const DROP_NULL_PLACEHOLDER = '- wybierz -';
  const SPE_PURCHASES = [
    SPE_VALUE_TYPE_1,
    SPE_VALUE_TYPE_2,
    SPE_VALUE_TYPE_3,
  ];
  const SPE_SALARIES = [
    SPE_VALUE_TYPE_4,
    SPE_VALUE_TYPE_5,
    SPE_VALUE_TYPE_6,
    SPE_VALUE_TYPE_7,
  ];
  const SPE_CASH = [SPE_VALUE_TYPE_8, SPE_VALUE_TYPE_9];

  const SPE_FIELD_PAYER = 'Dokonujący transakcji';

  const SPE_FIELD_TRANSTYPE = 'Typ transakcji';

  const SPE_FIELD_PAYMENTDUE = 'Termin płatności';
  const SPE_FILED_DATEPAYED = 'Data dokonania zapłaty';
  const SPE_FILED_DATETRANSACTION = 'Data transakcji';
  const SPE_FIELD_ISPAYED = 'Do zapłaty';

  const SPE_FIELD_NRLINKED = 'Nr powiązany';
  const SPE_FIELD_DESC = 'Opis';
  const SPE_FIELD_LINK = 'Link';
  const SPE_FIELD_ALLOCATION_DESCR = 'alokacja';


  // // ***** baza BUDŻET

  const BUD_FIELD_CONTRACT = 'Osiedle';
  const BUD_FIELD_MONTH = 'Miesiąc';
  const BUD_FIELD_AMOUNT_LIMIT = 'Limit';
  const BUD_FIELD_AMOUNT_SPENT = 'Wydatki';
  const BUD_FIELD_AMOUNT_LEFT = 'Oszczędności';

  const BUD_FIELD_CATEGORY_PURCHASE = 'Zakupy, paliwo, sprzęt, serwis';
  const BUD_FIELD_CATEGORY_SALARY = 'Wynagrodzenia';
  const BUD_FIELD_CATEGORY_FIXED = 'Stałe koszty';
  const BUD_FIELD_CATEGORY_OTHER = 'Inne';
  const BUD_FIELD_CATEGORY_REINVOICE = 'Refaktura';

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

  const ASS_FIELD_UNIQUE_CODE = 'Kod';

  const TAS_FIELD_CONTRACT = 'Osiedle';
  const TAS_FIELD_COORDINATOR = 'Odpowiedzialny koordynator';
  const TAS_FIELD_DATE_START =
    'Zadanie na tydzień rozpoczynający się od dnia';
  const TAS_FIELD_DATE_END = 'Koniec tygodnia wyznaczonych zadań';
  const TAS_FIELD_WEEK = 'Plan na tydzień numer';
  const TAS_FIELD_WEEKSTATUS = 'Status główny';

  const TAS_VALUE_WEEKSTATUS_CLOSED = 'Zamknięty i rozliczony';
  const TAS_VALUE_WEEKSTATUS_RUNNING = 'Bieżący';
  const TAS_VALUE_WEEKSTATUS_FUTURE = 'Przyszły';

  const TAS_FIELD_DESCRIPTION = 'description';

  const TAS_FIELD_TASK = 'Zadania na bieżacy tydzień';

  const TAS_FIELD_TASKPREVWEEK = 'taskPrevWeek';
  const TAS_FIELD_STATUSPREVWEEK = 'Status';

  const TAS_FIELD_NOTESPREVWEEK = 'commentPrevWeek';
  const TAS_FIELD_TASKPREVWEEK_ADDITIONAL =
    'Zadania dodatkowe poza planem, komentarz do poprzedniego tygodnia';

  const TAS_VALUE_STATUS_CLOSED = 'Wykonane i zakończone';
  const TAS_VALUE_STATUS_RUNNING = 'W trakcie wykonywania';
  const TAS_VALUE_STATUS_NOTCLOSED = 'Niewykonane';
  const TAS_FIELD_TASKCOUNT = 'Liczba zadań';
  const TAS_FIELD_TASKCOUNT_PREVWEEK = 'Liczba zadań poprzednich';
  const TAS_FIELD_RAPORT_RECIPIENT = 'Odbiorcy raportów i powiadomień';
  const TAS_FIELD_PREVWEEK = 'Poprzedni tydzień';
  const TAS_FIELD_EMAILBODY = 'mail_body';
  const TAS_FIELD_EMAILSUBJECT = 'mail_subject';

  const TAS_MSG_EMAIL_FOR_CLOSE_ONLY =
    'Możesz wysłać maila tylko dla zamkniętych zadań';

  const TAS_VALUE_NAME = ' tydzień dla ';

  const TAS_VALUE_EMAIL_PLAN =
    'Dzień dobry,\n\n' +
    'Poniżej przedstawiamy planowane działania na najbliższy tydzień. Plany nie opisują dokładnie wszystkich czynności jakie będą wykonane, pomijają np zadania codzienne typu mopowanie klatek. Celem przestawienie poniższego planu jest wskazanie planu na najbliższy tydzień.\n\n\n' +
    'Plan na tydzień nr $WEEK_NR ($DATE_START - $DATE_END)\n\n\n' +
    '$TASKS';

  const TAS_VALUE_EMAIL_PREVWEEK =
    '\n\n' +
    'Poniżej znajdziecie państwo rozliczenie zadań z poprzedniego tygodnia.\n\n$PREV_TASK_ADD\n\n$PREV_TASKS';

  const TAS_VALUE_EMAIL_PREVWEEK_NOTES = 'opis realizacji: ';

  const TAS_VALUE_EMAIL_SUBJECT =
    'Zadania na tydzień $WEEK_NR ($DATE_START - $DATE_END) na osiedlu $CONTRACT';

  const TAS_VALUE_EMAIL_PREVTASKS = '';

  //const CON_FIELD_COORDINATOR = 'Koordynator';
  //const CON_FIELD_RAPORT_RECIPIENT =
  //  'Odbiorcy raportów i powiadomień';

  const CON_FIELD_SHORT_NAME = 'Skrót';

  function contains(arr, obj) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === obj) {
        return true;
      }
    }
    return false;
  }

  // *^*^*^*  odpalana Creating Entry, Opening an Entry Card
  function setEntryDefaultValues(e) {
    //e.set(FIELD_EDITOR, arrEditors);
    //e.set(FIELD_IS_NEW, true);
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
  }

  Array.prototype.unique = function () {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (arr.indexOf(this[i]) < 0) {
        arr.push(this[i]);
      }
    }
    return arr;
  };
} catch (error) {
  log(error);
}
