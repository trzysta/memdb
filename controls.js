
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
                        'Windy - czystość lustra'
                      ]

const KLATKI_SMS = [
                        'pajęczyny przed klat',
                        'part dywaniki',
                        'part domofon',
                        'part pajęcz',
                        'part podłoga',
                        'part zapach',
                        'part drzwi',
                        'part skrzynki',
                        'part włączn i ściany',
                        'półpięt podłoga',
                        'półpięt podstop',
                        'półpięt zacieki',
                        'półpięt poręcze',
                        'piętra podłoga',
                        'piętra fugi',
                        'piętra włączniki i ściany',
                        'piętra zapach',
                        'piętra parapety',
                        'piętra przeszkl',
                        'piętra wentylatory',
                        'piętra cokoły',
                        'windy prowadnic',
                        'windy podłoga',
                        'windy ściany',
                        'windy panel',
                        'windy lustr0'
                      ]



// var entries = lib().entries();                   // Get current library & array of its entries
// if (entries.length > 0) {                        // Check that array is not empty;
//   //   otherwise exit,
//   //   since there is no previous entry.
//   prevMileage = entries[0].field("Mileage");




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


function prepareSMS (e) {
  try {

    let msg0 = "do poprawy juz: ";
    let msg1 = "do poprawy potem: ";

    for (i=0; i < KLATKI_FIELDS.length; i++ ) {
      
      let ocena = e.field( KLATKI_FIELDS[i]);
      log ( KLATKI_SMS[i] + ": " + ocena );

      if ( ocena > 0 && ocena < 2 ) {
        msg0 = msg0 + KLATKI_SMS[i] + "; ";

      } else if ( ocena >= 2 && ocena < 5 )
        msg1 = msg1 + KLATKI_SMS[i] + "; ";

    }

    AndroidMessages.sms("+48509999046", msg0 + msg1 );;

  } catch (error) {
    log(error)
  }
} 