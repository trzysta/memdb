

function getCheckpointLabel( fieldCount ) {
  return R_FIELD_CHECKPOINT_LABELS[fieldCount];
}



function createControl( entryControl ) {
  entryControl.set(FIELD_IS_NEW, true);
}








function saveFirstTime( entryControl ) {

  //var entryControl = entry();
  var actionDates = new Array();
  var allEntriesActionUnsorted = libZadania.linksTo( entryControl.field(R_FIELD_CONTRACT_LINK)[0] );
  var allEntriesAction = new Array( allEntriesActionUnsorted.length );
  var dateStart = moment().startOf('month');
  var dateEnd = moment().endOf('month');

  for (let c = 0; c < allEntriesActionUnsorted.length; c++ ) {
     var sortOrder = allEntriesActionUnsorted[c].field("Sort");
     allEntriesAction[ sortOrder-1 ] = allEntriesActionUnsorted[c];
  };

  message (allEntriesAction + " _______ " + allEntriesAction.length );
  for (let i=0; i < allEntriesAction.length; i++) {
      entryAction = allEntriesAction[i];
      if (entryAction.field(C_FIELD_DATES).length > 0) {
         actionDates = entryAction.field(C_FIELD_DATES).split(",");
      };


      var arrDomain = entryControl.field(R_FIELD_ACTION_DOMAIN);
      var entryDomain = entryAction.field(C_FIELD_ACTION_DOMAIN);


      if ( entryControl.field(R_FIELD_ACTION_DOMAIN).indexOf( entryAction.field(C_FIELD_ACTION_DOMAIN)) >= 0 ) {
         message( "jest czynność" );
         if ( actionDates.length <= 0 ) {                                        // nie ma wpisanej daty oznacza że to czynność codzienna
           entryControl.link(R_FIELD_ACTION_LINK, entryAction);
           message( "linkuję czynność bez daty" );
         } else {                                                                // jest wpisana data zatem sprawdzam czy data jest z tego miesiąca
           for (let j=0; j < actionDates.length; j++ ) {
              if (moment(actionDates[j]).isBetween (dateStart,dateEnd)) {
  		           entryControl.link(R_FIELD_ACTION_LINK, entryAction);
  		           message( "linkuję czynność z datą" );
  	          }
           }
         }
      }
  };
  entryControl.set(FIELD_IS_NEW, false);
  entryControl.show()
}












function countEvaluation( entryControl ) {

  var evQuality = 0;
  var evPunctuality = 0;
  var evGlobal = 0;

  if ( entryControl.field( R_FIELD_CLOSED )) {
    for (actionCount = 0; actionCount < entryControl.field(R_FIELD_ACTION_LINK).length; actionCount++ ) {

      // ocena JAKOŚCI
      switch ( entryControl.field(R_FIELD_ACTION_LINK)[actionCount].attr(R_FIELD_ATTR_QUALITY_EVALUATION).trim() ) {
        case R_FIELD_ATTR_QUALITY_EVALUATION_VAL2:
          evQuality += 2;
          break;
        case R_FIELD_ATTR_QUALITY_EVALUATION_VAL1:
          evQuality += 1;
          break;
        }

      // ocena terminowości
      switch ( entryControl.field(R_FIELD_ACTION_LINK)[actionCount].attr(R_FIELD_ATTR_PUNCTUALITY_EVALUATION).trim() ) {
        case R_FIELD_ATTR_PUNCTUALITY_EVALUATION_VAL2:
          evPunctuality += 2;
          break;
        case R_FIELD_ATTR_PUNCTUALITY_EVALUATION_VAL1:
          evPunctuality += 1;
          break;
        }
    }

    evGlobal = ( (evQuality * R_QUALITY_WEIGTHT) + ( evPunctuality * (1 - R_QUALITY_WEIGTHT))) / ((actionCount * R_QUALITY_WEIGTHT) + (actionCount * (1 - R_QUALITY_WEIGTHT)));


    entryControl.set(R_FIELD_EVALUATION, ((100 * evGlobal) / 2).toString() + "%" );
    entryControl.set(R_FIELD_QUALITY_EVALUATION, ((100 * (evQuality/actionCount)) / 2).toString() + "%"  );
    entryControl.set(R_FIELD_PUNCTUALITY_EVALUATION, ((100 * (evPunctuality/actionCount)) / 2).toString() + "%"  );
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
