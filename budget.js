

const Budget = function (e) {

    log("Budget: " + String(e));

    try {
        this.entry = e;
        this.amountLimit = this.entry.field(BUD_FIELD_AMOUNT_LIMIT);
        this.amountLeft = this.entry.field(BUD_FIELD_AMOUNT_LEFT);
        this.amountSpent = this.entry.field(BUD_FIELD_AMOUNT_SPENT);




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
        this.linkBudgetEntry = function (entrySpend, entryBudget, category, amount) {


            let entriesBudget = entrySpend.field(SPE_FIELD_BUDGET);




            entrySpend.link(SPE_FIELD_DUBGET, entryBudget);


            this.entry.link(SAL_FIELD_SPEND_LINK, entrySpendWithdrwal);




            let amount = entrySpending.field(SPE_FIELD_AMOUNT);
            this.amountSpent += amount;
            this.amountLeft -= amount;
        }

        this.unlinkBudgetEntry = function (entrySpending) {
        }

        this.recalculateBudget = function () {
        }


        this.countProfitability = function () {
            // funckja która liczy dochodowość osiedla poprzez 
        }




    } catch (err) {
        log("Budget: " + err);
    }
}