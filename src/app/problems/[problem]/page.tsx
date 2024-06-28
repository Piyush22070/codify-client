"use client"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import ProblemInfo from '@/app/components/ProblemInfo'
import Output from "@/app/components/Output"
import CodingArea from "@/app/components/CodingArea"
import { toast } from "sonner"
import { useState } from "react"
import axios from "axios"

export default function Problem({ params }: any) {
    const [output, setOutput] = useState("")
    const [accepted, setAccepted] = useState(true)
    const [code, setCode] = useState("")
    const [language, setLanguage] = useState("cpp")
    const [showOutput, setShowOutput] = useState(false)

    const giveOutput = async () => {
        const obj = {
            code: [code],
            language: language
        }
        try {
            const response = await axios.post('http://localhost:8000/solve', obj)
            setOutput(response.data.output)
            setAccepted(true)
        } catch (error: any) {
            setOutput(error.response.data.stderr)
            setAccepted(false)
        }
    }

    const run = () => {
        setShowOutput(!showOutput)
        giveOutput()
    }

    const submit = () => {
        alert("Code Submitted")
    }

    const saveCode = () => {
        toast("Code Saved!")
    }

    return (
        <div>
            <div className="md:hidden p-1 w-full h-[800px] shadow-lg mt-3">
                <ResizablePanelGroup direction="vertical" className="rounded-lg gap-[2px]">
                    {/* Problem Info Area Panel */}
                    <ResizablePanel defaultSize={50} className="bg-slate-100 rounded-xl">
                        <ProblemInfo index={params.problem} />
                    </ResizablePanel>

                    <ResizableHandle />
                    {/* Coding Area Panel */}
                    <ResizablePanel className="bg-slate-100 rounded-xl">
                        <CodingArea setCode={setCode} setLanguage={setLanguage} />
                    </ResizablePanel>
                    {showOutput && <Output output={output} accepted={accepted} />}
                </ResizablePanelGroup>
            </div>
            <div className="hidden md:flex p-1 w-full h-fit shadow-lg mt-3">
                <ResizablePanelGroup direction="horizontal" className="rounded-lg gap-[2px]">
                    {/* Problem Info Area Panel */}
                    <ResizablePanel defaultSize={50} className="bg-slate-100 rounded-xl">
                        <ProblemInfo index={params.problem} />
                    </ResizablePanel>
                    <ResizableHandle />
                    {/* Coding Area Panel */}
                    <ResizablePanel className="bg-slate-100 rounded-xl">
                        <CodingArea setCode={setCode} setLanguage={setLanguage} />
                    </ResizablePanel >
                    {showOutput && <Output output={output} accepted={accepted} />}
                </ResizablePanelGroup>
            </div>
            <div className="mt-2 bg-slate-100 p-3 rounded-lg shadow-lg flex justify-end items-end mr-4">
                <button onClick={run} className="bg-white mr-3 p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    {!showOutput ? "Run" : "Hide"}
                </button>
                <button onClick={submit} className="bg-white p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Submit
                </button>
                <button onClick={saveCode} className="bg-white ml-3 p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Save
                </button>
            </div>
        </div>
    )
}
