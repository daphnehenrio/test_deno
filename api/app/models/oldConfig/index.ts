import { Career } from './career.ts';
import { Type } from './type.ts ';
import { Relationships } from '../../deps.ts';



Type.prototype.career = function() {
  return this.hasMany(Career);
};

Career.prototype.type = function() {
  return this.hasOne(Type);
};

Career.prototype.field.typeID = Relationships.belongsTo(Type);

export { Type, Career };