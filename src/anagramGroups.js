/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  const map = new Map();
  const result=[]
  words.forEach(item=>{
    const element = item.toLowerCase().split("").sort().join("")
    if(map.has(element)){
      map.set(element,[...map.get(element),item])
    }else{
      map.set(element,[item])
    }
  })
  for(let element of map.keys()){
    result.push(map.get(element))
  }
  return result
}

module.exports = anagramGroups;
