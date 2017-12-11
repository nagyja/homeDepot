module.exports = function(sequelize, DataTypes) {
  var Customer_Project = sequelize.define("Customer_Project", {
    Customer_ID:{
      type: DataTypes.STRING,
      allowNull: false
    },
    Project_Name:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    Parent_Project_ID:{
      type: DataTypes.STRING,
      allowNull: true
    },
    Project_ID:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    hours: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }, 
    room: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    major_length: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    major_width: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    major_height:{
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    floor_area: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    wall_area:{
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    tool_list:{
      type: DataTypes.STRING,
      allowNull: false  
    },
    task_list:{
      type: DataTypes.STRING,
      allowNull: false  
    }
  });
  return Customer_Project;
};