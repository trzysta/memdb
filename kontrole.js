

function getCheckpointLabel( fieldCount ) {
  return R_FIELD_CHECKPOINT_LABELS[fieldCount];
}


function createControl( entryControl ) {
  entryControl.set(FIELD_IS_NEW, true);
}


function saveFirstTime( entryControl ) {

  entryControl = entry();
  entryControl.set(FIELD_IS_NEW, false);

  var m = arrMonths_pl[ parseInt(moment().format('M'))-1 ];
  var y = moment().format('YYYY');
  var t = entryControl.field(R_CONTRACT_LINK)[0].field(P_FIELD_TAG);
  var arrSearchResult = new Array();

  // szukanie czynności codziennie i kilka razy w tygodniu
  for (f=0; f < R_FREQ_LINKED_WEEK.length; f++) {
    query = t + " " + R_FREQ_LINKED_WEEK[f];
    var result =  libZadania.find(query);
    arrSearchResult.push( result );
  }

  // szukanie czynności z tego miesiąca
  query = t + " " + m + " " + y;
  var result =  libZadania.find(query);
  arrSearchResult.push( result );

  for (i=0; i < arrSearchResult.length; i++) {
    var entryAction = arrSearchResult[i];
    entryControl.link( R_FIELD_ACTION_LINK, entryAction );
  }

  entryControl.show();
}
