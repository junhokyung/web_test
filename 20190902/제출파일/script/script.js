$(function(){
    $(".main_menu li").mouseover(function(){
        $(".sub_menu").stop().slideDown();
    }).mouseout(function(){
        $(".sub_menu").stop().slideUp();
    });
    
//    slide
    var current = 0;
    var i;
    
    function slider(){
        i = (current+1)%3;
    
    console.log(i)
    
    $("#banner li").eq(current).css({left:0}).animate({left:-1200});
    $("#banner li").eq(i).css({left:1200}).animate({left:0});
    
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
    });
    $(".close").click(function(){
        $(".popup").hide();
    });
});


