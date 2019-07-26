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


const Avatar = props => <img src={props.user.img} alt={props.user.name}/>;
const UserName = props => <p>{props.user.name}</p>;


const User = props =>
{
    return(
        <div className="user-item">
            <Avatar user={props.user}/>
            <UserName user={props.user}/>
        </div>
    );
}

const user = 
{
    name:"Daniel",
    img:"http://lorempixel.com/200/200/people/"
};

ReactDOM.render(
    <User user={user}/>,document.getElementById('app')
);