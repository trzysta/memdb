const BUD_FIELD_LINK_ATTR_CATEGORY = 'Kategoria wydatku';
const BUD_FIELD_LINK_ATTR_AMOUNT = 'Kwota';

const assignSpendingToBudget = function (entryBudget, entrySpending) {
  log(
    'Budget :: assignSpendingToBudget :: ' +
      entrySpending.name +
      '; ' +
      entryBudget.name
  );

  try {
    currentCategoryName = entryBudget.attr(
      BUD_FIELD_LINK_ATTR_CATEGORY
    );
    currentAmount = entryBudget.attr(BUD_FIELD_LINK_ATTR_AMOUNT);
    prevCategoryAmount = entryBudget.field(
      BUD_FIELD_LINK_ATTR_CATEGORY
    );

    entryBudget.set(
      thisCategoryName,
      prevCategoryAmount + thisAmount
    );
  } catch (error) {
    log('ERR: Budget :: assignSpendingToBudget :: ' + error);
  }
};
