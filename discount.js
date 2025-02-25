function discountprice(quentity){
    if(quentity <= 100){
        const total = quentity * 100;
        return total;
    }
    else if (quentity <=200){
        const total = quentity * 90;
         return total;

    }
    else{
        const total = quentity * 70;
        return total;
    }
}

const total = discountprice(5);
console.log(total);