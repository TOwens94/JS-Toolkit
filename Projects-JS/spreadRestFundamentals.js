const topSixRestaurants = ["Chick-fil-A", "In-N-Out", "Chipotle", "McDonald's", "Taco Bell", "KFC"];
const [first, second, third, ...remaining] = topSixRestaurants;

console.log(`First restaurant: ${first}`);
console.log(`Second restaurant: ${second}`);
console.log(`Third restaurant: ${third}`);
console.log(`Remaining restaurants: ${remaining}`);

function unknownArgs(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

unknownArgs(1, 2, 3, 4, 5);
unknownArgs("a", "b", "c");