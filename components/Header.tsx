// components/Headers.tsx
import React, { useState } from 'react';
import { useDataContext } from '@/contexts/DataProvider';

interface Header {
  key: string;
  value: string;
}

const Headers: React.FC = () => {
  const { requestData, updateRequestData } = useDataContext();
  const [headers, setHeaders] = useState<Header[]>([{ key: '', value: '' }]);

  const handleChange = (index: number, field: 'key' | 'value', value: string) => {
    const newHeaders = headers.map((header, i) => 
      i === index ? { ...header, [field]: value } : header
    );
    setHeaders(newHeaders);

    // Construct updatedHeaders object
    const updatedHeaders = newHeaders.reduce((acc, curr) => {
      if (curr.key && curr.value) {
        acc[curr.key] = curr.value;
      }
      return acc;
    }, {} as Record<string, string>);

    // Update requestData with updatedHeaders
    updateRequestData({
      ...requestData,
      headers: updatedHeaders
    });
  };

  const handleAdd = () => {
    setHeaders([...headers, { key: '', value: '' }]);
  };

  const handleRemove = (index: number) => {
    const newHeaders = headers.filter((_, i) => i !== index);
    setHeaders(newHeaders);

    // Construct updatedHeaders object
    const updatedHeaders = newHeaders.reduce((acc, curr) => {
      if (curr.key && curr.value) {
        acc[curr.key] = curr.value;
      }
      return acc;
    }, {} as Record<string, string>);

    // Update requestData with updatedHeaders
    updateRequestData({
      ...requestData,
      headers: updatedHeaders
    });
  };

  return (
    <div>
      {headers.map((header, index) => (
        <div key={index} className="flex flex-col sm:flex-row items-start mb-2">
          <input
            type="text"
            placeholder="Key"
            value={header.key}
            onChange={(e) => handleChange(index, 'key', e.target.value)}
            className="border border-gray-300 p-2 rounded mr-2 mb-1 w-full sm:w-auto"
          />
          <input
            type="text"
            placeholder="Value"
            value={header.value}
            onChange={(e) => handleChange(index, 'value', e.target.value)}
            className="border border-gray-300 p-2 rounded mr-2 mb-1 w-full sm:w-auto"
          />
          <button
            onClick={() => handleRemove(index)}
            className="bg-red-500 text-white p-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white py-2 px-4 rounded my-3 sm:my-0"
      >
        Add
      </button>
    </div>
  );
};

export default Headers;
