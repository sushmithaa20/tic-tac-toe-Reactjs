import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Done from './Done'

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
      </button>
  );
}

function start(){
  
}

class Board extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext : true,
    };
  }
  
  handleClick(i){
    const squares = this.state.squares.slice();
     if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i]= this.state.xIsNext ? 'X' :'O';
    this.setState({
      squares : squares,
      xIsNext : !this.state.xIsNext,
    });
  }
  
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  
  render() {
   
    const winner = calculateWinner(this.state.squares);
    var player;
    let status;
    if(winner)
      {
        status= "winner :" +winner;
        if(winner=== 'X'){player=1;}
        else{player=2;}
      
        
      }
    else
      {
        status ='Next player :' +(this.state.xIsNext ? '1' : '2')
       
      }
      if(!this.state.squares.includes(null) && !winner)
      {
        status = "Draw"
        player="Draw"
      }


    return (
      <div>
        
        <h2 >TiC-TAC-TOE</h2>
        <div id="h"></div>
        <div className="status">{status}</div>
        <div className="box">
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        </div>
      
      { winner &&
        (
          < Done winner = {player}
                  board ={Board}
                  />
        )
      }
      </div>
      
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
