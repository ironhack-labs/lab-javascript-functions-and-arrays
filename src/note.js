const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sum(nbrs) {
  let total=0;
  if ((nbrs!== 'number')||(nbrs!== 'string')||(nbrs!== 'boolean')){return 'error'}
  for(let i = 0; i < nbrs.length; i++) {
      if(typeof(nbrs[i]) === 'string'){
          total=total+(nbrs[i].length);
      }
      else{
          total=total+nbrs[i];
      }
}
  return(total);
}

console.log(sum(numbers))



