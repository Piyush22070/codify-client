"use client"
import { useEffect,useState } from "react"
import axios from 'axios'
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
export default function ProblemInfo(props: any){
    const [question,setQuesion] = useState({
      number: "1",
      name: "Name ",
      difficulty : "infinite",
      description : "description",
      Constraints : "Constraints",
      timeCompelxity : "O()"
    })
    useEffect(
        ()=>{
            axios.get(`http://localhost:3001/problems/${props.index}`)
            .then((response)=>{
                setQuesion(response.data)
            })
            .catch((error)=>{
                console.log("Nai mila bhai")
            })
        },[]
    )

    return <div>
      <button className="p-4 inline-flex items-center bg-gray-800 justify-center rounded-md text-sm font-medium text-white">
      <Link href="/problems"> {`<`}</Link></button>
        <ScrollArea>
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">{question.number} . {question.name}</h1>
    <div className="mb-4">
    <p className="text-sm">
      <code>{question.difficulty}.</code>
    </p>
    <p className="text-sm mt-2">
      <code>{question.description}</code>
    </p>
    <p className="text-sm mt-2">
      You can return the answer in any order.
    </p>
  </div>

  <div className="mb-4">
  </div>

  <div className="mb-4">

        <h2 className="text-xl font-semibold">Example 2:</h2>
        <p className="text-sm"><strong>Input:</strong> nums = [3,2,4], target = 6</p>
        <p className="text-sm"><strong>Output:</strong> [1,2]</p>

  </div>
  <div>
    <h2 className="text-xl font-semibold">Constraints:</h2>
    <div className="text-sm"><code>{question.Constraints}</code></div>
    <div className="text-sm">
        <code>{(question.timeCompelxity)? <div>Time Complexity Expected :{question.timeCompelxity}</div>:<div></div>}</code>
        </div>
  </div>
</div>
</ScrollArea>
        
    </div>
}