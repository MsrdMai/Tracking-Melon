module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Maimsrd",
    DB: "melon",
    dialect: "mysql",
    operatorsAliases: false,
    timezone: '+07:00',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };