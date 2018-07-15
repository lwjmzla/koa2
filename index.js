
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

app.use(async(ctx)=>{
    //当请求时GET请求时，显示表单让用户填写
    if(ctx.url==='/' && ctx.method === 'GET'){
        let html =`
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body =html;
    //当请求时POST请求时
    }else if(ctx.url==='/' && ctx.method === 'POST'){
        // const postdata = await parsePostData(ctx)
        // const postdataJson = parseQueryStr(postdata)
        // ctx.body= {
        //     postdata,
        //     postdataJson
        // }
        ctx.body= ctx.request.body;  // bodyParser插件提供 获取 post方法的 参数
    }else{
        //其它请求显示404页面
        ctx.body='<h1>404!</h1>';
    }
})

function parsePostData(ctx){
  return new Promise((resolve,reject)=>{
      try{
          let postdata="";
          ctx.req.on('data',(data)=>{
              postdata += data
          })
          ctx.req.addListener("end",function(){
            
              resolve(postdata);
          })
      }catch(error){
          reject(error);
      }
  });
}

function parseQueryStr(queryStr){
    let queryData={};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    for( let queryStr of queryStrList ){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    } 
    return queryData
}
 
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})