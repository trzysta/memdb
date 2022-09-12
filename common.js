/*
  wszelkie prawa zastrzeżone, biblioteka funkcji wykorzystywanych przez
  aplikację utworzoną dla 300 Sp. z o.o.
*/
try {
  // var LIB_SALARIES_SHORT_NAME = "SAL";
  // var LIB_SPANDINGS_SHORT_NAME = "SPE";
  // var LIB_BUDGETS_SHORT_NAME = "BDG";
  // var LIB_CONTRACTS_SHORT_NAME = "CON";
  // var LIB_CHECKS_SHORT_NAME = "CHK";
  // var LIB_ACTIVITIES_SHORT_NAME = "ACT";

  var LIB_SALARIES_NAME = 'Wypłaty';
  var LIB_SPANDINGS_NAME = 'Wydatki';
  var LIB_BUDGETS_NAME = 'Budżet';
  var LIB_CONTRACTS_NAME = 'Osiedla';
  var LIB_CHECKS_NAME = 'Kontrole';
  var LIB_ACTIVITIES_NAME = 'Kalendarz zadań';
  var LIB_EMPLOYEES_NAME = 'Pracownicy';
  var LIB_TASKS_NAME = 'Zadania';

  var WEEKDAYS_EN = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  var WEEKDAYS_PL = [
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
    'Niedziela',
  ];
  var WEEKDAYS2_PL = ['PN', 'WT', 'ŚR', 'CZ', 'PT', 'SO', 'ND'];
  var MONTHS_PL = [
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
  var MONTHS3_PL = [
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

  var ARR_EDITORS = [
    'MalgorzataG',
    'ElzbietaZ',
    'WojciechS',
    'KatarzynaD',
    'Ksiegowosc',
    'trzysta',
    'MagdalenaM'
  ];

  var arrNames = [
    'Małgorzata Grabowska',
    'Elżbieta Zdziech',
    'Wojciech Sygit',
    'Katarzyna Deputowska',
    'Ksiegowosc 300CS',
    'Administrator',
    'Magdalena Matynia'
  ];

  var ARR_MANAGERS = ['trzysta', 'Marceli Matynia'];

  var FIELD_EDITOR = 'Editor';
  var FIELD_IS_NEW = 'new';
  var FIELD_REF = 'REF';
  var FIELD_REF_PARTENT = 'parentREF';
  var FIELD_IS_PARENT = 'isParent';
  var FIELD_IS_HIDDEN = 'Ukryte';
  var FIELD_CAN_ACCESS = 'canAccess';
  var FIELD_DISPLAY_NAME = 'displayName';
  var MSG_UPDATING = 'uaktualniam';
  var MSG_COPYING = 'kopiuję';
  var MSG_ENTRIES = 'wpisów';
  var MSG_FINISHED = 'Zakończono!';
  var VALUE_MAIL = 'e-mail';

  var MAIL_CC_RECIPIENTS = 'raporty@trzysta.pl';

  var SAL_FIELD_CANREAD = 'canAccess';
  var SAL_WITHDRWAL_MAKER = 'Marceli Matynia';
  var SAL_FIELD_CLOSED = 'Rozliczony';
  var SAL_FIELD_CLOSED_VALUE_YES = 'Rozliczony';
  var SAL_FIELD_CLOSED_VALUE_NO = 'W trakcie rozliczania';
  var SAL_FIELD_CASH_AMOUNT = 'Wypłacono w gotówce';
  var SAL_FIELD_CASH_DATE = 'Data wypłaty gotówki';
  var SAL_FIELD_WITHDRAWAL_AMOUNT = 'Wpłacono na konto';
  var SAL_FIELD_WITHDRAWAL_DATE = 'Data przelewu';
  var SAL_FIELD_AMOUNTTOPAY =
    'Do wypłaty (kary+premie+zaliczki+dyżury)';
  var SAL_FIELD_EMPLOYEE_LINK = 'Pracownik';
  var SAL_FIELD_CONTRACT = 'Osiedle';
  var SAL_FIELD_SPEND_LINK = 'Wydatek';
  var SAL_FIELD_DESCRIPTION = 'Uwagi';
  var SAL_FIELD_MONTH = 'Miesiąc';
  var SAL_FIELD_PAYER = 'Dokonujący wypłaty';
  var SAL_FIELD_ADVANCE_PAYMENT = 'Zaliczki';
  var SAL_FIELD_WEEKENDS = 'Dni wolne';
  var SAL_FIELD_PAYMENT_TYPE = 'Rodzaj wynagrodzenia';
  var SAL_FIELD_DUTY = 'Dyżur';
  var SAL_FIELD_HOLIDAY = 'Urlop';
  var SAL_FIELD_ABSENCE = 'Nieobecność';
  var SAL_FIELD_SICK = 'Zwolnienie';
  var SAL_FIELD_RATE_MONTH = 'Stawka miesięczna';
  var SAL_FIELD_RATE_BONUS = 'Stała premia';
  var SAL_FIELD_RATE_DUTY = 'Stawka za dyżur';
  var SAL_FIELD_WORKINGHOURS = 'Ilość godzin pracy dzienne';
  var SAL_FIELD_COMMENT = 'Uwagi';
  var SAL_FIELD_HOUR = 'hour';
  var SAL_FIELD_JOB_POSITION_CODE = 'Kod stanowiska';

  var SAL_ADD_DESCRIPTION_WITHDRAWAL = ' wypłata przelewem za ';
  var SAL_ADD_DESCRIPTION_CASH = ' wypłata gotówki za ';
  var SAL_ERR_CLOSED_OR_NOACCESS =
    'Wpis już rozliczony lub nie masz uprawnień do zamknięcia rozliczenia';
  var SAL_ERR_NO_AMOUNT =
    'Uzupełnij kwoty wypłat, gotówka lub przelew. Jeśli rozliczenie jest bez wypłaty w polach kwot wstaw zero';
  var SAL_MSG_CLOSING = 'Zamykam rozliczenie: ';
  var SAL_MSG_CREATING_SPEND = 'Tworzę wydatek: ';
  var SAL_MSG_ADVANCE_PAYMENT = 'Szukam zaliczek... ';
  var SAL_MSG_VALIDATION_ERR =
    'Nie można zapisać, popraw następujące błędy:';
  var SAL_MSG_VALIDATION_ERR_NO_WITHDRWAL =
    '- podaj datę i kwotę przelewu';
  var SAL_MSG_VALIDATION_ERR_NO_CASH =
    '- podaj datę i kwotę wypłaty gotówki';
  var SAL_MSG_RUNING_FINDADVANCE = 'szukam zaliczek dla wpisu...';

  var EMP_FIELD_FULLNAME = 'Imie i nazwisko';
  var EMP_FIELD_HOLIDAY_TOTAL = 'Wymiar urlopu';
  var EMP_FIELD_HOLIDAY_LEFT = 'Urlop pozostały';
  var EMP_FIELD_HOLIDAY_USED = 'Urlop wykorzystany';
  var EMP_MSG_HOLIDAY_RECALCED =
    'Przeliczam urlop - wykorzystane dni urlopu to: ';

  var htmlMailHeader =
    'To jest mail wysłany automatycznie. W przypadku wysyłania odpowiedzi prosimy o utrzymanie w temacie numeru referencyjnego REF';
  var htmlMailBody_CONTROL = '<p>';
  var htmlSubject_CONTROL = 'Raport z kontroli';

  var htmlMailFooter = '<p><p>';
  var htmlMailSignature = '';
  var cssP = '';
  var cssLI = '';

  // // wspólne
  // var FIELD_EDITOR = "Editor";
  // var FIELD_IS_NEW = "new";
  // var FIELD_REF = "REF";
  // var FIELD_REF_PARTENT = "parentREF";
  // var FIELD_IS_PARENT = "isParent";
  // var FIELD_IS_HIDDEN = "Ukryte";
  // var FIELD_CAN_ACCESS = "canAccess";
  // var FIELD_DISPLAY_NAME = "displayName";
  // var MSG_UPDATING = "uaktualniam";
  // var MSG_COPYING = "kopiuję";
  // var MSG_ENTRIES = "wpisów";
  // var MSG_FINISHED = "Zakończono!";
  // var VALUE_MAIL = "e-mail";

  // var VALUE_DAYNUMBER_MONDAY = 1;
  // var VALUE_DAYNUMBER_TUESDAY = 2;
  // var VALUE_DAYNUMBER_WEDNESDAY = 3;
  // var VALUE_DAYNUMBER_THURSDAY = 4;
  // var VALUE_DAYNUMBER_FRIDAY = 5;
  // var VALUE_DAYNUMBER_SATURDAY = 6;
  // var VALUE_DAYNUMBER_SUNDAY = 7;
  // var VIEW_SEP = " >>> ";

  // ****************************************************************************
  // ~~~ BAZA WYDATKI
  // ****************************************************************************
  var SPE_FIELD_IMPORTED = 'Rozliczony';
  var SPE_FIELD_AMOUNT = 'Kwota';
  var SPE_FIELD_DATE = 'Data transakcji';
  var SPE_FIELD_TYPE = 'Typ transakcji';
  var SPE_FIELD_TYPE_VALUE_EMPLOYEE_WITHDRAWAL =
    'Rozliczenie przelewem z pracownikiem';
  var SPE_FIELD_TYPE_VALUE_EMPLOYEE_CASH =
    'Rozliczenie gotówką z pracownikiem';
  var SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_CASH =
    'Wypłacona gotówką zaliczka';
  var SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_WITHDRAWAL =
    'Wypłacona przelewem zaliczka';
  var SPE_FIELD_BUDGET_LINK = 'Wybierz budżet';
  var SPE_FIELD_BUDGET_LINK_AMOUNT = 'Kwota';

  var SPE_FIELD_COST_ALLOCATION_LINK = 'Robicie kosztu na osiedla';
  var SPE_FIELD_COST_ALLOCATION_LINK_ATTR_AMOUNT = 'Kwota';
  var SPE_FIELD_COST_ALLOCATION_LINK_ATTR_CATEGORY =
    'Kategoria wydatku';

  var SPE_FIELD_COST_ALLOCATION_LEFT =
    'Kwota pozostała do rozpisania';

  var SPE_FIELD_AUTOALLOCATION =
    'Dokonaj automatycznej alokacji kosztów';
  var SPE_FIELD_AUTOALLOCATION_VALUE_MANUALLY =
    'Nie rób nic, samodzielnie podzielę koszt na osiedla';
  var SPE_FIELD_AUTOALLOCATION_VALUE_ONLY_LISTED =
    'Podziel kwotę po wskazanych niżej osiedlach';
  var SPE_FIELD_AUTOALLOCATION_VALUE_MY_CONTRACTS =
    'Podziel kwotę po MOICH osiedlach';
  var SPE_FIELD_AUTOALLOCATION_VALUE_ALL_CONTRACTS =
    'Podziel kwotę po SZYSTKICH osiedlach';

  var SPE_FIELD_CREATOR = 'Dokonujący transakcji';
  var SPE_FIELD_CATEGORY = 'Kategoria';
  var SPE_FIELD_RECIPIENT = 'Przekazano osobie';
  var SPE_FIELD_SUPPLIER = 'Dostawca';
  var SPE_FIELD_EMPLOYEE_LINK = 'Pracownik';
  var SPE_FIELD_DESCRIPTION = 'Opis';
  var SPE_FIELD_INVOICE_IMG = 'Faktura';
  var SPE_FIELD_ISPE_FIELD_PAYED = 'Do zapłaty';
  var SPE_FIELD_ISPE_FIELD_REINVOICE =
    'Czy wydatek należy refakturować';
  var SPE_FIELD_REINVOICE_CONTRACT_LINK = 'Osiedle do faktury';
  var SPE_FIELD_NR = 'Nr';
  var SPE_FIELD_NR_ASSIGNED = 'Nr powiązany';
  var SPE_FIELD_DESCRIPTION_DISPLAY = 'Opis';
  var SPE_FIELD_JOB_POSITION_CODE = 'Kod stanowiska';
  var SPE_FIELD_SALARY_MONTH = 'Wynagrodzenie za miesiąc';
  var SPE_CATEGORY_EMPLOYEE = 'Wynagrodzenia';
  var SPE_VALUE_TYPE_1 = 'Zakup za gotówkę';
  var SPE_VALUE_TYPE_2 = 'Zakup z karty';
  var SPE_VALUE_TYPE_3 = 'Zakup na przelew';
  var SPE_VALUE_TYPE_4 = 'Wypłacona gotówką zaliczka';
  var SPE_VALUE_TYPE_5 = 'Rozliczenie gotówką z pracownikiem';
  var SPE_VALUE_TYPE_6 = 'Wypłacona przelewem zaliczka';
  var SPE_VALUE_TYPE_7 = 'Rozliczenie przelewem z pracownikiem';
  var SPE_VALUE_TYPE_8 = 'Przekazanie gotówki koordynatorowi';
  var SPE_VALUE_TYPE_9 = 'Wypłata z bankomatu';
  var SPE_VALUE_ISPAYED_TRUE = 'Zapłacone';

  var DROP_NULL_PLACEHOLDER = '- wybierz -';
  var SPE_PURCHASES = [
    SPE_VALUE_TYPE_1,
    SPE_VALUE_TYPE_2,
    SPE_VALUE_TYPE_3,
  ];
  var SPE_SALARIES = [
    SPE_VALUE_TYPE_4,
    SPE_VALUE_TYPE_5,
    SPE_VALUE_TYPE_6,
    SPE_VALUE_TYPE_7,
  ];
  var SPE_CASH = [SPE_VALUE_TYPE_8, SPE_VALUE_TYPE_9];

  var SPE_FIELD_PAYER = 'Dokonujący transakcji';

  var SPE_FIELD_TRANSTYPE = 'Typ transakcji';

  var SPE_FIELD_PAYMENTDUE = 'Termin płatności';
  var SPE_FILED_DATEPAYED = 'Data dokonania zapłaty';
  var SPE_FILED_DATETRANSACTION = 'Data transakcji';
  var SPE_FIELD_ISPAYED = 'Do zapłaty';

  var SPE_FIELD_NRLINKED = 'Nr powiązany';
  var SPE_FIELD_DESC = 'Opis';
  var SPE_FIELD_LINK = 'Link';
  var SPE_FIELD_ALLOCATION_DESCR = 'alokacja';


  // // ***** baza BUDŻET

  var BUD_FIELD_CONTRACT = 'Osiedle';
  var BUD_FIELD_MONTH = 'Miesiąc';
  var BUD_FIELD_AMOUNT_LIMIT = 'Limit';
  var BUD_FIELD_AMOUNT_SPENT = 'Wydatki';
  var BUD_FIELD_AMOUNT_LEFT = 'Oszczędności';

  var BUD_FIELD_CATEGORY_PURCHASE = 'Zakupy, paliwo, sprzęt, serwis';
  var BUD_FIELD_CATEGORY_SALARY = 'Wynagrodzenia';
  var BUD_FIELD_CATEGORY_FIXED = 'Stałe koszty';
  var BUD_FIELD_CATEGORY_OTHER = 'Inne';
  var BUD_FIELD_CATEGORY_REINVOICE = 'Refaktura';

  // var B_FIELD_LIMIT = "Limit";
  // var B_FIELD_BALANCE = "Saldo";
  // var B_FIELD_LEFT = "Zostało";
  // var B_FIELD_AMOUNT = "Kwota";
  // var B_FIELD_CONTRACT_LINK = "Osiedle";
  // var B_FIELD_MONTH = "Miesiąc";
  // var B_FIELD_TYPE = "Rodzaj";
  // var B_FIELD_TYPE_VALUE_PAYOUTS = "Wynagrodzenia";
  // var B_MSG_BUDGET_FOUND = "...znaleziono budżet: ";

  // var BUD_TYPE_PAYOUT = "Wynagrodzenia";
  // var BUD_TYPE_PURCHASES = "Zakupy";
  // var BUD_TYPE_FIXED = "Stałe koszty";

  // // ****************************************************************************
  // // ~~~ KALENDARZ ZADAŃ, ACTIVITIES
  // // ****************************************************************************
  // var ACT_FIELD_MONTH = "Miesiąc";
  // var ACT_FIELD_DATES = "Daty";
  // var ACT_FIELD_WEEKDAYS = "Dni tygodnia";
  // var ACT_FIELD_TYPE = "Typ";
  // var ACT_FIELD_TYPE_VALUE_TEMPLATE = "Definicja czynności";
  // var ACT_FIELD_TYPE_VALUE_INSTANCE = "Pozycja harmonogramu";
  // var ACT_FIELD_CONTRACT = "Osiedle";
  // var ACT_FIELD_ACTION = "Czynność";
  // var ACT_FIELD_ACTION_DOMAIN = "Obszar";
  // var ACT_FIELD_ACTION_DOMAIN_VALUES = ["Klatki", "Garaż", "Teren", "Zieleń", "Biuro"];
  // var ACT_FIELD_ACTION_CHECKS = "Potencjalne problemy";
  // var ACT_FIELD_FREQUENCY = "Częstotliwość";

  // // ****************************************************************************
  // // ~~~ KONTROLE, CHECKS
  // // ****************************************************************************

  // var CHK_FIELD_CONTRACT_LINK = "Osiedle";
  // var CHK_FIELD_FREQENCY = "Częstotliwość";
  // var CHK_FILED_TYPE = "Typ kontroli";

  // /*  0-5  częstotliwość częściej niż raz miesiącu */
  // /*  6-16 czstotliwość raz w miesiącu i rzadziej */
  // var CHK_FIELD_FREQENCY_VALUES = ["Codziennie",
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
  // var CHK_FIELD_ACTION_LINK = "Czynności do wykonania wg umowy";
  // var CHK_FIELD_ACTION_LINK_ATTR_RESULT = "Wykonanie";
  // var CHK_FIELD_CONTROL_DATETIME = "Data i godzina kontroli";

  // var CHK_FIELD_ACTION_DOMAIN = "Kontrolowany obszar";
  // var CHK_FIELD_ACTION_AREA = "Budynek i klatka";
  // var CHK_FIELD_CLOSED = "Kontrola zakończona, zamknij możliwość zmiany i wyślij e-mail z raportem";
  // var CHK_FIELDCHECKS = "Zauważone problemy - ";
  // var CHK_FIELDCHECKS_AREA_OK = "Brak uwag - ";
  // var CHK_FIELDCHECKS_AREA_NOK = "Do poprawy - ";

  // var CHK_FIELD_REPORT_RECIPIENTS = "Adresy na jakie wysłano raport";
  // var CHK_ACTION_CLOSE_CONFIRM_NAME = "potwierdzam zamknięcie kontroli i wysłanie raportu";
  // var CHK_FIELD_MAILBODY = "htmlBody";
  // var CHK_FIELD_GROUPBY = "groupBy";
  // var CHK_FIELD_MAIL_DATETIME = "Data wysłania maila z raportem";
  // var CHK_FIELD_CHEKCS_RAPORTED_LINK = "Kontrole wysłane w mailu";
  // var CHK_FIELD_CHEKCS_MAIL_LINK = "Mail z raportem";

  var ASS_FIELD_UNIQUE_CODE = 'Kod';

  var TAS_FIELD_CONTRACT = 'Osiedle';
  var TAS_FIELD_COORDINATOR = 'Odpowiedzialny koordynator';
  var TAS_FIELD_DATE_START =
    'Zadanie na tydzień rozpoczynający się od dnia';
  var TAS_FIELD_DATE_END = 'Koniec tygodnia wyznaczonych zadań';
  var TAS_FIELD_WEEK = 'Plan na tydzień numer';
  var TAS_FIELD_WEEKSTATUS = 'Status główny';

  var TAS_VALUE_WEEKSTATUS_CLOSED = 'Zamknięty i rozliczony';
  var TAS_VALUE_WEEKSTATUS_RUNNING = 'Bieżący';
  var TAS_VALUE_WEEKSTATUS_FUTURE = 'Przyszły';

  var TAS_FIELD_DESCRIPTION = 'description';

  var TAS_FIELD_TASK = 'Zadania na bieżacy tydzień';

  var TAS_FIELD_TASKPREVWEEK = 'taskPrevWeek';
  var TAS_FIELD_STATUSPREVWEEK = 'Status';

  var TAS_FIELD_NOTESPREVWEEK = 'commentPrevWeek';
  var TAS_FIELD_TASKPREVWEEK_ADDITIONAL =
    'Zadania dodatkowe poza planem, komentarz do poprzedniego tygodnia';

  var TAS_VALUE_STATUS_CLOSED = 'Wykonane i zakończone';
  var TAS_VALUE_STATUS_RUNNING = 'W trakcie wykonywania';
  var TAS_VALUE_STATUS_NOTCLOSED = 'Niewykonane';
  var TAS_FIELD_TASKCOUNT = 'Liczba zadań';
  var TAS_FIELD_TASKCOUNT_PREVWEEK = 'Liczba zadań poprzednich';
  var TAS_FIELD_RAPORT_RECIPIENT = 'Odbiorcy raportów i powiadomień';
  var TAS_FIELD_PREVWEEK = 'Poprzedni tydzień';
  var TAS_FIELD_EMAILBODY = 'mail_body';
  var TAS_FIELD_EMAILSUBJECT = 'mail_subject';

  var TAS_MSG_EMAIL_FOR_CLOSE_ONLY =
    'Możesz wysłać maila tylko dla zamkniętych zadań';

  var TAS_VALUE_NAME = ' tydzień dla ';

  var TAS_VALUE_EMAIL_PLAN =
    'Dzień dobry,\n\n' +
    'Poniżej przedstawiamy planowane działania na najbliższy tydzień. Plany nie opisują dokładnie wszystkich czynności jakie będą wykonane, pomijają np zadania codzienne typu mopowanie klatek. Celem przestawienie poniższego planu jest wskazanie planu na najbliższy tydzień.\n\n\n' +
    'Plan na tydzień nr $WEEK_NR ($DATE_START - $DATE_END)\n\n\n' +
    '$TASKS';

  var TAS_VALUE_EMAIL_PREVWEEK =
    '\n\n' +
    'Poniżej znajdziecie państwo rozliczenie zadań z poprzedniego tygodnia.\n\n$PREV_TASK_ADD\n\n$PREV_TASKS';

  var TAS_VALUE_EMAIL_PREVWEEK_NOTES = 'opis realizacji: ';

  var TAS_VALUE_EMAIL_SUBJECT =
    'Zadania na tydzień $WEEK_NR ($DATE_START - $DATE_END) na osiedlu $CONTRACT';

  var TAS_VALUE_EMAIL_PREVTASKS = '';

  //var CON_FIELD_COORDINATOR = 'Koordynator';
  //var CON_FIELD_RAPORT_RECIPIENT =
  //  'Odbiorcy raportów i powiadomień';

  var CON_FIELD_SHORT_NAME = 'Skrót';

  function contains(arr, obj) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === obj) {
        return true;
      }
    }
    return false;
  }

  // *^*^*^*  odpalana Creating Entry, Opening an Entry Card
  function setEntryDefaultValues(e) {
    //e.set(FIELD_EDITOR, ARR_EDITORS);
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
