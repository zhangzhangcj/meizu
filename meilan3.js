/**
 * Created by zhchj on 2016/10/12.
 */
var sChange=function(){
  $(".sPicImg").click(function(){
    var index=$(this).index();
    $(".bgPicImg").eq(index).fadeIn().siblings().fadeOut();
    $(".sPicImg").eq(index).addClass("imgBorder").siblings().removeClass("imgBorder");
  })
  //******************************************

}


//$(".propety-setSpan").addClass("propertySetBorder1");
////$(".propety-setSpan").css("border","1px solid #00c3f5");
//
//$(".property-setColor.propety-setSpan").click(function(){
//  if ($(this).hasClass("propertySetBorder1")) {
//    $(this).removeClass("propertySetBorder1").addClass("propertySetBorder").siblings().addClass("propertySetBorder1");
//  } else {
//    $(this).removeClass("propertySetBorder").addClass("propertySetBorder1");
//  }
//}
//})