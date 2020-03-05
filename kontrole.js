

function getCheckpointLabel( fieldCount ) {
  return R_FIELD_CHECKPOINT_LABELS[fieldCount];
}



function createControl( entryControl ) {
  entryControl.set(FIELD_IS_NEW, true);
}



function saveFirstTime( entryControl ) {

  actionsDaily = new Array();
  actionsMonthly = new Array();
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
    entryControl.field(R_FIELD_ACTION_LINK)[currLink].setAttr(R_FIELD_CHECK_PROCEDURE, HR+BR+ actionsDaily[c].field(C_FIELD_ACTION_CHECKPOINTS)+BR+HR);
    currLink++
  };
  for (e=0; e < actionsMonthly.length; e++ ) {
    entryControl.link( R_FIELD_ACTION_LINK, actionsMonthly[e] );
    entryControl.field(R_FIELD_ACTION_LINK)[currLink].setAttr(R_FIELD_CHECK_PROCEDURE, HR+BR+ actionsMonthly[e].field(C_FIELD_ACTION_CHECKPOINTS)+BR+HR);
    currLink++
  };

  entryControl.set(FIELD_IS_NEW, false);
  entryControl.show();

}






function countEvaluation( entryControl ) {

  var evQuality = 0;
  var evPunctuality = 0;
  var evGlobal = 0;

  if ( !entryControl.field( FIELD_IS_NEW )) {
    for (actionCount = 0; actionCount < entryControl.field(R_FIELD_ACTION_LINK).length; actionCount++ ) {

      // ocena JAKOŚCI
      switch ( entryControl.field(R_FIELD_ACTION_LINK)[i].attr(R_FIELD_ATTR_QUALITY_EVALUATION).trim() ) {
        case R_FIELD_ATTR_QUALITY_EVALUATION_VAL3:
          evQuality += 3 * R_QUALITY_WEIGTHT;
          break;
        case R_FIELD_ATTR_QUALITY_EVALUATION_VAL2:
          evQuality += 2 * R_QUALITY_WEIGTHT;
          break;
        case R_FIELD_ATTR_QUALITY_EVALUATION_VAL1:
          evQuality += 1 * R_QUALITY_WEIGTHT;
          break;
        }

      // ocena terminowości
      switch ( entryControl.field(R_FIELD_ACTION_LINK)[i].attr(R_FIELD_ATTR_PUNCTUALITY_EVALUATION).trim() ) {
        case R_FIELD_ATTR_PUNCTUALITY_EVALUATION_VAL3:
          evPunctuality += 3 * (1 - R_QUALITY_WEIGTHT);
          break;
        case R_FIELD_ATTR_PUNCTUALITY_EVALUATION_VAL2:
          evPunctuality += 2 * (1 - R_QUALITY_WEIGTHT);
          break;
        case R_FIELD_ATTR_PUNCTUALITY_EVALUATION_VAL1:
          evPunctuality += 1 * (1 - R_QUALITY_WEIGTHT);
          break;
        }
    }

    evGlobal = (evQuality + evPunctuality) / ((actionCount * R_QUALITY_WEIGTHT) + (actionCount * (1 - R_QUALITY_WEIGTHT));
    message (evGlobal +" "+ evQuality +" "+ evPunctuality);
    
    entryControl.set(R_FIELD_EVALUATION, evGlobal )
  }
}


function generateEmailBody ( entryControl ) {



}
