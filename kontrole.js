

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
    entryControl.field(R_FIELD_ACTION_LINK)[currLink].setAttr("Opcje", ["jeden","dwa","trzy"]);
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

  var ev = 0;
  if ( !entryControl.field( FIELD_IS_NEW )) {
    for (i = 0; i < entryControl.field(R_FIELD_ACTION_LINK).length; i++ ) {
       ev += entryControl.field(R_FIELD_ACTION_LINK)[i].attr(R_FIELD_ACTION_LINK_ATTR_EVALUATION);
    }
    ev = ev / ( entryControl.field(R_FIELD_ACTION_LINK).length )
    entryControl.set(R_FIELD_EVALUATION, ev )
  }
}


function generateEmailBody ( entryControl ) {



}
