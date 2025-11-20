import { rest_client } from "./rest_client.js";

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
