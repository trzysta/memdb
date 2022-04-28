// ********

const SPE_FIELD_AUTOALLOCATION =
  'Dokonaj automatycznej alokacji kosztów';
const SPE_FIELD_AUTOALLOCATION_VALUE_MANUALLY =
  'Nie rób nic, samodzielnie podzielę koszt na osiedla';
const SPE_FIELD_AUTOALLOCATION_VALUE_ONLY_LISTED =
  'Podziel kwotę po wskazanych niżej osiedlach';
const SPE_FIELD_AUTOALLOCATION_VALUE_MY_CONTRACTS =
  'Podziel kwotę po MOICH osiedlach';
const SPE_FIELD_AUTOALLOCATION_VALUE_ALL_CONTRACTS =
  'Podziel kwotę po SZYSTKICH osiedlach';

const BUD_CATEGORIES = [
  'Wynagrodzenia',
  'Zakupy chemii i materiałów',
  'Sprzęt zakup i serwis',
  'Koszty administracyjne',
  'Zieleń',
  'Inne',
];

const BUD_FIELD_LINK_ATTR_CATEGORY = 'Kategoria wydatku';
const BUD_FIELD_LINK_ATTR_AMOUNT = 'Kwota';

const assignSpendingToBudget = function (entrySpending, entryBudget) {

  /*

masterLib()             Returns the library from which the current record was referenced.
masterEntry()           Returns the entry from which the current record was referenced.
attr(name)              Get the value of the attribute for the current reference.
setAttr(name , value)   Set the value of the attribute for the current reference.

*/

  log(
    'Budget :: assignSpendingToBudget :: ' +
      entrySpending.name +
      '; ' +
      entryBudget.name
  );


  try {
  
    currentCategoryName = entryBudget.attr(BUD_FIELD_LINK_ATTR_CATEGORY);
    currentAmount = entryBudget.attr(BUD_FIELD_LINK_ATTR_AMOUNT);
    prevCategoryAmount = entryBudget.field(BUD_FIELD_LINK_ATTR_CATEGORY); 

    entryBudget.set( thisCategoryName, prevCategoryAmount + thisAmount );
    
    );
  } catch (error) {
    log('ERR: Budget :: assignSpendingToBudget :: ' + error);
  }
};
