/*
  wszelkie prawa zastrzeżone, biblioteka funkcji wykorzystywanych przez
  aplikację utworzoną dla 300 Sp. z o.o.
*/



// *^*^*^*  funkcja zwraca czy może widzieć wartość pola czy nie
function canSee( u ) {
  var can = false;
  if ( arrEditors.indexOf(u) > 0 )  can = true;
  return can;
}



// *^*^*^*  odpalana Creating Entry, Opening an Entry Card
function setDefault() {
  var e = entryDefault();
  e.set(FIELD_EDITOR, arrEditors);
  e.set(FIELD_IS_NEW, true);
}



// *^*^*^*  odpalana Creating Entry, After Save
function saveFirstTime() {
  var e = entry();
  e.set(FIELD_IS_NEW, false);
}




/*
*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^

    BAZA BUDŻET, FUNCKJE I WARTOŚCI PÓL OBLICZANYCH

 *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
*/

function addBudgetSpending(entryBudget, entrySpending) {

  if (entryBudget !== undefined)
    entryBudget = entry();

  if (entrySpending !== undefined)
    entrySpending = masterEntry();
  var newBalance = 0;
  newBalance = entryBudget.field(B_FIELD_BALANCE) + Math.abs(entrySpending.field(S_FIELD_AMOUNT));    //plus bo wydatki są zawsze ujemne
  entryBudget.set(B_FIELD_BALANCE, newBalance);
  entryBudget.set(B_FIELD_LEFT, entryBudget.field(B_FIELD_LIMIT) - newBalance );
}



function removeBudgetSpending(entryBudget, entrySpending) {

}








function postSave() {
  var currentEntry = entry();
  var linkedEntry = l.linksTo(currentEntry)[0];
  currentEntry.link("Link", linkedEntry);
}
