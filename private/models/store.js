module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("Store", {
    StoreID:{
      type: DataTypes.STRING,
      allowNull: false
    },
    Store_Street:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    Store_Suite:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    Store_City:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    Store_State:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    Store_Zip:{
      type: DataTypes.INTEGER,
      allowNull: false      
    },
    Store_Country:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    Store_Manager:{
      type: DataTypes.STRING,
      allowNull: false      
    }
  });
  return Store;
};