"use strict";

/*
*   React sin usar componentes
*/
// const name = 'Alexis';;
// const saludar = <h1>Hola {name}</h1>;
// ReactDOM.render(saludar,document.getElementById('app'));


// function Saludar(props)
// {
//     return(<h1>Hola {props.name}</h1>);
// }
// ReactDOM.render(
//     <Saludar name ="Alexis"/>,
//     document.getElementById('app')
// );


var Avatar = function Avatar(props) {
    return React.createElement("img", { src: props.user.img, alt: props.user.name });
};
var UserName = function UserName(props) {
    return React.createElement(
        "p",
        null,
        props.user.name
    );
};

var User = function User(props) {
    return React.createElement(
        "div",
        { className: "user-item" },
        React.createElement(Avatar, { user: props.user }),
        React.createElement(UserName, { user: props.user })
    );
};

var user = {
    name: "Daniel",
    img: "http://lorempixel.com/200/200/people/"
};

ReactDOM.render(React.createElement(User, { user: user }), document.getElementById('app'));