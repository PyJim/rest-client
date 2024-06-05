import React from 'react';
import { useDataContext } from '@/contexts/DataProvider';

interface Headers {
  [key: string]: unknown; // Type definition for headers
}

const ResponseHeader: React.FC = () => {
  const { requestData } = useDataContext(); // Destructure requestData from the context

  // Safely extract responseHeaders from requestData, assuming responseHeaders is an object with string keys and unknown values
  const headers: Headers = requestData?.responseHeaders ?? {};

  // Ensure headers is an object before proceeding
  const isValidHeaders = headers && typeof headers === 'object' && !Array.isArray(headers);

  return (
    <div className="p-4 border border-gray-300 rounded bg-white">
      {isValidHeaders ? (
        <ul className="list-disc pl-5">
          {Object.entries(headers).map(([key, value]) => (
            <li key={key} className='mb-2'>
              <span>{key}:</span> {String(value) || 'unknown'} {/* Convert value to string */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No headers available</p>
      )}
    </div>
  );
};

export default ResponseHeader;
