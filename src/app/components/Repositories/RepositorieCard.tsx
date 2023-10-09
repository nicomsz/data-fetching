type Props = {
    name: string
    description: string
}
export default function RepositoryCard({ name, description }: Props) {
    return (
        <li className="lg:w-[250px] md:w-[380px]  w-[100%] rounded lg:max-w-[250px] p-4 lg:h-[320px] h-[250px] bg-slate-100 flex flex-col items-center justify-between  ">
            <span className="text-2xl lg:h-[20%] h-[30%] font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full text-end" >{name}</span>
            <div className="lg:h-[82%] h-[65%] flex items-end">
                <p className="text-[14px]  max-h-full overflow-y-auto overflow-hidden max-w-full">{description}</p>
            </div>
        </li>
    )
};
