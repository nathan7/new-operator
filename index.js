'use strict';
module.exports =
function new_() { //jshint validthis:true
  switch (arguments.length) {
  case 0: return new this()
  case 1: return new this(arguments[0])
  case 2: return new this(arguments[0], arguments[1])
  case 3: return new this(arguments[0], arguments[1], arguments[2])
  case 4: return new this(arguments[0], arguments[1], arguments[2], arguments[3])
  case 5: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4])
  case 6: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
  case 7: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6])
  case 8: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7])
  case 9: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8])
  case 10: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9])
  case 11: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10])
  case 12: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11])
  case 13: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12])
  case 14: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13])
  case 15: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14])
  case 16: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15])
  case 17: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16])
  case 18: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17])
  case 19: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18])
  case 20: return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19])
  }
  var obj = Object.create(this.prototype)
    , ret = this.apply(obj, arguments)
  return (typeof ret === 'object' && ret !== null)
    ? ret
    : obj
}
