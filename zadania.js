


function selectWorkingDays( entryAction ) {

  var month = entryAction.field(A_FIELD_MONTH);
  var dt = moment(month).startOf('month');
  var dayEnd = parseInt(moment(m).endOf('month').format('D'));
  var day = 1;
  var m
  var arrDates = new Array;

  // set miesiąc as first day of month
  entryAction.set(A_FIELD_MONTH, dt.toDate() ) ;

  // reset all (deselect)
  for ( var i=1; i<31; i++) { entryAction.set(i, false) };

  var i = 1;
  while ( i <= dayEnd ) {
     if ( (dt.isoWeekday() != VALUE_DAYNUMBER_SATURDAY) && (dt.isoWeekday()!= VALUE_DAYNUMBER_SUNDAY ) )  {
       entryAction.set(i, true);

    };
    dt = dt.add(1, 'day');
    i++;
  }

}
