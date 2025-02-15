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