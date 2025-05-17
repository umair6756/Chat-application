// import Image from "next/image";
import { User } from "lucide-react";
import InputField from "./Components/LoginComp/InputField";

export default function Home() {
  return (
    <div>
      <form className="">
      <InputField type="text" label="Username" placeholder="Enter your name" icon={<User/>}/>
      <InputField type="text" label="Username" placeholder="Enter your name" icon={<User/>}/>
      <InputField type="text" label="Username" placeholder="Enter your name" icon={<User/>}/>
      <InputField type="text" label="Username" placeholder="Enter your name" icon={<User/>}/>


      </form>
    </div>
  );
}
