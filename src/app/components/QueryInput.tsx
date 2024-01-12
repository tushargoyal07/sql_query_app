import React, { useEffect, useState } from 'react';

interface QueryInputProps {
  onExecuteQuery: (query: string) => void;
  onInput : (query: string) => void;
  selectedQuery: string;
}

const QueryInput: React.FC<QueryInputProps> = ({ onExecuteQuery, onInput,selectedQuery }) => {
  const [query, setQuery] = useState<string>('');

  const handleExecuteQuery = () => {
    onExecuteQuery(query);
  };
  useEffect(() => {
    setQuery(selectedQuery)
  }, [selectedQuery])
  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    onInput(inputValue); // Send input value to the parent component
  };


  return (
    <div className="my-4">
      <textarea
        id='sqlTextarea'
        className="w-full h-32 p-2 border rounded-md border-gray-300"
        placeholder="Enter your SQL query..."
        value={query}
        onChange={handleInput}
        
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-transform duration-75 transform hover:scale-105 "
        onClick={handleExecuteQuery}
      >
        Execute Query
      </button>
    </div>
  );
};

export default QueryInput