'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var option = {
    flag: '',
    mine: ''
};

var Cell = function (_React$Component) {
    _inherits(Cell, _React$Component);

    function Cell(props) {
        _classCallCheck(this, Cell);

        var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, props));

        _this.state = {
            image: option.flag
        };
        return _this;
    }

    _createClass(Cell, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'cell' },
                React.createElement(
                    'img',
                    { src: props.image },
                    props.image
                )
            );
        }
    }]);

    return Cell;
}(React.Component);

var Board = function (_React$Component2) {
    _inherits(Board, _React$Component2);

    function Board(props) {
        _classCallCheck(this, Board);

        var _this2 = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

        _this2.setMines = function () {
            //calcule the number of mines
            var mines_number = Math.floor(Math.pow(_this2.state.n, 2) * 15 / 100);
            for (var a = 0; a < _this2.state.mines.length; a++) {
                for (var i = 0; i < _this2.state.mines[i].length; a++) {}
            }
        };

        _this2.state = {
            n: 10,
            mines: [new Array(10).fill(new Array(10).fill(0))],
            numbers: [new Array(10).fill(new Array(10).fill(0))]
        };
        return _this2;
    }

    _createClass(Board, [{
        key: 'render',
        value: function render() {
            console.log(this.state.mines);
            return React.createElement(
                'div',
                { className: 'board' },
                React.createElement(Cell, null)
            );
        }
    }]);

    return Board;
}(React.Component);

ReactDOM.render(React.createElement(Board, null), document.getElementById('app'));