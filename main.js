let raceNumber = Math.floor(Math.random()*1000);
let isRegisteredEarly = true;
let runnersAge = 42;

isRegisteredEarly ? (raceNumber) : (raceNumber += 1000);
if (runnersAge > 18 && isRegisteredEarly === true) {
  console.log('Your race starts at 9:30 AM. Your race number is ' + raceNumber + '.');
} else if (runnersAge > 18 || isRegisteredEarly === true) {
  console.log('Your race starts at 11:00 AM. Your race number is ' + raceNumber + '.');
} else if (runnersAge < 18 && !isRegisteredEarly === true) {
  console.log('Your race starts at 12:30 PM. Your race number is ' + raceNumber + '.');
} else {
  console.log('Please report to the registration desk.')
}