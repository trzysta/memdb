

function getCheckpointLabel( fieldCount ) {
  return CON_FIELD_CHECKPOINT_LABELS[fieldCount];
}



function createControl( entryControl ) {
  entryControl.set(FIELD_IS_NEW, true);
}


// ****************************************************************************
// ****************************************************************************


function countEvaluation( entryControl ) {

  var evQuality = 0;
  var evPunctuality = 0;
  var evGlobal = 0;

  if ( entryControl.field( CON_FIELD_CLOSED )) {
    for (actionCount = 0; actionCount < entryControl.field(CON_FIELD_ACTION_LINK).length; actionCount++ ) {

      // ocena JAKOŚCI
      switch ( entryControl.field(CON_FIELD_ACTION_LINK)[actionCount].attr(CON_FIELD_ATTR_QUALITY_EVALUATION).trim() ) {
        case CON_FIELD_ATTR_QUALITY_EVALUATION_VAL2:
          evQuality += 2;
          break;
        case CON_FIELD_ATTR_QUALITY_EVALUATION_VAL1:
          evQuality += 1;
          break;
        }

      // ocena terminowości
      switch ( entryControl.field(CON_FIELD_ACTION_LINK)[actionCount].attr(CON_FIELD_ATTR_PUNCTUALITY_EVALUATION).trim() ) {
        case CON_FIELD_ATTR_PUNCTUALITY_EVALUATION_VAL2:
          evPunctuality += 2;
          break;
        case CON_FIELD_ATTR_PUNCTUALITY_EVALUATION_VAL1:
          evPunctuality += 1;
          break;
        }
    }

    evGlobal = ( (evQuality * R_QUALITY_WEIGTHT) + ( evPunctuality * (1 - R_QUALITY_WEIGTHT))) / ((actionCount * R_QUALITY_WEIGTHT) + (actionCount * (1 - R_QUALITY_WEIGTHT)));


    entryControl.set(CON_FIELD_EVALUATION, ((100 * evGlobal) / 2).toString() + "%" );
    entryControl.set(CON_FIELD_QUALITY_EVALUATION, ((100 * (evQuality/actionCount)) / 2).toString() + "%"  );
    entryControl.set(CON_FIELD_PUNCTUALITY_EVALUATION, ((100 * (evPunctuality/actionCount)) / 2).toString() + "%"  );
  }
}


// ****************************************************************************
// ****************************************************************************


function getActionsForControl( entryContract, entryControl ) {

  // wpisywanie czynności do skontrolowania w bazie kontrole
  var entryAction;
  var actionDates = new Array();
  var actionChecksK = new Array();
  var actionChecksG = new Array();
  var actionChecksT = new Array();
  var actionChecksZ = new Array();
  var actionChecksB = new Array();
  var allEntriesActionUnsorted = libActivities.linksTo( entryContract );
  var allEntriesAction = new Array( allEntriesActionUnsorted.length );

  var dateStart = moment().startOf('month');
  var dateEnd = moment();     // sprawdzanie czynności od początku miesiąca do daty dziś

  for (let c = 0; c < allEntriesActionUnsorted.length; c++ ) {
    var sortOrder = allEntriesActionUnsorted[c].field("Sort");
    allEntriesAction[ sortOrder-1 ] = allEntriesActionUnsorted[c];
  };

  for (let i=0; i < allEntriesAction.length; i++) {
    entryAction = allEntriesAction[i];

    if (entryAction.field(ACT_FIELD_DATES).length > 0) { actionDates = entryAction.field(ACT_FIELD_DATES).split(",") };

    if ( entryControl.field(CON_FIELD_ACTION_DOMAIN).indexOf( entryAction.field(ACT_FIELD_ACTION_DOMAIN)) >= 0 ) {
       if ( actionDates.length <= 0 ) {                           // nie ma wpisanej daty oznacza że to czynność codzienna
          entryControl.link(CON_FIELD_ACTION_LINK, entryAction);

          switch (entryAction.field(ACT_FIELD_ACTION_DOMAIN)) {
            case ACT_FIELD_ACTION_DOMAIN_VALUES[0]:
              appendToArray(actionChecksK, entryAction.field(ACT_FIELD_ACTION_CHECKS).split(BR));
              break;
            case ACT_FIELD_ACTION_DOMAIN_VALUES[1]:
              appendToArray(actionChecksG, entryAction.field(ACT_FIELD_ACTION_CHECKS).split(BR));
              break;
            case ACT_FIELD_ACTION_DOMAIN_VALUES[2]:
              appendToArray(actionChecksT, entryAction.field(ACT_FIELD_ACTION_CHECKS).split(BR));
              break;
            case ACT_FIELD_ACTION_DOMAIN_VALUES[3]:
              appendToArray(actionChecksZ, entryAction.field(ACT_FIELD_ACTION_CHECKS).split(BR));
              break;
            default:
              appendToArray(actionChecksB, entryAction.field(ACT_FIELD_ACTION_CHECKS).split(BR));
          }
       } else {                                                   // jest wpisana data zatem sprawdzam czy data jest z tego miesiąca
          for (let j=0; j < actionDates.length; j++ ) {
            if (moment(actionDates[j]).isBetween (dateStart,dateEnd)) {
               entryControl.link(CON_FIELD_ACTION_LINK, entryAction);
               switch (entryAction.field(ACT_FIELD_ACTION_DOMAIN)) {
                 case ACT_FIELD_ACTION_DOMAIN_VALUES[0]:
                   appendToArray(actionChecksK, entryAction.field(ACT_FIELD_ACTION_CHECKS).split(BR));
                   break;
                 case ACT_FIELD_ACTION_DOMAIN_VALUES[1]:
                   appendToArray(actionChecksG, entryAction.field(ACT_FIELD_ACTION_CHECKS).split(BR));
                   break;
                 case ACT_FIELD_ACTION_DOMAIN_VALUES[2]:
                   appendToArray(actionChecksT, entryAction.field(ACT_FIELD_ACTION_CHECKS).split(BR));
                   break;
                 case ACT_FIELD_ACTION_DOMAIN_VALUES[3]:
                   appendToArray(actionChecksZ, entryAction.field(ACT_FIELD_ACTION_CHECKS).split(BR));
                   break;
                 default:
                   appendToArray(actionChecksB, entryAction.field(ACT_FIELD_ACTION_CHECKS).split(BR));
               }
            }
          }
       }
    }
  };

  entryControl.set(FIELD_IS_NEW, false);
  entryControl.set(CON_FILED_CHECKS + ACT_FIELD_ACTION_DOMAIN_VALUES[0], actionChecksK.unique() );
  entryControl.set(CON_FILED_CHECKS + ACT_FIELD_ACTION_DOMAIN_VALUES[1], actionChecksG.unique() );
  entryControl.set(CON_FILED_CHECKS + ACT_FIELD_ACTION_DOMAIN_VALUES[2], actionChecksT.unique() );
  entryControl.set(CON_FILED_CHECKS + ACT_FIELD_ACTION_DOMAIN_VALUES[3], actionChecksZ.unique() );
  entryControl.set(CON_FILED_CHECKS + ACT_FIELD_ACTION_DOMAIN_VALUES[4], actionChecksB.unique() );
  entryControl.show();
}


