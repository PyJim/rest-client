'use client'

import React, { useState, createContext, useContext } from 'react';

interface Status{
    code: number | null;
    time: number | null;
    size: string | null;
}


interface RequestData {
    url: string;
    method: string;
    headers: Record<string, string>;
    params: Record<string, string>;
    body: object;
    responseHeaders: Record<string, string>;
    status: Status;
}


type Data = {
    requestData: RequestData;
    result: any;
    updateRequestData: (requestData: RequestData) => void;
    updateResult: (result: any) => void;
}

const DataContext = createContext<Data | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
    const [requestData, setRequestData] = useState<RequestData>({
        url: '',
        method: 'GET',
        headers: {},
        params: {},
        body: {},
        responseHeaders: {},
        status: {
            code: null,
            time: null,
            size: null
        }
    });

    const [result, setResult] = useState<any>(null);

    const updateRequestData = (newRequestData: RequestData) => {
        setRequestData(newRequestData);
    };

    const updateResult = (newResult: any) => {
        setResult(newResult);
    };

    return (
        <DataContext.Provider value={{ requestData, result, updateRequestData, updateResult }}>
            {children}
        </DataContext.Provider>
    );
}

export function useDataContext() {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
}
