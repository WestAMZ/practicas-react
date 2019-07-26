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

const app = document.getElementById('app');
function reloj()
{
    let element = <h1>{new Date().toLocaleTimeString()}</h1>;
    ReactDOM.render(element,app);
}
setInterval(reloj,1000)