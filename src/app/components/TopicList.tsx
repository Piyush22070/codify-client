import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"

const tags: any[] = [
    "Arrays and Strings",
    "Linked Lists",
    "Stacks and Queues",
    "Trees (Binary Trees, Binary Search Trees)",
    "Heaps (Binary Heaps)",
    "Graphs (Representation, DFS, BFS, Shortest Path Algorithms)",
    "Sorting Algorithms (Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort)",
    "Searching Algorithms (Linear Search, Binary Search)",
    "Dynamic Programming (Optimal Substructure, Overlapping Subproblems)",
    "Greedy Algorithms",
    "Backtracking",
  ]

export default function ScrollAreaDemo() {
    const [topic ,setTopic] = useState("default")

    useEffect(()=>{
      //alert(topic)
    })


  return (
    <div className="flex justify-center">

    <ScrollArea className=" h-[450px] w-[400px] md:w-[200px] shadow-lg">
      <div className="p-4   border-black]">
        <h4 className="mb-4 text-lg font-medium leading-none ">Topics :</h4>
        {tags.map((tag,index) => (
          <div  key={index} >
            <button onClick={()=>{setTopic(tag)}} className="text-sm ">
              {tag}
            </button>
            <Separator className="my-2  mt-2" />
          </div>
        ))}
      </div>
      </ScrollArea>
      </div>
  )
}


