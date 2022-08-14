const wordsUnique = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];
  
function uniquifyArray(vocabulary) {
    newArray=vocabulary;
    
    for (let word of vocabulary){
        for (let i=0; i<vocabulary.length; i++){
            if (word!=newArray[i]){
                newArray.push(word);
            }
        }
    }
    
    return newArray;
}


  console.table(uniquifyArray(wordsUnique))