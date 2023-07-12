/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  // console.log(word)
  // if(!word){
  //   return true
  // }
  // const set = new Set(word.split(""))
  // const arr = [...set]
  // if(word.length%2===0){
  //   if(arr.length<=word.length/2&&(word.length/arr.length)%2===0){
  //     return true
  //   }
  //   }
  // else{
  //   if(arr.length<=(Math.floor(word.length/2)+1)){
  //     return true
  //   }
  // }
  // return false
  if(!word||word.length===1){
    return true
  }
  let arr=word.split("")
  let map=new Map()
  arr.forEach(e=>{
    if(map.has(e)){
      map.set(e,map.get(e)+1)

    }else{
      map.set(e,1)
    }
  })
  if(map.length>Math.floor(arr.length/2)){
    return false
  }
  let count=1
  for(let [key,value] of map){
    console.log(value)
    if(value%2!==0&&count===1){
      count--;
    }
    else if(value%2!==0&&count===0){
      console.log("this key is,",key)
      return false
    }
  }
  return true
  }

module.exports = permutationPalindrome;
