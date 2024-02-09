import React from "react";

class Progress extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <>
                <div className="progress mb-3" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:"20px"}}>
                    <span className="text-white bg-black text-center " style={{width:'10%'}}>{this.props.name}</span>
                    <div className="progress-bar" style={{width:`${this.props.wid}` ,backgroundColor:'gray'}}></div>
                </div>
            </>
        )
    }

}


export default Progress; 