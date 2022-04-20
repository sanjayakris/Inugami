import { Sequelize } from "sequelize";

const db = new Sequelize({
    database: 'inugamidb',
    dialect: 'mysql',
    username: 'root',
    password: ''
});

export default db;