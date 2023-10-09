import axios from "axios"
import { useEffect, useState } from "react"

type Props = {
    url: string
}
const api = axios.create({
    baseURL: 'https://api.github.com'
})
export default function useFetchGET<T = unknown>({ url }: Props) {
    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        api.get(url)
            .then(response => {
                setData(response.data)
            })
            .catch(error => setError(error))
            .finally(() => {
                setIsFetching(false)
            })
    }, [url])
    return { data, error, isFetching }
}