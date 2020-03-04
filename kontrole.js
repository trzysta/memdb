

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
  var dt = moment().startOf('month').format("DD-MM-YYYY");

  for (j=0; j < C_FIELD_ACTION_DOMAIN_VALUES.length; j++) {
     val = C_FIELD_ACTION_DOMAIN_VALUES[j];

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
    entryControl.field(R_FIELD_ACTION_LINK)[currLink].setAttr(R_FIELD_CHECK_PROCEDURE, actionsDaily[c].field(C_FIELD_ACTION_CHECKPOINTS));
    currLink++
  };
  for (e=0; e < actionsMonthly.length; e++ ) {
    entryControl.link( R_FIELD_ACTION_LINK, actionsMonthly[e] );
    entryControl.field(R_FIELD_ACTION_LINK)[currLink].setAttr(R_FIELD_CHECK_PROCEDURE, actionsMonthly[e].field(C_FIELD_ACTION_CHECKPOINTS));
    currLink++
  };

  entryControl.set(FIELD_IS_NEW, false);
  entryControl.show();

}


function generateEmailBody ( entryControl ) {



}
