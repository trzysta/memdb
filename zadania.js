

// zmienne



function selectWorkingDays( entryAction ) {

  var mnth = entryAction.field(A_FIELD_MONTH);
  var dt = moment(mnth).startOf('month');
  var dayEnd = parseInt(moment(mnth).endOf('month').format('D'));
  var day = 1;
  var arrDates = new Array;

  // set miesiąc as first day of month
  entryAction.set(A_FIELD_MONTH, dt.toDate() ) ;

  // reset all (deselect)
  for ( var i=1; i<31; i++) { entryAction.set(i, false) };

  var i = 1;
  while ( i <= dayEnd ) {
     if ( (dt.isoWeekday() != VALUE_DAYNUMBER_SATURDAY) && (dt.isoWeekday()!= VALUE_DAYNUMBER_SUNDAY ) )  {
       entryAction.set(i, true);
       // tutaaj skrypt dodający datę do pola
       arrDates.push( moment(dt).format('DD.MM.YYYY') );
    };
    dt = dt.add(1, 'day');
    i++;
  }
  entryAction.set(A_FIELD_DATES, arrDates.join(" "));
}
