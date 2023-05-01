/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/

console.log('Step 0 complete! client.js loaded!');
            
// Write your code here!

// 1. Start with the number 29 and set that equal to a variable named ‘highScore’;
let highScore = 29;

// 2. Make a new empty array called myScrabbleTiles.
let myScrabbleTiles = [];

// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/
// using function addTile to push tiles above into array myScrabbleTiles
function addTile (tile, score){
  // creating object with multiple values for tile and score inside function
  let tileToAdd = {
    tile : tile,
    score: score
  }
  // pushing tile with current arguments to array
  myScrabbleTiles.push(tileToAdd)
}

// running function to add first tile to array
addTile( 'N', 1 );
// console logging expanded array to test
console.log( ...myScrabbleTiles );

// pushing rest of tiles into array
addTile( 'K', 5 );
addTile( 'Z', 10 );
addTile( 'X', 8 );
addTile( 'D', 2 );
addTile( 'A', 1 );
// console logging new fully loaded expanded array
console.log( ...myScrabbleTiles );

// 4. Remove the last tile from myScrabbleTiles.
// using .pop on myScrabbleTiles array to remove last item
myScrabbleTiles.pop()
// console logging to show change without expanded array
console.log( myScrabbleTiles );



// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/
addTile( 'F', 4 );
console.log( ...myScrabbleTiles )

// 6. Complete this function. It needs to be given an array of tile objects. The function will use a for-loop and return the sum of all the scores in the given array.
  // creating myScore variable starting at zero
let myScore = 0;

function sumTiles( anArray ) {
  let totalScore = 0
  // for loop to iterate through array
  for (i = 0; i < myScrabbleTiles.length; i++ ){
  // score of each tile will be added to the value of totalScore at each iteration of the loop
  totalScore = totalScore + myScrabbleTiles[i].score;
  }
  // setting value of myScore to equal totalScore (sum total of tile scores)
  let myScore = totalScore
  // if statement to determine if sum of all tiles (myScore) is greater than high score,
  // which changes the value of high score to the value of myScore if true
  // and announces that we have the new high score, and what the new high score is
  if ( myScore > highScore ){
    highScore = myScore;
    console.log( `We have the new high score which is ${highScore}!` )
  }
  // returns sum total of scores of all tiles
  return totalScore;
  
}

// console log uses sumTiles function to log the sum total of all tiles in myScrabbleTiles array
console.log( 'I have', sumTiles( myScrabbleTiles ), 'points!' );

// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".
// created myScore variable set to 0 on line 69, set the value equal to 0 outside of function,
// set value of myScore equal to totalScore inside function
// 8. Check whether or not your score is higher than the highScore.
// using if statement on line 83 inside function to determine if myScore is greater than highScore,
// if true, sets value of highScore equal to myScore
// 8-1 If your score is higher, change highScore to the new high score.
console.log( `The high score is ${highScore}`);

// DONE!