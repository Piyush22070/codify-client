"use client"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { useState } from "react"
import { toast } from "sonner"

  
export default function CodingArea(){

    const [code ,setCode] = useState("")
    const [language ,setLanguage] = useState("")

    function handleOnChange(e: { target: { value: any } }){
        setCode(e.target.value)
    }
    function SaveCode(){
        toast("Code Saved Succesfully !")
    }
    function handelChange(e:any){
       setLanguage(e.target.value)
    }
    function giveOutPut(){
        console.log(code)
        console.log(language)
    }
    
    return <div>
        
        <div className="p-1 flex flex-row">
        <label className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Language : </label>

        <select id="language" onChange={handelChange} className=" px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="py">Python</option>
            <option value="js">JavaScript</option>
        </select>

        </div>
        <ScrollArea>
        <div className=" p-2 ">        
            <textarea className="w-full h-[370px] rounded-[3px] decoration-none" onChange={handleOnChange} placeholder="Enter the Code"/>
            <div>
            <button onClick={giveOutPut} className="p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Run</button>
            <button className="p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Submit</button>
            <button onClick={SaveCode} className="p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Save</button>
            </div>
        </div>
        </ScrollArea>
    </div>
}