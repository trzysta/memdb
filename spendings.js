
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^

const SPE_VALUE_TYPE_1 = "Zakup za gotówkę";
const SPE_VALUE_TYPE_2 = "Zakup z karty";
const SPE_VALUE_TYPE_3 = "Zakup na przelew";
const SPE_VALUE_TYPE_4 = "Wypłacona gotówką zaliczka";
const SPE_VALUE_TYPE_5 = "Rozliczenie gotówką z pracownikiem";
const SPE_VALUE_TYPE_6 = "Wypłacona przelewem zaliczka";
const SPE_VALUE_TYPE_7 = "Rozliczenie przelewem z pracownikiem";
const SPE_VALUE_TYPE_8 = "Przekazanie gotówki koordynatorowi";
const SPE_VALUE_TYPE_9 = "Wypłata z bankomatu";
const SPE_VALUE_ISPAYED_TRUE = "Zapłacone";

const DROP_NULL_PLACEHOLDER = "- wybierz -";
const SPE_PURCHASES = [SPE_VALUE_TYPE_1, SPE_VALUE_TYPE_2, SPE_VALUE_TYPE_3];
const SPE_SALARIES  = [SPE_VALUE_TYPE_4, SPE_VALUE_TYPE_5, SPE_VALUE_TYPE_6, SPE_VALUE_TYPE_7];
const SPE_CASH = [SPE_VALUE_TYPE_8, SPE_VALUE_TYPE_9];

const SPE_FIELD_AMOUNT = "Kwota";
const SPE_FIELD_PAYER = "Dokonujący transakcji";
const SPE_FIELD_RECIPIENT = "Przekazano osobie";
const SPE_FIELD_TRANSTYPE = "Typ transakcji";
const SPE_FIELD_CATEGORY = "Kategoria";
const SPE_FIELD_PAYMENTDUE = "Termin płatności";
const SPE_FILED_DATEPAYED = "Data dokonania zapłaty";
const SPE_FILED_DATETRANSACTION = "Data transakcji";
const SPE_FIELD_ISPAYED = "Do zapłaty";
const SPE_FIELD_NR = "Nr";

const SPE_FIELD_NRLINKED = "Nr powiązany";
const SPE_FIELD_DESC = "Opis";
const SPE_FIELD_LINK = "Link";

const FIELD_EDITORS = "Editor";


// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^











// // podziel

// 1. Wszystkie pozycje puste = podzial równo po wszystkie pozycje.
// 2. kwota przypisania mniejsza i istnieją puste. Odejmij od kwoty to co przypisane a resztę podziel.



const Spending = function ( e ) {

  log( "Spending :: new" );
  let res = null;

  try {

    this.editors = new Array;
    this.isEditor = false;
    if (e !== undefined) {

      const saveNewSpending = function () {

          /*
            WYD_ev_new_przedZapisem.js
            walidacja poprawności wypełnienia pól i operacje wykonywane w zależności
            od rodaju wydatku
          */
          
          let libSpendings = libByName( LIB_SPANDINGS_NAME );
          let amount = e.field(SPE_FIELD_AMOUNT);
          let transactionType = e.field(SPE_FIELD_TRANSTYPE);
          
          if (  transactionType == SPE_VALUE_TYPE_8 && e.field(SPE_FIELD_RECIPIENT) == e.field(SPE_FIELD_PAYER) ) {
            res = "Nie można przekazać tej samej osobie";
          } else if ( e.field(SPE_FIELD_PAYER) == DROP_NULL_PLACEHOLDER ) {
            res = "Wybierz z listy osobę dokonującą transakcji";
          } else if ( transactionType == SPE_VALUE_TYPE_8 && e.field(SPE_FIELD_RECIPIENT) == DROP_NULL_PLACEHOLDER  ) {
            res = "Wybierz komu przekazano gotówkę!";
          } else if ( SPE_PURCHASES.indexOf(transactionType) >= 0 && e.field(SPE_FIELD_CATEGORY) == DROP_NULL_PLACEHOLDER ) {
            res = "Wybierz kategorię wydatku";
          } else {
          
            // operacje po walidacji
          
            switch (transactionType) {
              case SPE_VALUE_TYPE_2:
              case SPE_VALUE_TYPE_1:
              case SPE_VALUE_TYPE_4:
              case SPE_VALUE_TYPE_5:
              case SPE_VALUE_TYPE_7:
              case SPE_VALUE_TYPE_6:
                e.set(SPE_FIELD_PAYMENTDUE, "");
                e.set(SPE_FILED_DATEPAYED, e.field(SPE_FILED_DATETRANSACTION));
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
          
                  e.set(SPE_FIELD_CATEGORY, "");
                  e.set(SPE_FIELD_PAYMENTDUE, "");
                  e.set(SPE_FIELD_AMOUNT, 0 - Math.abs(amount));
                  e.set(SPE_FILED_DATEPAYED, e.field(SPE_FILED_DATETRANSACTION));
                  e.set(SPE_FIELD_ISPAYED, SPE_VALUE_ISPAYED_TRUE);
          
                  newNr = guid().toUpperCase();//Math.floor(10000 + (Math.random() * 90000));
                  sRes = libSpendings.find(newNr);
          
                  while (sRes.length != 0) {
                      newNr = guid().toUpperCase();//Math.floor(10000 + (Math.random() * 90000));
                      sRes = libSpendings.find(newNr);
                  };
          
                  e.set(SPE_FIELD_NRLINKED, newNr);
                  e.set(SPE_FIELD_LINK, null);
          
                  newE[SPE_FIELD_TRANSTYPE] = e.field(SPE_FIELD_TRANSTYPE);
                  newE[SPE_FIELD_DESC] = e.field(SPE_FIELD_DESC);
                  newE[SPE_FIELD_ISPAYED] = SPE_VALUE_ISPAYED_TRUE;
                  newE[SPE_FILED_DATEPAYED] = e.field(SPE_FILED_DATETRANSACTION);
                  newE[SPE_FILED_DATETRANSACTION] = e.field(SPE_FILED_DATETRANSACTION);
                  newE[SPE_FIELD_PAYER] = e.field(SPE_FIELD_RECIPIENT);
                  newE[SPE_FIELD_RECIPIENT] = e.field(SPE_FIELD_PAYER);
                  newE[SPE_FIELD_DESC] = e.field(SPE_FIELD_DESC);
                  newE[SPE_FIELD_AMOUNT] = Math.abs(amount);
                  newE[SPE_FIELD_NR] = newNr;
                  newE[SPE_FIELD_NRLINKED] = e.field(SPE_FIELD_NR);
                  newE[SPE_FIELD_CATEGORY, ""];
          
                  newE = libSpendings.create(newE);
                  newE.link(SPE_FIELD_LINK, e);
          
                  log("Przekazanie gotówki koordynatorowi: koniec");
                  //e.recalc();
                  //e.link("Link", newE);
                } catch (err) {
                  log("Przekazanie gotówki koordynatorowi err : " + err);
                }
          
                break;
          
              case SPE_VALUE_TYPE_9:
                e.set(SPE_FIELD_PAYMENTDUE, "");
                e.set(SPE_FILED_DATEPAYED, e.field(SPE_FILED_DATETRANSACTION));
                e.set(SPE_FIELD_ISPAYED, SPE_VALUE_ISPAYED_TRUE);
                e.set(SPE_FIELD_AMOUNT, Math.abs(amount));
                e.set(SPE_FIELD_CATEGORY, "");
                break;
            }
          }
      }
        
    return res;  

    }
  } catch (err) {
    log("Spending: " + err);
  }
}
