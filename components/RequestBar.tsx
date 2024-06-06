'use client'

import React, { useState, useEffect } from 'react';
import { useDataContext } from '@/contexts/DataProvider';
import prettyBytes from 'pretty-bytes';

const RequestBar: React.FC = () => {
  const { requestData, updateResult, updateRequestData } = useDataContext();
  const [requestMethod, setRequestMethod] = useState(requestData.method);
  const [requestUrl, setRequestUrl] = useState(requestData.url);

  useEffect(() => {
    setRequestMethod(requestData.method);
    setRequestUrl(requestData.url);
  }, [requestData]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (requestUrl) {
      try {
        const startTime = Date.now();

        const response = await fetch(requestUrl, {
          method: requestMethod,
          headers: {
            'Content-Type': 'application/json',
            ...requestData.headers
          },
          body: requestMethod !== 'GET' ? JSON.stringify(requestData.body) : null
        });

        const endTime = Date.now();
        const responseTime = endTime - startTime;
        const statusCode = response.status;

        const result = await response.json();
        const responseHeaders = Object.fromEntries(response.headers.entries());

        const responseSize = prettyBytes(new Blob([result]).size + JSON.stringify(responseHeaders).length);


        updateRequestData({
          ...requestData,
          responseHeaders,
          status: { code: statusCode, time: responseTime, size: responseSize }
        });

        updateResult(result);
      } catch (error) {
        console.error('Error making the request:', error);
      }
    } else {
      console.error('Please enter a valid URL');
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setRequestUrl(newUrl);

    try {
      const url = new URL(newUrl, window.location.origin); // Parse the URL
      const params: { [key: string]: string } = {};
      url.searchParams.forEach((value, key) => {
        params[key] = value;
      });
      updateRequestData({ ...requestData, url: newUrl, params });
    } catch (error) {
      console.error('Invalid URL:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="input-group mb-4">
      <select
        className="form-select flex-grow-0 w-auto text-xs sm:text-sm md:text-base"
        value={requestMethod}
        onChange={(e) => setRequestMethod(e.target.value)}
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="PATCH">PATCH</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input
        required
        className="form-control text-xs sm:text-sm md:text-base"
        type="url"
        placeholder="https://example.com/"
        value={requestUrl}
        onChange={handleUrlChange}
      />
      <button type="submit" className="btn btn-primary text-xs sm:text-sm md:text-base">Send</button>
    </form>
  );
};

export default RequestBar;
