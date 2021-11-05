module.exports = ( sequelize , Sequelize ) => {
    const Users = sequelize.define(
      'users',
      { 
      User_id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true, field: 'User_id' },
      email: { type: Sequelize.STRING(30), allowNull: false, field: 'email' },
      username: { type: Sequelize.STRING(30), allowNull: false, field: 'username' },
      password: { type: Sequelize.STRING(30), allowNull: false, field: 'password' },
      phone_user: { type: Sequelize.STRING(10), allowNull: false, field: 'phone_user' },
      Typeuser_id: { type: Sequelize.INTEGER(1), allowNull: false, field: 'Typeuser_id' },
  },
  {
      tableName: 'users' 
  }
);

return Users;
};