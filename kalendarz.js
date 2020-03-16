


// zmienne

function selectDays( entryAction, dayWeekNumber ) {

  var mnth = entryAction.field(ACT_FIELD_MONTH);
  var dt = moment(mnth).startOf('month');
  var dayEnd = parseInt(moment(mnth).endOf('month').format('D'));
  var day = 1;
  var arrDates = new Array;
  var arrDays = new Array;

  // set miesiąc as first day of month
  entryAction.set(ACT_FIELD_MONTH, dt.toDate() ) ;

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
  entryAction.set(ACT_FIELD_DATES, arrDates.join(", "));
  entryAction.set(ACT_FIELD_DATES_DAYS, arrDays.join(", "));
}





function displayEntryName( entryCalendar ) {
   var o = "";
   switch (entryCalendar.field(ACT_FIELD_TYPE)) {
     case ACT_FIELD_TYPE_VALUE_TEMPLATE:
        o +=  entryCalendar.field(ACT_FIELD_ACTION_DOMAIN) + VIEW_SEP +
              entryCalendar.field(ACT_FIELD_ACTION) + VIEW_SEP +
              entryCalendar.field(ACT_FIELD_CONTRACT).name;
       break;
     default:
        o +=  moment(entryCalendar.field(ACT_FIELD_MONTH)).format('YYYY-MM') + VIEW_SEP +
              entryCalendar.field(ACT_FIELD_DATES_DAYS);
   }
   return o;
}
