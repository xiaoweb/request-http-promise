/**
 * Created by zhouliying on 2017/3/8.
 */

/*requestPromise版,参数同request*/
let request = require('request');
module.exports = {
    get(option){
        return this.http(Object.assign(option, {method: "get"}))
    },
    post(option){
        return this.http(Object.assign(option, {method: "post"}))
    },
    http(option){
        return new Promise((res, rej) => {
            let param = Object.assign(option, {json: true});
            request(param, (err, result, body) => {
                if (result && result.statusCode == 200) {
                    res(body);
                } else {
                    rej(`\n异常请求详情=================>\n请求参数:\n${JSON.stringify(param, null, 2)} \n详细信息:\n${JSON.stringify(result, null, 2)}\n=============================>`)
                }
            })
        }).catch(err => {
            console.error(err);
            return Promise.reject(err);
        })
    }
}