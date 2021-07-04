// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
// *^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^



const assignSpendingToBudgets = function (entrySpending) {
  message("Budget :: assingBudgetToContracts :: " + String(entrySpending));

  if (entrySpending !== undefined) {
    message("Budget :: assingBudgetToContracts :: " + String(entrySpending));
    try {
      switch (entrySpending.field(SPE_FIELD_AUTOALLOCATION)) {

        case SPE_FIELD_AUTOALLOCATION_VALUE_MANUALLY:
          message(PE_FIELD_AUTOALLOCATION_VALUE_MANUALLY);
          const assignedBudgets = entrySpending.field(SPE_FIELD_COST_ALLOCATION_LINK);
        
          for (let index = 0; index < assignedBudgets.length; index++) {
        
            const entryBudget = assignedBudgets[index];
            const amount = assignedBudgets[index].attr(SPE_FIELD_COST_ALLOCATION_LINK_ATTR_AMOUNT);
            const category = assignedBudgets[index].attr(SPE_FIELD_COST_ALLOCATION_LINK_ATTR_CATEGORY);
            message(entryBudget+" "+amount+" "+category);

            if ( category !=  BUD_FIELD_CATEGORY_REINVOICE) {
              updateBudgetEntry(entrySpending, entryBudget, category, amount);
            }
            
          }
          break;
        
        case SPE_FIELD_AUTOALLOCATION_VALUE_ONLY_LISTED:
          break;
        case SPE_FIELD_AUTOALLOCATION_VALUE_MY_CONTRACTS:
          break;
        case SPE_FIELD_AUTOALLOCATION_VALUE_ALL_CONTRACTS:
          break;

        default:
          // nic nie zaznaczono
          break;
      }

      //  linkowanie entry z bazy budzet do bazy wydatki
      //  1) spradzenie jeśli linked jest do basy wydatki to jedziesz dalej
      //  2)
      /* 
        
         function ( entryWydatek, entryBudżet, parametr-kategoria, parametr-kwota,   )
         założenia entry jest zwalidowane. 
        
         switch pole "co zrobić jak zaalokować"
         case : - sam przydzielę 
                - w entry budżet dodaj do wydanych środkó∑ parametr-kwota
                - swich kategiora 
                    - przypisz do właściwej kategorii wydane środki 
                    
         case: podziel po moich osiedlach
          - weż z bazy osiedli wszystkie entry osiedli gdzie koordynatorem jest wydatkujący
          - dla każdego z osiedli wyszukaj entry budzet z datą zgodną z datą wydatku i umieść go w tablicy
          - dla każdego budżetu z tablicy 
                - linkuj go do entryWydatek
                - z kwoty głównej z  entryWydatek wydziel procent opłacalności z budżetu i dodaj kwoty dodaj do wydanych środkó∑ parametr-kwota a potem swich kategiora 
                    - przypisz do właściwej kategoria z entryWydatek.kategoria wydatku wydane środki 
        

         
        //          entry().field("field_name")[0].attr("attribute_name")
            //          entry().field("field_name")[0].setAttr("attribute_name", newValue)        
        
        
        
        
        
        */
      // *********
    } catch (err) {
      log("Budget:assingBudgetToContracts:" + err);
    }
  }
};

const updateBudgetEntry = function (entrySpend, entryBudget, category, amount) {
  
  let amountLimit = entryBudget.field(BUD_FIELD_AMOUNT_LIMIT);
  let amountLeft = entryBudget.field(BUD_FIELD_AMOUNT_LEFT);
  let amountSpent = entryBudget.field(BUD_FIELD_AMOUNT_SPENT);
  let amountCategory = entryBudget.field(category);

  entryBudget.set(BUD_FIELD_AMOUNT_LEFT, amountLeft - amount );
  entryBudget.set(BUD_FIELD_AMOUNT_SPENT, amountSpent + amount );
  entryBudget.set(category, amountCategory + amount );

  switch (category) {
    case BUD_FIELD_CATEGORY_PURCHASE:
      break;
    case BUD_FIELD_CATEGORY_SALARY:
      break;
    case BUD_FIELD_CATEGORY_FIXED:
      break;
    case BUD_FIELD_CATEGORY_OTHER:
      break;
    default:
    //SPE_BUDGET_CATEGORY_REINVOICE
      break;
  }

};

const unlinkBudgetEntry = function (entrySpending) {};

const recalculateBudget = function () {};

const countProfitability = function () {
};



// // podziel

// 1. Wszystkie pozycje puste = podzial równo po wszystkie pozycje.
// 2. kwota przypisania mniejsza i istnieją puste. Odejmij od kwoty to co przypisane a resztę podziel.
