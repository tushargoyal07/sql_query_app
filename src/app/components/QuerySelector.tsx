import React from 'react';

interface QuerySelectorProps {
  queries: string[];
  onQuerySelect: (selectedQuery: string) => void;
}

const QuerySelector: React.FC<QuerySelectorProps> = ({ queries, onQuerySelect }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedQuery = event.target.value;
    onQuerySelect(selectedQuery);
  };

  return (
    <div className="flex-wrap ">
      <h2 className=" text-base font-normal mb-2 text-center justify-center">
        <span className='border rounded-md px-3 py-1 my-4  text-gray-700' >
          Select Query
        </span>
      </h2>
      <select
        className=" p-2 mt-2 border rounded-md border-gray-300 w-1/2"
        onChange={handleSelectChange}
        
      >

        <option value="" className=''>
          Choose a query
        </option>
        
        {queries.map((query, index) => (
         
          <option key={index} value={query} className='text-sm font-normal py-1 px-2 '>
            {query}
          </option>
         
        )
        )}
       
      </select>
    </div>
  );
};

export default QuerySelector;
