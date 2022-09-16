import { useState } from "react"

export const SearchInput = () => {

    let [query,setQuery] = useState('')

    const checkParams = () => {

    }

    console.log(query);

    return (
        <div className="inputField">
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
        </div>
    )
}