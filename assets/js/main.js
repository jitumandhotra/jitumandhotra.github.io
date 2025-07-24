document.getElementById('year').textContent = new Date().getFullYear();
var navToggle = document.getElementById('navToggle');
var navMenu = document.getElementById('navMenu');
if(navToggle){
  navToggle.addEventListener('click',function(){
    navMenu.classList.toggle('show');
  });
}
