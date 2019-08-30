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
        i = current+1;
        if(i == 3){
            current = 2;
            i = 0;
        }
        console.log(i);
        $("#banner li").eq(current).fadeOut();
        $("#banner li").eq(i).fadeIn();
        
        current = i;
    }
    setInterval (slider,3000);
    
    $(".tab_menu h1").click(function(){
         var ho = $(this).index();

        $(".tab_menu h1").removeClass("active");
        $(".tab_menu h1").eq(ho).addClass("active");

        $(".tab_cont li").removeClass("active")
        $(".tab_cont li").eq(ho).addClass("active")
    });
    
    $(".click").click(function(){
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
    });
   
});




