function plancomptables(state = [], action) {
   switch(action.type) {
       case 'FETCH_PLAN_COMPTABLES' :
            console.log("FETCH_PLAN_COMPTABLES");
            return [
                ...state,
                ...action.donnees,
            ]
        case 'ADD_PLAN_COMPTABLE' :
            console.log("ADD_PLAN_COMPTABLE");
            return [
                ...state,
                action.line,
            ]
        case 'SET_STATE_ADD_PLAN_COMPTABLES_EMPTY' :
           console.log("SET_STATE_ADD_PLAN_COMPTABLES_EMPTY");
           return [];
     default:
       return state;
   }
}

export default plancomptables;
