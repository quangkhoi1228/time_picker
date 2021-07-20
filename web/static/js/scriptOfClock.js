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

        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(0deg)";
        document.getElementById("outputHour").innerHTML = saveHour12.value;

        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(0deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute60.value;
    });

    $(".modal-close").click(function() {
        $(".modal").removeClass("is-active");
    });

    // Clear time 
    document.getElementById("clearTime").addEventListener("click", function() {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(0deg)";
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(0deg)";

        document.getElementById("outputHour").innerHTML = clearTime.value;
        document.getElementById("outputMinute").innerHTML = clearTime.value;
    });

    // Save time 
    document.getElementById("saveTime").addEventListener("click", function() {
        var hour = document.getElementById("outputHour");
        var minute = document.getElementById("outputMinute");
        var outputSessionAM = document.getElementById("outputSessionAM");
        var outputSessionPM = document.getElementById("outputSessionPM");

        // Close modal 
        $(".modal").removeClass("is-active");

        // Output time outside 
        if (outputSessionAM.style.display == "none") {
            document.getElementById("resultSession").innerHTML = outputSessionPM.innerText;
        } else {
            document.getElementById("resultSession").innerHTML = outputSessionAM.innerText;
        }
        document.getElementById("resultHour").innerHTML = hour.innerText;
        document.getElementById("resultMinute").innerHTML = minute.innerText;
    });

    // Saving hour and output hour 
    document.getElementById("saveHour01").addEventListener("click", function() {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(30deg)";
        document.getElementById("outputHour").innerHTML = saveHour01.value;
    });

    document.getElementById("saveHour02").addEventListener("click", function() {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(60deg)";
        document.getElementById("outputHour").innerHTML = saveHour02.value;
    });

    document.getElementById("saveHour03").addEventListener("click", function() {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(90deg)";
        document.getElementById("outputHour").innerHTML = saveHour03.value;
    });

    document.getElementById("saveHour04").addEventListener("click", function() {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(120deg)";
        document.getElementById("outputHour").innerHTML = saveHour04.value;
    });

    document.getElementById("saveHour05").addEventListener("click", function() {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(150deg)";
        document.getElementById("outputHour").innerHTML = saveHour05.value;
    });
    
    document.getElementById("saveHour06").addEventListener("click", function() {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(180deg)";
        document.getElementById("outputHour").innerHTML = saveHour06.value;
    });

    document.getElementById("saveHour07").addEventListener("click", function() {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(210deg)";
        document.getElementById("outputHour").innerHTML = saveHour07.value;
    });

    document.getElementById("saveHour08").addEventListener("click", function() {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(240deg)";
        document.getElementById("outputHour").innerHTML = saveHour08.value;
    });

    document.getElementById("saveHour09").addEventListener("click", function() {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(270deg)";
        document.getElementById("outputHour").innerHTML = saveHour09.value;
    });

    document.getElementById("saveHour10").addEventListener("click", function() {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(300deg)";
        document.getElementById("outputHour").innerHTML = saveHour10.value;
    });

    document.getElementById("saveHour11").addEventListener("click", function() {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(330deg)";
        document.getElementById("outputHour").innerHTML = saveHour11.value;

        $('.clock-showing > button > div').removeClass('highlight');
        $('#' + $(this).data('color') +"11").addClass("highlight");
    });

    document.getElementById("saveHour12").addEventListener("click", function() {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(360deg)";
        document.getElementById("outputHour").innerHTML = saveHour12.value;

        $('.clock-showing > button > div').removeClass('highlight');
        $('#' + $(this).data('color') +"12").addClass("highlight");
    });

    // Saving minute (big-step) and output minute 
    document.getElementById("saveMinute05").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(30deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute05.value;
    });
 
    document.getElementById("saveMinute10").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(60deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute10.value;
    });

    document.getElementById("saveMinute15").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(90deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute15.value;
    });
    
    document.getElementById("saveMinute20").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(120deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute20.value;
    });

    document.getElementById("saveMinute25").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(150deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute25.value;
    });

    document.getElementById("saveMinute30").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(180deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute30.value;
    });

    document.getElementById("saveMinute35").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(210deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute35.value;
    });

    document.getElementById("saveMinute40").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(240deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute40.value;
    });

    document.getElementById("saveMinute45").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(270deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute45.value;
    });
    
    document.getElementById("saveMinute50").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(300deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute50.value;
    });

    document.getElementById("saveMinute55").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(330deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute55.value;
    });

    document.getElementById("saveMinute60").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(360deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute60.value;
    });

    // Saving minute (small-steps) and output minute 
    document.getElementById("saveMinute01").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(6deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute01.value;
    });
 
    document.getElementById("saveMinute02").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(12deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute02.value;
    });

    document.getElementById("saveMinute03").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(18deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute03.value;
    });
    
    document.getElementById("saveMinute04").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(24deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute04.value;
    });

    document.getElementById("saveMinute06").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(36deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute06.value;
    });

    document.getElementById("saveMinute07").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(42deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute07.value;
    });

    document.getElementById("saveMinute08").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(48deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute08.value;
    });

    document.getElementById("saveMinute09").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(54deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute09.value;
    });

    document.getElementById("saveMinute11").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(66deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute11.value;
    });
    
    document.getElementById("saveMinute12").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(72deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute12.value;
    });

    document.getElementById("saveMinute13").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(78deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute13.value;
    });

    document.getElementById("saveMinute14").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(84deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute14.value;
    });

    document.getElementById("saveMinute16").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(96deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute16.value;
    });
 
    document.getElementById("saveMinute17").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(102deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute17.value;
    });

    document.getElementById("saveMinute18").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(108deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute18.value;
    });
    
    document.getElementById("saveMinute19").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(114deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute19.value;
    });

    document.getElementById("saveMinute21").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(126deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute21.value;
    });

    document.getElementById("saveMinute22").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(132deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute22.value;
    });

    document.getElementById("saveMinute23").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(138deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute23.value;
    });

    document.getElementById("saveMinute24").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(144deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute24.value;
    });

    document.getElementById("saveMinute26").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(156deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute26.value;
    });
    
    document.getElementById("saveMinute27").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(162deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute27.value;
    });

    document.getElementById("saveMinute28").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(168deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute28.value;
    });

    document.getElementById("saveMinute29").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(174deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute29.value;
    });

    document.getElementById("saveMinute31").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(186deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute31.value;
    });
 
    document.getElementById("saveMinute32").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(192deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute32.value;
    });

    document.getElementById("saveMinute33").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(198deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute33.value;
    });
    
    document.getElementById("saveMinute34").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(204deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute34.value;
    });

    document.getElementById("saveMinute36").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(216deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute36.value;
    });

    document.getElementById("saveMinute37").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(222deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute37.value;
    });

    document.getElementById("saveMinute38").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(228deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute38.value;
    });

    document.getElementById("saveMinute39").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(234deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute39.value;
    });

    document.getElementById("saveMinute41").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(246deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute41.value;
    });
    
    document.getElementById("saveMinute42").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(252deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute42.value;
    });

    document.getElementById("saveMinute43").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(258deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute43.value;
    });

    document.getElementById("saveMinute44").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(264deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute44.value;
    });

    document.getElementById("saveMinute46").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(276deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute46.value;
    });
 
    document.getElementById("saveMinute47").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(282deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute47.value;
    });

    document.getElementById("saveMinute48").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(288deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute48.value;
    });
    
    document.getElementById("saveMinute49").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(294deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute49.value;
    });

    document.getElementById("saveMinute51").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(306deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute51.value;
    });

    document.getElementById("saveMinute52").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(312deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute52.value;
    });

    document.getElementById("saveMinute53").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(318deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute53.value;
    });

    document.getElementById("saveMinute54").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(324deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute54.value;
    });

    document.getElementById("saveMinute56").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(336deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute56.value;
    });
    
    document.getElementById("saveMinute57").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(342deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute57.value;
    });

    document.getElementById("saveMinute58").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(348deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute58.value;
    });

    document.getElementById("saveMinute59").addEventListener("click", function() {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(354deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute59.value;
    });
});