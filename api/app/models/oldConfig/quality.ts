import {  DataTypes, Model } from '../../deps.ts';

export class Quality  extends Model {
  static table = 'quality';

  static timestamps = false;

  static fields = {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 100,
    },
  };

};

