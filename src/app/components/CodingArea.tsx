"use client"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import {  useState } from "react"
import { toast } from "sonner"

  
export default function CodingArea(){


    const [code ,setCode] = useState("")
    const [language ,setLanguage] = useState("cpp")

    function handelChangeC(e:any){
        setCode(e.target.value)
        
     }
    function handelChangeL(e:any){
        setLanguage(e.target.value)
    }

    return <div>
        
        <div className="p-1 flex flex-row">
        <label className="px-6 text-xs font-medium text-gray-500 uppercase">Language : </label>
        <select id="language" onChange={handelChangeL} className="">
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="py">Python</option>
            <option value="js">JavaScript</option>
        </select>

        </div>
        <ScrollArea>
        <div className=" p-2 flex flex-col">        
            <textarea className="w-full h-[450px] rounded-[3px] decoration-none" onChange={handelChangeC} placeholder="Enter the Code"/>
        </div>

        </ScrollArea>
    </div>
}