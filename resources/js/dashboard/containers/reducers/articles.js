function articles(state = [], action) {
   switch(action.type) {
       case 'FETCH_ARTICLE' :
            console.log("FETCH_ARTICLE");
            return [
                ...state,
                ...action.payload,
            ]
        case 'ADD_ARTICLE' :
            console.log("ADD_ARTICLE");
            return [
                ...state,
                action.article,
            ]
        case 'SET_STATE_ARTICLES_EMPTY' :
           console.log("SET_STATE_ARTICLES_EMPTY");
           return state;
     default:
       return state;
   }
}

export default articles;
