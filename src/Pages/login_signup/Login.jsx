import React, {useState} from 'react';
import {Link} from "react-router-dom";
import  style from "./Login.module.css"
import {useNavigate} from "react-router-dom"

const Login =() => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate()

  const onSubmit = async(e)=> {
      e.preventDefault();
   try{
      const sendSign = await fetch(`http://localhost:5000/user/login`,{
        method: "POST",
        headers:{
          'content-Type':"application/json",
        },
        body:JSON.stringify({email,password}),

      });

      const response = await sendSign.json();
      if(sendSign.ok){
        alert("User Login Successful")
        navigate('/home')
        localStorage.setItem("token",response.token)
      }else{
        alert("Invalid email or password")
      }
   }catch (error){
    console.log(error);
   }

  }
  return (
    <div className={style.full}>
      <div>
        <h1 className={style.hello}>Login</h1>
        <div>
            <input type="text" name="" id="" placeholder="Email" onChange={(e) => setemail(e.target.value)}/>
            <input type="text" name="" id="" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
            <button onClick= {onSubmit}>Login</button>
        </div>
        <div>
            <p>Dont have an account?</p>
            <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;