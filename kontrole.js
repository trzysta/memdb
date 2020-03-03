

function getCheckpointLabel( fieldCount ) {
  return R_FIELD_CHECKPOINT_LABELS[fieldCount];
}









function updateControlForm_linkContract( entryContract, entryControl ) {

  var arrBuildings = entryContract.field(P_FIELD_BUILDINGS).split("\n");
  entryControl.set(R_FIELD_BUILDING, arrBuildings)

}
