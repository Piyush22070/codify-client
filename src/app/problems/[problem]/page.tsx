"use client"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  import ProblemInfo from '@/app/components/ProblemInfo'
  import Output from "@/app/components/Output"
  import CodingArea from "@/app/components/CodingArea"

export default function problem({params} : any){

    return <div className=" p-1 w-full  h-[700px] shadow-lg mt-3">

            <ResizablePanelGroup direction="horizontal" className=" rounded-lg gap-[2px]">
                        {/*This is Problem Info Area pannel */}
                        <ResizablePanel defaultSize={50} className=" bg-slate-100">
                            <ProblemInfo index = {params.problem}/>
                        </ResizablePanel>

                <ResizableHandle/>

                <ResizablePanel defaultSize={50}>

                    <ResizablePanelGroup direction="vertical" className="gap-[2px]">

                        {/*This is Coding Area pannel */}
                        <ResizablePanel defaultSize={80} className=" bg-slate-100">
                            <CodingArea/>
                        </ResizablePanel>
                    
                    <ResizableHandle />

                    {/*This is Output Area pannel */}
                    <ResizablePanel defaultSize={20} className=" bg-slate-600">
                        <Output/>
                    </ResizablePanel>
                            
                    </ResizablePanelGroup>

                </ResizablePanel>

            </ResizablePanelGroup>
    </div>
}