
let url = 'https://search.outdoorsy.com/rentals/?page[limit]=8'

// '?filter[keywords]=trailer&page[limit]=7'

export const getResults = () => {
    return fetch(url)
    .then(res => res.json())
    .catch(err => alert(err.message))
}

export const searchFor = (words) => {
    let searchUrl = `${url}&filter[keywords]=${words.join(' ')}`
}