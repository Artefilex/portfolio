const config = require("../config") 
const Sequelize = require("sequelize") 

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,{
        dialect: "mysql",
        host: config.db.host,
        define:{
            timestamp:false
        }
    }
)

async function connect() {
    try {
      await sequelize.authenticate();
      console.log("mysql baglantısı yapıldı ");
    } catch (err) {
      console.log("baglantı hatası " + err);
    }
  }
  
  connect();

  module.exports  = sequelize