import React from 'react';
import Square from './square.js'

export default class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }
  // Pourquoi on doit passer par une fonction ?
    renderSquare(i) {
      return (
        <Square
          key={i}
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      let cellNumber=0;
      let rows=[];
      for(let j = 0; j < 3; j++){
        let row=[];
        for (let i = 0; i < 3; i++){
          // Pourquoi i+j ça marche pas ?
          row.push(this.renderSquare(cellNumber));
          cellNumber++;
        }
        rows.push(<div key={j} className="board-row">{row}</div>);
      }
      return (
        <div>
          {rows}
        </div>
      );
    }
  
  }