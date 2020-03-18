


function linkContract ( targetLibraryName, entryContract, entryTarget ) {

  switch (targetLibraryName) {
    case LIB_CHECKS_NAME:

        var entryAction;
        var actionDates = new Array();
        var allEntriesActionUnsorted = libActivities.linksTo( entryContract );
        var allEntriesAction = new Array( allEntriesActionUnsorted.length );
        var tmp = "start";

        var dateStart = moment().startOf('month');
        var dateEnd = moment();     // sprawdzanie czynności od początku miesiąca do daty dziś

        for (let c = 0; c < allEntriesActionUnsorted.length; c++ ) {
          var sortOrder = allEntriesActionUnsorted[c].field("Sort");
          allEntriesAction[ sortOrder-1 ] = allEntriesActionUnsorted[c];
        };

        for (let i=0; i < allEntriesAction.length; i++) {
          entryAction = allEntriesAction[i];
          tmp = tmp + "\n" + entryAction.name;

          if (entryAction.field(ACT_FIELD_DATES).length > 0) { actionDates = entryAction.field(ACT_FIELD_DATES).split(",") };

          if ( entryTarget.field(CON_FIELD_ACTION_DOMAIN).indexOf( entryAction.field(ACT_FIELD_ACTION_DOMAIN)) >= 0 ) {
             if ( actionDates.length <= 0 ) {                           // nie ma wpisanej daty oznacza że to czynność codzienna
                entryTarget.link(CON_FIELD_ACTION_LINK, entryAction);
             } else {                                                   // jest wpisana data zatem sprawdzam czy data jest z tego miesiąca
                for (let j=0; j < actionDates.length; j++ ) {
                  if (moment(actionDates[j]).isBetween (dateStart,dateEnd)) {
                     entryTarget.link(CON_FIELD_ACTION_LINK, entryAction);
                  }
                }
             }
          }
      };
      entryTarget.set(FIELD_IS_NEW, false);
      entryTarget.set("tmp", tmp);
      entryTarget.show();

      break;
    default:

  }
}
