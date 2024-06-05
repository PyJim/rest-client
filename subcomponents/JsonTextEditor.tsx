// components/Body.tsx
'use client'
import React from 'react';
import ReactJson from 'react-json-view';
import 'tailwindcss/tailwind.css';
import { useDataContext } from '@/contexts/DataProvider';

interface BodyProps {
  data?: object | any[]; // Making data prop optional
}

const Body: React.FC<BodyProps> = ({ data = {} }) => {

  const { result } = useDataContext();
  if (result != null) {
    data = result;
  }

  return (
    <div className="p-4 border border-gray-300 rounded bg-white">
      <h2 className="text-xl font-bold mb-4">Body</h2>
        <ReactJson
          src={data}
          theme="monokai"
          style={{ padding: "20px", borderRadius: "10px", maxHeight: "400px", overflowY: "scroll" }}
          enableClipboard={false}
          displayDataTypes={false}
          displayObjectSize={false}
          name={null}

        />
      
    </div>
  );
};

export default Body;
