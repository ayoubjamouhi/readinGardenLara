function libelles(state = [], action) {
   switch(action.type) {
        case 'FETCH_LIBELLES' :
            console.log("FETCH_LIBELLES");
            return [
                ...state,
                ...action.donnees,
            ]
        case 'ADD_LIBELLE' :
            console.log("ADD_LIBELLE");
            return [
                ...state,
                action.line,
            ];
        case 'SET_STATE_LIBELLES_EMPTY' :
           console.log("SET_STATE_LIBELLES_EMPTY");
           return [];
     default:
       return state;
   }
}

export default libelles;
