'use client'
import { LoadingContext } from "@/app/contexts/LoadingContext"
import { RepositoriesContext } from "@/app/contexts/RepositoriesContext"
import FetchGET from "@/app/hooks/useFetchGET"
import useFetchGET from "@/app/hooks/useFetchGET"
import fetchData from "@/app/utils/fetchData"
import { useContext, useState } from "react"


export default function Header() {

    const { setRepositories } = useContext(RepositoriesContext)
    const { setLoading } = useContext(LoadingContext)
    const [name, setName] = useState('')

    async function handleFetch() {
        let data = await fetchData({ url: `/users/${name}/repos`, setLoading  })
        console.log('data', data)
        setRepositories(data)
    }
    return (
        <header className='bg-slate-200 flex-col h-[100px] flex lg:flex-row justify-center items-center w-full'>
            <div className="h-[30%]">
                <span className="lg:text-xl text-xl font-semibold">Digite seu nome no GitHub:</span>
            </div>
            <div className="lg:w-[35%] w-full h-[50%] lg:h-[100%] flex justify-center items-center gap-4">
                <input type="text" placeholder='Nome' onChange={((e) => setName(e.target.value))} className='rounded text-[14px] w-[50%] h-[80%] lg:h-[45%] p-4 border-none focus:outline-none' />
                <button onClick={(() => handleFetch())} className="w-[30%] bg-black text-white h-[80%] lg:h-[45%] rounded active:bg-white duration-100  active:text-black">
                    Buscar
                </button>
            </div>
        </header>
    )
};
