import {  DataTypes, Model } from '../../deps.ts';

export class Type  extends Model {
  static table = 'type';

  static timestamps = false;

  static fields = {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 100,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 100,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 100,
    },
    color_dark: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 100,
    },
    color_light: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 100,
    },
  };

}
