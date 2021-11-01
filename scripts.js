const gameBoard = (() => {
    const playerCreate = (name, mark ) => {
        return { name, mark };
    };

    let board = [];

    const boardElements = document.querySelectorAll('button');

    board = Array.from(boardElements);

    return { board }

 })();

 console.log(gameBoard.board);
