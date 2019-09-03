$(function(){
    $(".main_menu li").mouseover(function(){
        $(this).find(".sub_menu").stop().slideDown();
    }).mouseout(function(){
        $(this).find(".sub_menu").stop().slideUp();
    });
    
   
    var current = 0;
    var i;
    
    function slider(){
        i=(current+1)%3
        
        $("#banner li").eq(current).fadeOut();
        $("#banner li").eq(i).fadeIn();
        
        current = i;
    }
    setInterval(slider,3000);
    
    $(".t_menu h1").click(function(){
        var click = $(this) .index();
        $(".t_menu h1").removeClass("active");
        $(".t_menu h1").eq(click).addClass("active");
        
        $(".t_cont li").removeClass("active");
        $(".t_cont li").eq(click).addClass("active");
    });
    
    $(".click").click(function(){
        $(".popup").show();
        $(".box").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
        $(".box").hide();
    });
});