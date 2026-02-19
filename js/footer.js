// Footer Component
document.addEventListener("DOMContentLoaded", function() {
  var footer = document.querySelector("footer");
  if (footer) {
    footer.innerHTML = '<div class="content-limiter">' +
      '<p class="footer-copyright"> &copy; ' + new Date().getFullYear() + ' Chris Creguer</p>' +
      '<ul class="footer-icons-list">' +
        '<li><a href="https://www.linkedin.com/in/chriscreguer/" target="_blank"><img class="footer-icon" alt="linkedin" src="img/icon/linkedin.png"></a></li>' +
        '<li><a href="about.html"><img class="footer-icon" alt="email" src="img/icon/email.png"></a></li>' +
      '</ul>' +
    '</div>';
  }

  // Make hero images clickable to open lightGallery at the hero slide (index 0)
  var heroImage = document.querySelector(".cs-hero-image img");
  if (heroImage) {
    heroImage.addEventListener("click", function() {
      if (window.lg) {
        window.lg.openGallery(0);
      }
    });
  }
});
