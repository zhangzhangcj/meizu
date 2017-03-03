/**
 * Created by zhchj on 2016/10/20.
 */
var myJs={};
myJs.$= function (id) {
  return document.getElementById(id);
}
//1������className��ȡ��ǩ�����ݸ��������
myJs.getElementsByClassName=function(className,element){
  if(document.getElementsByClassName){
    return (element||document).getElementsByClassName(className);
  }
  var children=(element||document).getElementsByTagName("*");
  var arr=[];
  for(var i=0;i<children.length;i++){
    var child=children[i];
    var classNames=child.className.split(" ");
    for(var j=0;j<classNames.length;j++){
      if(classNames[j]==className){
        arr.push(child);
        break;
      }
    }
  }
  return arr;
}
//2�������¼��ļ���������
myJs.addEventListener=function(obj,type,callback){
  if(obj.addEventListener){
    obj.addEventListener(type,callback,false);
  }else if(obj.addEvent){
    obj.addEvent("on"+type,callback);
  }else{
    obj["on"+type]=callback;
  }
}

//3��Ajaxԭ��js�Ĵ���
myJs.AJAX= function (config,callback) {
  var xmlhttp;
  if(window.XMLHttpRequest){
    xmlhttp=new XMLHttpRequest();
  }else if(window.ActiveXObject){
    try{
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }catch(e){
      try{xmlhttp=new ActiveXObject("msxm12.XMLHTTP");}catch(x){}
    }
  }
  if(xmlhttp){
    xmlhttp.onreadystatechange=function(){
      if(xmlhttp.readyState==4&&xmlhttp.status==200){
        callback(xmlhttp.responseText,xmlhttp.responseXML);
        xmlhttp.open();
        xmlhttp.send();
      }
    }
  }

}

//4��ȡ����������ھ�������Լ��ϱߵ�λ��
myJs.getLeft=function(){
 var leftPos= (typeof window.screenLeft=="number")? window.screenLeft: window.screenX;
  return leftPos;
}
myJs.getTop=function(){
  var topPos=(typeof window.screenTop=="number")?window.screenTop:window.screenY;
  return topPos;
}