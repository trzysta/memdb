

const Contract = function (e) {

  log("Contract: " + String(e));
  let err;
  this.entry = e;

  try {

    this.linkEntry_tasks = function (masterEntry) {
      message(String(masterEntry));

      // masterEntry to entry z tasków
      masterEntry.set(TAS_FIELD_COORDINATOR, this.entry.field(CON_FIELD_COORDINATOR));
      masterEntry.set(TAS_FIELD_RAPORT_RECIPIENT, this.entry.field(CON_FIELD_RAPORT_RECIPIENT));
    }

  } catch (err) {
    log("Contract: " + err);
  }
}
