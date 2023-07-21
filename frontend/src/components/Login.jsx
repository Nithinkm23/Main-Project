import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({})


    const inputHandler = (e) => {
        console.log("onchange")
        setUser({
            ...user, [e.target.name]: e.target.value
        })
        console.log(user)

    }
    const addHandler = () => {
        console.log("Clicked", user)
        axios.post("http://localhost:3000/api/login", user)
            .then((response) => {
                if (response.data.message === "Login Successfull!!") {
                    const token = response.data.token;
                    
                    console.log(token)
                    
                    sessionStorage.setItem("userToken", token);
                    

                    alert(response.data.message)
                    navigate('/dashboard')
                }
                else {
                    alert(response.data.message)
                }
            })
    }



    return (
        <div>

            {/* NAVBAR STARTS*/}
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><h4>Learner Tracker</h4></a>
                        <button class="navbar-toggler" type="button"
                            data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar"></span>
                        </button>
                    </div>
                </nav>
            </div>
            {/* NAVBAR ENDS*/}

            {/* FORMS STARTS */}
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12"></div>

                    <div className="row g-3">

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name="username" onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type='password' className="form-control pwd" name="password" onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                            <button className="btn btn-success" onClick={addHandler}>Login</button>
                        </div>



                    </div>
                    {/* FORMS ENDS */}
                </div>
            </div>

        </div>
    )
}

export default Login