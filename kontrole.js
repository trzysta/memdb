

function getCheckpointLabel( fieldCount ) {
  return R_FIELD_CHECKPOINT_LABELS[fieldCount];
}



function createControl( entryControl ) {
  entryControl.set(FIELD_IS_NEW, true);
}



function saveFirstTime( entryControl ) {

  var actionsDaily = new Array();
  var actionsMonthly = new Array();
  var checkpoints = new Array();


  allActions = libZadania.linksTo( entryControl.field(R_FIELD_CONTRACT_LINK)[0] );
  currLink = 0;
  var dt = moment().startOf('month');

  for (j=0; j < entryControl.field(R_FIELD_ACTION_DOMAIN).length; j++) {
     val = entryControl.field(R_FIELD_ACTION_DOMAIN)[j];

     for (i=0; i < allActions.length; i++) {
        entryAction = allActions[i];

        if   (( entryAction.field(C_FIELD_ACTION_DOMAIN) == val ) &&
              ( R_FIELD_FREQENCY_VALUES.indexOf( entryAction.field(R_FIELD_FREQENCY) ) >= 0 ) &&
              ( R_FIELD_FREQENCY_VALUES.indexOf( entryAction.field(R_FIELD_FREQENCY) ) <= 5 )) {
             // czynności wnetrza częste lub równe raz na tydzień
             entryAction.set( C_FIELD_MONTH, dt.toDate());
             actionsDaily.push(entryAction);
         }
         else if (( entryAction.field(C_FIELD_ACTION_DOMAIN) == val ) &&
                  ( R_FIELD_FREQENCY_VALUES.indexOf( entryAction.field(R_FIELD_FREQENCY)) > 5 )) {
             actionsMonthly.push(entryAction);
         }
      }
  }

  for (c=0; c < actionsDaily.length; c++ ) {
    entryControl.link( R_FIELD_ACTION_LINK, actionsDaily[c] );
    checkpoints = appendToArray( checkpoints, actionsDaily[c].field(C_FIELD_ACTION_CHECKPOINTS) );

    //entryControl.field(R_FIELD_ACTION_LINK)[currLink].setAttr(R_FIELD_CHECK_PROCEDURE, HR+BR+ actionsDaily[c].field(C_FIELD_ACTION_CHECKPOINTS)+BR+HR);
    currLink++;
  };
  for (e=0; e < actionsMonthly.length; e++ ) {
    entryControl.link( R_FIELD_ACTION_LINK, actionsMonthly[e] );
    checkpoints = appendToArray( checkpoints, actionsMonthly[e].field(C_FIELD_ACTION_CHECKPOINTS) );

    //entryControl.field(R_FIELD_ACTION_LINK)[currLink].setAttr(R_FIELD_CHECK_PROCEDURE, HR+BR+ actionsMonthly[e].field(C_FIELD_ACTION_CHECKPOINTS)+BR+HR);
    currLink++;
  };


  entryControl.set(R_FIELD_CHECK_DOMAIN_1_OK, checkpoints);
  entryControl.set(R_FIELD_CHECK_DOMAIN_1_NOK, checkpoints);
  entryControl.set(FIELD_IS_NEW, false);
  entryControl.show();

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
