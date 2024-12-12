import React, {useState} from 'react'
import{Link, useNavigate} from "react-router-dom";
import style from "./Signup.module.css"
const Signup = () => {
  const [name,setname] = useState();
  const [email,setemail] =useState();
  const [password,setpassword] = useState();
  const navigate=useNavigate()

  const onSubmit = async(e)=>{
    e.preventDefault()
    try{
      const sendSign = await fetch(`http://localhost:5000/user/signup`,
      {
        method:"POST",
        headers:{
        'content-Type':"application/json",
      },
      body:JSON.stringify({email,name,password})
    })
    const response = await sendSign.json();


    if(sendSign.ok){
      alert("registration sucessful")
      navigate("/")
      console.log(response);
    }else{
      alert("registration fail")
    }
    }catch(error) {
      console.log(error);

    }
  }
  return (
    <div className={style.one}>
      <h1 className={style.two}>Sign-Up</h1>
      <div>
      <input type="text" name="E-Mail" placeholder="E-Mail" onChange={(e) => setemail(e.target.value)} />
      <input type="text" name="Username" placeholder="Username" onChange={(e) => setname(e.target.value)}/>
      <input type="text"name="Password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
      <button onClick = {onSubmit} type="Submit">
        Submit
      </button>

      </div>
      <p>
        Already a member? <Link to="/"> Login </Link>
      </p>
    </div>
  );
};
export default Signup;