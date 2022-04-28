const BUD_FIELD_LINK_ATTR_CATEGORY = 'Kategoria wydatku';
const BUD_FIELD_LINK_ATTR_AMOUNT = 'Kwota';

const assignSpendingToBudget = function (entryBudget, entrySpending) {

  log( 'Budget :: assignSpendingToBudget :: spending: ' + entrySpending.name + '; budget:' + entryBudget.name);
  let budgetLinkNr = 0;
  let isFound = false;

  try {
    
    log("start while " + entrySpending.field(SPE_FIELD_BUDGET_LINK).lenght );

    while (budgetLinkNr < entrySpending.field(SPE_FIELD_BUDGET_LINK).lenght && !isFound ) {
      if ( entryBudget.id == entrySpending.field(SPE_FIELD_BUDGET_LINK)[budgetLinkNr].id) {
        isFound = true;
        log(budgetLinkNr + " found: " + entrySpending.field(SPE_FIELD_BUDGET_LINK)[budgetLinkNr].id)
      } else {
        log(budgetLinkNr + " not found: " + entrySpending.field(SPE_FIELD_BUDGET_LINK)[budgetLinkNr].id)
        budgetLinkNr++;
      }
    };
    log("end while " + budgetLinkNr);

    currentCategoryName = entrySpending.field(SPE_FIELD_BUDGET_LINK)[budgetLinkNr].attr( BUD_FIELD_LINK_ATTR_CATEGORY );
    currentAmount = entrySpending.field(SPE_FIELD_BUDGET_LINK)[budgetLinkNr].attr( BUD_FIELD_LINK_ATTR_AMOUNT );
    prevCategoryAmount = entrySpending.field(SPE_FIELD_BUDGET_LINK)[budgetLinkNr].field( currentCategoryName );

    log (
      "currentCategoryName: " + currentCategoryName + ", " +
      "currentAmount: " + currentAmount + ", " +
      "prevCategoryAmount: " + prevCategoryAmount 
    )
    entryBudget.set( currentCategoryName, prevCategoryAmount + thisAmount );

  } catch (error) {
    log('ERR: Budget :: assignSpendingToBudget :: ' + error);
  }
};
