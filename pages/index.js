import React,{useContext,} from "react";
import { Context } from "../context";
import {useRouter} from 'next/router';
import axios from "axios";
export default function Auth() {
  const {username,
         secret,
        setUsername,
        setSecret,
  }=useContext(Context);
  // 66cb8e2e-a8ce-4b52-aef2-5a9328b2f998
  const router=useRouter();
  function onSubmit(e){
    e.preventDefault()
    if(setUsername.length===0||secret.length===0) return;

    axios.put(
      'https://api.chatengine.io/users/',
      {username,secret},
      {headers:{"Private-key":"66cb8e2e-a8ce-4b52-aef2-5a9328b2f998"}}
    ).then(r=>router.push('./chats'))
  }
  return (<div className="background">
         <div className='auth-container'>
          <form className='auth-form' onSubmit={e=> onSubmit(e)}>
            <div className="auth-title">Sign In</div>
             <div className="input-container">
              <input type="email" placeholder="Email" className="text-input" onChange={e=>setUsername(e.target.value)}/> 
              <input type="password" placeholder="Password" className="text-input" onChange={e=>setSecret(e.target.value)}/>
             </div>
             <button type="submit" className="submit-button">
              Login/SignUp
             </button>
          </form>
         </div>
         </div>);
}
