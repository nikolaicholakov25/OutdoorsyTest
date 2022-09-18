import { FC} from "react"

interface Props{
    changeQuery: (e:any) => void
}

export const SearchInput:FC<Props> = (props):JSX.Element => {
    return (
        <div className="inputField">
            <input type="text" placeholder="Search..." onChange={(e) => props.changeQuery(e.target.value)} />
        </div>
    )
}