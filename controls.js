
const FIELD_LABEL = ") Czynność";
const FIELD_PROMPT = ") Cechy";

const KLATKI_FIELDS = [
                        'Pajęczyny przed klatką lub w przedsionku',
                        'Partery - czystość dywaników, wykładzin (jeśli są)',
                        'Partery - czystość panelu domofonu i ściany wokół',
                        'Partery - pajęczyny pod sufitem i w rogach',
                        'Partery - czystość posadzki',
                        'Partery - zapach',
                        'Partery - czystość przeszkleń i ram drzwi',
                        'Partery - czystość skrzynek na listy',
                        'Partery - kurz na włącznikach, czystość włączników i ścian wokół',
                        'Schody i półpiętra - czystość posadzki',
                        'Schody i półpiętra - czystość podstopnic',
                        'Schody i półpiętra - boki schodów, zacieki',
                        'Schody i półpiętra - czystość barierek i poręczy',
                        'Piętra - czystość płytek lub kamienia',
                        'Piętra - czystość fug',
                        'Piętra - kurz na włącznikach, czystość włączników i ścian wokół',
                        'Piętra - zapach',
                        'Piętra - czytość parapetów (owady, kurz)',
                        'Piętra - przeszklenia i drzwi',
                        'Piętra - czystość kratek wentylacyjnych i ścian wokół',
                        'Piętra - kurz na cokołach, czystość samych cokołów',
                        'Windy - czystość prowadnic',
                        'Windy - czystość posadzki',
                        'Windy - czystość ścian, sufitu i drzwi',
                        'Windy - czystość panelu sterowania',
                        'Windy - czystość lustra',
                        'Minusy - czystość posadzki',
                        'Minusy - kratki wentylacyjne i ściany wokół',
                        'Minusy - drzwi',
                        'Minusy - pajęczyny'
                      ];
const KLATKI_SMS =    [
                        'pajęcz przed wejśc',
                        'parter dywaniki',
                        'parter domofon',
                        'parter pajęcz',
                        'parter podłoga',
                        'parter zapach',
                        'parter drzwi',
                        'parter skrzynki',
                        'parter włączn+ściany',
                        'półpięt podłoga',
                        'półpięt podstop',
                        'półpięt zacieki',
                        'półpięt poręcze',
                        'piętra podłoga',
                        'piętra fugi',
                        'piętra włączn+ściany',
                        'piętra zapach',
                        'piętra parapety',
                        'piętra przeszkl',
                        'piętra wentylatory',
                        'piętra cokoły',
                        'windy prowadnic',
                        'windy podłoga',
                        'windy ściany',
                        'windy panel',
                        'windy lustro',
                        'minus podłog',
                        'minus wentylat+ściany',
                        'minus drzwi',
                        'minus pajecz'
                      ];
const GARAZ_FIELDS =  [
                        'Posadzka - piach',
                        'Posadzka - czystość',
                        'Posadzka - rogi i przy ścianach',
                        'Posadzka - śmieci i liście',
                        'Czystość rur i instalacji',
                        'Skrzynki ppoż.',
                        'Gaśnice',
                        'Drzwi do klatek',
                        'Pajęczyny',
                        'Drzwi do pomieszczeń technicznych',
                        'Pomieszczenia techniczne - posadzka',
                        'Pomieszczenia techniczne - śmieci',
                        'Pomieszczenia techniczne - graty',
                        'Pomieszczenia techniczne - kurz',
                        'Brama garażowa'
                      ];
const GARAZ_SMS =    [
                        'posadz piach',
                        'posadz brud',
                        'posadz rogi',
                        'śmieci liście',
                        'rury i instal',
                        'skrzyn ppoż.',
                        'gaśnic',
                        'drzwi do klatek',
                        'pajęcz',
                        'drzwi pom. techn',
                        'pom. tech podloga',
                        'pom. tech śmieci',
                        'pom. tech graty',
                        'pom. tech kurz',
                        'brama garaż'
                      ];
const TEREN_FIELDS = [];
const ZIELEN_FIELDS = [];


const copyLastValues = function (e) {

  let allEntries = lib().entries();

  if (allEntries.length > 0) {
    let lastEntry = allEntries[0];
    for (i = 1; i <= 10; i++) {

      e.set(i + FIELD_LABEL, lastEntry.field(i + FIELD_LABEL));
      e.set(i + FIELD_PROMPT, lastEntry.field(i + FIELD_PROMPT));
      for (j = 0; e.field(i + FIELD_PROMPT).length; j++) {
        message(e.field(i + FIELD_PROMPT)[j].checked);
      }
    }
  }

} 


function prepareSMS (en) {
  try {

    let e = entry();
    let msg0 = "DO POPRAWY PILNIE: ";
    let msg1 = "DO POPRAWY: ";
    let oceny = [];

    for (i=0; i < KLATKI_FIELDS.length; i++ ) {
      
      oceny.push(KLATKI_FIELDS[i]);
    
      let ocena = e.field( KLATKI_FIELDS[i]);

      log ( KLATKI_SMS[i] + ": " + oceny[i] );

      if ( oceny[i] > 0 && oceny[i] <= 2 ) {
        msg0 = msg0 + KLATKI_SMS[i] + "; ";

      } else if ( oceny[i] > 2 && oceny[i] < 5 )
        msg1 = msg1 + KLATKI_SMS[i] + "; ";

    }

    AndroidMessages.sms("+48509999046", msg0 + msg1 + " KONIEC");;

  } catch (error) {
    log(error)
  }
} 


function countAverageRating (e, scope) {

  let arrFieldNames = [];
  let arrRatings = [];
  let res = 0;

  switch (scope) {
    case "K":
      arrFieldNames = KLATKI_FIELDS;
      break;
    case "G":
      arrFieldNames = GARAZ_FIELDS;
      break;
    case "T":
      arrFieldNames = TEREN_FIELDS;
      break;   
    case "Z":
      arrFieldNames = ZIELEN_FIELDS;
      break;      
    default:
      arrFieldNames = KLATKI_FIELDS.concat(GARAZ_FIELDS.concat(TEREN_FIELDS.concat(ZIELEN_FIELDS)));
      break;
  }

  arrFieldNames.forEach(element => {
    if ( e.field(element) > 0 ) {
     arrRatings.push( e.field(element) );
    };
  });

  if (arrRatings.length > 0) {
    res = (arrRatings.reduce((a, b) => a + b, 0) / arrRatings.length).toFixed(2) ;
  }

  return res;

}
