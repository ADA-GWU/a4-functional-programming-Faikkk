import { rest_client } from "./rest_client.js";

console.log("Please, provide the input. The query parameters at the end can be omitted.")
console.log("Here is an example on execution (with spaces in between): node index.js GET https://jsonplaceholder.typicode.com users/ id=1&username=Bret")
// taking user input
const method = process.argv[2];
const host = process.argv[3];
const path = process.argv[4];
const optionalQueryParams = process.argv[5];


async function run_rest_client() {
    try{
        const response = await rest_client(method)(host)(path)(optionalQueryParams);
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

run_rest_client();
