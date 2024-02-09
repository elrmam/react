import React from "react";

class  Nbutton extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <>
                <button type="button" className={`btn ${this.props.bgcolor} ${this.props.txtcolor} border ${this.props.brdcolor}`}>{this.props.name}</button>
            </>
        )
    }

}


export default Nbutton; 