


function linkContract ( targetLibraryName, entryContract, entryTarget ) {

  switch (targetLibraryName) {
    case LIB_CHECKS_NAME:
      getActionsForControl ( entryContract, entryTarget );
      getRecipients( entryTarget );
      
      break;
    default:

  }
}
