//工具包

//正则匹配
//匹配帐号
const regUid = function (str) {
    return !RegExp(/^\w{6,12}$/).test(str);
}

const regName = function(str){
	return !RegExp(/^[\u4e00-\u9fa5]{2,5}$/).test(str);
}

//匹配身份证
const regIDC = function (str) {
     return !RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(str);
}
//匹配手机号
const regPhone = function (str) {
     return !RegExp(/^1[345789]\d{9}$/).test(str);
}
//匹配验证码
const regCheckNum = function (str) {
    return !RegExp(/^\d{4}$/).test(str);
}

//匹配邮箱格式
const regEmail = function regEmail(str){
	return !RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(str);
}
//判断对象是否为空
const object_dede=function (params) {
    let flag = true;
   
    for(var key in params){
      if(params[key] != '0' && !params[key]){
        this.$vux.toast.text('请完善数据!', 'middle');
        return false; // 终止程序
      }
    }
   
    return flag;
  }
  export default{
      regUid,
      regName,
      regIDC,
      regPhone,
      regCheckNum,
      regEmail,
      object_dede
  }
