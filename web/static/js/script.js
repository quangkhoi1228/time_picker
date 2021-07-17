function openDropdown() {
    var openBox = document.getElementById("dropdown-menu");

    if (openBox.style.display == "none") {
        openBox.style.display = "block";
        } else {
        openBox.style.display = "none";
    }
}

function switchSession() {
    var outputSessionAM = document.getElementById("outputSessionAM");
    var outputSessionPM = document.getElementById("outputSessionPM");

    if (outputSessionAM.style.display == "none") {
        outputSessionAM.style.display = "block";
        outputSessionPM.style.display = "none";
    } else {
        outputSessionAM.style.display = "none";
        outputSessionPM.style.display = "block";
    }
};

function switchHour() {
    var switchHour = document.getElementById("hour");
    var switchMinute = document.getElementById("minute");
    var switchHourText = document.getElementById("in-hour");
    var switchMinuteText = document.getElementById("in-minute");

    switchHourText.style.display = "block";
    switchMinuteText.style.display = "none";
    switchHour.style.display = "block";
    switchMinute.style.display = "none";
}

function switchMinute() {
    var switchHour = document.getElementById("hour");
    var switchMinute = document.getElementById("minute");
    var switchHourText = document.getElementById("in-hour");
    var switchMinuteText = document.getElementById("in-minute");

    switchHourText.style.display = "none";
    switchMinuteText.style.display = "block";
    switchHour.style.display = "none";
    switchMinute.style.display = "block";
}

function switchMinute() {
    
}

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
};

$(document).ready(function(){   
    $("#launchModal").click(function() {
        $(".modal").addClass("is-active");
    });

    $(".modal-close").click(function() {
        $(".modal").removeClass("is-active");
    });

    // Clear time 
    document.getElementById("clearTime").addEventListener("click", function() {
        document.getElementById("outputHour").innerHTML = clearTime.value
        document.getElementById("outputMinute").innerHTML = clearTime.value
    });

    // Saving hour and output hour 
    document.getElementById("saveHour01").addEventListener("click", function() {
        document.getElementById("outputHour").innerHTML = saveHour01.value
    });

    document.getElementById("saveHour02").addEventListener("click", function() {
        document.getElementById("outputHour").innerHTML = saveHour02.value
    });

    document.getElementById("saveHour03").addEventListener("click", function() {
        document.getElementById("outputHour").innerHTML = saveHour03.value
    });

    document.getElementById("saveHour04").addEventListener("click", function() {
        document.getElementById("outputHour").innerHTML = saveHour04.value
    });

    document.getElementById("saveHour05").addEventListener("click", function() {
        document.getElementById("outputHour").innerHTML = saveHour05.value
    });
    
    document.getElementById("saveHour06").addEventListener("click", function() {
        document.getElementById("outputHour").innerHTML = saveHour06.value
    });

    document.getElementById("saveHour07").addEventListener("click", function() {
        document.getElementById("outputHour").innerHTML = saveHour07.value
    });

    document.getElementById("saveHour08").addEventListener("click", function() {
        document.getElementById("outputHour").innerHTML = saveHour08.value
    });

    document.getElementById("saveHour09").addEventListener("click", function() {
        document.getElementById("outputHour").innerHTML = saveHour09.value
    });

    document.getElementById("saveHour10").addEventListener("click", function() {
        document.getElementById("outputHour").innerHTML = saveHour10.value
    });

    document.getElementById("saveHour11").addEventListener("click", function() {
        document.getElementById("outputHour").innerHTML = saveHour11.value
    });

    document.getElementById("saveHour12").addEventListener("click", function() {
        document.getElementById("outputHour").innerHTML = saveHour12.value
    });

    // Saving minute and output minute 
    document.getElementById("saveMinute05").addEventListener("click", function() {
        document.getElementById("outputMinute").innerHTML = saveMinute05.value;
    });
 
    document.getElementById("saveMinute10").addEventListener("click", function() {
        document.getElementById("outputMinute").innerHTML = saveMinute10.value;
    });

    document.getElementById("saveMinute15").addEventListener("click", function() {
        document.getElementById("outputMinute").innerHTML = saveMinute15.value;
    });
    
    document.getElementById("saveMinute20").addEventListener("click", function() {
        document.getElementById("outputMinute").innerHTML = saveMinute20.value;
    });

    document.getElementById("saveMinute25").addEventListener("click", function() {
        document.getElementById("outputMinute").innerHTML = saveMinute25.value;
    });

    document.getElementById("saveMinute30").addEventListener("click", function() {
        document.getElementById("outputMinute").innerHTML = saveMinute30.value;
    });

    document.getElementById("saveMinute35").addEventListener("click", function() {
        document.getElementById("outputMinute").innerHTML = saveMinute35.value;
    });

    document.getElementById("saveMinute40").addEventListener("click", function() {
        document.getElementById("outputMinute").innerHTML = saveMinute40.value;
    });

    document.getElementById("saveMinute45").addEventListener("click", function() {
        document.getElementById("outputMinute").innerHTML = saveMinute45.value;
    });
    
    document.getElementById("saveMinute50").addEventListener("click", function() {
        document.getElementById("outputMinute").innerHTML = saveMinute50.value;
    });

    document.getElementById("saveMinute55").addEventListener("click", function() {
        document.getElementById("outputMinute").innerHTML = saveMinute55.value;
    });

    document.getElementById("saveMinute60").addEventListener("click", function() {
        document.getElementById("outputMinute").innerHTML = saveMinute60.value;
    });
});