/*
var me = masterEntry();
var e = entry();
var nSaldo = 0;
var lim = e.field("Limit");

nSaldo = e.field("Saldo") + Math.abs(me.field("Kwota"));

e.set("Saldo", nSaldo);
e.set("Zostało", lim - nSaldo );
*/


function getActionsForInspection ( entryInspection, entryAction ) {
}


function getCheckpointLabel( fieldCount ) {
  return C_FIELD_CHECKPOINT_LABELS[fieldCount];
}
