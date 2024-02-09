import React from "react";
import Nbutton from "./Nbutton";

class About extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-3 col-sm-12">
                            <h1 className="text-black">About me</h1>
                    </div>
                    <div className="col-lg-9 col-sm-12">
                        <p>However long your night may be, everything will pass. Everything will pass. However heavy your burden may be, everything will pass. Everything will pass. If your eyes closed in neglect, everything will pass. If the world has shut its doors, everything will pass. If your loved one left you, and time led you astray, and your reasons got mixed up, if your hopes stalled, and your dreams braked, yet, you will overcome it all. No matter if your heart is remorseful, everything will pass. No matter how lost you are in your mistakes, everything will pass. Leave the judgment to God, everything will pass. Make amends with yourself, everything will pass. The night is long, filled with dreams, taking you away, lost in it. Yet, the day is even more beautiful, its sun illuminates yesterday's dream</p>
                        <Nbutton bgcolor='bg-secondary' txtcolor='text-white' name='Download Resume'/>
                    </div> 
                </div>
            </div>
        );
    }
}

export default About;