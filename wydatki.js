
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^


function budgetAllocationLeft( entrySpend ) {

  var s = Math.abs( entrySpend.field(S_FIELD_AMOUNT) );
  var budgetLinks = entrySpend.field(S_FIELD_BUDGET_LINK);

  for ( i=0; entrySpend.field(S_FIELD_BUDGET_LINK).length; i++  ) {
    s -= entrySpend.field(S_FIELD_BUDGET_LINK)[i].attr( S_FIELD_BUDGET_LINK_AMOUNT );
  }
  return s;

}
