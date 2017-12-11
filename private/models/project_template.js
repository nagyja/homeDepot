
module.exports = function(sequelize, DataTypes) {
  var Project_Template = sequelize.define("Project_Template", {
    Project_task: {
      type: DataTypes.STRING,
      allowNull: false
    },
    task_ID:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
    factor_hours: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }, 
    task_description:{
      type: DataTypes.STRING,
      allowNull: false
    },
    default_tool_list:{
      type: DataTypes.STRING,
    }
  });
  return Project_Template;
};
