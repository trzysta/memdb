

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

  for (i=0; i < allActions.length; i++) {
     entryAction = allActions[i];

     for (j=0; j < C_FIELD_ACTION_DOMAIN_VALUES.length; j++) {
        val = C_FIELD_ACTION_DOMAIN_VALUES[j];
        if   (( entryAction.field(C_FIELD_ACTION_DOMAIN) == val ) &&
              ( R_FIELD_FREQENCY_VALUES.indexOf( entryAction.field() ) >= 0 ) &&
              ( R_FIELD_FREQENCY_VALUES.indexOf( entryAction.field() ) <= 5 )) {
             // czynności wnetrza częste lub równe raz na tydzień
             actionsDaily.push(entryAction);
         }
         else if (( entryAction.field(C_FIELD_ACTION_DOMAIN) == val ) &&
                  ( R_FIELD_FREQENCY_VALUES.indexOf( entryAction.field()) > 5 )) {
             actionsMonthly.push(entryAction);
         }
      }
  }

  for (c=0; c < actionsDaily.length; c++ ) { entryControl.link( R_FIELD_ACTION_LINK, actionsDaily[c] ); };
  for (e=0; e < actionsMonthly.length; e++ ) { entryControl.link( R_FIELD_ACTION_LINK, actionsMonthly[e] ); };

  entryControl.set(FIELD_IS_NEW, false);
  entryControl.show();

}
