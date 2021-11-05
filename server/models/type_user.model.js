module.exports = ( sequelize , Sequelize ) => {
    const Type_user = sequelize.define(
      'type_user',
      { 
      Typeuser_id: { type: Sequelize.INTEGER(11), primaryKey: true, autoIncrement: true, field: 'Typeuser_id' },
      typeuser_name: { type: Sequelize.STRING(30), allowNull: false, field: 'typeuser_name' },

  },
  {
      tableName: 'type_user' 
  }
);

return Type_user;
};