"use client"
import { useEffect,useState } from "react"
import axios from 'axios'

export default function ProblemInfo(props: any){
    const [question,setQuesion] = useState("")
    useEffect(
        ()=>{
            axios.get(`http://localhost:3001/problems/${props.index}`)
            .then((response)=>{
                setQuesion(response.data)
            })
            .catch((error)=>{
                console.log("Nai mila bhai")
            })
        }
    )
    return <div>
        
        {props.index} : {question}
    </div>
}