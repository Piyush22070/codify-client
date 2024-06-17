"use client"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { useState } from "react"
import { toast } from "sonner"

  
export default function CodingArea(){

    const [code ,setCode] = useState("")


    function handleOnChange(e: { target: { value: any } }){
        setCode(e.target.value)
    }
    function SaveCode(){
        toast("Code Saved Succesfully !")

    }
    function giveOutPut(){
        console.log(code)
        const language = document.getElementById('language').value
        console.log(language)
    }
    return <div>
        
        <div className="p-1 flex flex-row">
        <label className="block text-base font-medium text-gray-700 mb-1">Language : </label>

        <select id="language" className=" w-[150px] mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="py">Python</option>
            <option value="js">JavaScript</option>
        </select>

        </div>
        <ScrollArea>
        <div className=" p-2 ">        
            <textarea className="w-full h-[430px] rounded-[3px] decoration-none" onChange={handleOnChange} placeholder="Enter the Code"/>
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