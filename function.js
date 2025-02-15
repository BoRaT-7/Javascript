
function sumofnumber (numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
   return sum;

}

const numbs = [2,4,6,8]
const sum = sumofnumber(numbs);
console.log('Sum of number is', sum);
