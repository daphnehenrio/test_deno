import {  DataTypes, Model } from '../../deps.ts';

export class Interest  extends Model {
  static table = 'interest';

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
    info: {
      type: DataTypes.STRING,
      length: 100,
    },
    subtitle_1: {
      type: DataTypes.STRING,
      length: 100,
    },
    detail_1: {
      type: DataTypes.STRING,
      length: 100,
    },
    subtitle_2: {
      type: DataTypes.STRING,
      length: 100,
    },
    detail_2: {
      type: DataTypes.STRING,
      length: 100,
    },
  };

};

