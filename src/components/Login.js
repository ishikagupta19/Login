import React, {useState, useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiFillGoogleCircle} from "react-icons/ai";
import { UserContext } from "../App";

const Login = () => {

  const {state, dispatch} = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async(e) =>{
    e.preventDefault();

    const res = await fetch('/signin', {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    } );

    const data = res.json();
    
    if(!res.status === 400 || data){
      dispatch({type:"USER", payload: true})
      window.alert("Login Successfull");
      navigate("/");
     
    } else{
      window.alert("Invalid Credentials");
    }
  }

  return ( <>
  <div class="background">
  <div class="container ">
  <div class="box">
  <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone image"/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
  <form>
  <div class="text-center">
                  
                  <h4 class="mt-1 mb-5 pb-1">Login in to your account</h4>
                  <p class="mt-1 mb-5 pb-1">See what is going on in game world</p>
                  <a class="btn btn-primary btn-lg btn-block google"  href="#!"
            role="button">
            <i class="google "></i>Continue with<AiFillGoogleCircle/></a>
  </div>
  <div class="form-outline mb-4">
    <input type="email" id="form1" class="form-control" />
    <label class="form-label" for="form1">Email address</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form1" class="form-control" />
    <label class="form-label" for="form1">Password</label>
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
    
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form1" checked />
        <label class="form-check-label" for="form1"> Remember me </label>
      </div>
    </div>

    <div class="col">
 
      <a href="#!">Forgot password?</a>
    </div>
  </div>

<div class="text-center">
  <button type="submit" class="btn btn-danger btn-lg btn-block ">Sign in</button>
  </div>


  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    
    
  </div>
</form>
</div>
    </div>
  </div>
</section>
</div>
  </div>
</div>

  </> 
  )
};

export default Login;
