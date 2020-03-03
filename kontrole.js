

function getCheckpointLabel( fieldCount ) {
  return R_FIELD_CHECKPOINT_LABELS[fieldCount];
}










function getActionsThisMonth ( entryControl ) {

    var m = arrMonths_pl[ parseInt(moment().format('M'))-1 ];
    var y = moment().format('YYYY');
    var t = entryControl.field(R_CONTRACT_LINK).field(P_FIELD_TAG);

    query = t + " " + m + " " + y;
    var arrSearchResult = libZadania.find(query);
    for (i=0; i < arrSearchResult.length; i++) {
      var entryAction = arrSearchResult[i];
      entryControl.link(R_FIELD_ACTIONS_LINK, entryAction );
    }
}



function updateControlForm_linkContract( entryContract, entryControl ) {

  var arrBuildings = ["abc", "def"];//entryContract.field(P_FIELD_BUILDINGS).split("\n");
  entryControl.set(R_FIELD_BUILDING, arrBuildings);

}
