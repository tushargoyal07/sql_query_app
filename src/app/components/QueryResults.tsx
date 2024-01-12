
import React, { useEffect, useState } from 'react';
import usefetch from './csvfetch';

interface QueryResultsProps {
  results: any[]; // Placeholder for actual result data
}
const { fetchcsv } = usefetch();
export const QueryResults: React.FC<QueryResultsProps> = ({ results }) => {
  const [csvdata, setcsvdata] = useState<any[]>([]);

  useEffect(() => {
    fetchcsv('/data/orders.csv', setcsvdata)
  }, [])


  return (
    <div className="my-10 w-full object-cover border rounded-md shadow px-5 py-4 bg-white">
      <h2 className="text-base justify-center text-center font-normal mb-4 ">
      <span className='border rounded-md px-3 py-1   text-gray-700' >QUERY RESULTS</span>
      </h2>
      <table className="flex flex-wrap w-full border rounded-sm  border-separate border-tools-table-outline overflow-auto ">
        {/* Placeholder for table header */}
        <thead className='font-bold text-center justify-center  ' >
          <tr>
            <td className="border p-2">Employee Id</td>
            <td className="border p-2">Ship Name</td>
            <td className="border p-2">Ship City</td>
            <td className="border p-2">Freight</td>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody className='text-center justify-center text-md font-serif text-gray-500'>
          {/* Placeholder for table rows */}
          {results.map((row, index) => (
            <tr key={index} >
              <td className="border p-2">{row["employeeID"]}</td>
              <td className="border p-2">{row["shipName"]}</td>
              <td className="border p-2">{row["shipCity"]}</td>
              <td className="border p-2">{row["freight"]}</td>
              {/* Add more cells based on actual data structure */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryResults