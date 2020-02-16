/*
  wszelkie prawa zastrzeżone, biblioteka funkcji wykorzystywanych przez
  aplikację utworzoną dla 300 Sp. z o.o.
*/


function setDefault() {
/*
  odpalana Creating Entry, Opening an Entry Card
*/
  var e = entryDefault();
  e.set(FIELD_EDITOR, arrEditors);
  e.set(FIELD_IS_NEW, true);
}







function saveFirstTime() {
  /*
    odpalana Creating Entry, After Save
  */
  var e = entry();
  e.set(FIELD_IS_NEW, false);
}










function testuj() {
  entryDefault().set(FIELD_EDITOR, arrEditors);
}


function postSave() {
  var currentEntry = entry();
  var linkedEntry = l.linksTo(currentEntry)[0];
  currentEntry.link("Link", linkedEntry);
}
