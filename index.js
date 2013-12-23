module.exports = function*(options){
  yield stylusMiddleware(this.req, this.res);
  yield next;
};

function stylusMiddleware(req, res, options){
  return function(callback){
    require('stylus').middleware(options)(req, res, callback);
  };
}