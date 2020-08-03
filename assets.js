
const Asset = function (e) {

  log("Asset: " + String(e));
  let err;

  try {

    this.setUniqueNr = function () {
      try {

        let newNr;
        let result;

        newNr = Math.floor(10000 + (Math.random() * 90000));
        result = lib().find(newNr);

        while (result.length != 0) {
          newNr = Math.floor(10000 + (Math.random() * 90000));
          result = lib().find(newNr);
        };
        e.set(ASS_FIELD_UNIQUE_CODE, newNr)
      } catch (err) {
        log("Salary:setUniqueNr" + err);
      }
    }


  } catch (err) {
    log("Salary: " + err);
  }



}


