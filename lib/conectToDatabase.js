import { MongoClient } from "mongodb";
const uri = "mongodb+srv://admin:admin@cluster0.wccomzu.mongodb.net/?retryWrites=true&w=majority";
const options = {};
let mongoClient;

if(!uri) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
export async function connectToDatabase() {
    try {
        if(mongoClient) {
           return {mongoClient};
        }
    const client = new MongoClient(uri, options);
    mongoClient = await client.connect();
    return {mongoClient};

    }
    catch (error) {
        console.log(error);
    }
}

