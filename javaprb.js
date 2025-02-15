function oddaverage (number){
    const odds = []
       for(const numbers of number){
        if(numbers % 2 ===1)
        odds.push(numbers);
       }
  console.log(odds);
  let sum = 0;
  for(const numbers of odds ){
    sum = sum + numbers;
    
  }
  const count = odds.length;
  console.log(sum,count);
  const avg = sum / count;
  return avg;

}

const number = [6,8,2,1,7,4,3,9];
const avg = oddaverage (number)
console.log('the average is =',avg);



// Problem remove from the array  Number 2............
const goodboy = ['borat', 'abid','murad','nila','foysal','borat','nila'];
const num = [1,2,4,6,7,1,4,88,99,33,2,77,]
function nobudlicat (array){
    const uni = [];
    for(const iteam of array){
        if(uni.includes(iteam)===false){
            uni.push(iteam);
        }
    }
    return uni;
}
const okyarray = nobudlicat(goodboy);
console.log(okyarray);
console.log(nobudlicat)
