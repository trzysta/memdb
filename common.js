/*
  wszelkie prawa zastrzeżone, biblioteka funkcji wykorzystywanych przez
  aplikację utworzoną dla 300 Sp. z o.o.
*/
try {
  // let LIB_SALARIES_SHORT_NAME = "SAL";
  // let LIB_SPANDINGS_SHORT_NAME = "SPE";
  // let LIB_BUDGETS_SHORT_NAME = "BDG";
  // let LIB_CONTRACTS_SHORT_NAME = "CON";
  // let LIB_CHECKS_SHORT_NAME = "CHK";
  // let LIB_ACTIVITIES_SHORT_NAME = "ACT";

  let LIB_SALARIES_NAME = 'Wypłaty';
  let LIB_SPANDINGS_NAME = 'Wydatki';
  let LIB_BUDGETS_NAME = 'Budżet';
  let LIB_CONTRACTS_NAME = 'Osiedla';
  let LIB_CHECKS_NAME = 'Kontrole';
  let LIB_ACTIVITIES_NAME = 'Kalendarz zadań';
  let LIB_EMPLOYEES_NAME = 'Pracownicy';
  let LIB_TASKS_NAME = 'Zadania';

  let WEEKDAYS_EN = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  let WEEKDAYS_PL = [
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
    'Niedziela',
  ];
  let WEEKDAYS2_PL = ['PN', 'WT', 'ŚR', 'CZ', 'PT', 'SO', 'ND'];
  let MONTHS_PL = [
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
  let MONTHS3_PL = [
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

  let arrEditors = [
    'MalgorzataG',
    'ElzbietaZ',
    'WojciechS',
    'KatarzynaD',
    'Ksiegowosc',
    'trzysta',
    'MagdalenaM'
  ];

  let arrNames = [
    'Małgorzata Grabowska',
    'Elżbieta Zdziech',
    'Wojciech Sygit',
    'Katarzyna Deputowska',
    'Ksiegowosc 300CS',
    'Administrator',
    'Magdalena Matynia'
  ];

  let ARR_MANAGERS = ['trzysta', 'Marceli Matynia'];

  let FIELD_EDITOR = 'Editor';
  let FIELD_IS_NEW = 'new';
  let FIELD_REF = 'REF';
  let FIELD_REF_PARTENT = 'parentREF';
  let FIELD_IS_PARENT = 'isParent';
  let FIELD_IS_HIDDEN = 'Ukryte';
  let FIELD_CAN_ACCESS = 'canAccess';
  let FIELD_DISPLAY_NAME = 'displayName';
  let MSG_UPDATING = 'uaktualniam';
  let MSG_COPYING = 'kopiuję';
  let MSG_ENTRIES = 'wpisów';
  let MSG_FINISHED = 'Zakończono!';
  let VALUE_MAIL = 'e-mail';

  let MAIL_CC_RECIPIENTS = 'raporty@trzysta.pl';

  let SAL_FIELD_CANREAD = 'canAccess';
  let SAL_WITHDRWAL_MAKER = 'Marceli Matynia';
  let SAL_FIELD_CLOSED = 'Rozliczony';
  let SAL_FIELD_CLOSED_VALUE_YES = 'Rozliczony';
  let SAL_FIELD_CLOSED_VALUE_NO = 'W trakcie rozliczania';
  let SAL_FIELD_CASH_AMOUNT = 'Wypłacono w gotówce';
  let SAL_FIELD_CASH_DATE = 'Data wypłaty gotówki';
  let SAL_FIELD_WITHDRAWAL_AMOUNT = 'Wpłacono na konto';
  let SAL_FIELD_WITHDRAWAL_DATE = 'Data przelewu';
  let SAL_FIELD_AMOUNTTOPAY =
    'Do wypłaty (kary+premie+zaliczki+dyżury)';
  let SAL_FIELD_EMPLOYEE_LINK = 'Pracownik';
  let SAL_FIELD_CONTRACT = 'Osiedle';
  let SAL_FIELD_SPEND_LINK = 'Wydatek';
  let SAL_FIELD_DESCRIPTION = 'Uwagi';
  let SAL_FIELD_MONTH = 'Miesiąc';
  let SAL_FIELD_PAYER = 'Dokonujący wypłaty';
  let SAL_FIELD_ADVANCE_PAYMENT = 'Zaliczki';
  let SAL_FIELD_WEEKENDS = 'Dni wolne';
  let SAL_FIELD_PAYMENT_TYPE = 'Rodzaj wynagrodzenia';
  let SAL_FIELD_DUTY = 'Dyżur';
  let SAL_FIELD_HOLIDAY = 'Urlop';
  let SAL_FIELD_ABSENCE = 'Nieobecność';
  let SAL_FIELD_SICK = 'Zwolnienie';
  let SAL_FIELD_RATE_MONTH = 'Stawka miesięczna';
  let SAL_FIELD_RATE_BONUS = 'Stała premia';
  let SAL_FIELD_RATE_DUTY = 'Stawka za dyżur';
  let SAL_FIELD_WORKINGHOURS = 'Ilość godzin pracy dzienne';
  let SAL_FIELD_COMMENT = 'Uwagi';
  let SAL_FIELD_HOUR = 'hour';
  let SAL_FIELD_JOB_POSITION_CODE = 'Kod stanowiska';

  let SAL_ADD_DESCRIPTION_WITHDRAWAL = ' wypłata przelewem za ';
  let SAL_ADD_DESCRIPTION_CASH = ' wypłata gotówki za ';
  let SAL_ERR_CLOSED_OR_NOACCESS =
    'Wpis już rozliczony lub nie masz uprawnień do zamknięcia rozliczenia';
  let SAL_ERR_NO_AMOUNT =
    'Uzupełnij kwoty wypłat, gotówka lub przelew. Jeśli rozliczenie jest bez wypłaty w polach kwot wstaw zero';
  let SAL_MSG_CLOSING = 'Zamykam rozliczenie: ';
  let SAL_MSG_CREATING_SPEND = 'Tworzę wydatek: ';
  let SAL_MSG_ADVANCE_PAYMENT = 'Szukam zaliczek... ';
  let SAL_MSG_VALIDATION_ERR =
    'Nie można zapisać, popraw następujące błędy:';
  let SAL_MSG_VALIDATION_ERR_NO_WITHDRWAL =
    '- podaj datę i kwotę przelewu';
  let SAL_MSG_VALIDATION_ERR_NO_CASH =
    '- podaj datę i kwotę wypłaty gotówki';
  let SAL_MSG_RUNING_FINDADVANCE = 'szukam zaliczek dla wpisu...';

  let EMP_FIELD_FULLNAME = 'Imie i nazwisko';
  let EMP_FIELD_HOLIDAY_TOTAL = 'Wymiar urlopu';
  let EMP_FIELD_HOLIDAY_LEFT = 'Urlop pozostały';
  let EMP_FIELD_HOLIDAY_USED = 'Urlop wykorzystany';
  let EMP_MSG_HOLIDAY_RECALCED =
    'Przeliczam urlop - wykorzystane dni urlopu to: ';

  let htmlMailHeader =
    'To jest mail wysłany automatycznie. W przypadku wysyłania odpowiedzi prosimy o utrzymanie w temacie numeru referencyjnego REF';
  let htmlMailBody_CONTROL = '<p>';
  let htmlSubject_CONTROL = 'Raport z kontroli';

  let htmlMailFooter = '<p><p>';
  let htmlMailSignature = '';
  let cssP = '';
  let cssLI = '';

  // // wspólne
  // let FIELD_EDITOR = "Editor";
  // let FIELD_IS_NEW = "new";
  // let FIELD_REF = "REF";
  // let FIELD_REF_PARTENT = "parentREF";
  // let FIELD_IS_PARENT = "isParent";
  // let FIELD_IS_HIDDEN = "Ukryte";
  // let FIELD_CAN_ACCESS = "canAccess";
  // let FIELD_DISPLAY_NAME = "displayName";
  // let MSG_UPDATING = "uaktualniam";
  // let MSG_COPYING = "kopiuję";
  // let MSG_ENTRIES = "wpisów";
  // let MSG_FINISHED = "Zakończono!";
  // let VALUE_MAIL = "e-mail";

  // let VALUE_DAYNUMBER_MONDAY = 1;
  // let VALUE_DAYNUMBER_TUESDAY = 2;
  // let VALUE_DAYNUMBER_WEDNESDAY = 3;
  // let VALUE_DAYNUMBER_THURSDAY = 4;
  // let VALUE_DAYNUMBER_FRIDAY = 5;
  // let VALUE_DAYNUMBER_SATURDAY = 6;
  // let VALUE_DAYNUMBER_SUNDAY = 7;
  // let VIEW_SEP = " >>> ";

  // ****************************************************************************
  // ~~~ BAZA WYDATKI
  // ****************************************************************************
  let SPE_FIELD_IMPORTED = 'Rozliczony';
  let SPE_FIELD_AMOUNT = 'Kwota';
  let SPE_FIELD_DATE = 'Data transakcji';
  let SPE_FIELD_TYPE = 'Typ transakcji';
  let SPE_FIELD_TYPE_VALUE_EMPLOYEE_WITHDRAWAL =
    'Rozliczenie przelewem z pracownikiem';
  let SPE_FIELD_TYPE_VALUE_EMPLOYEE_CASH =
    'Rozliczenie gotówką z pracownikiem';
  let SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_CASH =
    'Wypłacona gotówką zaliczka';
  let SPE_FIELD_TYPE_VALUE_ADVANCEPAYMENT_WITHDRAWAL =
    'Wypłacona przelewem zaliczka';
  let SPE_FIELD_BUDGET_LINK = 'Wybierz budżet';
  let SPE_FIELD_BUDGET_LINK_AMOUNT = 'Kwota';

  let SPE_FIELD_COST_ALLOCATION_LINK = 'Robicie kosztu na osiedla';
  let SPE_FIELD_COST_ALLOCATION_LINK_ATTR_AMOUNT = 'Kwota';
  let SPE_FIELD_COST_ALLOCATION_LINK_ATTR_CATEGORY =
    'Kategoria wydatku';

  let SPE_FIELD_COST_ALLOCATION_LEFT =
    'Kwota pozostała do rozpisania';

  let SPE_FIELD_AUTOALLOCATION =
    'Dokonaj automatycznej alokacji kosztów';
  let SPE_FIELD_AUTOALLOCATION_VALUE_MANUALLY =
    'Nie rób nic, samodzielnie podzielę koszt na osiedla';
  let SPE_FIELD_AUTOALLOCATION_VALUE_ONLY_LISTED =
    'Podziel kwotę po wskazanych niżej osiedlach';
  let SPE_FIELD_AUTOALLOCATION_VALUE_MY_CONTRACTS =
    'Podziel kwotę po MOICH osiedlach';
  let SPE_FIELD_AUTOALLOCATION_VALUE_ALL_CONTRACTS =
    'Podziel kwotę po SZYSTKICH osiedlach';

  let SPE_FIELD_CREATOR = 'Dokonujący transakcji';
  let SPE_FIELD_CATEGORY = 'Kategoria';
  let SPE_FIELD_RECIPIENT = 'Przekazano osobie';
  let SPE_FIELD_SUPPLIER = 'Dostawca';
  let SPE_FIELD_EMPLOYEE_LINK = 'Pracownik';
  let SPE_FIELD_DESCRIPTION = 'Opis';
  let SPE_FIELD_INVOICE_IMG = 'Faktura';
  let SPE_FIELD_ISPE_FIELD_PAYED = 'Do zapłaty';
  let SPE_FIELD_ISPE_FIELD_REINVOICE =
    'Czy wydatek należy refakturować';
  let SPE_FIELD_REINVOICE_CONTRACT_LINK = 'Osiedle do faktury';
  let SPE_FIELD_NR = 'Nr';
  let SPE_FIELD_NR_ASSIGNED = 'Nr powiązany';
  let SPE_FIELD_DESCRIPTION_DISPLAY = 'Opis';
  let SPE_FIELD_JOB_POSITION_CODE = 'Kod stanowiska';
  let SPE_FIELD_SALARY_MONTH = 'Wynagrodzenie za miesiąc';
  let SPE_CATEGORY_EMPLOYEE = 'Wynagrodzenia';
  let SPE_VALUE_TYPE_1 = 'Zakup za gotówkę';
  let SPE_VALUE_TYPE_2 = 'Zakup z karty';
  let SPE_VALUE_TYPE_3 = 'Zakup na przelew';
  let SPE_VALUE_TYPE_4 = 'Wypłacona gotówką zaliczka';
  let SPE_VALUE_TYPE_5 = 'Rozliczenie gotówką z pracownikiem';
  let SPE_VALUE_TYPE_6 = 'Wypłacona przelewem zaliczka';
  let SPE_VALUE_TYPE_7 = 'Rozliczenie przelewem z pracownikiem';
  let SPE_VALUE_TYPE_8 = 'Przekazanie gotówki koordynatorowi';
  let SPE_VALUE_TYPE_9 = 'Wypłata z bankomatu';
  let SPE_VALUE_ISPAYED_TRUE = 'Zapłacone';

  let DROP_NULL_PLACEHOLDER = '- wybierz -';
  let SPE_PURCHASES = [
    SPE_VALUE_TYPE_1,
    SPE_VALUE_TYPE_2,
    SPE_VALUE_TYPE_3,
  ];
  let SPE_SALARIES = [
    SPE_VALUE_TYPE_4,
    SPE_VALUE_TYPE_5,
    SPE_VALUE_TYPE_6,
    SPE_VALUE_TYPE_7,
  ];
  let SPE_CASH = [SPE_VALUE_TYPE_8, SPE_VALUE_TYPE_9];

  let SPE_FIELD_PAYER = 'Dokonujący transakcji';

  let SPE_FIELD_TRANSTYPE = 'Typ transakcji';

  let SPE_FIELD_PAYMENTDUE = 'Termin płatności';
  let SPE_FILED_DATEPAYED = 'Data dokonania zapłaty';
  let SPE_FILED_DATETRANSACTION = 'Data transakcji';
  let SPE_FIELD_ISPAYED = 'Do zapłaty';

  let SPE_FIELD_NRLINKED = 'Nr powiązany';
  let SPE_FIELD_DESC = 'Opis';
  let SPE_FIELD_LINK = 'Link';
  let SPE_FIELD_ALLOCATION_DESCR = 'alokacja';


  // // ***** baza BUDŻET

  let BUD_FIELD_CONTRACT = 'Osiedle';
  let BUD_FIELD_MONTH = 'Miesiąc';
  let BUD_FIELD_AMOUNT_LIMIT = 'Limit';
  let BUD_FIELD_AMOUNT_SPENT = 'Wydatki';
  let BUD_FIELD_AMOUNT_LEFT = 'Oszczędności';

  let BUD_FIELD_CATEGORY_PURCHASE = 'Zakupy, paliwo, sprzęt, serwis';
  let BUD_FIELD_CATEGORY_SALARY = 'Wynagrodzenia';
  let BUD_FIELD_CATEGORY_FIXED = 'Stałe koszty';
  let BUD_FIELD_CATEGORY_OTHER = 'Inne';
  let BUD_FIELD_CATEGORY_REINVOICE = 'Refaktura';

  // let B_FIELD_LIMIT = "Limit";
  // let B_FIELD_BALANCE = "Saldo";
  // let B_FIELD_LEFT = "Zostało";
  // let B_FIELD_AMOUNT = "Kwota";
  // let B_FIELD_CONTRACT_LINK = "Osiedle";
  // let B_FIELD_MONTH = "Miesiąc";
  // let B_FIELD_TYPE = "Rodzaj";
  // let B_FIELD_TYPE_VALUE_PAYOUTS = "Wynagrodzenia";
  // let B_MSG_BUDGET_FOUND = "...znaleziono budżet: ";

  // let BUD_TYPE_PAYOUT = "Wynagrodzenia";
  // let BUD_TYPE_PURCHASES = "Zakupy";
  // let BUD_TYPE_FIXED = "Stałe koszty";

  // // ****************************************************************************
  // // ~~~ KALENDARZ ZADAŃ, ACTIVITIES
  // // ****************************************************************************
  // let ACT_FIELD_MONTH = "Miesiąc";
  // let ACT_FIELD_DATES = "Daty";
  // let ACT_FIELD_WEEKDAYS = "Dni tygodnia";
  // let ACT_FIELD_TYPE = "Typ";
  // let ACT_FIELD_TYPE_VALUE_TEMPLATE = "Definicja czynności";
  // let ACT_FIELD_TYPE_VALUE_INSTANCE = "Pozycja harmonogramu";
  // let ACT_FIELD_CONTRACT = "Osiedle";
  // let ACT_FIELD_ACTION = "Czynność";
  // let ACT_FIELD_ACTION_DOMAIN = "Obszar";
  // let ACT_FIELD_ACTION_DOMAIN_VALUES = ["Klatki", "Garaż", "Teren", "Zieleń", "Biuro"];
  // let ACT_FIELD_ACTION_CHECKS = "Potencjalne problemy";
  // let ACT_FIELD_FREQUENCY = "Częstotliwość";

  // // ****************************************************************************
  // // ~~~ KONTROLE, CHECKS
  // // ****************************************************************************

  // let CHK_FIELD_CONTRACT_LINK = "Osiedle";
  // let CHK_FIELD_FREQENCY = "Częstotliwość";
  // let CHK_FILED_TYPE = "Typ kontroli";

  // /*  0-5  częstotliwość częściej niż raz miesiącu */
  // /*  6-16 czstotliwość raz w miesiącu i rzadziej */
  // let CHK_FIELD_FREQENCY_VALUES = ["Codziennie",
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
  // let CHK_FIELD_ACTION_LINK = "Czynności do wykonania wg umowy";
  // let CHK_FIELD_ACTION_LINK_ATTR_RESULT = "Wykonanie";
  // let CHK_FIELD_CONTROL_DATETIME = "Data i godzina kontroli";

  // let CHK_FIELD_ACTION_DOMAIN = "Kontrolowany obszar";
  // let CHK_FIELD_ACTION_AREA = "Budynek i klatka";
  // let CHK_FIELD_CLOSED = "Kontrola zakończona, zamknij możliwość zmiany i wyślij e-mail z raportem";
  // let CHK_FIELDCHECKS = "Zauważone problemy - ";
  // let CHK_FIELDCHECKS_AREA_OK = "Brak uwag - ";
  // let CHK_FIELDCHECKS_AREA_NOK = "Do poprawy - ";

  // let CHK_FIELD_REPORT_RECIPIENTS = "Adresy na jakie wysłano raport";
  // let CHK_ACTION_CLOSE_CONFIRM_NAME = "potwierdzam zamknięcie kontroli i wysłanie raportu";
  // let CHK_FIELD_MAILBODY = "htmlBody";
  // let CHK_FIELD_GROUPBY = "groupBy";
  // let CHK_FIELD_MAIL_DATETIME = "Data wysłania maila z raportem";
  // let CHK_FIELD_CHEKCS_RAPORTED_LINK = "Kontrole wysłane w mailu";
  // let CHK_FIELD_CHEKCS_MAIL_LINK = "Mail z raportem";

  let ASS_FIELD_UNIQUE_CODE = 'Kod';

  let TAS_FIELD_CONTRACT = 'Osiedle';
  let TAS_FIELD_COORDINATOR = 'Odpowiedzialny koordynator';
  let TAS_FIELD_DATE_START =
    'Zadanie na tydzień rozpoczynający się od dnia';
  let TAS_FIELD_DATE_END = 'Koniec tygodnia wyznaczonych zadań';
  let TAS_FIELD_WEEK = 'Plan na tydzień numer';
  let TAS_FIELD_WEEKSTATUS = 'Status główny';

  let TAS_VALUE_WEEKSTATUS_CLOSED = 'Zamknięty i rozliczony';
  let TAS_VALUE_WEEKSTATUS_RUNNING = 'Bieżący';
  let TAS_VALUE_WEEKSTATUS_FUTURE = 'Przyszły';

  let TAS_FIELD_DESCRIPTION = 'description';

  let TAS_FIELD_TASK = 'Zadania na bieżacy tydzień';

  let TAS_FIELD_TASKPREVWEEK = 'taskPrevWeek';
  let TAS_FIELD_STATUSPREVWEEK = 'Status';

  let TAS_FIELD_NOTESPREVWEEK = 'commentPrevWeek';
  let TAS_FIELD_TASKPREVWEEK_ADDITIONAL =
    'Zadania dodatkowe poza planem, komentarz do poprzedniego tygodnia';

  let TAS_VALUE_STATUS_CLOSED = 'Wykonane i zakończone';
  let TAS_VALUE_STATUS_RUNNING = 'W trakcie wykonywania';
  let TAS_VALUE_STATUS_NOTCLOSED = 'Niewykonane';
  let TAS_FIELD_TASKCOUNT = 'Liczba zadań';
  let TAS_FIELD_TASKCOUNT_PREVWEEK = 'Liczba zadań poprzednich';
  let TAS_FIELD_RAPORT_RECIPIENT = 'Odbiorcy raportów i powiadomień';
  let TAS_FIELD_PREVWEEK = 'Poprzedni tydzień';
  let TAS_FIELD_EMAILBODY = 'mail_body';
  let TAS_FIELD_EMAILSUBJECT = 'mail_subject';

  let TAS_MSG_EMAIL_FOR_CLOSE_ONLY =
    'Możesz wysłać maila tylko dla zamkniętych zadań';

  let TAS_VALUE_NAME = ' tydzień dla ';

  let TAS_VALUE_EMAIL_PLAN =
    'Dzień dobry,\n\n' +
    'Poniżej przedstawiamy planowane działania na najbliższy tydzień. Plany nie opisują dokładnie wszystkich czynności jakie będą wykonane, pomijają np zadania codzienne typu mopowanie klatek. Celem przestawienie poniższego planu jest wskazanie planu na najbliższy tydzień.\n\n\n' +
    'Plan na tydzień nr $WEEK_NR ($DATE_START - $DATE_END)\n\n\n' +
    '$TASKS';

  let TAS_VALUE_EMAIL_PREVWEEK =
    '\n\n' +
    'Poniżej znajdziecie państwo rozliczenie zadań z poprzedniego tygodnia.\n\n$PREV_TASK_ADD\n\n$PREV_TASKS';

  let TAS_VALUE_EMAIL_PREVWEEK_NOTES = 'opis realizacji: ';

  let TAS_VALUE_EMAIL_SUBJECT =
    'Zadania na tydzień $WEEK_NR ($DATE_START - $DATE_END) na osiedlu $CONTRACT';

  let TAS_VALUE_EMAIL_PREVTASKS = '';

  //let CON_FIELD_COORDINATOR = 'Koordynator';
  //let CON_FIELD_RAPORT_RECIPIENT =
  //  'Odbiorcy raportów i powiadomień';

  let CON_FIELD_SHORT_NAME = 'Skrót';

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
