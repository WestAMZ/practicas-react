"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.addCount = function (e) {
            e.preventDefault();
            //NO RECOMENDADO PARA ASIGNACIONES SOBRE ESTADO ANTERIOR
            //this.setState({count:this.state.count + 1});
            //RECOMENDADO
            _this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        };

        _this.downCount = function (e) {
            e.preventDefault();
            _this.setState(function (prevState) {
                if (prevState.count >= 1) {
                    return {
                        count: prevState.count - 1
                    };
                }
            });
        };

        _this.resetCount = function (e) {
            e.preventDefault();
            _this.setState({ count: 0 });
        };

        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "counter" },
                React.createElement(
                    "div",
                    { className: "count" },
                    this.state.count
                ),
                React.createElement(
                    "a",
                    { href: "#", onClick: this.addCount },
                    "Up"
                ),
                React.createElement(
                    "a",
                    { href: "#", onClick: this.downCount },
                    "Down"
                ),
                React.createElement(
                    "a",
                    { href: "#", onClick: this.resetCount },
                    "Reset"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));