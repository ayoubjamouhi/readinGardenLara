function articles(state = [], action) {
   switch(action.type) {
       case 'FETCH_ARTICLES' :
            console.log("FETCH_ARTICLES");
            return [
                ...state,
                ...action.donnees,
            ]
        case 'ADD_ARTICLE' :
            console.log("ADD_ARTICLE");
            return [
                ...state,
                action.journal,
            ]
        case 'SET_STATE_ARTICLES_EMPTY' :
           console.log("SET_STATE_ARTICLES_EMPTY");
           return [];
     default:
       return state;
   }
}

export default articles;
