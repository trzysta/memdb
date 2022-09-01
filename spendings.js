const SPE_FIELD_WORKFLOWSTATUS = "Status wpisu w bazie";
const SPE_VALUE_WORKFLOWSTATUS_ACCEPTED = "zatwierdzone";
const SPE_VALUE_WORKFLOWSTATUS_TOWERIFY = "w weryfikacji";
const SPE_VALUE_WORKFLOWSTATUS_DRAFT = "w trakcie opisywania";
const SPE_VALUE_WORKFLOW_LOG = "Zmiany statusów i komunikaty";

const SPE_FIELD_AUTHOR = "Author";
const SPE_FIELD_EDITOR = "Osoba aktualnie odpowiedzialna za działanie w obiegu";

const userAccountant = "Ksiegowosc";

const SPE_WORKFLOW_DESC = 
  "Każdy wpis w bazie wydatków musi być przydzielony do osiedla, lub skategoryzowany. Wydatki gotówkowi wypłaty z bankomaty są weryfikowane z listą operacji w banku. Są trzy statusy dokumentu: \n\n" +
  "-- zatwierdzone - oznacza że wydatek jest rozliczony, zaakceptowany i jeśli jest potrzeba skierowany do płatności. \n"+ 
  "-- w weryfikacji - wydatek nie został jeszcze zweryfikowany, czeka aż księgowość zweryfikuje z kontem, zasadnością itp. \n"+ 
  "-- w trakcie opisywania - oznacza że konieczne jest działanie, albo trzeba poprzypisywać do osiedla wydatek albo opisać w treści szerzej. "+ 
  "Ten status także oznacza że nie ma dostarczonej papierowej faktury do biura.\n";


