function fournisseurs(state = [], action) {
   switch(action.type) {
       case 'FETCH_FOURNISSEURS' :
            console.log("FETCH_FOURNISSEURS");
            return [
                ...state,
                ...action.donnees,
            ]
        case 'ADD_FOURNISSEUR' :
            console.log("ADD_FOURNISSEUR");
            return [
                ...state,
                action.line,
            ]
        case 'SET_STATE_FOURNISSEURS_EMPTY' :
           console.log("SET_STATE_FOURNISSEURS_EMPTY");
           return [];
     default:
       return state;
   }
}

export default fournisseurs;
