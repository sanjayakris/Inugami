import { client } from "../app.js"

export const getClientData = async (req, res) =>{
    try {
        res.json(client.user);
    } catch (error) {
        console.log("There was an error at getClientData");
        console.log(error);
    }
}

