'use strict';

var stylus = require('stylus');

module.exports = function(options){
  var middleware = stylus.middleware(options);

  function compile(req, res){
    return function(callback){
      middleware(req, res, callback);
    };
  }

  return function*(next){
    yield compile(this.req, this.res);
    yield next;
  };
};
