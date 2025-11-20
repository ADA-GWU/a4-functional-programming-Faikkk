export const rest_client = (method) => (host) => (path) => async (optionalQueryParams) => {

    try {        
        const url = new URL(`${host}/${path}`);
        url.search = new URLSearchParams(optionalQueryParams).toString();

        const response = await fetch(url, {
            method: `${method}`
        })

        const result = await response.json();
        return result;
    }
    catch (error) {
        throw "The error thrown is " + error;
    }
}
