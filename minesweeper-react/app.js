let option = {
    flag : '',
    mine : '',
}
class Cell extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            image: option.flag
        }
    }
    render()
    {
        return(
            <div className="cell">
                <img src={props.image}>{props.image}</img>
            </div>
        );
    }
}
class Board extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            n : 10,
            mines:[ 
                new Array(10).fill(new Array(10).fill(0))
            ],
            numbers :[
                new Array(10).fill(new Array(10).fill(0))
            ]
        }
    }
    render()
    {
        console.log(this.state.mines);
        return(
            <div className="board">
                <Cell/>
            </div>
        );
    }
    setMines = () => 
    {
        //calcule the number of mines
        var mines_number = Math.floor(Math.pow(this.state.n,2)*15/100)
        for(var a = 0;a < this.state.mines.length;a++)
        {
            for(var i = 0;i < this.state.mines[i].length;a++)
            {
                
            }
        }
    }
}

ReactDOM.render(<Board/>,document.getElementById('app'))