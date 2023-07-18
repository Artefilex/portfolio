const {DataTypes} = require("sequelize")
const sequelize = require("../db/sql")

const Intro = sequelize.define(
    "intro",
    {
      header: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
    content:{
       type: DataTypes.STRING,
       allowNull: false
     }
    },{
       image:{
        type:  DataTypes.STRING, 
       } 
    }
    
    ,{
        timestamps: false,

    }
)

module.exports = Intro