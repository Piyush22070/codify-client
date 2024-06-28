"use client"
import { useEffect,useState } from "react"
import axios from 'axios'
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { toast } from "sonner"

export default function ProblemInfo(props: any){
    const [question,setQuesion] = useState({
      id: "1",
      name: "Name ",
      difficulty : "infinite",
      description : "description",
      Constraints : "Constraints",
      timeComplexity : "O()",
      like : "111",
      dislike : "222",
      example1: {
        Input: "strs = [\"flower\",\"flow\",\"flight\"]",
        Output: "\"fl\"",
        Explanation: "The longest common prefix is \"fl\"."
    }, 
     example2: {
      Input: "strs = [\"flower\",\"flow\",\"flight\"]",
      Output: "\"fl\"",
      Explanation: "The longest common prefix is \"fl\"."
  },
      Accepted: "",
      Submissions: "",
      sampleInput  : "",
      sampleOutput : ""
    })
    useEffect(
        ()=>{
           axios.get(`https://codify-kmyn.onrender.com/question/${props.index}`)
            // axios.get(`http://localhost:8000/question/${props.index}`)
            .then((response)=>{
                setQuesion(response.data)
            })
            .catch((error)=>{
             toast("Wait for while ...")
            })
        },[]
    )

    return <div>
      <button className="p-4 inline-flex items-center bg-gray-800 justify-center rounded-md text-sm font-medium text-white">
      <Link href="/problems"> {`<`}</Link></button>
        <ScrollArea>
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">{question.id} . {question.name}</h1>
    <div className="mb-4">
    <p className="text-sm flex gap-3">
      <code>{question.difficulty}</code>
      <code className="flex px-2"><Image src={"/images/heart.png"} alt={"like"} width={20} height={20}/>{question.like}</code>
      <code className="flex px-2"><Image src={"/images/dislike.png"} alt={"like"} width={20} height={10}/>{question.dislike}</code>
    </p>
    <p className="text-sm mt-2 py-5">
      <code>{question.description}</code>
    </p>
    <p className="text-sm mt-2">
      You can return the answer in any order.
    </p>
  </div>
  <div className="mb-4">
  </div>


  <div className="mb-4 bg-white shadow-lg p-3">

        <h2 className="text-xl font-semibold">Example 1:</h2>
        <p className="text-sm p-1"><strong>Input : </strong>{question.example1.Input} </p>
        <p className="text-sm p-1"><strong>Output : </strong>{question.example1.Output}</p>
        <p className="text-sm p-1"><strong>Explanation : </strong>{question.example1.Explanation}</p>
  </div>
  <div className="mb-4 bg-white shadow-lg p-3">

<h2 className="text-xl font-semibold">Example 2:</h2>
<p className="text-sm p-1"><strong>Input : </strong>{question.example2.Input} </p>
<p className="text-sm p-1"><strong>Output : </strong>{question.example2.Output}</p>
<p className="text-sm p-1"><strong>Explanation : </strong>{question.example2.Explanation}</p>
</div>

  <div>
    <h2 className="text-xl font-semibold">Constraints:</h2>
    <div className="text-sm"><code>{question.Constraints}</code></div>

    <div className="py-4 text-xl font-semibold ">
      Sample Input Output:
      </div>
      <div className=" flex md:flex-row flex-col gap-[50px]">
      <div><textarea className="h-[200px]" value={question.sampleInput} readOnly/> </div>
      <div ><textarea className="h-[200px]" value={question.sampleOutput} readOnly/></div>
      </div>


    <div className="text-sm py-2">
        <code>{(question.timeComplexity)? <div><strong>Time Complexity Expected : </strong>{question.timeComplexity}</div>:<div></div>}</code>
    </div>
    <div className="text-sm flex flex-col py-5">
      <div><strong><code>▷ Submissions : </code></strong>{question.Submissions}</div>
      <div><strong><code>▷ Accepted : </code></strong>{question.Accepted}</div>
    </div>
  </div>
</div>
</ScrollArea>
        
    </div>
}