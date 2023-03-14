const person1 = {
    firstName: 'Poon',
    ageYear: 1990
}

const person2 = {
    firstName: 'Yee',
    ageYear: 1995
}

const person3 = {
    firstName: 'Milk',
    ageYear: 2000
}


const years = (year) => 2023 - year;
// console.log(1990);

const WelcomeFriend = () => { 
    console.log(`Welcome ${person1.firstName}, you are ${years(person1.ageYear)}. Welcome ${person2.firstName}, you are ${years(person2.ageYear)}. Welcome ${person3.firstName}, you are ${years(person3.ageYear)}.`); 
}
// console.log(years(person1.ageYear));
// console.log(person1.firstName);

// console.log(years(person2.ageYear));
// console.log(person2.firstName);

// console.log(years(person3.ageYear));
// console.log(person3.firstName);
WelcomeFriend();