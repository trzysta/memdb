
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^


function budgetAllocationLeft( entrySpend ) {

  var s = Math.abs( entrySpend.field(S_FIELD_AMOUNT) );
  var budgetLinks = entrySpend.field(S_FIELD_BUDGET_LINK);
  for ( i=0; budgetLinks.length; i++  ) {
    s -= budgetLinks[i].attr( S_FIELD_BUDGET_LINK_AMOUNT );
  }
  return s;

}
