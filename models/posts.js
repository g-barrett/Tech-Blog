const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contents: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        creator_username: {
            type: DataTypes.STRING,
        },
        date_created: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        date_updated: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
        },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post' 
    }
);

module.exports = Post;