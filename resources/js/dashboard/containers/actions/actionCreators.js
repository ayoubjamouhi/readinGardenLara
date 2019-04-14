/* Gestion JOURNAUX */
// fetch JOURNAUX
export function fetch_articles(donnees) {
 return {
   type: 'FETCH_ARTICLES',
   donnees
 }
}
// Donnees Articles State to []
export function set_state_articles_empty() {
  return {
    type: 'SET_STATE_ARTICLES_EMPTY'
  }
}
export function add_article(article) {
  return {
    type: 'ADD_ARTICLE',
    article
  }
 }
