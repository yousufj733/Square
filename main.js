// sticky menu 
window.addEventListener('scroll', ()=> {

  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);

})

//Mobile Nav manu 
const menu =document.querySelector('#nav__items');
const openBtn =document.querySelector('#open__nav-btn');
const closeBtn =document.querySelector('#close__nav-btn');
 

openBtn.addEventListener('click',()=>{

    menu.style.display='flex';
    closeBtn.style.display='inline-block';
    openBtn.style.display='none';
 
 })


const closeNav = () =>{

    menu.style.display='';
    closeBtn.style.display='none';
    openBtn.style.display='';
 
 }
 closeBtn.addEventListener('click',closeNav);


 //close when a menu is clicked
if(window.innerWidth < 1024)
{
  document.querySelectorAll('#nav__items li a ').forEach(menu => {
    menu.addEventListener('click',()=>{
      closeNav();
    })
  })
}










    // <!-- Initialize Swiper SLIDER -->

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