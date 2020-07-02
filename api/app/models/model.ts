import {  DataTypes, Model, Relationships } from '../../deps.ts';


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

  static career() {
    return this.hasOne(Career);
  }

}

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
    typeId: Relationships.belongsTo(Type),

  };

  static type() {
    return this.hasOne(Type);
  }

};

export class Contact extends Model {
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

