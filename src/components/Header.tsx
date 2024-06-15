import Image from "next/image"
export default function Header(){
    return <div className=" bg-cooler">
        <Image className ="p-5 md:ml-10 " src="/images/main-logo.png" height="100" width="210" alt="main-logo"/>
    </div>
}