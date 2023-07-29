window.onload = function() {
    var navbar = document.querySelector(".topnav");
    var sticky = navbar.offsetTop;
  
    window.onscroll = function() {myFunction()};
  
    function myFunction() {
      if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }
  