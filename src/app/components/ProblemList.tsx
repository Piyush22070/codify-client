
import {problems} from '@/app/problems/data'
import  Link  from 'next/link'
export default function ProblemList(){


  return (
    <div className='w-[600px] h-[1000px] shadow-xl mt-3'>
      <div className='flex flex-row p-3'>      
      <label className="block text-gray-700 text-l font-bold mb-2 p-2 " >Search  </label>
<input type="text" 
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
       placeholder="Search ..."/>
      </div>

      
      <table className="min-w-full bg-white border overflow-x-auto">
      <thead className=" mt-2">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr.No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
            </tr>
        </thead>

      {problems.map((val,index)=>{
       
        return (
        <tbody  className ="bg-white divide-y divide-gray-200 " key={index}>
            <tr className={`transition-all bg-slate-${1}00` } >
              <td className=" px-6 py-4 whitespace-nowrap">{val.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{val.name}</td>
              <td className=" px-6 py-4 whitespace-nowrap">{val.difficulty}</td>
            <Link className=" text-indigo-600 hover:text-indigo-900 text-center" href={`/problems/${index+1}`} >solve</Link>
            </tr>
        </tbody>
        )
    })}
     </table>
    </div>
  )
}