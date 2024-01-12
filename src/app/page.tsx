'use client'
import React, { useState, useEffect } from 'react';
import QueryInput from './components/QueryInput';
import QueryResults from './components/QueryResults';
import QuerySelector from './components/QuerySelector';
import usefetch from './components/csvfetch';
import Scheema from './components/schema';
import { predefinedQueries } from './components/predefinedQueries';
const { fetchcsv } = usefetch();

interface Row {
  [key: string]: string;
}

const Home:React.FC = () => {
  const [queryInput, setQueryInput] = useState<string>('');
  const [queryResults, setQueryResults] = useState<Row[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [csvdata, setcsvdata] = useState<any[]>([]);

console.time('myoperation')
  useEffect(() => {
    fetchcsv('/data/orders.csv', setcsvdata)
  }, [])


  const handleInput = (inputValue: string) => {
    setQueryInput(inputValue);
  };

  const handleQuerySelect = (selectedQuery: string) => {
    // Set the selected query into the QueryInput component
    setQueryInput(selectedQuery);
  };


  const executeQuery = async (query: string) => {
    setLoading(true);
    setError(null);

    if (!queryInput) {
      setError('Please select a query before executing.');
      setLoading(false);
      return;
    }

    try {
      // Simulate fetching data from a server using a mock API function
      const response = await fetchMockData(query);

      // Assuming the response is an array of objects representing rows
      setQueryResults(response);
    } catch (error) {
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchMockData = async (query: string): Promise<Row[]> => {
    // Simulate fetching data from a server
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock response with rows based on the executed query
        // if (query.includes('SELECT * FROM table1')) {
        //   resolve([]);

        // } else 
        if (query.includes('employee_id = 1')) {
          const filteredData = csvdata.filter((row) => row["employeeID"] === 1);

          resolve(filteredData);
          console.log(filteredData);
          // Add more conditions for different queries if needed
        } else if (query.includes('employee_id = 2')) {
          const filteredData = csvdata.filter((row) => row["employeeID"] === 2);

          resolve(filteredData);
          console.log(filteredData);
          // Add more conditions for different queries if needed
        } else if (query.includes('employee_id = 3')) {
          const filteredData = csvdata.filter((row) => row["employeeID"] === 3);

          resolve(filteredData);
          console.log(filteredData);
          // Add more conditions for different queries if needed
        }
        else if (query.includes('Hanari Carnes')) {
          const filteredData = csvdata.filter((row) => row["shipName"] === 'Hanari Carnes');

          resolve(filteredData);
          console.log(filteredData);
          // Add more conditions for different queries if needed
        }
        else if (query.includes('Rio de Janeiro')) {
          const filteredData = csvdata.filter((row) => row["shipCity"] === 'Rio de Janeiro');

          resolve(filteredData);
          console.log(filteredData);
          // Add more conditions for different queries if needed
        }
        else if (query.includes('freight < 50')) {
          const filteredData = csvdata.filter((row) => row["freight"] < 50);

          resolve(filteredData);
          console.log(filteredData);
          // Add more conditions for different queries if needed
        }
        else if (query.includes('freight > 100')) {
          const filteredData = csvdata.filter((row) => row["freight"] > 100);

          resolve(filteredData);
          console.log(filteredData);
          // Add more conditions for different queries if needed
        }
        else if (query.includes('SELECT * FROM table1')) {
          // Default response
          resolve(csvdata)
        } else{
          // Default response
          resolve(csvdata)
        }
      }, 1000); // Simulate a delay in fetching data
    },);
  };

  return (
    
    <div className='md:bg-[#f9f7f7] justify-center min-h-screen '>
      <div className=" mx-4 sm:mx-6 md:mx-14 p-4 items-center">

        <div className='grid md:grid-cols-2 xs:grid-cols-1 gap-4 justify-between my-3  '>
          <Scheema />
          <div className='flex-inline w-full border rounded-lg px-3 py-4 shadow bg-white'>
            <QuerySelector queries={predefinedQueries} onQuerySelect={handleQuerySelect} />
            <QueryInput onExecuteQuery={(query) => executeQuery(query)} onInput={handleInput} selectedQuery={queryInput} />
          </div>
        </div>
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && <QueryResults results={queryResults} />}
      </div>
    </div>
  );
};
console.timeEnd('myoperation')
export default Home;

