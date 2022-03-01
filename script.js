$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-button').addClass("show");
        }else{
            $('.scroll-up-button').removeClass("show");
        }
    });

    //slide up
    $('.scroll-up-button').click(function(){
        $('html').animate({scrollTop: 0})
    });

    //type type type
    var typed = new Typed(".typing", {
        strings: ["Minecraft Plugin Dev","Discord Bot Dev","Graphics Designer","Gamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});