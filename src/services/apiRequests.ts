
let url:string = 'https://search.outdoorsy.com/rentals/?page[limit]=8'

// '?filter[keywords]=trailer&page[limit]=7'

export const getResults = ():Promise<any> => {
    return fetch(url)
    .then(res => res.json())
    .catch(err => alert(err.message))
}

export const searchFor = (words:string):Promise<any> => {
    let searchUrl:string= `${url}&filter[keywords]=${words}`
    return fetch(searchUrl)
    .then(res => res.json())
    .catch(err => alert(err.message))
}