








const Budget = function (e) {

    log("Budget: " + String(e));

    try {
        if (e !== undefined) {
            this.entry = e;







        }
    } catch (err) {
        log("Budget: " + err);
    }
}