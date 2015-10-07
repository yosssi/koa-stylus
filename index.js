module.exports = function(options){
  return function(ctx, next){
    return Promise.resolve(
      require('stylus').middleware(options)(ctx.req, ctx.res, next)
    );
  };
}
