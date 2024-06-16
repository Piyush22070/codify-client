import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

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
    "Divide and Conquer",
    "Segment Trees and Fenwick Trees (Binary Indexed Trees)",
    "Tries (Prefix Trees)",
    "String Matching Algorithms (KMP Algorithm, Rabin-Karp Algorithm)",
    "Advanced Graph Algorithms (Strongly Connected Components, Topological Sorting, Minimum Spanning Tree Algorithms)",
    "Computational Geometry (Convex Hull, Closest Pair of Points)",
    "Number Theory (Sieve of Eratosthenes, Primality Testing, Modular Arithmetic)",
    "Problem Solving (Algorithmic Problem Solving)",
    "Competitive Programming",
    "Interview Preparation"
  ]
  

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-lg border shadow-xl mt-2 mr-2  borde">
      <div className="p-4">
        <h4 className="mb-4 text-lg font-medium leading-none ">Topics :</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm ">
              {tag}
            </div>
            <Separator className="my-2  mt-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}


