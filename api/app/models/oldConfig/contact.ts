import {  DataTypes, Model } from '../../deps.ts';

export class Contact  extends Model {
  static table = 'contact';

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
    subtitle: {
      type: DataTypes.STRING,
      length: 100,
    },
    link: {
      type: DataTypes.STRING,
      length: 100,
    },
    type: {
      type: DataTypes.STRING,
      length: 100,
    },
    qrcode: {
      type: DataTypes.STRING,
      length: 100,
    },
  };

};

