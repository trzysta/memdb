

function getCheckpointLabel( fieldCount ) {
  return R_FIELD_CHECKPOINT_LABELS[fieldCount];
}










function createControl ( entryContract ) {

   var entryControl = new Object;

   entryControl = libKontrole.create(entryControl);
   entryControl.link(R_CONTRACT_LINK, entryContract );
   updateControlForm_linkContract( entryContract, entryControl );
   entryControl.show();
}


function updateControlForm_linkContract( entryContract, entryControl ) {

  var arrBuildings = entryContract.field(P_FIELD_BUILDINGS).split("\n");
  entryControl.set(R_FIELD_BUILDING, arrBuildings);

}
