

function getCheckpointLabel( fieldCount ) {
  return CON_FIELD_CHECKPOINT_LABELS[fieldCount];
}



function createControl( entryControl ) {
  entryControl.set(FIELD_IS_NEW, true);
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------



function countEvaluation( entryControl ) {

  var evQuality = 0;
  var evPunctuality = 0;
  var evGlobal = 0;

  if ( entryControl.field( CON_FIELD_CLOSED )) {
    for (actionCount = 0; actionCount < entryControl.field(CON_FIELD_ACTION_LINK).length; actionCount++ ) {

      // ocena JAKOŚCI
      switch ( entryControl.field(CON_FIELD_ACTION_LINK)[actionCount].attr(CON_FIELD_ATTR_QUALITY_EVALUATION).trim() ) {
        case CON_FIELD_ATTR_QUALITY_EVALUATION_VAL2:
          evQuality += 2;
          break;
        case CON_FIELD_ATTR_QUALITY_EVALUATION_VAL1:
          evQuality += 1;
          break;
        }

      // ocena terminowości
      switch ( entryControl.field(CON_FIELD_ACTION_LINK)[actionCount].attr(CON_FIELD_ATTR_PUNCTUALITY_EVALUATION).trim() ) {
        case CON_FIELD_ATTR_PUNCTUALITY_EVALUATION_VAL2:
          evPunctuality += 2;
          break;
        case CON_FIELD_ATTR_PUNCTUALITY_EVALUATION_VAL1:
          evPunctuality += 1;
          break;
        }
    }

    evGlobal = ( (evQuality * R_QUALITY_WEIGTHT) + ( evPunctuality * (1 - R_QUALITY_WEIGTHT))) / ((actionCount * R_QUALITY_WEIGTHT) + (actionCount * (1 - R_QUALITY_WEIGTHT)));


    entryControl.set(CON_FIELD_EVALUATION, ((100 * evGlobal) / 2).toString() + "%" );
    entryControl.set(CON_FIELD_QUALITY_EVALUATION, ((100 * (evQuality/actionCount)) / 2).toString() + "%"  );
    entryControl.set(CON_FIELD_PUNCTUALITY_EVALUATION, ((100 * (evPunctuality/actionCount)) / 2).toString() + "%"  );
  }
}




function generateEmailBody ( entryControl ) {

/*
jakiś stały tekst

data i godzina kontroli
Dokonujący kontroli
Osiedle i klatka
Typ Kontroli
Zadania i oceny:

zadanie i czestotliwość i dni wykonania
Procedura
ocena
uwagi
czy dołączono zdjęcie?


w załączeniu zdjęcia
*/



}
