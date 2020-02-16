/*
  wszelkie prawa zastrzeżone, biblioteka funkcji wykorzystywanych przez
  aplikację utworzoną dla 300 Sp. z o.o.
*/







function testuj() {
  entryDefault().set(FIELD_EDITOR, arrEditors);
}


function postSave() {
  var currentEntry = entry();
  var linkedEntry = l.linksTo(currentEntry)[0];
  currentEntry.link("Link", linkedEntry);
}
