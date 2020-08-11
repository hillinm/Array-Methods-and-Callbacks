import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final*/
console.log("The home team for the 2014 World Cup Final was " + fifaData.filter(home => {return home.Year === 2014 && home.Stage === "Final"})[0]["Home Team Name"]);
/*(b) Away Team name for 2014 world cup final*/
console.log("The away team for the 2014 World Cup Final was " + fifaData.filter(away => {return away.Year === 2014 && away.Stage === "Final"})[0]["Away Team Name"]);
/*(c) Home Team goals for 2014 world cup final*/
console.log("The home team score for the 2014 World Cup Final was " + fifaData.filter(homeGoals => {return homeGoals.Year === 2014 && homeGoals.Stage === "Final"})[0]["Home Team Goals"]);
/*(d) Away Team goals for 2014 world cup final*/
console.log("The away team score for the 2014 World Cup Final was " + fifaData.filter(awayGoals => {return awayGoals.Year === 2014 && awayGoals.Stage === "Final"})[0]["Away Team Goals"]);
/*(e) Winner of 2014 world cup final */
const homeGoals = fifaData.filter(winner => {return winner.Year === 2014 && winner.Stage === "Final"})[0]["Home Team Goals"];
const awayGoals = fifaData.filter(loser => {return loser.Year === 2014 && loser.Stage === "Final"})[0]["Away Team Goals"];
if (homeGoals > awayGoals){console.log("The winning team was " + fifaData.filter(home => {return home.Year === 2014 && home.Stage === "Final"})[0]["Home Team Name"]);}
else {
    console.log("The winning team was " + fifaData.filter(away => {return away.Year === 2014 && away.Stage === "Final"})[0]["Away Team Name"]);
};
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(array) {

    return fifaData.filter(array => array.Stage === "Final");

};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    const years = callback.map(year => {
        return {'Year': year.Year};
    });
    return years;
};

getYears(getFinals(fifaData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let winners = [];
    for (let i = 0; i < callback.length; i++) {
        if (callback[i]["Home Team Goals"] > callback[i]["Away Team Goals"]) {
            winners.push(callback[i]);
        } else {
            winners.push(callback[i]);
        }
    }
    console.log(winners);
    return winners;
};

getWinners(getFinals(fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2) {
    for (let i = 0; i < callback1.length; i++) {
        console.log(`In ${callback2[i]["Year"]}, ${callback1[i]} won the World Cup!`);
        };
};

getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const reduceHomeTeamGoals = data.reduce((total, goals) => {
        return total += goals["Home Team Goals"];
    }, 0);
    const reduceAwayTeamGoals = data.reduce((awayTotal, awayGoals) => {
        return awayTotal += awayGoals["Away Team Goals"];
    }, 0);
    console.log(`This is the average number of home goals per match ${reduceHomeTeamGoals/data.length}`);
    console.log(`This is the average number of away goals per match ${reduceAwayTeamGoals/data.length}`);
};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, cc) {
    let countryWins = 0
    for (let i = 0; i < data.length; i++) {
            if (data[i]["Home Team Initials"] === cc && data[i]["Stage"] === "Final" && data[i]["Home Team Goals"] > data[i]["Away Team Goals"]){
                console.log(data[i]["Year"]);
                countryWins += 1
            } else if (data[i]["Away Team Initials"] === cc && data[i]["Stage"] === "Final" && data[i]["Away Team Goals"] > data[i]["Home Team Goals"]) {
                console.log(data[i]["Year"]);
                countryWins += 1
            } else if (data[i]["Away Team Initials"] === cc && data[i]["Stage"] === "Final" && data[i]["Away Team Goals"] === data[i]["Home Team Goals"]) {
                console.log(data[i]["Year"]);
                countryWins += 1
            } else if (data[i]["Home Team Initials"] === cc && data[i]["Stage"] === "Final" && data[i]["Away Team Goals"] === data[i]["Home Team Goals"]) {
                console.log(data[i]["Year"]);
                countryWins += 1
            }
        }
    console.log(countryWins);
}

getCountryWins(fifaData, "BRA");


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
    let mostGoals = 0;
    for (let i =0; i < data.length; i++) {
    let currentGoals = data[i]["Home Team Goals"]
    console.log(currentGoals);   
    }
    }

getGoals(getFinals(fifaData));


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
