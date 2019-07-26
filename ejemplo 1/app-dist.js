'use strict';

/*
 * React y JSX 
 */

//  const element = (
//     <h1 id="title">
//         Hola son las {5+2} <span>Mundo</span>
//     </h1>);

//  ReactDOM.render(element,document.getElementById('app'));

/*
*  Reloj con vanilla Js
*/

// const app = document.getElementById('app');
// function reloj()
// {
//     app.textContent= new Date().toLocaleTimeString();
// }

var app = document.getElementById('app');
function reloj() {
  var element = React.createElement(
    'h1',
    null,
    new Date().toLocaleTimeString()
  );
  ReactDOM.render(element, app);
}
setInterval(reloj, 1000);