/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board, i, j, solutions) {
  solutions = solutions || 0;
  board = board || makeBoard(n);
  i = i || 0;
  j = j || 0;

  if( i < 0 || j < 0 || i > n || j > n ){ return 0; }

  if( !board.hasBeenVisited(i, j) ) { board.togglePiece(i, j); } // if the current spot hasn't been visited, toggle piece
  if( board.hasBeenVisited(n - 1, n - 1) ) return 1; // if we are on the bottom right corner, increment solution

  // go up
  solutions += robotPaths(n, board, i - 1, j);
  // go down
  solutions += robotPaths(n, board, i + 1, j);
  // go left
  solutions += robotPaths(n, board, i, j - 1);
  // go right
  solutions += robotPaths(n, board, i, j + 1);

  return solutions;
};
