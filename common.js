/*
  zapisanie linka do bieżącego entry w nowym
*/

function testuj() {
  message ( entry().id );
}


function postSave() {
  var currentEntry = entry();
  var linkedEntry = l.linksTo(currentEntry)[0];
  currentEntry.link("Link", linkedEntry);
}