let Spending = function (e) {
  log('Spending :: new' + String(e));
  this.res = false;

  try {
    if (e !== undefined) {
      this.saveNewSpending = function () {
        log('Spending :: saveNewSpending :: ' + String(e));
        /*
            WYD_ev_new_przedZapisem.js
            walidacja poprawności wypełnienia pól i operacje wykonywane w zależności
            od rodaju wydatku
          */

        let libSpendings = libByName(LIB_SPANDINGS_NAME);
        let amount = e.field(SPE_FIELD_AMOUNT);
        let transactionType = e.field(SPE_FIELD_TRANSTYPE);

        if (
          transactionType == SPE_VALUE_TYPE_8 &&
          e.field(SPE_FIELD_RECIPIENT) == e.field(SPE_FIELD_PAYER)
        ) {
          message('Nie można przekazać tej samej osobie');
        } else if (
          e.field(SPE_FIELD_PAYER) == DROP_NULL_PLACEHOLDER
        ) {
          message('Wybierz z listy osobę dokonującą transakcji');
        } else if (
          transactionType == SPE_VALUE_TYPE_8 &&
          e.field(SPE_FIELD_RECIPIENT) == DROP_NULL_PLACEHOLDER
        ) {
          message('Wybierz komu przekazano gotówkę!');
        } else if (
          SPE_PURCHASES.indexOf(transactionType) >= 0 &&
          e.field(SPE_FIELD_CATEGORY) == DROP_NULL_PLACEHOLDER
        ) {
          message('Wybierz kategorię wydatku');
        } else {
          // operacje po walidacji
          log('Spending :: saveNewSpending :: ' + transactionType);
          switch (transactionType) {
            case SPE_VALUE_TYPE_2:
            case SPE_VALUE_TYPE_1:
            case SPE_VALUE_TYPE_4:
            case SPE_VALUE_TYPE_5:
            case SPE_VALUE_TYPE_7:
            case SPE_VALUE_TYPE_6:
              e.set(SPE_FIELD_PAYMENTDUE, '');
              e.set(
                SPE_FILED_DATEPAYED,
                e.field(SPE_FILED_DATETRANSACTION)
              );
              e.set(SPE_FIELD_ISPAYED, SPE_VALUE_ISPAYED_TRUE);
              e.set(SPE_FIELD_AMOUNT, 0 - Math.abs(amount));
              //if (SPE_SALARIES.indexOf(transactionType) >= 0) e.set(SPE_FIELD_CATEGORY, "Wynagrodzenia")
              break;

            case SPE_VALUE_TYPE_3:
              e.set(SPE_FIELD_AMOUNT, 0 - Math.abs(amount));
              break;

            case SPE_VALUE_TYPE_8:
              log(SPE_VALUE_TYPE_8);

              try {
                var newE = new Object();
                var newNr;
                var sRes;

                e.set(SPE_FIELD_CATEGORY, '');
                e.set(SPE_FIELD_PAYMENTDUE, '');
                e.set(SPE_FIELD_AMOUNT, 0 - Math.abs(amount));
                e.set(
                  SPE_FILED_DATEPAYED,
                  e.field(SPE_FILED_DATETRANSACTION)
                );
                e.set(SPE_FIELD_ISPAYED, SPE_VALUE_ISPAYED_TRUE);

                newNr = guid().toUpperCase(); //Math.floor(10000 + (Math.random() * 90000));
                sRes = libSpendings.find(newNr);

                while (sRes.length != 0) {
                  newNr = guid().toUpperCase(); //Math.floor(10000 + (Math.random() * 90000));
                  sRes = libSpendings.find(newNr);
                }

                e.set(SPE_FIELD_NRLINKED, newNr);
                e.set(SPE_FIELD_LINK, null);

                newE[SPE_FIELD_TRANSTYPE] = e.field(
                  SPE_FIELD_TRANSTYPE
                );
                newE[SPE_FIELD_DESC] = e.field(SPE_FIELD_DESC);
                newE[SPE_FIELD_ISPAYED] = SPE_VALUE_ISPAYED_TRUE;
                newE[SPE_FILED_DATEPAYED] = e.field(
                  SPE_FILED_DATETRANSACTION
                );
                newE[SPE_FILED_DATETRANSACTION] = e.field(
                  SPE_FILED_DATETRANSACTION
                );
                newE[SPE_FIELD_PAYER] = e.field(SPE_FIELD_RECIPIENT);
                newE[SPE_FIELD_RECIPIENT] = e.field(SPE_FIELD_PAYER);
                newE[SPE_FIELD_DESC] = e.field(SPE_FIELD_DESC);
                newE[SPE_FIELD_AMOUNT] = Math.abs(amount);
                newE[SPE_FIELD_NR] = newNr;
                newE[SPE_FIELD_NRLINKED] = e.field(SPE_FIELD_NR);
                newE[(SPE_FIELD_CATEGORY, '')];

                newE = libSpendings.create(newE);
                newE.link(SPE_FIELD_LINK, e);

                log('Przekazanie gotówki koordynatorowi: koniec');
                //e.recalc();
                //e.link("Link", newE);
              } catch (err) {
                log(
                  'Przekazanie gotówki koordynatorowi err : ' + err
                );
              }

              break;

            case SPE_VALUE_TYPE_9:
              e.set(SPE_FIELD_PAYMENTDUE, '');
              e.set(
                SPE_FILED_DATEPAYED,
                e.field(SPE_FILED_DATETRANSACTION)
              );
              e.set(SPE_FIELD_ISPAYED, SPE_VALUE_ISPAYED_TRUE);
              e.set(SPE_FIELD_AMOUNT, Math.abs(amount));
              e.set(SPE_FIELD_CATEGORY, '');
              break;
          }
          this.res = true;
        }
      };
      log(this.res);
      return this.res;
    }
  } catch (err) {
    log('Spending: ' + err);
  }
};


/* stare */

/*
  WYD_ev_new_przedZapisem.js
  walidacja poprawności wypełnienia pól i operacje wykonywane w zależności
  od rodaju wydatku
*/




