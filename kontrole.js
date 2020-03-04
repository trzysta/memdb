

function getCheckpointLabel( fieldCount ) {
  return R_FIELD_CHECKPOINT_LABELS[fieldCount];
}



function createControl( entryControl ) {
  entryControl.set(FIELD_IS_NEW, true);
}




function saveFirstTime( entryControl ) {

  actionsDaily = new Array();
  actionsMonthly = new Array();

  allActions = libZadania.linksTo( entryControl.field(R_CONTRACT_LINK)[0] );

  for (i=0; i < allActions.length; i++) {
     entryAction = allActions[i];

     for (j=0; j < C_FIELD_ACTION_DOMAIN_VALUES.length; j++) {
        val = C_FIELD_ACTION_DOMAIN_VALUES[j];
        if   (( entryAction.field(C_FIELD_ACTION_DOMAIN) == val ) &&
              ( R_FREQ_LINKED_WEEK.indexOf( entryAction.field() ) >= 0 ) &&
              ( R_FREQ_LINKED_WEEK.indexOf( entryAction.field() ) <= 5 )) {
             // czynności wnetrza częste lub równe raz na tydzień
             actionsDaily.push(entryAction);
         }
         else if (( entryAction.field(C_FIELD_ACTION_DOMAIN) == val ) &&
                  ( R_FREQ_LINKED_WEEK.indexOf( entryAction.field()) > 5 )) {
             actionsMonthly.push(entryAction);
         }
      }
  }

  for (c=0; c < actionsDaily.length; c++ ) { entryControl.link( R_FIELD_ACTION_LINK, actionsDaily[c] ); };
  for (e=0; e < actionsMonthly.length; e++ ) { entryControl.link( R_FIELD_ACTION_LINK, actionsMonthly[e] ); };

  entryControl.set(FIELD_IS_NEW, false);
  entryControl.show();

}
























entryControl = entry();
entryControl.set(FIELD_IS_NEW, false);
var out = "";

var m = arrMonths_pl[ parseInt(moment().format('M'))-1 ];
var y = moment().format('YYYY');
var t = entryControl.field(R_CONTRACT_LINK)[0].field(P_FIELD_TAG);
var arrSearchResult = new Array();

// szukanie czynności codziennie i kilka razy w tygodniu
for (f=0; f < R_FREQ_LINKED_WEEK.length; f++) {
  var query = t + " " + R_FREQ_LINKED_WEEK[f];
  var result = libZadania.find(query);
  arrSearchResult.concat(result);
  out = out+query+result.length+arrSearchResult.length+"\n";
  }

  // szukanie czynności z tego miesiąca
  query = t+" "+m+" "+y;
  var result = libZadania.find(query);
  arrSearchResult = arrSearchResult.concat( result );
  out = out+query+result.length+arrSearchResult.length+"\n";

  for (i=0; i < arrSearchResult.length; i++ ) {
    var entryAction = arrSearchResult[i];
    entryControl.link( R_FIELD_ACTION_LINK, entryAction );
  }

entryControl.set("Uwagi", out );
entryControl.show();
