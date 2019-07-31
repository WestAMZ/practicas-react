class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            count : 0
        }
    }
    render()
    {
        return (
            <div className="counter">
                <div className="count">{this.state.count}</div>
                <a href="#" onClick={this.addCount}>Up</a>
                <a href="#" onClick={this.downCount}>Down</a>
                <a href="#" onClick={this.resetCount}>Reset</a>
            </div>
        );
    }
    addCount =(e) =>
    {
        e.preventDefault();
        //NO RECOMENDADO PARA ASIGNACIONES SOBRE ESTADO ANTERIOR
        //this.setState({count:this.state.count + 1});
        //RECOMENDADO
        this.setState((prevState)=>
        {
            return{
                count:prevState.count + 1
            }
        });
    }
    downCount =(e) =>
    {
        e.preventDefault();
        this.setState((prevState)=>
        {
            if(prevState.count >=1)
            {
                return{
                    count:prevState.count  - 1
                }
            }
        });
    }
    resetCount =(e) =>
    {
        e.preventDefault();
        this.setState({count:0});
    }
}

ReactDOM.render(<Counter/>,document.getElementById('app'));