// components/ResponseTab.tsx
'use client'
import { useState } from 'react';
import JsonTextEditor from '@/subcomponents/JsonTextEditor';
import ResponseHeader from '@/subcomponents/ResponseHeader';

const tabs = ['Body', 'Headers'];

const ResponseTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Body');

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
        {activeTab === 'Body' && <JsonTextEditor data={[]}/>}
        {activeTab === 'Headers' && <ResponseHeader />
}
      </div>
    </div>
  );
};

export default ResponseTab;
