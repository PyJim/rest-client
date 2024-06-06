// components/Response.tsx
'use client'

import React from 'react';
import { useDataContext } from '@/contexts/DataProvider';

const Response: React.FC = () => {
  const { requestData } = useDataContext();
  const { status } = requestData;

  return (
    <div className="p-4 border border-gray-300 rounded">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Response</h2>
      <div className="mb-2 flex gap-[20px]">
        <span className="text-xs sm:text-sm md:text-base font-semibold">Status Code:</span> <span className='text-xs sm:text-sm md:text-base'>{status.code}</span>
        <span className="text-xs sm:text-sm md:text-base font-semibold">Time:</span> <span className='text-xs sm:text-sm md:text-base'>{status.time} ms</span>
        <span className="text-xs sm:text-sm md:text-base font-semibold">Size:</span> <span className='text-xs sm:text-sm md:text-base'>{status.size}</span>
      </div>
    </div>
  );
};

export default Response;
