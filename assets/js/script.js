 // Scroll animate
 window.onscroll = () => scrollFunction();

 function scrollFunction() {
     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
         document.getElementById("navbar").style.backgroundColor = "#000";
         document.getElementById("navbar").style.borderBottom = "none";
     } else {
         document.getElementById("navbar").style.borderBottom = "1px solid #d2d2d2";
         document.getElementById("navbar").style.backgroundColor = "transparent";
     }
 }

 // Mobile toggle 
 const navbar = document.querySelector('.navigation');
 const toggle = document.getElementById('toggle');
 let truthy = true;

 function closeNav() {
     navbar.style.height = '0';
     navbar.style.padding = '0';
     navbar.style.visibility = 'hidden';
     toggle.className = 'fad fa-bars';
     truthy = true;
 }

 console.log(toggle);

 toggle.addEventListener('click', function () {
     if (truthy) {
         navbar.style.height = 'auto';
         navbar.style.padding = '2rem';
         navbar.style.visibility = 'visible';
         toggle.className = 'fad fa-times';
         truthy = false;
     } else if (truthy === false) {
         closeNav();
     }
 });