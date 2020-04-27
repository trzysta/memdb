/*
  wszelkie prawa zastrzeżone, biblioteka funkcji wykorzystywanych przez
  aplikację utworzoną dla 300 Sp. z o.o.
*/

const arrMonths_pl = ["styczeń", "luty", "marzec", "kwiecien", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "listopad", "grudzień"];
const arrEditors = ["MalgorzataG", "ElzbietaZ", "trzystaIZABELA", "MarceliM", "trzysta"];
const arrManagers = ["trzysta"];
const arrNames = ["Małgorzata Grabowska", "Elżbieta Zdziech", "Izabela Skowrońska", "Marceli Matynia", "Administrator"];
const withdrawalMaker = "Marceli Matynia";

const FIELD_EDITOR = "Editor";
const FIELD_IS_NEW = "new";
const FIELD_REF = "REF";
const FIELD_REF_PARTENT = "parentREF";
const FIELD_IS_PARENT = "isParent";
const FIELD_IS_HIDDEN = "Ukryte";
const FIELD_CAN_ACCESS = "canAccess";
const FIELD_DISPLAY_NAME = "displayName";
const MSG_UPDATING = "uaktualniam";
const MSG_COPYING = "kopiuję";
const MSG_ENTRIES = "wpisów";
const MSG_FINISHED = "Zakończono!";
const VALUE_MAIL = "e-mail";



var HuubTools = function (e) {
  
  this.entry = e;

  this.setDefault = function () {
    if (e != null) {
      this.entry.set(FIELD_EDITOR, arrEditors);
      this.entry.set(FIELD_IS_NEW, true);
    }
  }
};











function setRef( base ) {

  var tmpLib;
  switch (base) {
    case LIB_SALARIES_SHORT_NAME:
      tmpLib = libSalaries;
      break;
    case LIB_SPANDINGS_SHORT_NAME:
      tmpLib = libSpendings;
      break;
    case LIB_BUDGETS_SHORT_NAME:
      tmpLib = libBudget;
      break;
    case LIB_CONTRACTS_SHORT_NAME:
      tmpLib = libContracts;
      break;
    case LIB_CHECKS_SHORT_NAME:
      tmpLib = libChecks;
      break;
    case LIB_ACTIVITIES_SHORT_NAME:
      tmpLib = libActivities;
      break;
    default:
      tmpLib = lib();
  }

  var newRef = base + Math.floor(10000 + (Math.random() * 90000));
  result = tmpLib.find( newRef );

  while ( result.length != 0 ) {
     newRef = base + Math.floor(10000 + (Math.random() * 90000));
     result = tmpLib.find( newRef );
  };
  return newRef;
}





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



function addCounter( sourceArray ){

  var newArray = new Array();
  var newValue;

  for (let i=0; i < sourceArray.length; i++) {
    c = i+1;
    newValue = c + ") " + sourceArray[i];
    newArray.push(newValue);
  }
  return newArray;
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
  newBalance = entryBudget.field(B_FIELD_BALANCE) + Math.abs(entrySpending.field(SPE_FIELD_AMOUNT));    //plus bo wydatki są zawsze ujemne
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
