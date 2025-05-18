'use client'
// import Image from "next/image";
import { LockIcon, Mail, MessageCircleX, User } from "lucide-react";
import InputField from "./Components/LoginComp/InputField";
import CheckBoxInput from "./Components/LoginComp/CheckBoxInput";
import { useState } from "react";
// import Button from "./Components/LoginComp/Button";

export default function Home() {
   const [formType, setFormType] = useState('signin') // 'signin' or 'signup'

  const isSignIn = formType === 'signin'
  return (
    <div className="flex flex-col items-center justify-center h-screen" >
      <div className="my-3">
        <h3 className="text-center font-bold text-2xl text-gray-700">{isSignIn ? "Signin": "Register"}</h3>
        <p className=" text-xl text-gray-600 my-2">{isSignIn ? "Sign in to continue to Chatvia." : "Get your Chatvia account now."}</p>
      </div>
      <form className="bg-white px-9 py-3 w-[500px]"> 
        {!isSignIn && (
      <InputField type="text" label="Username" placeholder="Enter your name" icon={<User/>}/>

        )}
      <InputField type="text" label="Email" placeholder="admin@gmail.com" icon={<Mail/>}/>
      <InputField type="password" label="Password" placeholder="admin" icon={<LockIcon/>}/>

      {isSignIn && (
      <CheckBoxInput/>

      )}

      <button type="button" class="w-full text-white mt-3 bg-[#3e76c1] hover:bg-[#306cbd] font-medium rounded-md text-xl px-5 py-2.5 me-2 mb-2  ">{isSignIn ? "Sign in" : "Register"}</button>

      </form>

      <div className="flex my-5">
        <p className="text-lg text-gray-700">
           {isSignIn ? "Don't have an account ?" : 'Already have an account ?'}{' '}
        </p>
        <button onClick={() => setFormType(isSignIn ? 'signup' : 'signin')} className="mx-2 text-[#3e76c1] cursor-pointer text-lg ">{isSignIn ? 'Signup Now' : 'Sign In'}</button>
      </div>
    </div>
  );
}
