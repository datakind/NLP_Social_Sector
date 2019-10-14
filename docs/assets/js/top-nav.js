(function() {
  var button = document.getElementById("top-nav-expand");
  var links = document.getElementById("top-nav-links");
  button.addEventListener("click", function() {
    button.classList.toggle("top-nav-expand-active");
    links.classList.toggle("top-nav-links-active");
  });
})();
