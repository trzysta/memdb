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


// *^*^*^*  sprawdza czy entrySearchFor jest w arrayOfLinks
function isEntryLinked( arrayOfLinks, entrySearchFor ) {

  var is = false;
  var i = 0;
  while ( i < arrayOfLinks.length ) {
    if (arrayOfLinks[i].id == entrySearchFor.id ) {
       is = true;
       i = arrayOfLinks.length + 1;
    } else {
       i++;
    }
  }

  return is;
};



// *^*^*^*  odpalana Creating Entry, Opening an Entry Card
function setDefault(e) {
  e.set(FIELD_EDITOR, arrEditors);
  e.set(FIELD_IS_NEW, true);
}


// *^*^*^*  odpalana Creating Entry, After Save
function saveFirstTime(e) {
  e.set(FIELD_IS_NEW, false);
}




// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
// dodaje wartości do tablicy
function appendToArray ( sourceArray, valueToAppend ) {

  if ( !Array.isArray(sourceArray) ) { sourceArray = new Array() };
  if ( Array.isArray(valueToAppend) )  {
     for (let i=0; i < valueToAppend.length; i++)
       sourceArray.push(valueToAppend[i])
  } else {
    sourceArray.push(valueToAppend)
  }
  return sourceArray.unique();
}

// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
function addCounter( arrSource ){

  var arrNew = new Array();
  for (let i=0; i < arrSource.length; i++) {
      arrNew.push( i + ") " + arrSource[i] );
  }
  return arrNew;
}




// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
// *^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^**^*^*^*
Array.prototype.unique = function() {
  let arr = [];
  for(let i = 0; i < this.length; i++) {
      if( arr.indexOf(this[i]) < 0 ) {
          arr.push(this[i]);
      }
  }
  return arr;
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
