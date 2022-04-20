import db from "../config/database.js";
import { DataTypes } from "sequelize";

const Info = db.define('info', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nickname: {
        type: DataTypes.STRING
    },
    activity_type: {
        type: DataTypes.STRING
    },
    activity_name: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Info;