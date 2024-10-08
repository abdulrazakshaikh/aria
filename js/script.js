
// --------------------------------TOOLTIP INIT--------------------------------
window.addEventListener('load', function(){
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"], [data-bs-tooltip="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))    
})


// -------------------------------HEADER STICKY--------------------------------
var activeSticky = document.getElementById("navbarHeader");
var winDow = window;

winDow.addEventListener("scroll", function () {
  var scroll = winDow.scrollY;
  var isSticky = activeSticky;

  if (scroll < 50) {
    isSticky.classList.remove("fixed-header");
  } else {
    isSticky.classList.add("fixed-header");
  }
});



// ---------------------------REGISTER SHOW/HIDE DIV---------------------------

$("#btnRegister").click(function() {
  $("#ViewSuccess").removeClass('d-none');
  $("#ViewRegister").addClass('d-none');
});


// ---------------------------TOGGLE PASSWORD---------------------------

function togglePassword() {
  var passwordField = document.getElementById("floatingpassword");
  var toggleIcon = document.getElementById("toggleIcon");
  
  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleIcon.classList.remove("bi-eye-slash-fill");
    toggleIcon.classList.add("bi-eye-fill");
  } else {
    passwordField.type = "password";
    toggleIcon.classList.remove("bi-eye-fill");
    toggleIcon.classList.add("bi-eye-slash-fill");
  }
}

// ------------------------------ISOTOPE MASONRY-------------------------------
$('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'masonry',
});  
$('.grid').imagesLoaded().progress( function() {
  $('.grid').isotope('layout');
});




