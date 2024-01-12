'use client'
import Papa from 'papaparse';
type Callback = (data: any) => void;

const usefetch =() =>{

    const fetchcsv = async (filePath : string, callback: Callback) => {
        const response = await fetch(filePath);
        const reader = response.body!.getReader();
        const result = await reader.read(); // raw array
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result.value!); // the csv text
        const {data} = Papa.parse(csv,
            {
                header:true,
                dynamicTyping:true
            })
        
        callback(data) // array of objects
    }

    return { fetchcsv }
}

export default usefetch;