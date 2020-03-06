

function getCheckpointLabel( fieldCount ) {
  return R_FIELD_CHECKPOINT_LABELS[fieldCount];
}



function createControl( entryControl ) {
  entryControl.set(FIELD_IS_NEW, true);
}



function saveFirstTime( entryControl ) {

  var actionsDaily = new Array();
  var actionsMonthly = new Array();
  var checkpointsDomain0_OK = new Array();
  var checkpointsDomain0_NOK = new Array();
  var checkpointsDomain1_OK = new Array();
  var checkpointsDomain1_NOK = new Array();
  var checkpointsDomain2_OK = new Array();
  var checkpointsDomain2_NOK = new Array();
  var checkpointsDomain3_OK = new Array();
  var checkpointsDomain3_NOK = new Array();
  var checkpointsDomain4_OK = new Array();
  var checkpointsDomain4_NOK = new Array();

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



  for (let c=0; c < actionsDaily.length; c++ ) {
    entryControl.link( R_FIELD_ACTION_LINK, actionsDaily[c] );
    switch ( C_FIELD_ACTION_DOMAIN_VALUES.indexOf( actionsDaily[c].field(C_FIELD_ACTION_DOMAIN) ) ) {

      //"Klatki","Garaż","Teren","Zieleń","Biuro"
      case 0: //"Klatki"
        checkpointsDomain0_OK   = appendToArray( checkpointsDomain0_OK,  actionsDaily[c].field(C_FIELD_ACTION_CHECKPOINTS_OK) );
        checkpointsDomain0_NOK  = appendToArray( checkpointsDomain0_NOK, actionsDaily[c].field(C_FIELD_ACTION_CHECKPOINTS_NOK) );
        break;

      case 1: //"Garaż"
        checkpointsDomain1_OK   = appendToArray( checkpointsDomain1_OK,  actionsDaily[c].field(C_FIELD_ACTION_CHECKPOINTS_OK) );
        checkpointsDomain1_NOK  = appendToArray( checkpointsDomain1_NOK, actionsDaily[c].field(C_FIELD_ACTION_CHECKPOINTS_NOK) );
        break;

      case 2: //"Teren",
        checkpointsDomain2_OK   = appendToArray( checkpointsDomain2_OK,  actionsDaily[c].field(C_FIELD_ACTION_CHECKPOINTS_OK) );
        checkpointsDomain2_NOK  = appendToArray( checkpointsDomain2_NOK, actionsDaily[c].field(C_FIELD_ACTION_CHECKPOINTS_NOK) );
        break;

      case 3: //"Zieleń",
        checkpointsDomain3_OK   = appendToArray( checkpointsDomain3_OK,  actionsDaily[c].field(C_FIELD_ACTION_CHECKPOINTS_OK) );
        checkpointsDomain3_NOK  = appendToArray( checkpointsDomain3_NOK, actionsDaily[c].field(C_FIELD_ACTION_CHECKPOINTS_NOK) );
        break;

      case 4: //"Biuro",
        checkpointsDomain4_OK   = appendToArray( checkpointsDomain4_OK,  actionsDaily[c].field(C_FIELD_ACTION_CHECKPOINTS_OK) );
        checkpointsDomain4_NOK  = appendToArray( checkpointsDomain4_NOK, actionsDaily[c].field(C_FIELD_ACTION_CHECKPOINTS_NOK) );
        break;
    }
    currLink++;
  };


  // czynności miesięczne
  for (let e=0; e < actionsMonthly.length; e++ ) {
    entryControl.link( R_FIELD_ACTION_LINK, actionsMonthly[e] );
    switch ( C_FIELD_ACTION_DOMAIN_VALUES.indexOf( actionsMonthly[e].field(C_FIELD_ACTION_DOMAIN) ) ) {

      //"Klatki","Garaż","Teren","Zieleń","Biuro"
      case 0: //"Klatki"
        checkpointsDomain0_OK   = appendToArray( checkpointsDomain0_OK,  actionsMonthly[e].field(C_FIELD_ACTION_CHECKPOINTS_OK) );
        checkpointsDomain0_NOK  = appendToArray( checkpointsDomain0_NOK, actionsMonthly[e].field(C_FIELD_ACTION_CHECKPOINTS_NOK) );
        break;

      case 1: //"Garaż"
        checkpointsDomain1_OK   = appendToArray( checkpointsDomain1_OK,  actionsMonthly[e].field(C_FIELD_ACTION_CHECKPOINTS_OK) );
        checkpointsDomain1_NOK  = appendToArray( checkpointsDomain1_NOK, actionsMonthly[e].field(C_FIELD_ACTION_CHECKPOINTS_NOK) );
        break;

      case 2: //"Teren",
        checkpointsDomain2_OK   = appendToArray( checkpointsDomain2_OK,  actionsMonthly[e].field(C_FIELD_ACTION_CHECKPOINTS_OK) );
        checkpointsDomain2_NOK  = appendToArray( checkpointsDomain2_NOK, actionsMonthly[e].field(C_FIELD_ACTION_CHECKPOINTS_NOK) );
        break;

      case 3: //"Zieleń",
        checkpointsDomain3_OK   = appendToArray( checkpointsDomain3_OK,  actionsMonthly[e].field(C_FIELD_ACTION_CHECKPOINTS_OK) );
        checkpointsDomain3_NOK  = appendToArray( checkpointsDomain3_NOK, actionsMonthly[e].field(C_FIELD_ACTION_CHECKPOINTS_NOK) );
        break;

      case 4: //"Biuro",
        checkpointsDomain4_OK   = appendToArray( checkpointsDomain4_OK,  actionsMonthly[e].field(C_FIELD_ACTION_CHECKPOINTS_OK) );
        checkpointsDomain4_NOK  = appendToArray( checkpointsDomain4_NOK, actionsMonthly[e].field(C_FIELD_ACTION_CHECKPOINTS_NOK) );
        break;
    }
    currLink++;
  };


  entryControl.set( R_FIELD_CHECK_DOMAIN_0_OK,  checkpointsDomain0_OK ;
  entryControl.set( R_FIELD_CHECK_DOMAIN_0_NOK, checkpointsDomain0_NOK );
  entryControl.set( R_FIELD_CHECK_DOMAIN_0_OK,  null ;
  entryControl.set( R_FIELD_CHECK_DOMAIN_0_NOK, null );
  entryControl.set( R_FIELD_CHECK_DOMAIN_1_OK,  checkpointsDomain1_OK ;
  entryControl.set( R_FIELD_CHECK_DOMAIN_1_NOK, checkpointsDomain1_NOK );
  entryControl.set( R_FIELD_CHECK_DOMAIN_1_OK,  null ;
  entryControl.set( R_FIELD_CHECK_DOMAIN_1_NOK, null );
  entryControl.set( R_FIELD_CHECK_DOMAIN_2_OK,  checkpointsDomain2_OK ;
  entryControl.set( R_FIELD_CHECK_DOMAIN_2_NOK, checkpointsDomain2_NOK );
  entryControl.set( R_FIELD_CHECK_DOMAIN_2_OK,  null ;
  entryControl.set( R_FIELD_CHECK_DOMAIN_2_NOK, null );
  entryControl.set( R_FIELD_CHECK_DOMAIN_3_OK,  checkpointsDomain3_OK ;
  entryControl.set( R_FIELD_CHECK_DOMAIN_3_NOK, checkpointsDomain3_NOK );
  entryControl.set( R_FIELD_CHECK_DOMAIN_3_OK,  null ;
  entryControl.set( R_FIELD_CHECK_DOMAIN_3_NOK, null );
  entryControl.set( R_FIELD_CHECK_DOMAIN_4_OK,  checkpointsDomain4_OK ;
  entryControl.set( R_FIELD_CHECK_DOMAIN_4_NOK, checkpointsDomain4_NOK );
  entryControl.set( R_FIELD_CHECK_DOMAIN_4_OK,  null ;
  entryControl.set( R_FIELD_CHECK_DOMAIN_4_NOK, null );





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
