

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
  entryControl.set("tmp", tmp);
  entryControl.show();
}


// ****************************************************************************
// ****************************************************************************



function generateEmailBody ( entryControl ) {

  var htmlBody = "";

  htmlBody = ""+
  "<p>Dzień dobry, to jest autoamtyczny e-mail zawierające informacje z wykonane kontroli.</p>" +

  "<p>Data i godzina kontroli:<b> "   + moment(entryControl.field(CON_FIELD_CONTROL_DATETIME)).format("YYYY-MM-DD hh:mm")  + "</b><br>"  +
  "Kontrolowane osiedle:<b> "         + entryControl.field(CON_FIELD_CONTRACT_LINK)[0].name + "</b><br>"  +
  "Kontrolowany obsza:<b> "            + entryControl.field(CON_FIELD_ACTION_DOMAIN).join(", ") + "</b><br>"  +
  "Skontolowany budynek i klatka<b> " + entryControl.field(CON_FIELD_BUILDING) + "</b></p>";

  htmlBody = htmlBody + "<p>Kontrola składa się z 2 części. Pierwsza część to kontrola wykonania czynności z umowy, sprawdzane są czynności które wg umowy powinny być wykonane częściej niż raz w tygodniu, a także czynności rzadziej wykonywane niż raz w tygodniu które zostały zaplanowane między początkiem miesiąca a datą bieżącą. <br> Drugą częścią kontroli jest sprawdzenie stanu czystości klatki.</p>" +
  "<p>Czynności z umowy które miały być wykonane od początku miesiąca do dnia kontroli zostały skontrolowane.</p>";

  htmlBody = htmlBody + "<p><b>Część pierwsza kontroli, sprawdzanie wykonania zadania wg umowy</b><p>";

  for (let i = 0; i < entryControl.field(CON_FIELD_ACTION_LINK).length; i++ ) {
    htmlBody = htmlBody + "<span>" + (i+1) + " czynność: <b>" +  entryControl.field(CON_FIELD_ACTION_LINK)[i].field(ACT_FIELD_ACTION) + "</b>" +
                    " obszar <b>" + entryControl.field(CON_FIELD_ACTION_LINK)[i].field(ACT_FIELD_ACTION_DOMAIN) + "</b>" +
                    " wykonywana " + entryControl.field(CON_FIELD_ACTION_LINK)[i].field(ACT_FIELD_FREQUENCY) + "" +
                    " zaplanowana na " + entryControl.field(CON_FIELD_ACTION_LINK)[i].field(ACT_FIELD_WEEKDAYS).join(", ") +
                                         entryControl.field(CON_FIELD_ACTION_LINK)[i].field(ACT_FIELD_DATES) +
                    " <b>" + entryControl.field(CON_FIELD_ACTION_LINK)[i].attr(CON_FIELD_ACTION_LINK_ATTR_RESULT) + "</b></span><br>";
  };

  htmlBody = htmlBody + "<p></p><p><b>Część druga kontroli: sprawdzanie jakości wykonania<br>";

  htmlBody = htmlBody + "<b>Wnętrza</b></p>" +
                      "<span>Okoliczności podczas kontroli: <b>" + entryControl.field("Okoliczności podczas kontroli").join(", ") + "</b><br>" +
                      "Kontrola polegała na: <b>" + R_LABEL_1 + "</b><br>" +
                     "Posadzka, zauważone problemy: <b>" + entryControl.field("Posadzka, zauważone problemy").join(", ") + "</b><br><span>" +
                     "Posadzka, piętra bez uwag, stan dobry: <b>" + entryControl.field("Posadzka: piętra bez uwag, stan dobry").join(", ") + "</b><br>" +
                     "Posadzka, piętra do poprawy: <b>" + entryControl.field("Posadzka: piętra do poprawy").join(", ") + "</b><p></p>";

  entryControl.set( CON_FIELD_MAILBODY, htmlBody );

}
