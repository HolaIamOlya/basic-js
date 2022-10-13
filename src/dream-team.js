const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
/* function createDreamTeam(members) {
  console.log(members);
  let firstLetter = [];
  for(let i = 0; i < members.length; i++) {
     if(members[i][0] != " "){
      firstLetter.push(members[i][0])
    }
    else if(members[i][0] === " "){
      for(let d = 1; d < members[i].length; i++){
        if(members[i][d] != " "){
          firstLetter.push(members[i][d])
          break
        }
      }
    } 
  }
  return firstLetter.sort().join("").toUpperCase();
} */

function createDreamTeam(members) {
  if(!members){
    return false
  }
  let firstLetter = [];
  for (let i = 0; i < members.length; i++) {
    if(typeof members[i] != 'string'){
      continue
    }
    else if (members[i][0] != " ") {
      firstLetter.push(members[i][0].toUpperCase());
    } else if (members[i][0] === " ") {
      let w = members[i].trim();
      firstLetter.push(w[0].toUpperCase());
    }
  }
  return firstLetter.sort().join("");
}


module.exports = {
  createDreamTeam,
};
