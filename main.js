
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