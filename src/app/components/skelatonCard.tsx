import { Skeleton } from "@/components/ui/skeleton"
 
export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 w-full bg-slate-100">
        <Skeleton className="h-[5px]"  />
        <Skeleton className="h-[5px] " />
    </div>
  )
}