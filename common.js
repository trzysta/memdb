/*
  wszelkie prawa zastrzeżone, biblioteka funkcji wykorzystywanych przez
  aplikację utworzoną dla 300 Sp. z o.o.
*/



// *^*^*^*  sprawdza czy jest Edytorem
function isEditor() {
  var u = user().username;
  var is = false;
  if ( arrEditors.indexOf(u) >= 0 ) is = true;
  return is;
  }


// *^*^*^*  sprawdza czy jest Managerem
function isManager() {
  var u = user().username;
  var is = false;
  if ( arrManagers.indexOf(u) >= 0 ) is = true;
  return is;
}


// *^*^*^*  sprawdza czy searchedEntry jest w arrayOfLinks
function isLinkMember( arrayOfLinks, searchedEntry ) {
  var is = -1;
  var i = 0;
  if ( isArray(arrayOfLinks) ) {
    while ( i < arrayOfLinks.length ) {
      if (arrayOfLinks[i].id == searchedEntry.id ) {
         is = i;
         i = arrayOfLinks.length + 1;
      } else {
        i++;
      }
    }
  }
  return is;
};



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
