import { createContext } from "react";
import { ILoading } from "../types/ILoading";
import { ReactNode, useState } from 'react'
export const LoadingContext = createContext({} as ILoading)

interface ILoadingContextProvider {
    children: ReactNode
}
export default function LoadingContextProvider({ children }: ILoadingContextProvider) {
    const [loading, setLoading] = useState<boolean>(false)
    return (
        <LoadingContext.Provider
            value={{ loading, setLoading }}
        >
            {children}
        </LoadingContext.Provider>
    )
}