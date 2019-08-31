$(function(){
   $(".main_menu>ul>li").mouseover(function(){
       $(this).find(".sub_menu").stop().slideDown();
       $(this).find(".s_box").stop().slideDown();
   }).mouseout(function(){
        $(this).find(".sub_menu").stop().slideUp();
        $(this).find(".s_box").stop().slideUp();
   })
   
   var current = 0;
    var i;
    
    function slider(){
        i=(current+1)%3;
        
        $("#banner li").eq(current).css({left:0}).animate({left:-800});
        $("#banner li").eq(i).css({left:800}).animate({left:0});
        
        current = i;
    }
    setInterval(slider,3000);
    
    $(".t_menu h1").click(function(){
        var ho = $(this).index();
        $(".t_menu h1").removeClass("active");
        $(".t_menu h1").eq(ho).addClass("active");
        
        $(".t_cont li").removeClass("active");
        $(".t_cont li").eq(ho).addClass("active");
    });
    
    $(".click").click(function(){
        $(".popup").show();
        $(".box").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
        $(".box").hide();
    })
});