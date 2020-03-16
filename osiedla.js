


function linkContract ( targetLibraryName, entryContract, entryTarget ) {

  switch (targetLibraryName) {
    case LIB_CHECKS_NAME:

        var entryAction;
        var actionDates = new Array();
        var allEntriesActionUnsorted = libActivities.linksTo( entryContract );
        var allEntriesAction = new Array( allEntriesActionUnsorted.length );

        var dateStart = moment().startOf('month');
        var dateEnd = moment().endOf('month');

        for (let c = 0; c < allEntriesActionUnsorted.length; c++ ) {
          var sortOrder = allEntriesActionUnsorted[c].field("Sort");
          allEntriesAction[ sortOrder-1 ] = allEntriesActionUnsorted[c];
        };

        for (let i=0; i < allEntriesAction.length; i++) {
          entryAction = allEntriesAction[i];
          if (entryAction.field(ACT_FIELD_DATES).length > 0) {
             actionDates = entryAction.field(ACT_FIELD_DATES).split(",");
          };
          entryControl.link(CON_FIELD_ACTION_LINK, entryAction);

          var arrDomain = entryControl.field(CON_FIELD_ACTION_DOMAIN);
          var entryDomain = entryAction.field(ACT_FIELD_ACTION_DOMAIN);

          if ( entryControl.field(CON_FIELD_ACTION_DOMAIN).indexOf( entryAction.field(ACT_FIELD_ACTION_DOMAIN)) >= 0 ) {
             if ( actionDates.length <= 0 ) {                           // nie ma wpisanej daty oznacza że to czynność codzienna
                entryControl.link(CON_FIELD_ACTION_LINK, entryAction);
             } else {                                                   // jest wpisana data zatem sprawdzam czy data jest z tego miesiąca
                for (let j=0; j < actionDates.length; j++ ) {
                  if (moment(actionDates[j]).isBetween (dateStart,dateEnd)) {
                     entryControl.link(CON_FIELD_ACTION_LINK, entryAction);
                  }
                }
             }
          }
      };
      entryControl.set(FIELD_IS_NEW, false);
      entryControl.show();

      break;
    default:

  }





}