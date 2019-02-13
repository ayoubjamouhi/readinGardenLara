// Check IF LOGIN
export function checkIfLogin(isLogin) {
  return {
    type: 'IS_LOGIN',
    isLogin
  }
}
/* Gestion JOURNAUX */
// fetch JOURNAUX
export function fetchJournaux(donnees) {
 return {
   type: 'FETCH_JOURNAUX',
   donnees
 }
}
// Donnees JOURNAUX State to []
export function setStateJournauxEmpty() {
  return {
    type: 'SET_STATE_JOURNAUX_EMPTY'
  }
}
export function addJournal(journal) {
  return {
    type: 'ADD_JOURNAL',
    journal
  }
 }
// fetch CONTRE PARTIE
export function fetchContreParties(donnees) {
  return {
    type: 'FETCH_CONTRE_PARTIES',
    donnees
  }
}
// Donnees CONTRE PARTIE State to []
export function setContrePartiesEmpty() {
  return {
    type: 'SET_STATE_CONTRE_PARTIES_EMPTY'
  }
}
/* GESTION FOURNISSEURS */
// fetch FOURNISSEURS
export function fetchFournisseurs(donnees) {
  return {
    type: 'FETCH_FOURNISSEURS',
    donnees
  }
}
// Donnees FOURNISSEURS State to []
export function setStateFournisseursEmpty() {
  return {
    type: 'SET_STATE_FOURNISSEURS_EMPTY'
  }
}
export function addfournisseur(line) {
  return {
    type: 'ADD_FOURNISSEUR',
    line
  }
}
/* GESTION PLAN GESTIONS */
// fetch data
export function fetchplancompatbles(donnees) {
  return {
    type: 'FETCH_PLAN_COMPTABLES',
    donnees
  }
}
// Add
export function addplancompatble(line) {
  return {
    type: 'ADD_PLAN_COMPTABLE',
    line
  }
}
// Set State to []
export function setstateplancompatbleempty() {
  return {
    type: 'SET_STATE_ADD_PLAN_COMPTABLES_EMPTY'
  }
}
/* GESTION SUCCURSALES */
// fetch data
export function fetchsuccursales(donnees) {
  return {
    type: 'FETCH_SUCCURSALES',
    donnees
  }
}
// Add
export function addsuccursale(line) {
  return {
    type: 'ADD_SUCCURSALES',
    line
  }
}
// Set State to []
export function setstatesuccursalesempty() {
  return {
    type: 'SET_STATE_SUCCURSALES_EMPTY'
  }
}
/* GESTION LIBELLES */
// fetch data
export function fetchlibelles(donnees) {
  return {
    type: 'FETCH_LIBELLES',
    donnees
  }
}
// Add
export function addlibelle(line) {
  return {
    type: 'ADD_LIBELLE',
    line
  }
}
// Set State to []
export function setstatelibellesempty() {
  return {
    type: 'SET_STATE_LIBELLES_EMPTY'
  }
}


