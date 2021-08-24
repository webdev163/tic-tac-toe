class TicTacToe {
    constructor() {
        this.currentSymbol = 'x';
        this.board = [];
        for (let i = 0; i < 3; i++) this.board[i] = new Array(3).fill(null)
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.board[rowIndex][columnIndex] === null) {
            this.board[rowIndex][columnIndex] = this.currentSymbol;
            this.currentSymbol = this.currentSymbol === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        return this.getWinner() !== null || this.isDraw()
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2]) return this.board[i][0];
            if (this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i]) return this.board[0][i];
            if (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) return this.board[0][0];
            if (this.board[2][0] === this.board[1][1] && this.board[2][0] === this.board[0][2]) return this.board[2][0];
        }
        return null
    }

    noMoreTurns() {
        let count = 9;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] !== null) count--
            }
        }
        return count === 0 ? true : false
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex] === null ? null : this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