// ****************************************************************************
// ****************************************************************************


function setMailBody ( entryControl ) {

  var htmlBody;

  htmlBody = "<hr>" +
  "<p>Data i godzina kontroli:<b> "   + moment(entryControl.field(CON_FIELD_CONTROL_DATETIME)).format("YYYY-MM-DD hh:mm")  + "</b><br>"  +
  "Kontrolowane osiedle:<b> "         + entryControl.field(CON_FIELD_CONTRACT_LINK)[0].name + "</b><br>"  +
  "Kontrolowany obsza:<b> "           + entryControl.field(CON_FIELD_ACTION_DOMAIN).join(", ") + "</b><br>"  +
  "Skontolowany budynek i klatka<b> " + entryControl.field(CON_FIELD_BUILDING) + "</b></p>";

  for (let i = 0; i < entryControl.field(CON_FIELD_ACTION_LINK).length; i++ ) {
    htmlBody = htmlBody + "<span>" + (i+1) + " czynność: <b>" +  entryControl.field(CON_FIELD_ACTION_LINK)[i].field(ACT_FIELD_ACTION) + "</b>" +
                    " obszar <b>" + entryControl.field(CON_FIELD_ACTION_LINK)[i].field(ACT_FIELD_ACTION_DOMAIN) + "</b>" +
                    " wykonywana " + entryControl.field(CON_FIELD_ACTION_LINK)[i].field(ACT_FIELD_FREQUENCY) + "" +
                    " zaplanowana na " + entryControl.field(CON_FIELD_ACTION_LINK)[i].field(ACT_FIELD_WEEKDAYS).join(", ") +
                                         entryControl.field(CON_FIELD_ACTION_LINK)[i].field(ACT_FIELD_DATES) +
                    " <b>" + entryControl.field(CON_FIELD_ACTION_LINK)[i].attr(CON_FIELD_ACTION_LINK_ATTR_RESULT) + "</b></span><br>";
  };

  htmlBody = htmlBody + "<p>Część druga kontroli: sprawdzanie jakości wykonania</p>";

  for (let i=0; i < entryControl.field(CON_FIELD_ACTION_DOMAIN).length; i++ ) {
    var actionDomain = entryControl.field(CON_FIELD_ACTION_DOMAIN)[i];
    htmlBody = htmlBody + "<p>W kontrolowanym obszarze " +  actionDomain + " " +
                          "stwierdzono <b>" + entryControl.field(CON_FILED_CHECKS + actionDomain).join(", ") + "</b><br>" +
                          "Do poprawy są <b>" + entryControl.field(CON_FILED_CHECKS_AREA_NOK + actionDomain).join(", ") + "</b><br>" +
                          "Problemy nie występują na <b>" + entryControl.field(CON_FILED_CHECKS_AREA_OK + actionDomain).join(", ")  + "</b></p>"
  }

  entryControl.set( CON_FIELD_MAILBODY, htmlBody );

}
