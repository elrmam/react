import { useEffect, useState } from "react";


function Regsform(){

    const[data, setData] = useState({
        name: "", 
        email: "", 
        username: "", 
        password: "",
        confirmPassword: "", 
    })

    const[errors, setErrors] = useState({
        nameErr:"",
        emailErr:"",
        usernameErr:"",
        passwordErr: "",
        confirmPasswordErr:""
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

        }else if (e.target.name == "name"){
            setData({
                ...data, 
                name: e.target.value
            })
            setErrors({
                ...errors,
                nameErr: e.target.value.length == 0 && "This Field Is Required"
            })

        }else if (e.target.name == "password"){
            setData({
                ...data, 
                password: e.target.value
            })
            const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            setErrors({
                ...errors,
                passwordErr: e.target.value.length == 0 ? "This Field Is Required": !regEx.test(e.target.value) && "wrong forat"
            })
        
        }else if (e.target.name == "username"){
            setData({
                ...data, 
                username: e.target.value
            })
            const regEx = /\s/;
            setErrors({
                ...errors,
                usernameErr: e.target.value.length == 0 ? "This Field Is Required": regEx.test(e.target.value) && "Spaces not acceptable"
            })

        }else if (e.target.name == "confirmpassword"){
            setData({
                ...data, 
                confirmpassword: e.target.value
            })

            setErrors({
                ...errors,
                confirmpasswordErr: data.password !== e.target.value && "please enter same password"
            })

        }
    }
   

    return(
            <div className="container border border-secondary rounded-3 my-5">
                <form >
                    <div className="row my-3">
                        <div className="col-12">
                            <label htmlFor="inputEmail4" className="form-label">Name</label>
                            <input type="text" className="form-control" value={data.name} onChange={(e) => changeData(e)} name="name"/> 
                            <p className="text-danger">{errors.nameErr}</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="inputEmail4" className="form-label">Email Adress</label>
                            <input type="email" className="form-control"  value={data.email} onChange={(e) => changeData(e)} name="email" /> 
                            <p className="text-danger">{errors.emailErr}</p>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-12">
                            <label htmlFor="inputEmail4" className="form-label">User name</label>
                            <input type="text" className="form-control" value={data.username} onChange={(e) => changeData(e)} name="username"/> 
                            <p className="text-danger">{errors.usernameErr}</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" required value={data.password} onChange={(e) => changeData(e)} name="password" />
                            <p className="text-danger">{errors.passwordErr}</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="inputPassword4" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" value={data.confirnpassword} onChange={(e) => changeData(e)} name="confirmpassword" />
                            <p className="text-danger">{errors.confirmpasswordErr}</p>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-12">
                            <button type="submit" className="btn btn-success form-control">Register</button>
                        </div> 
                    </div>
                </form>
            </div>
        )

}

export default Regsform;