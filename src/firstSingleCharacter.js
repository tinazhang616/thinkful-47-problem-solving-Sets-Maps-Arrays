/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
  let arr = word.split("")
  let map = new Map()
  arr.forEach(e=>{
    if(map.has(e)){
      map.set(e,map.get(e)+1)
    }else{
      map.set(e,1)
    }
  })
  for(let [key,value] of map){
    if(value===1){
      return key
    }
  }
  return null

}

module.exports = firstSingleCharacter;
