"use client"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export default function Output(){
    const [accepted,setAccepted] = useState(true)

    function giveOutPut(){

    }
    

    function SaveCode(){
        toast("Code Saved Succesfully !")
    }


    useEffect(()=>{
        const set = false
        return setAccepted(true)
    })


    return <div>   

            <div className=" p-2">
            <button onClick={giveOutPut} className="p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Run</button>
            <button className="p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Submit</button>
            <button onClick={SaveCode} className="p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Save</button>
            </div>

    <div className="p-3 h-fit"><label>{(accepted) ? <div className=" text-green-500">Accepted :</div>: <div className=" text-red-500">NotAccepted :</div>}</label>
     <div className="p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">        
        <ScrollArea>

 
            <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <label>Desried Output : </label>
                <textarea value="1234"className="ml-[32px] h-10" readOnly/>
            </div>
            <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <label>Your Ouput :</label>
                <textarea className="ml-[63px] h-10" readOnly/>
            </div>
        </ScrollArea>
    </div>
    </div>
    </div>
}