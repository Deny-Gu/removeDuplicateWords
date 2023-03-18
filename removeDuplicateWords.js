function removeDuplicateWords (s) {
  
    arr = s.split(' ');

    arrSet = [...new Set(arr)];

    result = arrSet.join(' ');
    
    return result;
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));