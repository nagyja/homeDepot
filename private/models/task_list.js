
module.exports = function(sequelize, DataTypes) {
  var task_list = sequelize.define("task_list", {
    Project_ID:{
      type: DataTypes.STRING,
      allowNull: false
    },
    task_ID:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    factor_modification: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }, 
    task_description:{
      type: DataTypes.STRING,
      allowNull: false
    },
    tool_list:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return task_list;
};
