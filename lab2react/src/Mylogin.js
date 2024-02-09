import { useEffect, useState } from "react";


function Mylogin(){

    const[data, setData] = useState({
        email: "", 
        password: ""
    })

    const[errors, setErrors] = useState({
        emailErr:"",
        passwordErr: ""
    })



    const changeData = (e) => {
        if(e.target.name == "email"){
            setData({
                ...data, 
                email: e.target.value
            })
            const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
            setErrors({
                ...errors,
                emailErr: e.target.value.length == 0 ? "This Field Is Required": !regEx.test(e.target.value) && "Please Enter a Valid format"
            })
        }else{
            setData({
                ...data, 
                password: e.target.value
            })

            setErrors({
                ...errors,
                passwordErr: e.target.value.length == 0 ? "This Field Is Required": e.target.value.length < 8 && "Please Enter 8 digits"
            })

        
        }

    }

    const [passtype, setpasstype] = useState(false);
    
    const converting = () => {
        setpasstype((prevpasstype) => !prevpasstype);
      };

    return(
            <div className="container border border-secondary rounded-3 my-3">
                <form>
                    <div className="row my-3">
                        <div className="col-12">
                            <label htmlFor="inputEmail4" className="form-label">Email Adress</label>
                            <input type="email" className="form-control" required value={data.email} onChange={(e) => changeData(e)} name="email" /> 
                            <p className="text-danger">{errors.emailErr}</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type={passtype ? "text" : "password"} className="form-control" required value={data.password} onChange={(e) => changeData(e)} name="password" />
                            <p className="text-danger">{errors.passwordErr}</p>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary form-control">Sign in</button>
                        </div> 
                    </div>
                    <div className="row my-3">
                        <div className="col-12">
                            <button type="button" className="btn btn-info form-control" onClick={converting}> {passtype ? "Hide" : "Show"} </button>
                        </div> 
                    </div>
                </form>
            </div>
        )

}

export default Mylogin;