class Hola extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            nombre: "Alvaro"
        }
    }
    despedirser=()=>
    {
        this.setState({
            nombre:(this.state.nombre==="Alvaro")?"adios!":"Alvaro"
        });
    }
    render()
    {
        return(
            <h1 onClick={this.despedirser}>Hola {this.state.nombre}</h1>
        )
    }
}
ReactDOM.render(
    <Hola/>,document.getElementById('app')
);