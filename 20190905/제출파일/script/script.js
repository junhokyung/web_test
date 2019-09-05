$(function(){
    $(".main_menu li").mouseover(function(){
        $(this).find(".sub_menu").stop().slideDown();
    }).mouseout(function(){
        $(this).find(".sub_menu").stop().slideUp();
    });
    
    var current = 0;
    var i;
    
    function slider(){
        i=(current+1)%3;
        console.log(i)
        $("#banner>ul>li").eq(current).css({top:0}).animate({top:-300});
        $("#banner>ul>li").eq(i).css({top:300}).animate({top:0});
        
        current=i;
    }
    setInterval(slider,3000);
    
    $(".click").click(function(){
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
    });
    
    $(".here").click(function(){
        window.open("popup.html","hi","width=300,height=300");
    });
    $(".close1").click(function(){
        window.close();
    });
});