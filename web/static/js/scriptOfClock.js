var time_picker = {
    createStructure: function () {
        time_picker.createHourStructure();
        time_picker.createMinuteStructure();
    },
    openModal: function () {
        var button = document.querySelector('#launchModal');
        var modal = document.querySelector('.modal');
        var count = 0;
        button.onclick = function () {
            modal.classList.add('is-active');
            if (count == 0) {
                document.getElementById("saveHour12").click();
                document.getElementById("saveMinute60").click();
                count++;
            } else {
                var switchHour = document.getElementById("hour");
                var switchMinute = document.getElementById("minute");
                var switchHourText = document.getElementById("in-hour");
                var switchMinuteText = document.getElementById("in-minute");
    
                switchHourText.style.display = "block";
                switchMinuteText.style.display = "none";
                switchHour.style.display = "block";
                switchMinute.style.display = "none";
            }
        }
    },
    closeModal: function () {
        var background = document.querySelector('.modal-background');
        var modal = document.querySelector('.modal');
        background.onclick = function () {
            modal.classList.remove('is-active');
        }
    },
    normalizeNumber: function (number) {
        if (number < 10) {
            number = '0' + number;
        }
        return number;
    },
    switchSession: function () {
        var button = document.querySelector('.time-showing-session');
        button.onclick = function () {
            var switchAM = document.getElementById("outputSessionAM");
            var switchPM = document.getElementById("outputSessionPM");

            if (switchAM.style.display == "none") {
                switchAM.style.display = "block";
                switchPM.style.display = "none";
            } else {
                switchAM.style.display = "none";
                switchPM.style.display = "block";
            }
        }
    },
    switchHour: function () {
        var button = document.querySelector('.time-oclock .hourMode');
        button.onclick = function () {
            var switchHour = document.getElementById("hour");
            var switchMinute = document.getElementById("minute");
            var switchHourText = document.getElementById("in-hour");
            var switchMinuteText = document.getElementById("in-minute");

            switchHourText.style.display = "block";
            switchMinuteText.style.display = "none";
            switchHour.style.display = "block";
            switchMinute.style.display = "none";
        }
    },
    switchMinute: function () {
        var button = document.querySelector('.time-oclock .minuteMode');
        button.onclick = function () {
            var switchHour = document.getElementById("hour");
            var switchMinute = document.getElementById("minute");
            var switchHourText = document.getElementById("in-hour");
            var switchMinuteText = document.getElementById("in-minute");

            switchHourText.style.display = "none";
            switchMinuteText.style.display = "block";
            switchHour.style.display = "none";
            switchMinute.style.display = "block";
        }
    },
    createHourStructure: function () {
        var container = document.getElementById('hour');
        for (var number = 1; number <= 12; number++) {
            var button = document.createElement('button');
            button.setAttribute('class', 'oclock-' + number);
            button.setAttribute('id', 'saveHour' + time_picker.normalizeNumber(number));
            button.setAttribute('value', time_picker.normalizeNumber(number));
            button.setAttribute('data-color', 'blue');


            var div = document.createElement('div');
            div.setAttribute('id', 'blueHour' + time_picker.normalizeNumber(number));
            button.appendChild(div);

            var p = document.createElement('p');
            p.innerHTML = number;
            div.appendChild(p);

            container.appendChild(button);
            time_picker.addEventHourButton(button, number);
        }
    },
    createMinuteStructure: function () {
        time_picker.createBigStepMinuteStructure();
        time_picker.createSmallStepMinuteStructure();
    },
    createBigStepMinuteStructure: function () {
        var bigStepsContainer = document.querySelector('#minute .big-steps');
        for (var number = 1; number <= 12; number++) {
            var button = document.createElement('button');
            button.setAttribute('class', 'oclock-' + number);
            button.setAttribute('id', 'saveMinute' + time_picker.normalizeNumber(number * 5));
            var value = (number * 5 == 60) ? 0 : (number * 5);
            
            button.setAttribute('value', value);
            button.setAttribute('data-color', 'blue');

            var div = document.createElement('div');
            div.setAttribute('id', 'blueMinute' + time_picker.normalizeNumber(number * 5));
            button.appendChild(div);

            var p = document.createElement('p');
            p.innerHTML = value;
            div.appendChild(p);

            bigStepsContainer.appendChild(button);
            time_picker.addEventBigStepMinuteButton(button, number);
        }
    },
    createSmallStepMinuteStructure: function () {
        var smallStepsContainer = document.querySelector('#minute .small-steps');
        for (var number = 1; number < 60; number++) {
            if (number % 5 != 0) {
                var button = document.createElement('button');
                button.setAttribute('class', 'minute-step' + number);
                button.setAttribute('id', 'saveMinute' + time_picker.normalizeNumber(number));
                button.setAttribute('value', time_picker.normalizeNumber(number));
                button.setAttribute('data-color', 'blue');

                var div = document.createElement('div');
                div.setAttribute('id', 'blueMinute' + time_picker.normalizeNumber(number));
                button.appendChild(div);

                var p = document.createElement('p');
                div.appendChild(p);
                smallStepsContainer.appendChild(button);
                time_picker.addEventSmallStepMinuteButton(button, number);
            }
        }
    },
    addEventHourButton: function (button, number) {
        button.addEventListener("click", function () {
            var hourHandle = document.getElementById("hourHandle");
            hourHandle.style.transform = `translate(-50%, -50%) rotate(${number * 30}deg)`;
            document.getElementById("outputHour").innerHTML = button.getAttribute('value');
            for (var numberHighlight = 1; numberHighlight <= 12; numberHighlight ++) {
                var highlightContainer = document.querySelector('#blueHour' + time_picker.normalizeNumber(numberHighlight));
                highlightContainer.classList.remove('highlight');
            }
            button.querySelector('div').classList.add('highlight');
        });
    },
    addEventBigStepMinuteButton: function (button, number) {
        button.addEventListener("click", function () {
            var minuteHandle = document.getElementById("minuteHandle");
            minuteHandle.style.transform = `translate(-50%, -50%) rotate(${number * 30}deg)`;
            document.getElementById("outputMinute").innerHTML = time_picker.normalizeNumber(button.getAttribute('value'));
            for (var numberHighlight = 1; numberHighlight <= 12; numberHighlight ++) {
                var highlightContainer = document.querySelector('#blueMinute' + time_picker.normalizeNumber(numberHighlight*5));
                highlightContainer.classList.remove('highlight');
            }
            button.querySelector('div').classList.add('highlight');
        });
    },
    addEventSmallStepMinuteButton: function (button, number) {
        button.addEventListener("click", function () {
            var minuteHandle = document.getElementById("minuteHandle");
            minuteHandle.style.transform = `translate(-50%, -50%) rotate(${number * 6}deg)`;
            document.getElementById("outputMinute").innerHTML = button.getAttribute('value');
            for (var numberHighlight = 1; numberHighlight <= 60; numberHighlight ++) {
                var highlightContainer = document.querySelector('#blueMinute' + time_picker.normalizeNumber(numberHighlight));
                highlightContainer.classList.remove('highlight');
            }
        });
    },
    setupClockFeature: function () {
        time_picker.switchSession();
        time_picker.switchHour();
        time_picker.switchMinute();
        time_picker.saveTimeButton();
        time_picker.clearTimeButton();
        time_picker.clickOnClock();
    },
    saveTimeButton: function() {
        var button = document.querySelector('.time-picker-buttons#saveTime');
        button.onclick = function () {
            var hour = document.getElementById("outputHour");
            var minute = document.getElementById("outputMinute");
            var outputSessionAM = document.getElementById("outputSessionAM");
            var outputSessionPM = document.getElementById("outputSessionPM");

            var modal = document.querySelector('.modal');
            modal.classList.remove('is-active');

            if (outputSessionAM.style.display == "none") {
                document.getElementById("resultSession").innerHTML = outputSessionPM.innerText;
            } else {
                document.getElementById("resultSession").innerHTML = outputSessionAM.innerText;
            }
            document.getElementById("resultHour").innerHTML = hour.innerText;
            document.getElementById("resultMinute").innerHTML = minute.innerText;
        }
    },
    clearTimeButton: function() {
        var button = document.querySelector('.time-picker-buttons#clearTime');
        button.onclick = function () {
            var switchHour = document.getElementById("hour");
            var switchMinute = document.getElementById("minute");
            var switchHourText = document.getElementById("in-hour");
            var switchMinuteText = document.getElementById("in-minute");
    
            switchHourText.style.display = "block";
            switchMinuteText.style.display = "none";
            switchHour.style.display = "block";
            switchMinute.style.display = "none";

            document.getElementById("saveHour12").click();
            document.getElementById("saveMinute60").click();
        }
    },
    clickOnClock: function (){
        var moveHourPointer = document.getElementById("hour");
        var moveMinutePointer = document.getElementById("minute");

        moveHourPointer.onmousedown = function() {
            moveHourPointer.style.cursor = "move";
        }
        moveHourPointer.onmouseup = function() {
            moveHourPointer.style.cursor = "default";
        }

        moveMinutePointer.onmousedown = function() {
            moveMinutePointer.style.cursor = "move";
        }
        moveMinutePointer.onmouseup = function() {
            moveMinutePointer.style.cursor = "default";
        }
    }
};