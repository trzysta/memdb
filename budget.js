const BUD_FIELD_PROJECTION_INCOMEORSPEND = "Koszt czy wydatek";
const BUD_FIELD_ENTRY_TYPE = "Rodzaj wpisu";

const BUD_VALUE_ENTRY_TYPE_BUDGET = "Budżet";
const BUD_VALUE_ENTRY_TYPE_PROJECTION = "Pozycja w budżecie";

const BUD_PROJECTION_TYPE_INCOME = "Przychód";
const BUD_PROJECTION_TYPE_SPEND = "Koszt"

const BUD_FIELD_BUDGET_NAME = "Budżet";

const BUD_FIELD_LINKEDPROJECTIONS = "Powiązane pozycje budżetowe";

const BUD_FIELD_PROJECTION_AMOUNT = "Kwota"
const BUD_FIELD_BUDGET_INCOME_AMOUNT = "Suma przychodów";
const BUD_FIELD_BUDGET_SPEND_AMOUNT = "Suma wydatków";

const updateBudget = function (entryBudget) {
 
  log( 'Budget :: updateBudget:' + entryBudget.name);
  if (entryBudget.field(BUD_FIELD_ENTRY_TYPE) == BUD_VALUE_ENTRY_TYPE_BUDGET ) {

    let incomeTotal = 0;
    let spendTotal = 0;
    
    let links = entryBudget.field( BUD_FIELD_LINKEDPROJECTIONS ).length;
    
    for ( i=0; i<links; i++ ) {

      let e = entryBudget.field( BUD_FIELD_LINKEDPROJECTIONS )[i];
      log( 'Budget :: updateBudget:' + entryBudget.name + " for " + i + ", " + e.name );

      if (e.field(BUD_FIELD_PROJECTION_INCOMEORSPEND) == BUD_PROJECTION_TYPE_INCOME ) {
        incomeTotal = incomeTotal + e.field( BUD_FIELD_PROJECTION_AMOUNT )

      } else {
        spendTotal = spendTotal + e.field( BUD_FIELD_PROJECTION_AMOUNT )

      }
    }
    entryBudget.set( BUD_FIELD_BUDGET_INCOME_AMOUNT, incomeTotal );
    entryBudget.set( BUD_FIELD_BUDGET_SPEND_AMOUNT, spendTotal );
  }
}






const saveProjection = function (entryProjection, isNew) {
  
  log( 'Budget :: saveProjection:' + entryProjection.name + '; isNew:' + isNew);

  if (isNew) {
  
    let entryBudget = entryProjection.field( BUD_FIELD_BUDGET_LINKED_ENTRY )[0];
    let projectionAmount = entryProjection.field( BUD_FIELD_PROJECTION_AMOUNT );
    let projectionCategoryName = entryProjection.field( BUD_FIELD_PROJECTION_CATEGORY );
    
    entryProjection.set( BUD_FIELD_BUDGET_NAME, entryBudget.field(BUD_FIELD_BUDGET_NAME) );

    if ( entryProjection.field( BUD_FIELD_PROJECTION_TYPE ) == BUD_PROJECTION_TYPE_INCOME ) {    
  
      let prevBudgetAmount = entryBudget.field( BUD_FIELD_BUDGET_INCOME_AMOUNT );
      let prevBudgetCategoryAmount = entryBudget.field( projectionCategoryName );
      
      entryBudget.set( BUD_FIELD_BUDGET_INCOME_AMOUNT, prevBudgetAmount + projectionAmount );
      entryBudget.set( projectionCategoryName, prevBudgetCategoryAmount + projectionAmount );

      log ('Budget :: saveProjection - INCOME: ' + projectionCategoryName + " prev:" + prevBudgetCategoryAmount + " totalPrev: " + prevBudgetAmount + " adding: " + projectionAmount);
  
    } else {

      let prevBudgetAmount = entryBudget.field( BUD_FIELD_BUDGET_SPEND_AMOUNT );
      let prevBudgetCategoryAmount = entryBudget.field( projectionCategoryName );
      entryBudget.set( BUD_FIELD_BUDGET_SPEND_AMOUNT, prevBudgetAmount + Math.abs(projectionAmount) );
      entryBudget.set( projectionCategoryName, prevBudgetCategoryAmount + Math.abs(projectionAmount) );
      log ('Budget :: saveProjection - SPEND: ' + projectionCategoryName + " prev:" + prevBudgetCategoryAmount + " totalPrev: " + prevBudgetAmount + " adding: " + projectionAmount);
    } 
  }
}

