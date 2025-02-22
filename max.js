const heights = [65, 66, 67, 89, 23, 44];

function getMax(numbers) {
    let max = Number.NEGATIVE_INFINITY; // Initialize with the smallest possible number
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log('Max value is:', max);
