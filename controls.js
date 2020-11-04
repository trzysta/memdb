
const FIELD_LABEL = ") Czynność";
const FIELD_PROMPT = ") Cechy";


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