// components/TabNavigator.tsx
'use client'
import { useState } from 'react';
import QueryParams from './QueryParams';
import Headers from './Header';
import RequestBody from '@/subcomponents/RequestBody';

const tabs = ['Query Params', 'Headers', 'JSON'];

const TabNavigator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Query Params');

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 -mb-px ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 border-top-0 border">
        {activeTab === 'Query Params' && <QueryParams/>}
        {activeTab === 'Headers' && <Headers/>}
        {activeTab === 'JSON' && <RequestBody/>}
      </div>
    </div>
  );
};

export default TabNavigator;
