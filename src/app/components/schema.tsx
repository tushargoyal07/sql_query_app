const Scheema=()=>{
    return(
    <div className='flex flex-col flex-wrap justify-around border rounded-lg px-3 py-4 shadow items-center bg-white'>
          <h2 className="text-base mt-6 text-center justify-center font-normal   ">
            <span className='border rounded-md px-3 py-1   text-gray-700' >Schema</span></h2>
          <table className="flex flex-wrap w-full mb-12 rounded-sm border border-separate border-tools-table-outline overflow-auto">
            {/* Placeholder for table header */}
            <thead className="">
              <tr className=' '>
                <th className=" border  p-2">Column 1</th>
                <th className=" border  p-2">Column 2</th>
                <th className=" border  p-2">Column 3</th>
                <th className=" border  p-2">Column 4</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody className="">
              <tr className="text-center text-md font-serif text-gray-700">
              {/* Placeholder for table rows */}
              <td className="border p-2">Employee Id</td>
              <td className="border p-2">Ship Name</td>
              <td className="border p-2">Ship City</td>
              <td className="border p-2">Freight</td>
              
              {/* Add more cells based on actual data structure */}
              </tr>
              <tr className="text-center text-sm font-serif text-gray-700 ">
              {/* Placeholder for table rows */}
              <td className="border p-2 text-base">INT</td>

              <td className="border p-2 text-base">VARCHAR(30)</td>
              <td className="border p-2 text-base">VARCHAR(30)</td>
              <td className="border p-2 text-base">FLOAT</td>
              
              {/* Add more cells based on actual data structure */}
              </tr>
            </tbody>
          </table>
        </div>
    )
}
export default Scheema;