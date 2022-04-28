const BUD_FIELD_LINK_ATTR_CATEGORY = 'Kategoria wydatku';
const BUD_FIELD_LINK_ATTR_AMOUNT = 'Kwota';

const assignSpendingToBudget = function (entryBudget, entrySpending) {

  log( 'Budget :: assignSpendingToBudget :: spending: ' + entrySpending.name + '; budget:' + entryBudget.name);
  let budgetLinkNr = 0;
  let isFound = false;

  try {
    

    while (budgetLinkNr > entrySpending.field(SPE_FIELD_BUDGET_LINK).lenght && !isFound ) {
      if ( entryBudget.id == entrySpending.field(SPE_FIELD_BUDGET_LINK)[budgetLinkNr].id) {
        isFound = true;
        log(budgetLinkNr + " found: " + entrySpending.field(SPE_FIELD_BUDGET_LINK)[budgetLinkNr].id)
      } else {
        log(budgetLinkNr + " not found: " + entrySpending.field(SPE_FIELD_BUDGET_LINK)[budgetLinkNr].id)
        budgetLinkNr++;
      }
    }

    currentCategoryName = entrySpending.field(SPE_FIELD_BUDGET_LINK)[budgetLinkNr].attr( BUD_FIELD_LINK_ATTR_CATEGORY );
    currentAmount = entrySpending.field(SPE_FIELD_BUDGET_LINK)[budgetLinkNr].attr( BUD_FIELD_LINK_ATTR_AMOUNT );
    prevCategoryAmount = entrySpending.field(SPE_FIELD_BUDGET_LINK)[budgetLinkNr].field( currentCategoryName );
    entryBudget.set( thisCategoryName, prevCategoryAmount + thisAmount );

  } catch (error) {
    log('ERR: Budget :: assignSpendingToBudget :: ' + error);
  }
};
