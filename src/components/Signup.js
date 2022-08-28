import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiFillGoogleCircle} from "react-icons/ai";




const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email:"", password:""
  });
  
  let name, value;
  
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
  
    setUser({...user, [name] : value});
  }

  const PostData =  async(e) => {
      e.preventDefault();

      const {email, password} = user;

      const res = await fetch("/register", {
        method:"POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({
          
          email, password
        
        })
      });

      const data = await res.json();

      if (DataTransfer.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");

      }else{
        window.alert("Registration Successfull");
        console.log("Registration Successfull");

        navigate("/login");
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
      
    <h4>Sign up your account</h4>
                    <p >See what is going on in game world</p>
    <div class="text-center">
                    
                    <a class="btn btn-light btn-lg btn-block google mt-2 mb-2 pt-1 pb-1"  href="#!"
              role="button">
              <i class="google "></i>Sign up with  <AiFillGoogleCircle/></a>
    </div>
    <div class="form-outline mb-4">
      <input type="email" id="form1" class="form-control" />
      <label class="form-label" for="form1">Email address</label>
    </div>
  
    <div class="form-outline mb-4">
      <input type="password" id="form1" class="form-control" />
      <label class="form-label" for="form1">Password</label>
    </div>
  
    
  
  <div class="text-center">
    <button type="submit" class="btn btn-danger btn-lg btn-block ">Sign up</button>
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

export default Signup;
