const prompt = require('prompt');

var board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let playCount = 0;

const showBoard = arr => {
  let str = '\n';
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    str += '|';
    str += arr[i];
    str += '|';
    str += '\n';
  }
  return str;
};

let input = brd => {
  prompt.start();

  prompt.get(['position'], (err, result) => {
    // console.log('pos', result.position, typeof result.position);
    for (let i = 0; i < brd.length; i++) {
      for (let j = 0; j < brd[i].length; j++) {
        if (+result.position === brd[i][j]) {
          if (playCount % 2 === 0) {
            brd[i][j] = 'X';
            playCount++;
            input(brd);
          } else {
            brd[i][j] = 'O';
            playCount++;
            input(brd);
          }
        }
      }
    }
    console.log(showBoard(board));
  });
};

console.log(showBoard(board));
input(board);