function createNewBeforeSave() {

  var nll = "- wybierz -";
  var wyd = ["Zakup za gotówkę", "Zakup z karty", "Zakup na przelew"];
  var lib = libByName("Wydatki");
  var e = entry();
  var s = e.field("Kwota");
  var p = e.field("Dokonujący transakcji");
  var k = e.field("Przekazano osobie");
  var t = e.field("Typ transakcji");
  var kat = e.field("Kategoria");
  var editors = ["MalgorzataG", "KatarzynaD", "WojciechS", "Ksiegowosc", "trzysta"];

  e.set("Editor", editors);
      
  if (t == "Przekazanie gotówki koordynatorowi" && k == p) {
    message("Nie można przekazać tej samej osobie");
    cancel();
  } else if (p == nll) {
    message("Wybierz z listy osobę dokonującą transakcji");
    cancel();
  } else if (t == "Przekazanie gotówki koordynatorowi" && k == nll) {
    message("Wybierz komu przekazano gotówkę!");
    cancel();
  } else if ( wyd.indexOf(t) >= 0 &&  kat == nll ) {
    message("Wybierz kategorię wydatku");
    cancel();
  } else {

    // operacje po walidacji



    switch (t) {
      case "Zakup z karty":
      case "Zakup za gotówkę":
      case "Wypłacona gotówką zaliczka":
      case "Rozliczenie gotówką z pracownikiem":
      case "Rozliczenie przelewem z pracownikiem":
      case "Wypłacona przelewem zaliczka":
        e.set("Termin płatności", "");
        e.set("Data dokonania zapłaty", e.field("Data transakcji"));
        e.set("Do zapłaty", "Zapłacone");
        e.set("Kwota", 0 - Math.abs(s));
        if (
            (t == "Rozliczenie gotówką z pracownikiem") || 
            (t == "Wypłacona gotówką zaliczka") || 
            (t == "Rozliczenie przelewem z pracownikiem") || 
            (t == "Wypłacona przelewem zaliczka")
          ) {
              e.set("Kategoria", "Wynagrodzenia") 
            }
        break;

      case "":
      case "Zakup na przelew":
        e.set("Kwota", 0 - Math.abs(s));
        break;

      case "Przekazanie gotówki koordynatorowi":

        log("Przekazanie gotówki koordynatorowi: ");

        try {

          var newE = new Object();
          var newEntry;
          var newNr;
          var sRes;

          e.set("Kategoria", "");
          e.set("Termin płatności", "");
          e.set("Kwota", 0 - Math.abs(s));
          e.set("Data dokonania zapłaty", e.field("Data transakcji"));
          e.set("Do zapłaty", "Zapłacone");

          newNr = guid().toUpperCase();//Math.floor(10000 + (Math.random() * 90000));
          sRes = lib.find(newNr);

          while (sRes.length != 0) {
              newNr = guid().toUpperCase();//Math.floor(10000 + (Math.random() * 90000));
              sRes = lib.find(newNr);
          };

          e.set("Nr powiązany", newNr);
          e.set("Link", null);

          newE["Typ transakcji"] = e.field("Typ transakcji");
          newE["Opis"] = e.field("Opis");
          newE["Do zapłaty"] = "Zapłacone";
          newE["Data dokonania zapłaty"] = e.field("Data transakcji");
          newE["Data transakcji"] = e.field("Data transakcji");
          newE["Dokonujący transakcji"] = e.field("Przekazano osobie");
          newE["Przekazano osobie"] = e.field("Dokonujący transakcji");
          newE["Editor"] = e.field("Editor");
          newE["Opis"] = e.field("Opis");
          newE["Kwota"] = Math.abs(s);
          newE["Nr"] = newNr;
          newE["Nr powiązany"] = e.field("Nr");
          newE["Kategoria", ""];

          newE = lib.create(newE);
          newE.link("Link", e);

          log("Przekazanie gotówki koordynatorowi: koniec");
          //e.recalc();
          //e.link("Link", newE);
        } catch (err) {
          log("Przekazanie gotówki koordynatorowi err : " + err);
        }

        break;

      case "Wypłata z bankomatu":
        e.set("Termin płatności", "");
        e.set("Data dokonania zapłaty", e.field("Data transakcji"));
        e.set("Do zapłaty", "Zapłacone");
        e.set("Kwota", Math.abs(s));
        e.set("Kategoria", "");
        break;
    }
  }
}


