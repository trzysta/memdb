


// zmienne

function selectDays( entryAction, dayWeekNumber ) {

  var mnth = entryAction.field(C_FIELD_MONTH);
  var dt = moment(mnth).startOf('month');
  var dayEnd = parseInt(moment(mnth).endOf('month').format('D'));
  var day = 1;
  var arrDates = new Array;
  var arrDays = new Array;

  // set miesiąc as first day of month
  entryAction.set(C_FIELD_MONTH, dt.toDate() ) ;

  switch (dayWeekNumber) {
    case 0: // odznacz wszystkie
      for ( var i=1; i <= 31; i++) {
        entryAction.set(i, false);
        arrDates = new Array;
        arrDays = new Array;  
      };
      break;
    default:
      var i = 1;
      while ( i <= dayEnd ) {
         if ( (dt.isoWeekday() == dayWeekNumber) )  {
           entryAction.set(i, true);
           arrDates.push( moment(dt).format('DD.MM.YYYY') );
           arrDays.push( moment(dt).format('DD') );
        };
        dt = dt.add(1, 'day');
        i++;
      }
  }
  // reset all (deselect)
  entryAction.set(C_FIELD_DATES, arrDates.join(", "));
  entryAction.set(C_FIELD_DATES_DAYS, arrDates.join(", "));
}










function displayEntryName( entryCalendar ) {
   var o = "";
   switch (entryCalendar.field(C_FIELD_TYPE)) {
     case C_FIELD_TYPE_VALUE_TEMPLATE:
        o +=  entryCalendar.field(C_FIELD_ACTION_DOMAIN) + VIEW_SEP +
              entryCalendar.field(C_FIELD_ACTION) + VIEW_SEP +
              entryCalendar.field(C_FIELD_CONTRACT);
       break;
     default:
        o +=  moment(entryCalendar.field(C_FIELD_MONTH)).format('YYYY-MM') + VIEW_SEP +
              entryCalendar.field(C_FIELD_DATES);
   }
   return o;
}




function displayEntryDescription () {




}
