var orm = require("../config/orm.js");

var burgers = {
  all: function(cb){
    orm.selectAll("burgers", cb);
  },
  create: function(cols, vals, cb){
    orm.insertOne("burgers", cols, vals, cb);
  },
  update: function(colsVals, condition, cb){
    orm.updateOne("burger", colsVals, condition, cb);
  }
};

module.exports = burgers;