import { useEffect, useState } from "react";


function Todo(){

    const[data, setData] = useState({
        name: "", 
    })

 
    return(
            <div className="container border border-secondary rounded-3 my-3 bg-info">
                <form>
                    <div className="row my-3">
                        <div className="col-12">
                            <label htmlFor="inputEmail4" className="form-label">TO-DO APP</label>
                            <input type="text" className="form-control" required value={data.name} onChange={(e) => changeData(e)} name="name" /> 
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-12">
                            <button type="button" className="btn btn-primary form-control" onClick={addTask}>add</button>
                            <p className="tasks">{tasks.task}</p>
                        </div> 
                        
                    </div>
                    <p></p>
                </form>
            </div>
        )

}

export default Todo;