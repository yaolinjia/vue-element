const scpClient = require('scp2')

const ora = require('ora')

const server = {

    host:'0.0.0.0',//服务器IP

    port:80,//服务器端口

    username:'root',//服务器ssh登录用户名

    password:'root',//服务器ssh登录密码

    path:'/www/'//服务器web目录

};

const loading = ora('正在部署至【' + server.host + '】服务器')

loading.start()

scpClient.scp('./dist/', server ,(err)=>{
loading.stop()

    if(err) {

        console.log('部署失败')

        throw err

    }else {

        console.log('部署成功')

    }

})
