import axios from "axios"

type Props = {
    url: string
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const api = axios.create({
    baseURL: 'https://api.github.com'
})
export default async function fetchData({ url, setLoading }: Props) {
    setLoading(true)
    try {
        const response = await api.get(url)
        setLoading(false)
        return response.data
    } catch (err) {
        setLoading(false)
        return null
    }
}