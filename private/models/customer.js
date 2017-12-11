module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    Customer_ID:{
      type: DataTypes.STRING,
      allowNull: false
    },
    Customer_FirstName:{
      type: DataTypes.STRING,
      allowNull: false      
    },
     Customer_LastName:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    Customer_Street:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    Customer_Suite:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    Customer_City:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    Customer_State:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    Customer_Zip:{
      type: DataTypes.INTEGER,
      allowNull: false      
    },
    Customer_Country:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    Customer_Email:{
      type: DataTypes.STRING,
      allowNull: false      
    },
    Customer_StoreID:{
      type: DataTypes.STRING,
      allowNull: false           
    }

  });
  return Customer_Project;
};