function displayName( e ) {

  var t = e.field("Typ transakcji");
  var o = moment(e.field("Data transakcji")).format('YYYY-MM-DD');
  var b = "";
  var uid = " • " + e.field("Unikalny numer wydatku w bazie");
  
  var dokonujacy = e.field("Dokonujący transakcji").substr(0, 1) + e.field("Dokonujący transakcji").substr( e.field("Dokonujący transakcji").indexOf(" ",0) + 1, 1);
  
  
      switch (t) {
  
        case "Zakup za gotówkę":
        case "Zakup z karty":
          o = o + ': ' + dokonujacy + ', ' + e.field("Kategoria").substring(0, 6) + ', ' + e.field("Dostawca").substring(0, 20);
          break;
  
        case "Zakup na przelew":
          o += ': ' + dokonujacy + ', ' + e.field("Kategoria").substring(0, 6) + ', ' + e.field("Dostawca").substring(0, 20) + '\ntermin płatności: ' + moment(e.field("Termin płatności")).format('YYYY-MM-DD');
          if (e.field("Do zapłaty") == "Zapłacone") { o += ', zapłacone: ' + moment(e.field("Data dokonania zapłaty")).format('YYYY-MM-DD') }
          break;
  
        case "Wypłacona gotówką zaliczka":
        case "Wypłacona przelewem zaliczka":
        case "Rozliczenie gotówką z pracownikiem":
        case "Rozliczenie przelewem z pracownikiem":
          o = o + ': ' + dokonujacy + ' wypłacił(a) ' + e.field("Pracownik")[0].field("Nazwisko i imię");
          break;
  
        case "Przekazanie gotówki koordynatorowi":
          var przekazano = e.field("Przekazano osobie").substr(0, 1) + e.field("Przekazano osobie").substr( e.field("Przekazano osobie").indexOf(" ",0) + 1, 1);
  
          if (e.field("Kwota") >= 0) {
            o = o + ': ' + przekazano + ' dał(a) gotówkę ' + dokonujacy;
          } else {
            o = o + ': ' + dokonujacy + ' dał(a) gotówkę ' + przekazano;
          } 
          break;
  
        default:
          o = o + ': ' + dokonujacy + " pobrał(a) gotówkę";
          break;

  }
  return o + uid;
}


function setStatusAccepted(e) {
  
  let logLine = moment().format('YYYY-MM-DD HH:mm') + ": Zaakceptowano\n";

  e.set(SPE_FIELD_WORKFLOWSTATUS, SPE_VALUE_WORKFLOWSTATUS_ACCEPTED)
  e.set(SPE_VALUE_WORKFLOW_LOG, logLine + e.field(SPE_VALUE_WORKFLOW_LOG));
  e.set(SPE_FIELD_EDITOR, "" );

}


function setStatusDraft(e, msg) {

  let logLine = moment().format('YYYY-MM-DD HH:mm') + ": " + msg + "\n";

  e.set(SPE_FIELD_WORKFLOWSTATUS, SPE_VALUE_WORKFLOWSTATUS_DRAFT);
  e.set(SPE_VALUE_WORKFLOW_LOG, logLine + e.field(SPE_VALUE_WORKFLOW_LOG));
  e.set(SPE_FIELD_EDITOR, e.field(SPE_FIELD_AUTHOR));

}



function setStatusWerify(e) {
  
  let logLine = moment().format('YYYY-MM-DD HH:mm') + ": przekazano do weryfikacji\n";

  e.set(SPE_FIELD_WORKFLOWSTATUS, SPE_VALUE_WORKFLOWSTATUS_TOWERIFY);
  e.set(SPE_VALUE_WORKFLOW_LOG, logLine + e.field(SPE_VALUE_WORKFLOW_LOG));
  e.set(SPE_FIELD_EDITOR, userAccountant );

}