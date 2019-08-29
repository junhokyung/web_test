$(function(){
    $(".main_menu li").mouseover(function(){
        $(this).find(".sub_menu").stop().slideDown();
    }).mouseout(function(){
        $(this).find(".sub_menu").stop().slideUp();
    });
    
    var current = 0;
    var i;
    
   function slider(){
        i = current+1
        if(i == 3){
            current = 2
            i = 0
        }
        
        $(".slider li").eq(current).fadeOut();
        $(".slider li").eq(i).fadeIn();
        
        current=i;
    }
    setInterval(slider,3000);
    
   
    $(".tab_menu li").click(function(){
         var ho = $(this).index();
        $(".tab_menu li").removeClass("active");
        $(".tab_menu li").eq(ho).addClass("active");
        
        $(".tab_card li").removeClass("active");
        $(".tab_card li").eq(ho).addClass("active");
    });
    $(".click").click(function(){
        $(".popup").show();
        $(".box").show();
    });
    $(".close").click(function(){
         $(".popup").hide();
        $(".box").hide();
    });
    $(".here").click(function(){
        window.open("popup.html","hihi","width=300,height=300");
    });
    $(".close1").click(function(){
        window.close();
    });
    
});