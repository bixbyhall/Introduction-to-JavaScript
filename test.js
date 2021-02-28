// Task 1A - Voting Age

let votingAge = 18

if (votingAge >= 18) {
    console.log('true');
}


// Task 1B - Values

let variableOne = 1 ;
let variableTwo = 2 ;

if (variableOne < variableTwo) {
    variableOne = variableOne + variableTwo;
    console.log(variableOne);
}


// Task 1C - Convert Strings to Numbers

let string_var = '1999';

let num_var = Number(string_var);
console.log(num_var);


// Task 1D - Multiply

function multiply(num1, num2) {
    answer = num1 * num2;
    return answer;
}

//multiply(a, b);

// Task 2

// Age in Dog years

function dogYears(age) {
    dog_age = age * 7;
    return dog_age;
}

// Task 3

let weight = 15;
let age = 1;
function hungryDog(weight, age) {
    if (age >= 1) {
        if (weight <= 5) {
            food = weight * 0.05;
        } else if (weight <= 10) {
            food = weight * 0.04;
        } else if (weight <= 15) {
            food = weight * 0.03;
        } else {
            food = weight * 0.02;
        }
    } else if (0.584 <= age < 1) {
        food = weight * 0.04;
    } else if (0.43 <= age < 0.584) {
        food = weight * 0.5;
    } else {
        food = weight * 0.1;
    }
    console.log(food);
    return food;
}

hungryDog(weight, age)

// Task 4

// Rock, Paper, Scissors

// Calculate the computer's choice
let comp = Math.random();
function computerChoice(comp) {
    let comp_num = comp * 3
    if (2 < comp_num) {
        comp_choice = 'Rock';
    } else if (1 < comp_num) {
        comp_choice = 'Paper';
    } else if (0 < comp_num) {
        comp_choice = 'Scissors';
    }
    return comp_choice;
}
computer = computerChoice(comp);

// Game function that decides who wins.
function game(user, computer) {
    if (user === computer) {
        console.log("it's a tie");
    } else if ((user === 'Rock' && computer === 'Paper') || (user === 'Paper' && computer === 'Scissors') || (user === 'Scissors' && computer === 'Rock')) {
        console.log("you lose!");
    } else {
        console.log('you win!')
    }
}


// Task 5

function miles(number) {
    inMiles = number * 0.621371;
    return inMiles;
}

function feet(number) {
    inFeet = number * 30.48
    return inFeet;
}


// Task 6
// String = "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
function annoyingSong(number_of_soda) {
    var i;
    for (i = 0; i = number_of_soda; i++) {
        number_of_soda = number_of_soda - 1;
        return (String(number_of_soda + 1) + " bottles of soda on the wall, " + String(number_of_soda + 1) + " bottles of soda, take one down pass it around " + String(number_of_soda) + " bottles of soda on the wall");
        
    }
}

// Task 7

function grade(value) {
    var output = '';
    if (value >=90) {
        output = 'you got an A';
    } else if ( value >= 80) {
        output = 'you got a B';
    } else if (value >= 70) {
        output = 'you got a C';
    } else if (value >= 60) {
        output = 'you got a D';
    } else {
        output = 'you got a F';
    }

    return output;
}

console.log(grade(82));