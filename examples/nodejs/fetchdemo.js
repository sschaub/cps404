// Download a web page

async function fetchDemos() {
    try {
        let response = await fetch("https://www.google.com")
        if (!response.ok) {
            throw new Error(`HTTP response was: ${response.status}`)
        }

        let html = await response.text()
        // console.log(html)

        // Send a request with query parameters
        let qs =  new URLSearchParams({ q: "Node JS" }).toString()
        response = await fetch(`https://www.google.com/search?${qs}`)

        html = await response.text()
        console.log(html)



    } catch (err) {
        console.error(`Problem with fetch: ${err}`)
    }
}

fetchDemos()