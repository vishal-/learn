import { DataTypes, Model } from "sequelize";
import dbHandle, { syncParams } from "../app.dbconfig";

class Subject extends Model {}

Subject.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  { sequelize: dbHandle, timestamps: false }
);

(async () => {
  await dbHandle.sync(syncParams);
})();

export default Subject;
