import  Link  from 'next/link'
import { useEffect, useState } from 'react';
import { SkeletonCard } from './skelatonCard';
import axios from 'axios'

export default function ProblemList(){

  const [showElement, setShowElement] = useState(false);
  const [question ,setQ] = useState([{
    name : "",
    difficulty : "",

  },]);

  useEffect(() => {
    axios.get(`http://localhost:3001/problems`)
      .then((response) => {
        setQ(response.data);
      })
      .catch((error) => {
        console.log("Nai mila bhai");
      });

    const timer = setTimeout(() => {
      setShowElement(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); 


  console.log(question)  
  return (


    <div className='w-[700px] h-[1000px] shadow-xl mt-3 px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider rounded-[5px] '>
      <div className='flex flex-row p-3'>      
      <label className="block text-gray-700 text-l font-bold mb-2 p-2 " >Search</label>
      <input type="text"className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
       placeholder="Search ..."/>
      </div>

    <div >
     <table >
      <thead className=' border-2 text-sm h-fit'>
        <tr>
        <td className='px-2'>Sr.no</td>
        <td className='px-[150px]'>Name</td>
        <td className='px-5'>Difficulty</td>
        <td className='px-9'>Code</td>
        </tr>
      </thead>

      {(showElement) ?
      <tbody>
        {question.map((value,index)=>{
          return(
            <tr key={index} className='border-2 text-center'>
            <td className=''>{index+1}</td>
            <td className=' p-4 text-left'>{value.name}</td>
            <td>{value.difficulty}</td>
            <td className=' text-blue-500'><Link href={`/problems/${index+1}`}>{`>`}</Link></td>
          </tr>
          )
        })}
      </tbody> 
      : 
      <tbody>
        {question.map((value,index)=>{
          return(
            <tr key={index} className='border-2 text-center'>
            <td className=''><SkeletonCard/></td>
            <td className=' p-4 text-left'><SkeletonCard/></td>
            <td ><SkeletonCard/></td>
            <td className=' text-blue-500'><SkeletonCard/><Link href={`/problems/${index+1}`}></Link></td>
          </tr>
          )
        })}
      </tbody> } 
      
     </table>
    </div>
     
    </div>
  )
}