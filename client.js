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
function sumTiles( anArray ) {
  let totalScore = 0
  for (i = 0; i < myScrabbleTiles.length; i++ ){
  totalScore = totalScore + myScrabbleTiles[i].score;
  }
  return totalScore 
}

console.log( sumTiles( myScrabbleTiles ) );


// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".


// 8. Check whether or not your score is higher than the highScore.
// 8-1 If your score is higher, change highScore to the new high score.


// DONE!