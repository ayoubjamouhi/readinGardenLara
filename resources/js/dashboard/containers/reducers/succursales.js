function succursales(state = [], action) {
   switch(action.type) {
        case 'FETCH_SUCCURSALES' :
            console.log("FETCH_SUCCURSALES");
            return [
                ...state,
                ...action.donnees,
            ]
        case 'ADD_SUCCURSALES' :
            console.log("ADD_SUCCURSALES");
            return [
                ...state,
                action.line,
            ];
        case 'SET_STATE_SUCCURSALES_EMPTY' :
           console.log("SET_STATE_SUCCURSALES_EMPTY");
           return [];
     default:
       return state;
   }
}

export default succursales;
