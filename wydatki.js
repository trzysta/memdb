





function getFieldValue( fieldName ) {

  var result = 0;
  var e = entry();

  if ( canSee() ) {
    switch (fieldName) {
      case S_FIELD_AMOUNT:
        var editAmount = e.field(S_FIELD_AMOUNT);
        result = editAmount;
        break;
      default:
      }
    }
    return result;
}
