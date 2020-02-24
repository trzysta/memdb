

// zmienne



function selectDays( entryAction, dayWeekNumber ) {

  var mnth = entryAction.field(A_FIELD_MONTH);
  var dt = moment(mnth).startOf('month');
  var dayEnd = parseInt(moment(mnth).endOf('month').format('D'));
  var day = 1;
  var arrDates = new Array;

  // set miesiąc as first day of month
  entryAction.set(A_FIELD_MONTH, dt.toDate() ) ;


switch (dayWeekNumber) {
  case 0: // odznacz wszystkie
    for ( var i=1; i<31; i++) {
      entryAction.set(i, false);
      arrDates = new Array;
    };
    break;
  default:
    var i = 1;
    while ( i <= dayEnd ) {
       if ( (dt.isoWeekday() == dayWeekNumber) )  {
         entryAction.set(i, true);
         arrDates.push( moment(dt).format('DD.MM.YYYY') );
      };
      dt = dt.add(1, 'day');
      i++;
    }
}
  // reset all (deselect)
  entryAction.set(A_FIELD_DATES, arrDates.join(" "));
}
