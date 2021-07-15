$(document).ready(function(){   
    $("#launchModal").click(function() {
        $(".modal").addClass("is-active");  
    });

    $(".modal-close").click(function() {
        $(".modal").removeClass("is-active");
    });
});

function openDropdown() {
    var openBox = document.getElementById("dropdown-menu");

    if (openBox.style.display == "none") {
        openBox.style.display = "block";
      } else {
        openBox.style.display = "none";
      }
}