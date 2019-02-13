function journaux(state = [], action) {
   switch(action.type) {
       case 'FETCH_JOURNAUX' :
            console.log("SET_JOURNAUX_IMPRIMER");
            return [
                ...state,
                ...action.donnees,
            ]
        case 'ADD_JOURNAL' :
            console.log("ADD_JOURNAL");
            return [
                ...state,
                action.journal,
            ]
        case 'SET_STATE_JOURNAUX_EMPTY' :
           console.log("SET_STATE_JOURNAUX_EMPTY");
           return [];
     default:
       return state;
   }
}

export default journaux;
