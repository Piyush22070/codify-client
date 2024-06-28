import Link from 'next/link';
import { SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import SkeletonCard from './skelatonCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { toast } from 'sonner';

export default function ProblemList() {
  const [showElement, setShowElement] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    axios.get(`https://codify-kmyn.onrender.com/question`)
    // axios.get(`http://localhost:8000/question`)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        toast("Wait for while ...free bcknd ;(")
      });

    const timer = setTimeout(() => {
      setShowElement(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = questions.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(questions.length / itemsPerPage);

  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='w-[400px] md:w-[700px] md:h-fit h-fit shadow-xl mt-3 px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider rounded-[5px]'>
      <div className='flex flex-row p-3'>
        <label className="block text-gray-700 text-l font-bold mb-2 p-2">Search</label>
        <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Search ..." />
      </div>

      <div>
        <table className='w-[370px] p-2'>
          <thead className='border-2 text-sm h-fit'>
            <tr>
              <td className='md:px-2'>Sr.no</td>
              <td className='md:px-[150px]'>Name</td>
              <td className='md:px-5'>Difficulty</td>
              <td className='md:px-9'>Code</td>
            </tr>
          </thead>
          {showElement ?
            <tbody>
              {currentItems.map((value, index) => (
                <tr key={index} className='border-2 text-center'>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td className='p-4 text-left'>{value.name}</td>
                  <td>{value.difficulty}</td>
                  <td className='text-blue-500'><Link href={`/problems/${value.id-1}`}>{`>`}</Link></td>
                </tr>
              ))}
            </tbody>
            :
            <tbody>
              {Array.from({ length: itemsPerPage }).map((_, index) => (
                <tr key={index} className='border-2 text-center'>
                  <td><SkeletonCard /></td>
                  <td className='p-4 text-left'><SkeletonCard /></td>
                  <td><SkeletonCard /></td>
                  <td className='text-blue-500'><SkeletonCard /></td>
                </tr>
              ))}
            </tbody>
          }
        </table>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, pageNumber) => (
              <PaginationItem key={pageNumber + 1}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(pageNumber + 1)}
                  isActive={pageNumber + 1 === currentPage}
                >
                  {pageNumber + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="#" onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
