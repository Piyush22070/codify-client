import Image from "next/image"
export default function Header(){
    return <div className=" hidden md:flex bg-cooler">
        <Image className ="md:p-5 md:ml-10 " src="/images/main-logo.png" height="100" width="210" alt="main-logo"/>
    </div>
}