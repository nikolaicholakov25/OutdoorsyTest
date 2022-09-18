import React, { FC, useEffect, useState } from "react";
import { ResultCard } from "./components/ResultCard";
import { getResults, searchFor } from "./services/apiRequests";
import {SearchInput} from './components/SearchInput'

function App(){

  let [searchResult , setSearchResult] = useState<object[]>([])
  let [imagesArray,setImagesArray] = useState<object[]>([])
  
  useEffect(() => {
    getResults()
    .then(res => {
      setSearchResult(res.data)
      setImagesArray(res.included)
    })
  },[])

  const newSearch = (newQuery:string):void => {
    searchFor(newQuery)
    .then(res => {
      setSearchResult(res.data)
      setImagesArray(res.included)
    })
  }

  interface EachProps {
    attributes?:{
      primary_image_url?:string;
      name?:string;
  }
  imgArray:object[]
  id?:string;
  relationships?: {
      primary_image?: {
          data?: {
              id:string;
              type: string;
          }
      }
  };
  type?: string;
  key?:string;
  }

  return ( 
    <div className="App">
      <SearchInput changeQuery={newSearch}/>
        <ul className="resultsList">
          {
            searchResult.length > 0
            ? searchResult.map((each:EachProps) => <ResultCard imgArray={imagesArray} key={each.id} {...each}/>)
            :
            <li>No Matches Found</li>
          }
        </ul>
    </div>
  )
}

export default App;
