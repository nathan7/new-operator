'use strict';
module.exports =
function new_() { //jshint validthis:true
  if (arguments.length === 1) return new this(arguments[0])
  if (arguments.length === 2) return new this(arguments[0], arguments[1])
  if (arguments.length === 3) return new this(arguments[0], arguments[1], arguments[2])
  if (arguments.length === 4) return new this(arguments[0], arguments[1], arguments[2], arguments[3])
  if (arguments.length === 5) return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4])
  if (arguments.length === 6) return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
  if (arguments.length === 7) return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6])
  if (arguments.length === 8) return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7])
  if (arguments.length === 9) return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8])
  if (arguments.length === 10) return new this(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9])
  var obj = Object.create(this.prototype)
    , ret = this.apply(obj, arguments)
  return (typeof ret === 'object' && ret !== null)
    ? ret
    : obj
}
