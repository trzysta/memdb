

const Contract = function (e) {

  log("Contract: " + String(e));
  let err;
  this.entry = e;

  try {

    this.linkEntry_tasks = function (masterEntry) {


    }

  } catch (err) {
    log("Contract: " + err);
  }
}
