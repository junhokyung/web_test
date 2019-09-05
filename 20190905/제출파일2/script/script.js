$(function(){
    
    $(".main_menu li").mouseover(function(){
        $(".sub_menu").stop().slideDown();
        $(".sub_box").stop().slideDown();
    }).mouseout(function(){
        $(".sub_menu").stop().slideUp();
        $(".sub_box").stop().slideUp();
    });
    
    var current = 0;
    var i;
    
    function slider(){
        i=(current+1)%3;
        
        $("#banner a").eq(current).css({top:0}).animate({top:-300});
        $("#banner a").eq(i).css({top:300}).animate({top:0});
        
        current =i;
    }
    setInterval(slider,3000);
    
    $(".t_menu h2").click(function(){
        
        var ho = $(this).index();
        
        $(".t_menu h2").removeClass("active");
        $(".t_menu h2").eq(ho).addClass("active");
        
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
    });
});