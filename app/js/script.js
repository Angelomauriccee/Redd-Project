//preloader

$(window).on("load",function(){
    $("document").ready($(".loader-wrapper").fadeOut("slow"));
    ( $("body").removeClass("preload") ); ( $(window).on("load", function() {load}));
});















//hamburger menu toggle
const toggle_open = document.getElementById("mobile-navigation-toggle-open")
const mobile_nav = document.getElementById("mobile-navigation")
const toggle_close = document.getElementById("mobile-navigation-toggle-close");
const navLinks = document.querySelectorAll('.nav_links li');
const paragraphFade = document.querySelector('.paragraph-fade');
const menu = document.querySelector('.mobile_menu');
const heroIcons = document.querySelectorAll('.social-icons li');

//open-nav
toggle_open.addEventListener('click', () => {
    mobile_nav.classList.toggle('mobile-nav');

    //animate links,menu,paragraph,icons
    paragraphFade.classList.toggle('menu-paragraph-fade-in');
    menu.classList.toggle('menu-fade-in')
    navLinks.forEach((link, index) => {
        //with the index you can easily animate the transition in delay
        // console.log(index);
        if(link.style.animation) {
            link.style.animation = ''   
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
        
    });
    heroIcons.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ''   
        } else {
            link.style.animation = `iconsLinkFade 1s ease forwards ${index / 7 + 1.6}s`;
        }
        
    });
});




const menu_items = document.querySelectorAll(".nav_items");

menu_items.forEach(item=> {
    item.addEventListener('click', () => {
        mobile_nav.classList.toggle('mobile-nav');

    //animate links,menu,paragraph,icons
    paragraphFade.classList.toggle('menu-paragraph-fade-in');
    menu.classList.toggle('menu-fade-in')
    navLinks.forEach((link, index) => {
        //with the index you can easily animate the transition in delay
        // console.log(index);
        if(link.style.animation) {
            link.style.animation = ''   
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
        
    });
    heroIcons.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ''   
        } else {
            link.style.animation = `iconsLinkFade 1s ease forwards ${index / 7 + 1.6}s`;
        }
        
    });
    })
})



toggle_close.addEventListener('click', () => {
    mobile_nav.classList.toggle('mobile-nav');
    //animation in mobile nav
    paragraphFade.classList.toggle('menu-paragraph-fade-in');
    menu.classList.toggle('menu-fade-in')
    navLinks.forEach((link, index) => {
        //with the index you can easily animate the transition in delay
        // console.log(index);
        if(link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });

    heroIcons.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ''   
        } else {
            link.style.animation = `iconsLinkFade 1s ease forwards ${index / 7 + 1.6}s`;
        }
        
    });
})












//INTERSECTION OBSERVER

const mobile_navigation = document.querySelector(".mobile-navigation-toggle-open");
const banner = document.querySelector(".Banner")
                                                            
const containerOneOptions = {
    rootMargin: "-600px 0px 0px 0px"
}
                                                            
const containerOneObserver = new IntersectionObserver(function(entries, containerOneObserver) {
    entries.forEach(entry => {
        // console.log(entry.target)
        if(!entry.isIntersecting){
            mobile_navigation.classList.add("nav-scrolled")
        }
        else{
            mobile_navigation.classList.remove("nav-scrolled")
        }
    })
}, containerOneOptions);
                                                            
containerOneObserver.observe(banner);






//focus on link nav/using intersection observers on each without the for each

//homelink

const link1 = document.querySelector(".home1");
                                                            
    const containerTwoOptions = {
    rootMargin: "-300px 0px 0px 0px"
    }
                                                            
const containerTwoObserver = new IntersectionObserver(function(entries, containerTwoObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            link1.classList.remove("link1-intersect")
        }
        else{
            link1.classList.add("link1-intersect")
        }
    })
}, containerTwoOptions);
                                                            
containerTwoObserver.observe(banner);




//link2
//about



const link2 = document.querySelector(".about1");
const about = document.querySelector(".about_observer");                                 
    const containerThreeOptions = {
        rootMargin: "250px -200px 0px 0px"
    }
                                                            
const containerThreeObserver = new IntersectionObserver(function(entries, containerThreeObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            link2.classList.remove("link2-intersect")
        }
        else{
            link2.classList.add("link2-intersect")
        }
    })
}, containerThreeOptions);
                                                            
containerThreeObserver.observe(about);

//link3
//services

const link3 = document.querySelector(".services1");
const service = document.querySelector(".service_intersection");                                 
    const containerFourOptions = {
        rootMargin: "650px -200px 0px 0px"
    }
                                                            
const containerFourObserver = new IntersectionObserver(function(entries, containerFourObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            link3.classList.remove("link3-intersect")
        }
        else{
            link3.classList.add("link3-intersect")
        }
    })
}, containerFourOptions);
                                                            
containerFourObserver.observe(service);

//link4
//projects

const link4 = document.querySelector(".projects1");
const projects = document.querySelector(".projects_intersection");                                 
    const containerFiveOptions = {
        rootMargin: "-350px -200px 0px 0px"
    }
                                                            
const containerFiveObserver = new IntersectionObserver(function(entries, containerFourObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            link4.classList.remove("link4-intersect")
        }
        else{
            link4.classList.add("link4-intersect")
        }
    })
}, containerFiveOptions);
                                                            
containerFiveObserver.observe(projects);

//link5
//partners|clients
const link5 = document.querySelector(".clients1");
const partners = document.querySelector(".partners_intersection");                                 
    const containerSixOptions = {
        rootMargin: "600px -200px 0px 0px"
    }
                                                            
const containerSixObserver = new IntersectionObserver(function(entries, containerFourObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            link5.classList.remove("link5-intersect")
        }
        else{
            link5.classList.add("link5-intersect")
        }
    })
}, containerSixOptions);
                                                            
containerSixObserver.observe(partners);

//link6
//contact - form

const link6 = document.querySelector(".contact1");
const contact = document.querySelector(".contact_intersection");                                 
    const containerSevenOptions = {
        rootMargin: "-350px -200px 0px 0px"
    }
                                                            
const containerSevenObserver = new IntersectionObserver(function(entries, containerFourObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            link6.classList.remove("link6-intersect")
        }
        else{
            link6.classList.add("link6-intersect")
        }
    })
}, containerSevenOptions);
                                                            
containerSevenObserver.observe(contact);













//NUMBER_COUNT

let values = document.querySelectorAll(".num_counts");
let interval = 5000;

values.forEach((value) => {
    let start_value = 0;
    let end_value = parseInt(value.getAttribute("data-val"));
    
    let duration = Math.floor(interval / end_value);
    let counter = setInterval(function () {
        start_value += 1;
        value.textContent = start_value;
        if(start_value === end_value) {
            clearInterval(counter);
        }
    }, duration)
});






//ICON CAROUSEL


  //slick scroll for testimonies
  $('.single-item').slick({
    dots:true,
    autoplay:true,
    speed:300,
    autoplaySpeed:2000,
    prevArrow:'<i class="fa-solid fa-arrow-left-long left_arrow"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right-long right_arrow"></i>',
    adaptiveHeight: true,
    arrows:false,
  });

  //slick scroll for icons
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    dots:true,
    arrows:false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
    ]
  });




  //scroll progress jquery

  $(document).ready(function() {
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    var updateProgress = function() {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }

    updateProgress();
    $(window).scroll(updateProgress);

    var offset = 50;
    var duration = 550;

    jQuery(window).on('scroll', function() {
        if(jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });

    jQuery('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

