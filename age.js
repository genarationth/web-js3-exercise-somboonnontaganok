const welcomeFriend = (names, years) => {
    return console.log(`Welcome to ${names[0]}, you are ${years(year[0])} years old.
    , ${names[1]}, you are ${years(year[1])} years old.
    , and ${names[2]}, you are ${years(year[2])} years old.
    `);
}

const years = (year) => 2023 - year;
years(year[0]);
const friends = ['John', 'Jane', 'Mary'];
const year = [1990, 1995, 2000];
welcomeFriend(friends);
// console.log(ages(1965));
