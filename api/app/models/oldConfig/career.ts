import {  DataTypes, Model } from '../../deps.ts';

export class Career  extends Model {
  static table = 'career';

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
    subtitle:{
      type: DataTypes.STRING,
      length: 100,
    },
    definition:{
      type: DataTypes.STRING,
      length: 100,
    },
    company:{
      type: DataTypes.STRING,
      length: 100,
    },
    place:{
      type: DataTypes.STRING,
      length: 100,
    },
    duration:{
      type: DataTypes.STRING,
      length: 100,
    },
    start:{
      type: DataTypes.STRING,
      length: 100,
    },
    end:{
      type: DataTypes.STRING,
      length: 100,
    },
  };

};

