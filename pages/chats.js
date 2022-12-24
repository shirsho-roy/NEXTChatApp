import React,{useState,useEffect,useContext} from "react";
import {Context} from "../context";
import {useRouter} from 'next/router';
import dynamic from "next/dynamic"
const ChatEngine=dynamic(()=>
 import("react-chat-engine").then((module)=>module.ChatEngine)
);
const MessageForSocial=dynamic(()=>
import("react-chat-engine").then((module)=>module.MessageForSocial)
);
export default function Chats() {
  const {username,secret}=useContext(Context);
  const router=useRouter();
  const [showChat,setShowChat]=useState(false);
  useEffect(()=>{
    if(typeof document!==null){
      setShowChat(true);
    }
  });
  return (
  <div className="background">
    <div className="shadow">
      <ChatEngine 
      height='calc(100vh-200px)'
      projectID='128dcfc1-4f76-4b04-960a-afd19c4e6053'
      username={username}
      userSecret={secret}
      renderNewMessage={()=> <MessageForSocial/>}
      />
    </div>
  </div>
  ) 
}
