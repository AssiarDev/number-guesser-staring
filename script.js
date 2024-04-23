let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Génerer un nombre aléatoire
const generateTarget = () => {
    return  Math.floor(Math.random() * 10)
    
};


const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2)
};

const compareGuesses = (human, computer, target)=> {
    if ( human < 0 || human > 9){
        return 'Please, try again by inputing numbers between 1 and 9!';
    }; 
    
    const humanDifference = getAbsoluteDistance(target - human);
    const computerDifference = getAbsoluteDistance(target - computer);
    return humanDifference <= computerDifference;

};

const updateScore = winner => {
    if (winner === 'human'){
        humanScore++; 
    } else {
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;


console.log(generateTarget());
console.log(updateScore());
console.log(advanceRound());
