
const FIELD_LABEL = "1) Czynność";
const FIELD_PROMPT = "1) Cechy";


let actions = new Array;

actions[0] = {
  label: "Posadzka, płytki, kamień",
  prompt: [
    "Ślady zamazów na płytkach",
    "Piach",
    "Niedokładne mopowanie",
    "Niedomyte w rogach"
  ]
}




const setValues = function (e) {

  e.set(FIELD_LABEL, actions[0].label);
  e.set(FIELD_PROMPT, actions[0].prompt);

} 