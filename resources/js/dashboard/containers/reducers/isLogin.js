function donnees(state = false, action) {
   switch(action.type) {
       case 'IS_LOGIN' :
           console.log("IS_LOGIN");
           return action.isLogin;
     default:
       return state;
   }
}

export default donnees;
