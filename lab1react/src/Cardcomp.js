import React from "react";

class Cardcomp extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <>
                <div className={`card col-lg-4 col-md-6 col-sm-12 border border-5 border-white ${this.props.bgcolor}`} style={{ height:'13rem' }}>
                    <div className="card-body d-flex align-items-center justify-content-center">
                        <p className="card-text ">{this.props.name}</p>
                    </div>
                </div>
            </>
        )
    }

}


export default Cardcomp; 