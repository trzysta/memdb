



function closeChecksAndSendEmail ( arrayEntryControl, confirm ) {
  if (confirm) {
    var newEntryMail = new Object();
    var parentREF = setRef( LIB_CHECKS_SHORT_NAME );
    var htmlBody = htmlMailHeader;
    var groupBy = moment().format("YYYY-MM-DD");
    var tag, domain, recipients;
    var domain = new Array();

    for (let i=0; i < arrayEntryControl.length; i++) {
      htmlBody = htmlBody + "<HR>" + arrayEntryControl[i].field(CHK_FIELD_MAILBODY);
      tag = arrayEntryControl[0].field(CHK_FIELD_CONTRACT_LINK)[0].field(CON_FIELD_TAG);
      domain.push( arrayEntryControl[i].field(CHK_FIELD_ACTION_DOMAIN) );
      recipients = arrayEntryControl[i].field(CHK_FIELD_CONTRACT_LINK)[0].field(CON_FIELD_RAPORT_RECIPIENT);
    };

    groupBy = groupBy + SEP + tag + SEP + domain.unique().join(", ");

    htmlBody = htmlBody + htmlMailFooter;
    newEntryMail[CHK_FIELD_GROUPBY]           = groupBy;
    newEntryMail[CHK_FIELD_MAILBODY]          = htmlBody;
    newEntryMail[FIELD_REF_PARTENT]           = parentREF;
    newEntryMail[FIELD_REF]                   = parentREF;
    newEntryMail[FIELD_IS_PARENT]             = true;
    newEntryMail[FIELD_IS_NEW]                = false;
    newEntryMail[CHK_FIELD_REPORT_RECIPIENTS] = recipients;

    newEntryMail = libChecks.create(newEntryMail);
    newEntryMail.set(CHK_FIELD_MAIL_DATETIME, moment().format("DD.MM.YYYY hh:mm"));

    updateDisplayName ( newEntryMail );

    for (let i=0; i < arrayEntryControl.length; i++) {
       arrayEntryControl[i].set(CHK_FIELD_GROUPBY, groupBy)
       arrayEntryControl[i].set(FIELD_REF_PARTENT, parentREF);
       arrayEntryControl[i].set(FIELD_EDITOR, "");
       newEntryMail.link(CHK_FIELD_CHEKCS_RAPORTED, arrayEntryControl[i]);
    };
  }
}





// ****************************************************************************
// ****************************************************************************



function updateDisplayName ( entryControl ) {

  var displayName;

  if ( entryControl.field(FIELD_IS_PARENT) ) {
    displayName = VALUE_MAIL + SEP +
                  entryControl.field( CHK_FIELD_MAIL_DATETIME ) + SEP +
                  entryControl.field( CHK_FIELD_MAIL_RECIPIENTS ) + SEP;
  } else {
    displayName = entryControl.field( CHK_FIELD_CONTRACT_LINK )[0].field(CON_FIELD_TAG) + SEP +
                  entryControl.field( CHK_FIELD_ACTION_DOMAIN ) + SEP +
                  entryControl.field( CHK_FIELD_ACTION_AREA );
    if ( entryControl.field( FIELD_REF_PARTENT ).length > 0 )  {
                  displayName = displayName + SEP +
                  "(" + VALUE_MAIL + " " + entryControl.field( FIELD_REF_PARTENT ) + ") ";
    }

  }
  entryControl.set(FIELD_DISPLAY_NAME, displayName)
}


// ****************************************************************************
// ****************************************************************************


