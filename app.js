const menuList = document.querySelector('.menu-list');
const container = document.querySelector('.container');
 

menuList.addEventListener('mouseenter', openMenu);
menuList.addEventListener('mouseleave', closeMenu);

function openMenu() {
   menuList.classList.remove('closed');
   container.classList.add('active');
}
 function closeMenu() {
   menuList.classList.add('closed');
   container.classList.remove('active');
 }


 