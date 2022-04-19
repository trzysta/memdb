// ********



const SPE_FIELD_AUTOALLOCATION = "Dokonaj automatycznej alokacji kosztów";
const SPE_FIELD_AUTOALLOCATION_VALUE_MANUALLY = "Nie rób nic, samodzielnie podzielę koszt na osiedla";
const SPE_FIELD_AUTOALLOCATION_VALUE_ONLY_LISTED = "Podziel kwotę po wskazanych niżej osiedlach";
const SPE_FIELD_AUTOALLOCATION_VALUE_MY_CONTRACTS = "Podziel kwotę po MOICH osiedlach";
const SPE_FIELD_AUTOALLOCATION_VALUE_ALL_CONTRACTS = "Podziel kwotę po SZYSTKICH osiedlach";

const BUD_CATEGORIES = ["Wynagrodzenia",
                        "Zakupy chemii i materiałów", 
                        "Sprzęt zakup i serwis", 
                        "Koszty administracyjne", 
                        "Zieleń", 
                        "Inne"]

const BUD_FIELD_LINK_ATTR_CATEGORY = "Kategoria wydatku";
const BUD_FIELD_LINK_ATTR_AMOUNT = "Kwota";





const assignSpendingToBudget = function (entrySpending, entryBudget) {


/*

masterLib()             Returns the library from which the current record was referenced.
masterEntry()           Returns the entry from which the current record was referenced.
attr(name)              Get the value of the attribute for the current reference.
setAttr(name , value)   Set the value of the attribute for the current reference.

*/

  log("Budget :: assingBudgetToContracts :: " + String(entrySpending));

  if (entrySpending !== undefined) {
    try {
     
     
     switch (entrySpending.field(SPE_FIELD_AUTOALLOCATION)) {
         case  SPE_FIELD_AUTOALLOCATION_VALUE_MANUALLY:
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

const linkBudgetEntry = function (entrySpend, entryBudget, category, amount) {
  let amountLimit = entryBudget.field(BUD_FIELD_AMOUNT_LIMIT);
  let amountLeft = entryBudget.field(BUD_FIELD_AMOUNT_LEFT);
  let amountSpent = entryBudget.field(BUD_FIELD_AMOUNT_SPENT);

  switch (category) {
      case value:
          
          break;
  
      default:
          break;
  }




};

const unlinkBudgetEntry = function (entrySpending) {};

const recalculateBudget = function () {};

const countProfitability = function () {
  // funckja która liczy dochodowość osiedla poprzez
};