function countEvaluation( entryControl ) {

  var evQuality = 0;
  var evPunctuality = 0;
  var evGlobal = 0;

  if ( entryControl.field( CHK_FIELD_CLOSED )) {
    for (actionCount = 0; actionCount < entryControl.field(CHK_FIELD_ACTION_LINK).length; actionCount++ ) {

      // ocena JAKOŚCI
      switch ( entryControl.field(CHK_FIELD_ACTION_LINK)[actionCount].attr(CHK_FIELD_ATTR_QUALITY_EVALUATION).trim() ) {
        case CHK_FIELD_ATTR_QUALITY_EVALUATION_VAL2:
          evQuality += 2;
          break;
        case CHK_FIELD_ATTR_QUALITY_EVALUATION_VAL1:
          evQuality += 1;
          break;
        }

      // ocena terminowości
      switch ( entryControl.field(CHK_FIELD_ACTION_LINK)[actionCount].attr(CHK_FIELD_ATTR_PUNCTUALITY_EVALUATION).trim() ) {
        case CHK_FIELD_ATTR_PUNCTUALITY_EVALUATION_VAL2:
          evPunctuality += 2;
          break;
        case CHK_FIELD_ATTR_PUNCTUALITY_EVALUATION_VAL1:
          evPunctuality += 1;
          break;
        }
    }

    evGlobal = ( (evQuality * R_QUALITY_WEIGTHT) + ( evPunctuality * (1 - R_QUALITY_WEIGTHT))) / ((actionCount * R_QUALITY_WEIGTHT) + (actionCount * (1 - R_QUALITY_WEIGTHT)));


    entryControl.set(CHK_FIELD_EVALUATION, ((100 * evGlobal) / 2).toString() + "%" );
    entryControl.set(CHK_FIELD_QUALITY_EVALUATION, ((100 * (evQuality/actionCount)) / 2).toString() + "%"  );
    entryControl.set(CHK_FIELD_PUNCTUALITY_EVALUATION, ((100 * (evPunctuality/actionCount)) / 2).toString() + "%"  );
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

    if ( entryControl.field(CHK_FIELD_ACTION_DOMAIN).indexOf( entryAction.field(ACT_FIELD_ACTION_DOMAIN)) >= 0 ) {
       if ( actionDates.length <= 0 ) {                           // nie ma wpisanej daty oznacza że to czynność codzienna
          entryControl.link(CHK_FIELD_ACTION_LINK, entryAction);

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
               entryControl.link(CHK_FIELD_ACTION_LINK, entryAction);
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
  entryControl.set(CHK_FIELDCHECKS + ACT_FIELD_ACTION_DOMAIN_VALUES[0], actionChecksK.unique() );
  entryControl.set(CHK_FIELDCHECKS + ACT_FIELD_ACTION_DOMAIN_VALUES[1], actionChecksG.unique() );
  entryControl.set(CHK_FIELDCHECKS + ACT_FIELD_ACTION_DOMAIN_VALUES[2], actionChecksT.unique() );
  entryControl.set(CHK_FIELDCHECKS + ACT_FIELD_ACTION_DOMAIN_VALUES[3], actionChecksZ.unique() );
  entryControl.set(CHK_FIELDCHECKS + ACT_FIELD_ACTION_DOMAIN_VALUES[4], actionChecksB.unique() );
  entryControl.show();
}


// ****************************************************************************
// ****************************************************************************


function setMailBody ( entryControl ) {

  var htmlBody;
  var actionDomain

  htmlBody = "<hr>" +
  "<p>Data i godzina kontroli:<b> "   + moment(entryControl.field(CHK_FIELD_CONTROL_DATETIME)).format("YYYY-MM-DD hh:mm")  + "</b><br>"  +
  "Kontrolowane osiedle:<b> "         + entryControl.field(CHK_FIELD_CONTRACT_LINK)[0].name + "</b><br>"  +
  "Kontrolowany obszar:<b> "           + entryControl.field(CHK_FIELD_ACTION_DOMAIN) + "</b> "  +
  "<b>(" + entryControl.field(CHK_FIELD_ACTION_AREA) + ")</b></p>";

  for (let i = 0; i < entryControl.field(CHK_FIELD_ACTION_LINK).length; i++ ) {
    htmlBody = htmlBody + "<span>" + (i+1) + " czynność: <b>" +  entryControl.field(CHK_FIELD_ACTION_LINK)[i].field(ACT_FIELD_ACTION) + "</b>" +
                    " obszar <b>" + entryControl.field(CHK_FIELD_ACTION_LINK)[i].field(ACT_FIELD_ACTION_DOMAIN) + "</b>" +
                    " wykonywana " + entryControl.field(CHK_FIELD_ACTION_LINK)[i].field(ACT_FIELD_FREQUENCY) + "" +
                    " zaplanowana na " + entryControl.field(CHK_FIELD_ACTION_LINK)[i].field(ACT_FIELD_WEEKDAYS).join(", ") +
                                         entryControl.field(CHK_FIELD_ACTION_LINK)[i].field(ACT_FIELD_DATES) +
                    " <b>" + entryControl.field(CHK_FIELD_ACTION_LINK)[i].attr(CHK_FIELD_ACTION_LINK_ATTR_RESULT) + "</b></span><br>";
  };

  htmlBody = htmlBody + "<p>Część druga kontroli: sprawdzanie jakości wykonania</p>";


  actionDomain = entryControl.field(CHK_FIELD_ACTION_DOMAIN);
  htmlBody = htmlBody + "<p>W kontrolowanym obszarze " +  actionDomain + " " +
                          "stwierdzono <b>" + entryControl.field(CHK_FIELDCHECKS + actionDomain).join(", ") + "</b><br>" +
                          "Do poprawy są <b>" + entryControl.field(CHK_FIELDCHECKS_AREA_NOK + actionDomain).join(", ") + "</b><br>" +
                          "Problemy nie występują na <b>" + entryControl.field(CHK_FIELDCHECKS_AREA_OK + actionDomain).join(", ")  + "</b></p>"

  entryControl.set( CHK_FIELD_MAILBODY, htmlBody );

}
