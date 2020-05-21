
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^


function budgetAllocationLeft( entrySpend ) {

  var s = Math.abs( entrySpend.field(SPE_FIELD_AMOUNT) );
  var budgetLinks = entrySpend.field(SPE_FIELD_BUDGET_LINK);

  for ( i=0; entrySpend.field(SPE_FIELD_BUDGET_LINK).length; i++  ) {
    s -= entrySpend.field(SPE_FIELD_BUDGET_LINK)[i].attr( SPE_FIELD_BUDGET_LINK_AMOUNT );
  }
  return s;

}
