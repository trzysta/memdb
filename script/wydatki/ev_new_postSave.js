/*
  EV_new_poZapisaniu
  zapisanie linka do bieżącego entry w nowym
*/

function postSave() {
  var currentEntry = entry();
  var linkedEntry = l.linksTo(currentEntry)[0];
  currentEntry.link("Link", linkedEntry);
}
