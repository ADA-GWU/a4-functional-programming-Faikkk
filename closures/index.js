// The final function, when invoked (e.g., (), performs the actual HTTP call and returns the response. 
// Consider also sending params (id=123 or name="Samir") to the endpoints.
// rest_client ("'POST" )("https://jsonplaceholder.typicode.com")("users/")()


/* 
https://jsonplaceholder.typicode.com/ will be used for API calls

We will specifically be working with the /comments.

The example below is for the hard-coded values, no user-input.
*/

// let comment = {
//     "postId": 500,
//     "id": 1000,
//     "name": "Ali",
//     "email": "aa@somedomain.me",
//     "body": "Body of the comment"
// }


const rest_client = (method) => (host) => (path) => async (optionalQueryParams = {}) => {

    try {
        // handle undefined being printed


        console.log(optionalQueryParams.queryParams)
        const url = new URL(`${host}/${path}`);
        const params = optionalQueryParams;
        url.search = new URLSearchParams(params).toString();

        const response = await fetch(url, {
            method: `${method}`
        })



        let result = await response.json();
        console.log(url)
        console.log(result)
    }
    catch (error) {
        // proper error handling required here
        console.log(error)
     }
}

rest_client("GET")("https://jsonplaceholder.typicode.com")("users/")({ id: 1 });

// // The above one is the same as:
// function rest_client(method){
//     return function rest_client(host){
//         return function rest_client(path){
//             return function (optionalParams = {}){
//                 //...
//             }
//         }
//     } 
// }