
const FIELD_LABEL = ") Czynność";
const FIELD_PROMPT = ") Cechy";

const KLATKI_FIELDS = [
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

    let msg0 = "do poprawy natychmiast: ";
    let msg1 = " do poprawy przy następnym sprzątaniu: ";

    for (i=0; i < KLATKI_FIELDS.length; i++ ) {
      
      log ( KLATKI_FIELDS[i] + ": " + e.field( KLATKI_FIELDS[i]) );

      if ( e.field( KLATKI_FIELDS[i]) > 0 && e.field( KLATKI_FIELDS[i]) < 2 ) {
        msg0 += KLATKI_FIELDS[i] + "; ";

      } else if ( e.field( KLATKI_FIELDS[i]) > 2 && e.field( KLATKI_FIELDS[i]) < 4 )
        msg1 += KLATKI_FIELDS[i] + "; ";

    }

    AndroidMessages.sms("+48509999046", msg0 + msg1 )

  } catch (error) {
    log(error)
  }
} 