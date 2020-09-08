
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^






const Spending = function (e) {





}



function budgetAllocationLeft(entrySpend) {



  let amount = entry().field("Kwota");
  let contracts = entry().field("Przypisanie kosztu do osiedli");
  let left = amount;

  for (let i = 0; i < contracts.length; i++) {
    left -= contracts[i].attr("Kwota");
  }

  left;

}




// // podziel

// 1. Wszystkie pozycje puste = podzial równo po wszystkie pozycje. 
// 2. kwota przypisania mniejsza i istnieją puste. Odejmij od kwoty to co przypisane a resztę podziel. 
