import { ScrollArea } from "@/components/ui/scroll-area"
import { useState,useEffect } from "react";
import axios from "axios";
interface OutputProps {
    output: string;
    accepted: boolean;
    index : string
}

export default function Output({ output, accepted , index}: OutputProps) {

    const [sampleOutput,setSmapleOutput] = useState({
        sampleOutput : ""
    })

    useEffect(
        ()=>{
           axios.get(`https://codify-kmyn.onrender.com/question/${index}`)
            // axios.get(`http://localhost:8000/question/${index}`)
            .then((response)=>{
                setSmapleOutput(response.data)
            })
            .catch((error)=>{
             console.log("Output Area ! ")
            })
        },[]
    )
    return (
        <div className="bg-gray-100 rounded-lg ">
            <div className="p-3 h-fit">
                <label>
                    {accepted ? <div className="text-green-500">Accepted :</div> : <div className="text-red-500">Not Accepted :</div>}
                </label>
                {accepted ? (
                    <div className="p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                        <ScrollArea>
                            <div className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                                <label>Desired Output :</label>
                                <textarea value={sampleOutput.sampleOutput} className="ml-[32px] h-[100px] w-[210px]" readOnly />
                            </div>
                            <div className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider">
                                <label>Your Output :</label>
                                <textarea className="ml-[57px] h-[100px] w-[210px]" readOnly value={output} />
                            </div>
                        </ScrollArea>
                    </div>
                ) : (
                    <div className="py-2 ">
                        <textarea className="w-[400px] h-[950px]" readOnly value={output} />
                    </div>
                )}
            </div>
        </div>
    )
}
