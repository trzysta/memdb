// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^








const ev_new_przedZapisem = function ( e ) {

/*
  WYD_ev_new_przedZapisem.js
  walidacja poprawności wypełnienia pól i operacje wykonywane w zależności
  od rodaju wydatku
*/

var nll = "- wybierz -";
var wyd = ["Zakup za gotówkę", "Zakup z karty", "Zakup na przelew"];
var lib = libByName("Wydatki");
var e = entry();
var s = e.field("Kwota");
var p = e.field("Dokonujący transakcji");
var k = e.field("Przekazano osobie");
var t = e.field("Typ transakcji");
var kat = e.field("Kategoria");
var editors = ["MalgorzataG", "ElzbietaZ", "trzystaIZABELA", "trzysta"];

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













// // podziel

// 1. Wszystkie pozycje puste = podzial równo po wszystkie pozycje.
// 2. kwota przypisania mniejsza i istnieją puste. Odejmij od kwoty to co przypisane a resztę podziel.

const FIELD_EDITORS = "Editor";


const Spending = function (e) {

  log( "Spending" );

  try {

    this.editors = new Array;
    this.isEditor = false;


    if (e !== undefined) {
      let ed = e.field(FIELD_EDITORS);
      while( ed !== null ) {
        this.editors.push(ed)
        ed = ed.next;
      }
    }
  } catch (err) {
    log("Spending: " + err);
  }
}






let e = new Spending(entry()); 
message ( e.editors ) 