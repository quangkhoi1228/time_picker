function openDropdown() {
    var openBox = document.getElementById("dropdown-menu");

    if (openBox.style.display == "none") {
        openBox.style.display = "block";
        } else {
        openBox.style.display = "none";
    }
}

$(document).ready(function(){   
    $("#launchModal").click(function() {
        $(".modal").addClass("is-active");
    });

    $(".modal-close").click(function() {
        $(".modal").removeClass("is-active");
    });
});

function switchTime() {
    var switchHour = document.getElementById("hour");
    var switchMinute = document.getElementById("minute");
    var switchHourText = document.getElementById("in-hour");
    var switchMinuteText = document.getElementById("in-minute");

    if (switchHour.style.display == "none") {
        switchHourText.style.display = "block";
        switchMinuteText.style.display = "none";
        switchHour.style.display = "block";
        switchMinute.style.display = "none";
    } else {
        switchHourText.style.display = "none";
        switchMinuteText.style.display = "block";
        switchHour.style.display = "none";
        switchMinute.style.display = "block";
    }
}