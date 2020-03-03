

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

  query = t + " " + m + " " + y;
  var arrSearchResult = libZadania.find(query);
  message (query + " " +  arrSearchResult.length);

  for (i=0; i < arrSearchResult.length; i++) {
    var entryAction = arrSearchResult[i];
    entryControl.link( R_FIELD_ACTION_LINK, entryAction );
  }

  //entryControl.show();
}
