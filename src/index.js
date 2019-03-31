import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TreeNode from './treeNode';

/*
class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
}
  
class Board extends React.Component {

    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
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
        const status = 'Next player: X';

        return (
        <div>
            <div className="status">{status}</div>
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
        <div>{/!* status *!/}</div>
        <ol>{/!* TODO *!/}</ol>
        </div>
    </div>
    );
}
}

// ========================================
*/
const node = [{
    title: '00000',
    key: '0' ,
    child:[
        {
            title: '0-111111',
            key: '0-0',
            child:[
                {
                    title: '0-1-1111',
                    key: '0-0-0'
                },
                {
                    title: '0-1-2222',
                    key: '0-0-1',
                    child: [
                        {
                            title: '0-1-2-11111',
                            key: '0-0-1-0',
                            child: [
                                {
                                    title: '0-1-2-1-111',
                                    key: '0-0-1-0-0'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '0-1-33333',
                    key: '0-0-4'
                },
            ]
        },
        {
            title: '0-222222',
            key: '0-2',
            level:'level2',
            open: false,
            child: [
                {
                    title: '0-2-1111',
                    key: '0-2-0',
                    level:'level3',
                },
                {
                    title: '0-2-22222',
                    key: '0-2-1',
                    level:'level3',
                },
                {
                    title: '0-2-33333',
                    key: '0-2-2',
                    level:'level3',
                }
            ]
        }
    ]
}];
const data = [
    {
        title: "First",
        id: "1",
        children: [
            {
                title: "First - 1.1",
                id: "1.1"
            }, {
                title: "First - 1.2",
                id: "1.2",
                children: [{
                    title: "First - 1.2.1",
                    id: "1.2.1"
                }]
            }
        ]
    }, {
        title: "Second",
        id: "2",
        children: [
            {
                title: "Second - 2.1",
                id:"2.1"
            }
        ]
    }
];
ReactDOM.render(
    <TreeNode data={node}/>,
    document.getElementById('root')
);