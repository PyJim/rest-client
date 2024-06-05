// components/Response.tsx
'use client'

import React from 'react';
import { useDataContext } from '@/contexts/DataProvider';

const Response: React.FC = () => {
  const { requestData } = useDataContext();
  const { status } = requestData;

  return (
    <div className="p-4 border border-gray-300 rounded">
      <h2 className="text-2xl font-bold mb-4">Response</h2>
      <div className="mb-2 flex gap-[20px]">
        <span className="font-semibold">Status Code:</span> {status.code}
        <span className="font-semibold">Time:</span> {status.time} ms
        <span className="font-semibold">Size:</span> {status.size}
      </div>
    </div>
  );
};

export default Response;
