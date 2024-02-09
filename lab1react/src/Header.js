import React from "react";
import Nbutton from "./Nbutton";

class Header extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="container-fluid mb-5">
                <div className="row align-items-stretch">
                    <div className="col-6 bg-black">
                        <div className="d-flex flex-column align-items-center justify-content-center h-100">
                            <h1 className="text-white">Ahmed Reda</h1>
                            <h3 className="text-white">Web Developer</h3>
                            <Nbutton brdcolor='border-white' txtcolor='text-white' name='CONTACT ME'/>
                        </div>
                    </div>
                    <div className="col-6 p-0">
                        <img src="/h1.jpg" alt="Header Image" style={{width:'40rem'}}/>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Header;
