// module.exports = options => {
//     //ctx,next 架构就有的 自带的
//     return async function admimauth(ctx, next) {
//         //通过session.openId是否存在进而判断能否继续访问
//         //可以看到路由守卫是一个异步的方法，如果验证session成功，就会用await netx() 向下执行。也就是说可以正常向下走流程，如果验证失败，就直接返回“没有登录。
//         if (ctx.session.openId) {
//             await next()
//         } else {
//             ctx.body = { data: '没有登录' }
//         }
//     }
// }

module.exports = options =>{
    return async function adminauth(ctx,next){
        if(!ctx.session.openId){
            await next()
        }else{
            ctx.body={data:'没有登录'}
        }
    }
}