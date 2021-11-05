
const { Sequelize } = require('sequelize');
const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    useUTC: false, //for reading from database
    dateStrings: true,

    typeCast: function (field, next) { // for reading from database
      if (field.type === 'DATETIME') {
        return field.string()
      }
      return next()
    },
  },
  timezone: dbConfig.timezone,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

//ส่วนนี้เป็นการ import model ของ table ใน database เข้ามาเพื่อตั้งต่า relation นะครับ
    db.type_user = require("./type_user.model.js")(sequelize, Sequelize);
    db.users = require("./users.model.js")(sequelize, Sequelize);


 //ส่วนนี้เป็นการตั้งต่า relation นะครับ โดยเป็นการบอกว่าใน 1 type_user มีได้หลาย users ง่ายๆ ก็คือ relation แบบ 1:M 
 db.type_user.hasMany(
    db.users,
    {
        foreignKey: { name: 'Typeuser_id', field: 'Typeuser_id' }, 
    }
  );

  db.users.belongsTo(db.type_user, { foreignKey: 'Typeuser_id' });

  
    module.exports = db;
