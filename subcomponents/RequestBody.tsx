// components/RequestBody.tsx
'use client'

import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import { useDataContext } from '@/contexts/DataProvider';

const RequestBody: React.FC = () => {
  const { requestData, updateRequestData } = useDataContext();
  const [jsonText, setJsonText] = useState<string>('{}');

  const handleJsonChange = (edit: any) => {
    const updatedBody = JSON.parse(JSON.stringify(edit.updated_src));
    setJsonText(JSON.stringify(updatedBody, null, 2));
    updateRequestData({ ...requestData, body: updatedBody }); // Update the requestData with the updated body
  };

  return (
    <div className="p-4 border border-gray-300 rounded bg-white">
      <h2 className="text-s sm:text-base md:text-xl font-bold mb-4">Request Body</h2>
      <ReactJson
        src={JSON.parse(jsonText)}
        theme="monokai"
        style={{ padding: "20px", borderRadius: "10px" }}
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={false}
        onEdit={handleJsonChange}
        onAdd={handleJsonChange}
        onDelete={handleJsonChange}
        name={null}
      />
    </div>
  );
};

export default RequestBody;
