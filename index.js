module.exports = function(options){
  return function*(next){
    yield stylus(this.req, this.res, options);
    yield next;
  };
};

function stylus(req, res, options){
  return function(callback){
    require('stylus').middleware(options)(req, res, callback);
  };
}