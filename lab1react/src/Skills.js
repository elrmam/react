import React from "react";
import Progress from "./Progress";

class Skills extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="container bg-secondary text-white mb-5">
                <div className="row mb-5">
                    <div className="col-12 p-5">
                        <div className="d-flex flex-column align-items-center justify-content-center h-100">
                            <h1>Skills</h1>
                            <p>Dream with me of a coming tomorrow, even if we don't bring it ourselves.<br/>Let's start trying on the path; the mistakes guide us to our dream</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 p-5">
                        <h6>MY FOCUS</h6>
                        <hr style={{width:'30%'}}/>
                        <h6>ui/ux design</h6>
                        <h6>resposive design</h6>
                        <h6>web design</h6>
                        <h6>mobile app design</h6>
                    </div>
                    <div className="col-lg-6 col-sm-12 p-5">
                        <Progress wid="90%" name="html"/>
                        <Progress wid="20%" name="css"/>
                        <Progress wid="70%" name="js"/>
                        <Progress wid="40%" name="react"/>
                        <Progress wid="50%" name="node"/>
                        <Progress wid="60%" name="python"/>
                        <Progress wid="30%" name="flask"/>
                        <Progress wid="80%" name="django"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
