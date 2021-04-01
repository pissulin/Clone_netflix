$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    dots:false,
    smartSpeed: 300,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function abrirMenu(){
    document.getElementById('menu').style.right = 0
    document.getElementById('menu').style.display = 'flex'
    document.getElementById('carousel').style.zIndex = -1
}

function fecharMenu(){
    document.getElementById('menu').style.right = '-150px'
    document.getElementById('menu').style.display = 'none'
    document.getElementById('carousel').style.zIndex = 0
}