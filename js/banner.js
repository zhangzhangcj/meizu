/**
 * Created by zhchj on 2016/9/23.
 */
//***************first**********************
function globalFun(){};
globalFun.prototype.addClass = function(el, className) {
  if (!className) return;
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
};

globalFun.prototype.removeClass = function(el, className) {
  if (!className) return;
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

globalFun.prototype.hasClass = function(el, className) {
  if (!className) return false;
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
};

globalFun.prototype.addEvent = function(object, type, callback) {
  if (object === null || typeof(object) === 'undefined') return;

  if (object.addEventListener) {
    object.addEventListener(type, callback, false);
  } else if (object.attachEvent) {
    object.attachEvent("on" + type, callback);
  } else {
    object["on" + type] = callback;
  }
};

globalFun.prototype.$ = function(ele) {
  if (ele === null || typeof(ele) === 'undefined' || typeof(ele) !== 'string') {return}
  else{return document.querySelectorAll(ele)}
};
//window.onload=function(){
//  var banner=document.getElementById("banner");
//  var list=document.getElementById("banner_list");
//  var buttons=document.getElementById("banner_buttons").getElementsByTagName("span");
//  var prev=document.getElementById("banner_prev");
//  var next=document.getElementById("banner_next");
//  var index=1;
//  var timer;
//  function animate(offset) {
//    var newleft = parseInt(list.style.left) + offset;
//    list.style.left = newleft + "px";
//    if (newleft > 0) {
//      list.style.left = -5709 + "px";
//    }
//    if (newleft < -5709) {
//      list.style.left = 0 + "px";
//    }
//  }
//    function play(){
//      timer=setInterval(function(){
//        next.onclick();
//      },2000)
//    }
//    function stop(){
//      clearInterval(timer);
//    }
//  function buttonShow(){
//    for(var i=0;i<buttons.length;i++){
//      if(buttons[i].className=="on"){
//        buttons[i].className="";
//      }
//      buttons[index-1].className="on";
//    }
//  }
//  prev.onclick=function(){
//    index-=1;
//    if(index<1){
//      index=4;
//    }
//    buttonShow();
//    animate(1903);
//  }
//  next.onclick=function(){
//    index+=1;
//    if(index>4){
//      index=1;
//    }
//    buttonShow();
//    animate(-1903);
//  }
//  banner.onmouseover=stop;
//  banner.onmousemove=play;
//  play();
//  var weixin=document.getElementsByClassName("weixin");
//  var secondCode=document.getElementsByClassName("secondCode");
//  weixin.onmouseover=function(){
//    secondCode.style.display="block";
//  }
//  weixin.onmouseout= function () {
//    secondCode.style.display="none";
//  }
//}
//*************two*******************

var mStore=$(function(){
  $(".banner-catagory>li").hover(function(){
    $(this).find(".catagory-childern").css("display","block");
    $(this).siblings().find(".catagory-childern").css("display","none");
  },function(){
    $(".catagory-childern").css("display","none");
  });
  var index=0;
  var liLength=$(".banner .banner_list li").length;
  //���󻬶�
  $(".banner .btn_prev").click(function(){
    index--;
    if(index==-1){
      $(".banner .banner_list").animate({left:-(liLength-1)*1903},500);
      index=liLength-1;
    }
    $(".banner .banner_list").animate({left:-1903*index},500);
    $(".banner .banner_buttons li").eq(index).addClass("on").siblings().removeClass("on");
  });
  $(".banner .btn_next").click(function(){
    index++;
    if(index==liLength){
      $(".banner .banner_list").animate({left:0},500);
      index=0;
    }
    $(".banner .banner_list").animate({left:-index*1903},500);
    $(".banner .banner_buttons li").eq(index).addClass("on").siblings().removeClass("on");
  })
  $(".banner .banner_buttons li").hover(function(){
    var btnIndex=$(this).index();
    index=btnIndex;
    $(".banner .banner_list").animate({left:-index*1903},500);
    $(this).eq(index).addClass("on").siblings().removeClass("on");
  });
  var timer=setInterval(function(){
    index++;
    if(index==liLength){
      $(".banner .banner_list").animate({left:0},500);
      index=0;
    }
    $(".banner .banner_list").animate({left:-index*1903},500);
    $(".banner .banner_buttons li").eq(index).addClass("on").siblings().removeClass("on");},2000);
  $(".banner").hover(function(){
    clearInterval(timer);
  })
});

//**************three***********
//function globalFun(){};
////���class
//globalFun.prototype.addClass = function(el, className) {
//  if (!className) return;
//  if (el.classList) {
//    el.classList.add(className);
//  } else {
//    el.className += ' ' + className;
//  }
//};
////ɾ��class
//globalFun.prototype.removeClass = function(el, className) {
//  if (!className) return;
//  if (el.classList) {
//    el.classList.remove(className);
//  } else {
//    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
//  }
//};
////�ж��Ƿ����class
//globalFun.prototype.hasClass = function(el, className) {
//  if (!className) return false;
//  if (el.classList) {
//    return el.classList.contains(className);
//  } else {
//    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
//  }
//};
////��Ӽ����¼�
//globalFun.prototype.addEvent = function(object, type, callback) {
//  if (object === null || typeof(object) === 'undefined') return;
//
//  if (object.addEventListener) {
//    object.addEventListener(type, callback, false);
//  } else if (object.attachEvent) {
//    object.attachEvent("on" + type, callback);
//  } else {
//    object["on" + type] = callback;
//  }
//};
////��װ$
//globalFun.prototype.$ = function(ele) {
//  if (ele === null || typeof(ele) === 'undefined' || typeof(ele) !== 'string') {return}
//  else{return document.querySelectorAll(ele)}
//};
//var gb = new globalFun();
//
//var sliderThemes = ['white','gray','white','gray','white'];
//var iWidth = window.innerWidth;
//var cWidth = document.body.clientWidth;
//var getSwipe = document.querySelectorAll('.swipe ');//���е�img
//var getWrapper = document.querySelector('.silder-wrapper');//imglist
//var totalWrapper = document.querySelector('.header');//��������
//var index = 1;//�±�index����
//var cancelTarget;//��ʱ��
//getWrapper.style.transform = 'translateX('+ -cWidth +'px)';//��ʼ��imgListλ��
////
////  function targetParent(elem, filter) {
////    var
//////      matched = [],
//////      until,
////      truncate = filter !== undefined;
////    while ((elem = elem['parentNode']) && elem.nodeType !== 9) {
////      if (elem.nodeType === 1) {
////        if (truncate) {
////          if(elem.nodeName.toLowerCase() ==filter){
////            return elem;
////          }
////        }
////      }
////    }
////  }
//
//for(var i=0; i<getSwipe.length; i++){
//  getSwipe[i].style.width = cWidth  + 'px';//����ͼƬ���
//}
//getWrapper.style.width = getSwipe.length * cWidth + 'px';//���������ֲ��б�Ŀ��
//
//var renderPage = (function(){
//  var pagination = document.createElement("div");//������ť��div
//  var fgm = document.createDocumentFragment();//�����ĵ��ڵ�
//  pagination.className = "silder-Clist";//����silder��css����
//  for(var i=0; i<getSwipe.length-2; i++){
//    var span = document.createElement('span');
//    span.className = 'swiper-pagination-switch';//СԲ���css����
//    span.setAttribute('data-item',i);//�����Զ������ԣ�index
//    fgm.appendChild(span);//��ӵ��ĵ��ڵ���
//  }
//  pagination.appendChild(fgm);//�����е�СԲ�㣬��ӵ�������div�ϡ�
//  document.getElementsByClassName('silder')[0].appendChild(pagination);//��СԲ��ӵ������ֲ������
//  gb.addClass(document.querySelector('.swiper-pagination-switch'),'pagination-active');//���õ�ǰСԲ��Ϊ����״̬
//})()
//
//var swiperScroll = function(){
//  var page = document.querySelectorAll('.swiper-pagination-switch');//��ȡ���е�СԲ��
//  getWrapper.style.transition = 'all 300ms ease';//imglist�Ķ�̬Ч��
//
//
//  getWrapper.style.transform = 'translateX('+ -(index*cWidth) +'px)';//transform:translateX(xxxpx),scale��rotate(xxdeg)
//
//  if(index > getSwipe.length-2){
//    setTimeout(function(){
//      getWrapper.style.transition = 'all 0ms';
//      getWrapper.style.transform = 'translateX('+ -cWidth +'px)';
//
//    },300)
//    index = 1;
//  }
//
//  gb.removeClass(document.querySelector('.pagination-active'),'pagination-active');
//  gb.addClass(page[index-1],'pagination-active');
//  //console.log(sliderThemes[index]+'|||||'+index);
//
//
//  if(gb.hasClass(totalWrapper,'theme-white')){
//    gb.removeClass(totalWrapper,'theme-white');
//    gb.addClass(totalWrapper,'theme-'+sliderThemes[index-1]+'');
//  }else if(gb.hasClass(totalWrapper,'theme-gray')){
//    gb.removeClass(totalWrapper,'theme-gray');
//    gb.addClass(totalWrapper,'theme-'+sliderThemes[index-1]+'');
//  }
//
//}
//function play(){
//  cancelTarget = setInterval(function(){
//    index++;
//    swiperScroll();
//  },3000);
//}
//function stop(){
//  clearInterval(cancelTarget);
//}
//
//getWrapper.onmouseover=stop;
//getWrapper.onmouseout=play;
//play();
//
var indexBanner=function(){
  var gb = new globalFun();

var sliderThemes = ['gray','white','white','gray'];
var cWidth = document.body.clientWidth||window.innerWidth;
var getSwipe = document.querySelectorAll('.swipe ');
var getWrapper = document.querySelector('.silder-wrapper');
var totalWrapper = document.querySelector('.header');
var index = 1;
var cancelTarget;
getWrapper.style.transform = 'translateX('+ -cWidth +'px)';


for(var i=0; i<getSwipe.length; i++){
  getSwipe[i].style.width = cWidth  + 'px';
}
getWrapper.style.width = getSwipe.length * cWidth + 'px';

var renderPage = (function(){
  var pagination = document.createElement("div");
  var fgm = document.createDocumentFragment();
  pagination.className = "silder-Clist";
  for(var i=0; i<getSwipe.length-2; i++){
    var span = document.createElement('span');
    span.className = 'swiper-pagination-switch';
    span.setAttribute('data-item',i);
    fgm.appendChild(span);
  }
  pagination.appendChild(fgm);
  document.getElementsByClassName('silder')[0].appendChild(pagination);
  gb.addClass(document.querySelector('.swiper-pagination-switch'),'pagination-active');
})()

var swiperScroll = function(){
  var page = document.querySelectorAll('.swiper-pagination-switch');
  getWrapper.style.transition = 'all 300ms ease';


  getWrapper.style.transform = 'translateX('+ -(index*cWidth) +'px)';

  if(index > getSwipe.length-2){
    setTimeout(function(){
      getWrapper.style.transition = 'all 0ms';
      getWrapper.style.transform = 'translateX('+ -cWidth +'px)';

    },300)
    index = 1;
  }

  gb.removeClass(document.querySelector('.pagination-active'),'pagination-active');
  gb.addClass(page[index-1],'pagination-active');
  //console.log(sliderThemes[index]+'|||||'+index);


  if(gb.hasClass(totalWrapper,'theme-white')){
    gb.removeClass(totalWrapper,'theme-white');
    gb.addClass(totalWrapper,'theme-'+sliderThemes[index-1]+'');
  }else if(gb.hasClass(totalWrapper,'theme-gray')){
    gb.removeClass(totalWrapper,'theme-gray');
    gb.addClass(totalWrapper,'theme-'+sliderThemes[index-1]+'');
  }

}
var init = setInterval(function(){
  index++;
  swiperScroll();
},3000);
var nav = document.querySelector('.nav');//��ȡ������
nav.addEventListener('mouseover',function(e) {//�����������¼�
  //��Ҫ��õ�ǰ�Ķ���}
  var e = e || window.event;
  var target = e.target || e.srcElement;
  var name = target.parentNode.nodeName.toLowerCase();
  //console.log(target);
  console.log(cancelTarget);
  var aaa=name=="li"&&target.parentNode.getAttribute("data-nav");
  console.log(aaa);
  if(name == 'li' && target.parentNode.getAttribute('data-nav')){
    if(!document.querySelector('.meizu-header-sub-animation')){
      gb.addClass(document.querySelector('div[data-link='+ target.parentNode.getAttribute('data-nav') +']'),'meizu-header-sub-animation');
    }
    //meizu-header-sub-animation����Ч����li���û�ж���Ч������Ϊ��ǰ��li���һ������Ч����

    if(document.querySelector('.meizu-header-sub-show')){
      gb.removeClass(document.querySelector('.meizu-header-sub-show'),'meizu-header-sub-show');
      //�����ǰli�Ѿ���ʾ�Ļ����Ͱ���ʾ�ĸ��Ƴ����������ö�̬��Ч���������Ҫ������Ч��ȥ����
    }
    //gb.addClass(nav,'toggle');//����л�Ч��
    gb.addClass(document.querySelector('div[data-link='+ target.parentNode.getAttribute('data-nav') +']'),'meizu-header-sub-show');

  }else if (name == 'li' && !target.parentNode.getAttribute('data-nav')) {
    if (document.querySelector('.meizu-header-sub-animation')) {
      gb.removeClass(document.querySelector('.meizu-header-sub-animation'), 'meizu-header-sub-animation');
    }

    if (document.querySelector('.meizu-header-sub-show')) {
      gb.removeClass(document.querySelector('.meizu-header-sub-show'), 'meizu-header-sub-show');
      gb.removeClass(nav, 'toggle');
    }
  }},false)
nav.addEventListener('mouseleave',function(e){

  //console.log(overTimer +'|||' +leaveTimer +'----' + (leaveTimer -overTimer));
  var e = e || window.event;
  var target = e.target || e.srcElement;
  if(document.querySelector('.meizu-header-sub-show')){
    gb.removeClass(document.querySelector('.meizu-header-sub-show'),'meizu-header-sub-show');
    gb.removeClass(document.querySelector('.meizu-header-sub-animation'),'meizu-header-sub-animation');
  }
},false)

document.querySelector('.nav-link').addEventListener('mouseenter',function(e){
  var e = e || window.event;
  var target = e.target || e.srcElement;
},false)

document.querySelector('.silder-Clist').addEventListener('click',function(e){
  var e = e || window.event;
  var target = e.target || e.srcElement;

  if(target.nodeName.toLowerCase() == 'span'){
    clearInterval(init);
    index = parseInt(target.getAttribute('data-item')) + 1;
    swiperScroll();
    init = setInterval(function(){
      index++;
      swiperScroll();
    },3000);
  }
},false)}




//meilan3�л�
