

const BUD_FIELD_PROJECTION_TYPE = "Rodzaj wpisu";
const BUD_FIELD_PROJECTION_CATEGORY = "Kategoria";

const BUD_PROJECTION_TYPE_INCOME = "Przychód";
const BUD_PROJECTION_TYPE_SPEND = "Koszt"

const BUD_FIELD_BUDGET_NAME = "Budżet";

const BUD_FIELD_BUDGET_LINKED_ENTRY = "Definicja nadrzędna";

const BUD_FIELD_PROJECTION_AMOUNT = "Kwota"
const BUD_FIELD_BUDGET_INCOME_AMOUNT = "Przychody";
const BUD_FIELD_BUDGET_SPEND_AMOUNT = "Wydatki";

/*












*/


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
      entryBudget.set( BUD_FIELD_PARENT_AMOUNT, prevBudgetAmount + Math.abs(projectionAmount) );
      entryBudget.set( projectionCategoryName, prevBudgetCategoryAmount + Math.abs(projectionAmount) );
      log ('Budget :: saveProjection - SPEND: ' + projectionCategoryName + " prev:" + prevBudgetCategoryAmount + " totalPrev: " + prevBudgetAmount + " adding: " + projectionAmount);
    } 
  }
}

