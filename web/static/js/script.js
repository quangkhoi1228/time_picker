function hello() {
    console.log('hello');
}

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

$(document).ready(function () {
    var count = 0;

    $("#launchModal").click(function () {
        $(".modal").addClass("is-active");

        var switchHour = document.getElementById("hour");
        var switchMinute = document.getElementById("minute");
        var switchHourText = document.getElementById("in-hour");
        var switchMinuteText = document.getElementById("in-minute");

        switchHourText.style.display = "block";
        switchMinuteText.style.display = "none";
        switchHour.style.display = "block";
        switchMinute.style.display = "none";

        if (count == 0) {
            $("#saveMinute60").click();
            $("#saveHour12").click();
            count++;
        }
    });

    $(".modal-close").click(function () {
        $(".modal").removeClass("is-active");
    });

    $(".modal-background").click(function () {
        $(".modal").removeClass("is-active");
    });

    // Clear time 
    document.getElementById("clearTime").addEventListener("click", function () {
        var hourHandle = document.getElementById("hourHandle");
        var minuteHandle = document.getElementById("minuteHandle");
        var switchHour = document.getElementById("hour");
        var switchMinute = document.getElementById("minute");
        var switchHourText = document.getElementById("in-hour");
        var switchMinuteText = document.getElementById("in-minute");

        switchHourText.style.display = "block";
        switchMinuteText.style.display = "none";
        switchHour.style.display = "block";
        switchMinute.style.display = "none";
        hourHandle.style.transform = "translate(-50%, -50%) rotate(360deg)";
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(360deg)";

        $('#hour > button > div').removeClass('highlight');
        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $("#blueHour12").addClass("highlight");
        $("#blueMinute60").addClass("highlight");

        document.getElementById("outputHour").innerHTML = "12";
        document.getElementById("outputMinute").innerHTML = "00";
    });

    // Save time 
    document.getElementById("saveTime").addEventListener("click", function () {
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
    document.getElementById("saveHour01").addEventListener("click", function () {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(30deg)";
        document.getElementById("outputHour").innerHTML = saveHour01.value;

        $('#hour > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Hour01").addClass("highlight");
    });

    document.getElementById("saveHour02").addEventListener("click", function () {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(60deg)";
        document.getElementById("outputHour").innerHTML = saveHour02.value;

        $('#hour > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Hour02").addClass("highlight");
    });

    document.getElementById("saveHour03").addEventListener("click", function () {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(90deg)";
        document.getElementById("outputHour").innerHTML = saveHour03.value;

        $('#hour > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Hour03").addClass("highlight");
    });

    document.getElementById("saveHour04").addEventListener("click", function () {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(120deg)";
        document.getElementById("outputHour").innerHTML = saveHour04.value;

        $('#hour > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Hour04").addClass("highlight");
    });

    document.getElementById("saveHour05").addEventListener("click", function () {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(150deg)";
        document.getElementById("outputHour").innerHTML = saveHour05.value;

        $('#hour > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Hour05").addClass("highlight");
    });

    document.getElementById("saveHour06").addEventListener("click", function () {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(180deg)";
        document.getElementById("outputHour").innerHTML = saveHour06.value;

        $('#hour > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Hour06").addClass("highlight");
    });

    document.getElementById("saveHour07").addEventListener("click", function () {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(210deg)";
        document.getElementById("outputHour").innerHTML = saveHour07.value;

        $('#hour > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Hour07").addClass("highlight");
    });

    document.getElementById("saveHour08").addEventListener("click", function () {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(240deg)";
        document.getElementById("outputHour").innerHTML = saveHour08.value;

        $('#hour > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Hour08").addClass("highlight");
    });

    document.getElementById("saveHour09").addEventListener("click", function () {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(270deg)";
        document.getElementById("outputHour").innerHTML = saveHour09.value;

        $('#hour > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Hour09").addClass("highlight");
    });

    document.getElementById("saveHour10").addEventListener("click", function () {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(300deg)";
        document.getElementById("outputHour").innerHTML = saveHour10.value;

        $('#hour > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Hour10").addClass("highlight");
    });

    document.getElementById("saveHour11").addEventListener("click", function () {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(330deg)";
        document.getElementById("outputHour").innerHTML = saveHour11.value;

        $('#hour > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Hour11").addClass("highlight");
    });

    document.getElementById("saveHour12").addEventListener("click", function () {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = "translate(-50%, -50%) rotate(360deg)";
        document.getElementById("outputHour").innerHTML = saveHour12.value;

        $('#hour > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Hour12").addClass("highlight");
    });





    // Saving minute (big-step) and output minute 
    document.getElementById("saveMinute05").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(30deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute05.value;

        $('.big-steps > button > div').removeClass('highlight');
        $('.small-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute05").addClass("highlight");
    });

    document.getElementById("saveMinute10").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(60deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute10.value;

        $('.big-steps > button > div').removeClass('highlight');
        $('.small-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute10").addClass("highlight");
    });

    document.getElementById("saveMinute15").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(90deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute15.value;

        $('.big-steps > button > div').removeClass('highlight');
        $('.small-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute15").addClass("highlight");
    });

    document.getElementById("saveMinute20").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(120deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute20.value;

        $('.big-steps > button > div').removeClass('highlight');
        $('.small-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute20").addClass("highlight");
    });

    document.getElementById("saveMinute25").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(150deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute25.value;

        $('.big-steps > button > div').removeClass('highlight');
        $('.small-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute25").addClass("highlight");
    });

    document.getElementById("saveMinute30").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(180deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute30.value;

        $('.big-steps > button > div').removeClass('highlight');
        $('.small-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute30").addClass("highlight");
    });

    document.getElementById("saveMinute35").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(210deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute35.value;

        $('.big-steps > button > div').removeClass('highlight');
        $('.small-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute35").addClass("highlight");
    });

    document.getElementById("saveMinute40").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(240deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute40.value;

        $('.big-steps > button > div').removeClass('highlight');
        $('.small-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute40").addClass("highlight");
    });

    document.getElementById("saveMinute45").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(270deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute45.value;

        $('.big-steps > button > div').removeClass('highlight');
        $('.small-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute45").addClass("highlight");
    });

    document.getElementById("saveMinute50").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(300deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute50.value;

        $('.big-steps > button > div').removeClass('highlight');
        $('.small-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute50").addClass("highlight");
    });

    document.getElementById("saveMinute55").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(330deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute55.value;

        $('.big-steps > button > div').removeClass('highlight');
        $('.small-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute55").addClass("highlight");
    });

    document.getElementById("saveMinute60").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(360deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute60.value;

        $('.big-steps > button > div').removeClass('highlight');
        $('.small-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute60").addClass("highlight");
    });





    // Saving minute (small-steps) and output minute 
    document.getElementById("saveMinute01").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(5.5deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute01.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute01").addClass("highlight");
    });

    document.getElementById("saveMinute02").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(11.2deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute02.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute02").addClass("highlight");
    });

    document.getElementById("saveMinute03").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(17.2deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute03.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute03").addClass("highlight");
    });

    document.getElementById("saveMinute04").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(23.5deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute04.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute04").addClass("highlight");
    });

    document.getElementById("saveMinute06").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(35.2deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute06.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute06").addClass("highlight");
    });

    document.getElementById("saveMinute07").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(42.2deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute07.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute07").addClass("highlight");
    });

    document.getElementById("saveMinute08").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(48.2deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute08.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute08").addClass("highlight");
    });

    document.getElementById("saveMinute09").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(55deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute09.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute09").addClass("highlight");
    });

    document.getElementById("saveMinute11").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(66.6deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute11.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute11").addClass("highlight");
    });

    document.getElementById("saveMinute12").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(73deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute12.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute12").addClass("highlight");
    });

    document.getElementById("saveMinute13").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(79.1deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute13.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute13").addClass("highlight");
    });

    document.getElementById("saveMinute14").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(85.2deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute14.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute14").addClass("highlight");
    });

    document.getElementById("saveMinute16").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(95.2deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute16.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute16").addClass("highlight");
    });

    document.getElementById("saveMinute17").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(101.1deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute17.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute17").addClass("highlight");
    });

    document.getElementById("saveMinute18").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(107.1deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute18.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute18").addClass("highlight");
    });

    document.getElementById("saveMinute19").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(113.3deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute19.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute19").addClass("highlight");
    });

    document.getElementById("saveMinute21").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(125.2deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute21.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute21").addClass("highlight");
    });

    document.getElementById("saveMinute22").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(132deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute22.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute22").addClass("highlight");
    });

    document.getElementById("saveMinute23").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(138deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute23.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute23").addClass("highlight");
    });

    document.getElementById("saveMinute24").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(145deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute24.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute24").addClass("highlight");
    });

    document.getElementById("saveMinute26").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(156.9deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute26.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute26").addClass("highlight");
    });

    document.getElementById("saveMinute27").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(163deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute27.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute27").addClass("highlight");
    });

    document.getElementById("saveMinute28").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(169deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute28.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute28").addClass("highlight");
    });

    document.getElementById("saveMinute29").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(174.7deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute29.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute29").addClass("highlight");
    });

    document.getElementById("saveMinute31").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(185deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute31.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute31").addClass("highlight");
    });

    document.getElementById("saveMinute32").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(190.7deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute32.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute32").addClass("highlight");
    });

    document.getElementById("saveMinute33").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(196.7deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute33.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute33").addClass("highlight");
    });

    document.getElementById("saveMinute34").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(202.7deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute34.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute34").addClass("highlight");
    });

    document.getElementById("saveMinute36").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(214.6deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute36.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute36").addClass("highlight");
    });

    document.getElementById("saveMinute37").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(221.4deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute37.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute37").addClass("highlight");
    });

    document.getElementById("saveMinute38").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(227.6deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute38.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute38").addClass("highlight");
    });

    document.getElementById("saveMinute39").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(234.4deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute39.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute39").addClass("highlight");
    });

    document.getElementById("saveMinute41").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(246.6deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute41.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute41").addClass("highlight");
    });

    document.getElementById("saveMinute42").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(252.8deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute42.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute42").addClass("highlight");
    });

    document.getElementById("saveMinute43").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(259deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute43.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute43").addClass("highlight");
    });

    document.getElementById("saveMinute44").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(264.7deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute44.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute44").addClass("highlight");
    });

    document.getElementById("saveMinute46").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(275.4deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute46.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute46").addClass("highlight");
    });

    document.getElementById("saveMinute47").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(281.1deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute47.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute47").addClass("highlight");
    });

    document.getElementById("saveMinute48").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(287.2deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute48.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute48").addClass("highlight");
    });

    document.getElementById("saveMinute49").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(293.4deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute49.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute49").addClass("highlight");
    });

    document.getElementById("saveMinute51").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(305.2deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute51.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute51").addClass("highlight");
    });

    document.getElementById("saveMinute52").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(311.6deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute52.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute52").addClass("highlight");
    });

    document.getElementById("saveMinute53").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(318deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute53.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute53").addClass("highlight");
    });

    document.getElementById("saveMinute54").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(324.6deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute54.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute54").addClass("highlight");
    });

    document.getElementById("saveMinute56").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(336.8deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute56.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute56").addClass("highlight");
    });

    document.getElementById("saveMinute57").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(343deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute57.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute57").addClass("highlight");
    });

    document.getElementById("saveMinute58").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(349.1deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute58.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute58").addClass("highlight");
    });

    document.getElementById("saveMinute59").addEventListener("click", function () {
        var minuteHandle = document.getElementById("minuteHandle");
        minuteHandle.style.transform = "translate(-50%, -50%) rotate(354.8deg)";
        document.getElementById("outputMinute").innerHTML = saveMinute59.value;

        $('.small-steps > button > div').removeClass('highlight');
        $('.big-steps > button > div').removeClass('highlight');
        $('#' + $(this).data('color') + "Minute59").addClass("highlight");
    });
});

function mouseDown() {
    if (document.getElementById("hour").style.display == "block") {
        document.getElementById("hour").style.cursor = "move";
    } else {
        document.getElementById("minute").style.cursor = "move";
    }
}

function mouseUp() {
    if (document.getElementById("hour").style.display == "block") {
        document.getElementById("hour").style.cursor = "default";
    } else {
        document.getElementById("minute").style.cursor = "default";
    }
}