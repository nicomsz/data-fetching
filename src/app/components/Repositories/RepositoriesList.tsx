import { useContext, useState } from "react"
import { RepositoriesContext } from "../../contexts/RepositoriesContext"
import { Repositories, Repository } from "@/app/types/Repositories"
import RepositoryCard from "./RepositorieCard"
import { LoadingContext } from "@/app/contexts/LoadingContext"



export default function RepositoriesList() {
    const { repositories } = useContext(RepositoriesContext)
    const { loading } = useContext(LoadingContext)
    return (
        <div className="w-full flex items-center justify-center">
            <ul className="flex flex-wrap gap-4 m-4  w-auto ">
                {loading ? (
                    <h1 className="text-2xl font-bold">Carregando informações...</h1>
                ) : (
                    repositories?.map((repo: Repository) => (
                        <RepositoryCard name={repo.name} description={repo.description} key={repo.name} />
                    ))
                )}

                {repositories === null && <h1 className="text-2xl font-bold">Não existe um usuário com esse nome.</h1>}
            </ul>
        </div>
    )
};
