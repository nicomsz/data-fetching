import { createContext, useState, ReactNode } from "react";
import { Repositories } from "../types/Repositories";

interface RepositoriesContextProps {
    repositories: Repositories
    setRepositories: React.Dispatch<React.SetStateAction<Repositories>>
}
type IContextProvider = {
    children: ReactNode
}

export const RepositoriesContext = createContext({} as RepositoriesContextProps)

export default function RepositoriesContextProvider({ children }: IContextProvider) {
    const [repositories, setRepositories] = useState<Repositories>([])
    return (
        <RepositoriesContext.Provider value={{
            repositories,
            setRepositories
        }}>
            {children}
        </RepositoriesContext.Provider>
    )
}