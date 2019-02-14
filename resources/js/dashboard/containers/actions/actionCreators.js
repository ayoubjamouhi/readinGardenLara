/* GESTION ARTICLES */
// fetch data
export function fetcharticles(donnees) {
  return {
    type: 'FETCH_ARTICLES',
    donnees
  }
}
// Add
export function addarticle(line) {
  return {
    type: 'ADD_ARTICLE',
    line
  }
}
// Set State to []
export function setstatearticleempty() {
  return {
    type: 'SET_STATE_ARTICLES_EMPTY'
  }
}


