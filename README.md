#Promise http request
### install
    npm install request-promise

### param
####option:{}
同[request](https://www.npmjs.com/package/request)

###koa2 example
    let koa = require('koa');
    let requestPromise = require('request-http-promise');
    
    let app = new koa();
    
    app.use(async (ctx,next) =>{
        let content = await requestPromise.get({url:'https://www.maxwon.cn'});
        ctx.body = content;
    });
    
    app.listen(3000)
