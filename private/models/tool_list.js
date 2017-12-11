module.exports = function(sequelize, DataTypes) {
  var Tool_list = sequelize.define("Tool_list", {
    Customer_ID:{
      type: DataTypes.STRING,
      allowNull: false
    },
    Project_ID:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    Project_task: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Catalog_ID:{
      type: DataTypes.STRING,
      allowNull: false
    },
    item_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    major_tool:{
      type: boolean,
      default: false
    },
    depreciable_time:{
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    servicable_time:{
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    material_cost_time:{
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    tool_price:{
      type: DataTypes.INTEGER,
      defaultValue: null
  });
  return Tool_list;
};