'use client'
import React, { useState, useEffect } from 'react';
import { useDataContext } from '@/contexts/DataProvider';

interface Param {
  key: string;
  value: string;
}

const QueryParams: React.FC = () => {
  const { requestData, updateRequestData } = useDataContext();
  const [params, setParams] = useState<Param[]>([]);

  useEffect(() => {
    const queryParams = Object.entries(requestData.params).map(([key, value]) => ({ key, value }));
    setParams(queryParams.length ? queryParams : [{ key: '', value: '' }]);
  }, [requestData.params]);

  const handleAdd = () => {
    setParams([...params, { key: '', value: '' }]);
  };

  const handleRemove = (index: number) => {
    const newParams = params.filter((_, i) => i !== index);
    setParams(newParams);
    updateUrlParams(newParams);
  };

  const handleChange = (index: number, field: 'key' | 'value', value: string) => {
    const newParams = params.map((param, i) =>
      i === index ? { ...param, [field]: value } : param
    );
    setParams(newParams);
    updateUrlParams(newParams);
  };

  const updateUrlParams = (newParams: Param[]) => {
    const queryString = newParams
      .filter(param => param.key && param.value)
      .map(param => `${encodeURIComponent(param.key)}=${encodeURIComponent(param.value)}`)
      .join('&');

    const updatedUrl = requestData.url.split('?')[0] + (queryString ? `?${queryString}` : '');

    updateRequestData({
      ...requestData,
      url: updatedUrl,
      params: Object.fromEntries(newParams.map(param => [param.key, param.value])),
    });
  };

  return (
    <div>
      {params.map((param, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="text"
            placeholder="Key"
            value={param.key}
            onChange={(e) => handleChange(index, 'key', e.target.value)}
            className="border border-gray-300 p-2 rounded mr-2"
          />
          <input
            type="text"
            placeholder="Value"
            value={param.value}
            onChange={(e) => handleChange(index, 'value', e.target.value)}
            className="border border-gray-300 p-2 rounded mr-2"
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
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default QueryParams;
