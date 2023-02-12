

//Mobile Nav manu 
const menu =document.querySelector("#nav__items");
const openBtn =document.querySelector("#open__nav-btn");
const closeBtn =document.querySelector("#close__nav-btn");
 

openBtn.addEventListener('click',()=>{

    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    openBtn.style.display="none";
 
 })


closeBtn.addEventListener('click',()=>{

    menu.style.display="";
    closeBtn.style.display="none";
    openBtn.style.display="";
 
 })
    // <!-- Initialize Swiper -->

 var swiper = new Swiper(".mySwiper", {
  // direction: 'horizontal',

  spaceBetween: 30,
  slidesOffsetBefore: -200,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    paginationClickable: true,
  },

    keyboard: 
{
  enabled: true,
  onlyInViewport: false,
},


  // responsive 
breakpoints:
{
  300:{
    slidesPerView: 1,
    slidesOffsetBefore: 0
   },

     600:{
      slidesPerView: 1,
  
     },
     1024:{
      slidesPerView: 3
  
     }
}


});