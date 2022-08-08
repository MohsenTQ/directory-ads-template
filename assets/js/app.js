AOS.init();

$(document).ready(function(){
    if($(".owl-carousel").length !=0){
        $(".owl-carousel").owlCarousel({
            // rtl:true,
            loop:true,
            margin:15,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                750:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });
    
    }
    
  });

  