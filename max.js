const heights = [55, 78, 12, 40, 99, 100];

function getMax(fullnumbers) {
    return Math.max(...fullnumbers);
}

const max = getMax(heights);
console.log('Max value is', max);
