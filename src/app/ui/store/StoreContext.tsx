'use client';
import React, { createContext, useContext, ReactNode, useMemo } from "react";

import type { Employee } from "@/app/src/lib/definitions";
import { useGetData } from "@/app/src/hooks/useGetData";

type StoreContextType = {
    data: Employee[];
    loading: boolean;
    error: string | null; 
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: {children: ReactNode }) => {
    const { data, loading, error } = useGetData();

    const value = useMemo(() => ({
        data, loading, error
    }), [ data, loading, error ])


    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => {
    const context = useContext(StoreContext);
    if(!context){
        throw new Error('useStore must be used within a StoreProvider.')
    }
    return context;
}