function contreparties(state = [], action) {
   switch(action.type) {
       case 'FETCH_CONTRE_PARTIES' :
            console.log("FETCH_CONTRE_PARTIES");
            return [
                ...state,
                ...action.donnees,
            ]
       case 'SET_STATE_CONTRE_PARTIES_EMPTY' :
           console.log("SET_STATE_CONTRE_PARTIES_EMPTY");
           return state;
     default:
       return state;
   }
}

export default contreparties;
