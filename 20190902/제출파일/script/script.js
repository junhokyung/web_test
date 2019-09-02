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
    
//    $(".t_menu li").
});


