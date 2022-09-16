import { useEffect, useState } from "react";
import { ResultCard } from "./components/ResultCard";
import { getResults } from "./services/apiRequests";
import {SearchInput} from './components/SearchInput'
function App() {

  let [searchResult , setSearchResult] = useState([])

  useEffect(() => {
    getResults()
    .then(res => setSearchResult(res.data))
  },[])


  return searchResult ?
  (
    <div className="App">
      <SearchInput />
        <ul className="resultsList">
          {searchResult.map(each => <ResultCard key={each.id} {...each}/>)}
        </ul>
    </div>
  ) 
  : null
}

export default App;
