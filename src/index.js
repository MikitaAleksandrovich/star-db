// First way to fetch data from external api asynchronisly using async/await
const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.o) {
        throw new Error(`Could not fetch ${url}, recieved ${res.status}`)
    }

    const body = await res.json();
    return body;
}


getResource('https:/as/swapi.co/api/people/12134321413541345')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.log('Could not fetch', err)
    });



