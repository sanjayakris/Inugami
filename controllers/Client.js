import { client } from "../app.js"
import Info from "../models/InfoModel.js";

export const getClientData = async (req, res) =>{
    // try {
    //     res.json(client.user);
    // } catch (error) {
    //     console.log("There was an error at getClientData");
    //     console.log(error);
    // }
    res.send({
        msg: "Hello world!"
    });
}

export const setClientActivity = async (req, res) =>{
    const { Name, Type } = req.body;
    try {
        client.user.setActivity(`${Name}`, { type: `${Type}` });
        const response = await Info.update({
            activity_name: Name,
            activity_type: Type
        }, {where: {
            id: 1
        }});
        res.send(`Activity has been changed to ${Type} ${Name}`);
    } catch (error) {
        console.log("There was an error at setClientActivity");
        console.log(error);
    }
}

export const postTest = async (req, res) =>{
    const { Name, Age } = req.body;
    try {
        res.json({
            success: 1,
            data: {
                user_name: Name,
                user_age: Age,
                userid: 192819
            },
            err: 0
        })
    } catch (error) {
        throw error;
    }
}

export const setNickname = async (req, res) =>{
    const { Name } = req.body;
    try {
        const guild = client.guilds.cache.get("750736254676762725");
        const botAsGuildMember = guild.members.cache.get("796569063052410950");
        botAsGuildMember.setNickname(Name);
        const response = await Info.update({
            nickname: Name
        }, {
            where: {
                id: 1
            }
        })
        res.send(`Nickname successfully changed to ${Name}`);
    } catch (error) {
        throw error;
    }
}