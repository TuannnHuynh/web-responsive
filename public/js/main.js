$(document).ready(function(){
    let option = {
        loop: true,
        margin: 50,
        smartSpeed: 800,
        autoplayTimeout: 3500,
        responsive: {
            0:{
                items: 1,
                autoplay: false,
            },
            994:{
                items: 2,
                autoplay: true,
            }
        }
    }
    $(".owl-carousel").owlCarousel(option);
  });


$(window).on("scroll",function (){
    if($(window).scrollTop() > 10){
        $("header").addClass("active-header")
        $(".to-top").slideDown(600)
    }
    else{
        $("header").removeClass("active-header")
        $(".to-top").fadeOut(500)
    }

})

$(".back-to-top").on("click", function(){
    $('html,body').animate({scrollTop:0},600)
})

$(".btnBars").on("click", function () {
    $(".drop-down").slideToggle(500)
})

renderNav("navbar")
renderNav("drop-down")

function renderNav(className) {
    let str = ''
    str += `
        <ul>
            <li class="active">Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Pages</li>
            <li>Contact</li>
            <li><i class="fa-solid fa-magnifying-glass"></i></li>
        </ul>
    `
    console.log(`.${className}`)
    $(`.${className}`).html(str)
}



