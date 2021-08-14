var clockComponent = (function () {
    var constructor = function (selector) {
        this.selector = selector;
        this.container;
        this.button;
        this.timeChosen;
        this.timeResult;

        // this.stepsOfClockLocation = {
        //     "locationForHours": [
        //         { xHour = "", yHour = "", distanceCursor = "" },
        //     ],

        //     "locationForMinutes": [
        //         { xMinute = "", yMinute = "", distanceCursor = "" },
        //     ],
        // };
        // this.addLocationForClock = function () {
        //     for (var index = 0; index < 12; index ++) {

        //     }
        // }
        
        this.createDisplayStructure = function () {
            this.container = document.querySelector(this.selector);
            this.button = this.container.querySelector('.button');
        };

        // CLOCK STRUCTURE 
        this.createClockStructure = function () {
            var object = this;
            object.createHourStructure();
            object.createMinuteStructure();
        };
        this.normalizeNumber = function (number) {
            if (number < 10) {
                number = '0' + number;
            }
            return number;
        };
        this.createHourStructure = function () {
            var object = this;

            var timeModal = document.getElementsByClassName('clock-showing');
            var container = timeModal[1];     // #hour
            for (var index = 0; index < 12; index++) {
                var number = index + 1;
                var button = document.createElement('button');
                button.setAttribute('class', 'hour-step' + number);
                button.setAttribute('value', object.normalizeNumber(number));
                button.setAttribute('data-color', 'blue');


                var div = document.createElement('div');
                div.setAttribute('class', 'blueHour' + object.normalizeNumber(number));

                button.appendChild(div);

                var p = document.createElement('p');
                p.innerHTML = number;
                div.appendChild(p);

                container.appendChild(button);
                object.addEventHourButton(button, number);
            }

            //ERASE DUPLICATE HOURS
            for (var index = 0; index < 12; index++) {
                var number = index + 1;
                if (document.getElementsByClassName(`hour-step${number}`)[1] != null) {
                    document.getElementsByClassName(`hour-step${number}`)[1].remove();
                }
            }
        };
        this.addEventHourButton = function (button, number) {
            var object = this;

            button.addEventListener("click", function () {
                var handle = document.getElementsByClassName('handleBox');
                var hourHandle = handle[1];     // #hourHandle
                hourHandle.style.transform = `translate(-50%, -50%) rotate(${number * 30}deg)`;

                document.getElementsByClassName('time-showing-detail')[0].innerHTML = button.getAttribute('value');     // #outputHour
                for (var numberHighlight = 1; numberHighlight <= 12; numberHighlight++) {
                    var highlightContainer = document.querySelector('.blueHour' + object.normalizeNumber(numberHighlight));
                    highlightContainer.classList.remove('highlight');
                }
                button.querySelector('div').classList.add('highlight');
            });
        };
        this.createMinuteStructure = function () {
            var object = this;

            object.createBigStepMinuteStructure();
            object.createSmallStepMinuteStructure();
        };
        this.createBigStepMinuteStructure = function () {
            var object = this;

            var bigStepsContainer = document.querySelector('.clock-showing .big-steps');
            for (var index = 0; index < 12; index++) {
                var number = index + 1;
                var button = document.createElement('button');
                button.setAttribute('class', 'minute-step' + (number * 5));
                var value = (number * 5 == 60) ? 0 : (number * 5);

                button.setAttribute('value', value);
                button.setAttribute('data-color', 'blue');

                var div = document.createElement('div');
                div.setAttribute('class', 'blueMinute' + object.normalizeNumber(number * 5));

                button.appendChild(div);

                var p = document.createElement('p');
                p.innerHTML = value;
                div.appendChild(p);

                bigStepsContainer.appendChild(button);
                object.addEventBigStepMinuteButton(button, number);
            }

            //ERASE DUPLICATE HOURS
            for (var index = 0; index < 12; index++) {
                var number = index + 1;
                if (document.getElementsByClassName(`minute-step${number * 5}`)[1] != null) {
                    document.getElementsByClassName(`minute-step${number * 5}`)[1].remove();
                }
            }
        };
        this.createSmallStepMinuteStructure = function () {
            var object = this;

            var smallStepsContainer = document.querySelector('.clock-showing .small-steps');
            for (var index = 0; index < 59; index++) {
                var number = index + 1;
                if (number % 5 != 0) {
                    var button = document.createElement('button');
                    button.setAttribute('class', 'minute-step' + number);
                    button.setAttribute('value', object.normalizeNumber(number));
                    button.setAttribute('data-color', 'blue');

                    var div = document.createElement('div');
                    div.setAttribute('class', 'blueMinute' + object.normalizeNumber(number));

                    button.appendChild(div);

                    var p = document.createElement('p');
                    div.appendChild(p);
                    smallStepsContainer.appendChild(button);
                    object.addEventSmallStepMinuteButton(button, number);
                }
            }

            //ERASE DUPLICATE HOURS
            for (var index = 0; index < 59; index++) {
                var number = index + 1;
                if (number % 5 != 0) {
                    if (document.getElementsByClassName(`minute-step${number}`)[1] != null) {
                        document.getElementsByClassName(`minute-step${number}`)[1].remove();
                    }
                }
            }
        };
        this.addEventBigStepMinuteButton = function (button, number) {
            var object = this;

            button.addEventListener("click", function () {
                var handle = document.getElementsByClassName('handleBox');
                var minuteHandle = handle[0];       // #minuteHandle
                minuteHandle.style.transform = `translate(-50%, -50%) rotate(${number * 30}deg)`;
                document.getElementsByClassName('time-showing-detail')[1].innerHTML = object.normalizeNumber(button.getAttribute('value'));     // #outputMinute
                for (var numberHighlight = 1; numberHighlight <= 12; numberHighlight++) {
                    var highlightContainer = document.querySelector('.blueMinute' + object.normalizeNumber(numberHighlight * 5));
                    highlightContainer.classList.remove('highlight');
                }
                button.querySelector('div').classList.add('highlight');
            });
        };
        this.addEventSmallStepMinuteButton = function (button, number) {
            var object = this;

            button.addEventListener("click", function () {
                var handle = document.getElementsByClassName('handleBox');
                var minuteHandle = handle[0];       // #minuteHandle
                minuteHandle.style.transform = `translate(-50%, -50%) rotate(${number * 6}deg)`;
                document.getElementsByClassName('time-showing-detail')[1].innerHTML = button.getAttribute('value');     // #outputMinute
                for (var numberHighlight = 1; numberHighlight <= 60; numberHighlight++) {
                    var highlightContainer = document.querySelector('.blueMinute' + object.normalizeNumber(numberHighlight));
                    highlightContainer.classList.remove('highlight');
                }
            });
        };

        // MODAL STRUCTURE 
        this.createModalStructure = function () {
            var object = this;

            object.openModal();
            object.closeModal();
            object.switchSession();
            object.switchUnitTime();
            object.saveTimeButton();
            object.clearTimeButton();
            object.scrollHourClock();
            object.scrollMinuteClock();
        };
        this.openModal = function () {
            var object = this;

            document.querySelector(`${object.selector} .button-time-picker`).click();
            var modal = document.querySelector('.modal');

            object.button.onclick = function () {
                modal.classList.add('is-active');

                //     // object.addHourLocation();
                //     // object.addMinuteLocation();
                if (document.querySelector(`${object.selector} .time-result-hour`).innerHTML === '--') {
                    document.getElementsByClassName('hour-step12')[0].click();    // #saveHour12
                    document.getElementsByClassName('minute-step60')[0].click();    // #saveMinute60

                    var timeModal = document.getElementsByClassName('clock-showing');
                    var switchHour = timeModal[1];      // #hour
                    var switchMinute = timeModal[0];    // #minute

                    var getTimeShowing = document.getElementsByClassName('time-showing-detail');
                    var switchHourOutput = getTimeShowing[0];       //#outputHour
                    var switchMinuteOutput = getTimeShowing[1];     //#outputMinute

                    switchHourOutput.style.color = "#ffffff";
                    switchMinuteOutput.style.color = "#b3cefb";

                    var sessionSwitchButton = document.getElementsByClassName('sessionSwitchButton');
                    var switchAM = sessionSwitchButton[0];      // #outputSessionAM
                    var switchPM = sessionSwitchButton[1];      // #outputSessionPM

                    switchAM.style.color = "#ffffff";
                    switchAM.style.transition = "all 0s";
                    switchPM.style.color = "#b3cefb";
                    switchPM.style.transition = "all 0s";
                } else {
                    var timeModal = document.getElementsByClassName('clock-showing');
                    var switchHour = timeModal[1];      // #hour
                    var switchMinute = timeModal[0];    // #minute

                    var getTimeShowing = document.getElementsByClassName('time-showing-detail');
                    var switchHourOutput = getTimeShowing[0];       // #outputHour
                    var switchMinuteOutput = getTimeShowing[1];     // #outputMinute

                    switchHourOutput.style.color = "#ffffff";
                    switchMinuteOutput.style.color = "#b3cefb";
                    switchHour.style.display = "block";
                    switchMinute.style.display = "none";
                }
            }
        };
        this.closeModal = function () {
            var background = document.querySelector('.modal-background');
            var modal = document.querySelector('.modal');
            background.onclick = function () {
                modal.classList.remove('is-active');

                var timeModal = document.getElementsByClassName('clock-showing');
                var switchHour = timeModal[1];      // #hour
                var switchMinute = timeModal[0];    // #minute

                switchHour.style.display = "block";
                switchMinute.style.display = "block";
            }

            var button = document.getElementsByClassName('time-picker-buttons');
            var closeButton = button[1];    // #closeTime
            closeButton.onclick = function () {
                modal.classList.remove('is-active');

                var timeModal = document.getElementsByClassName('clock-showing');
                var switchHour = timeModal[1];      // #hour
                var switchMinute = timeModal[0];    // #minute

                switchHour.style.display = "block";
                switchMinute.style.display = "block";
            }
        };
        this.switchSession = function () {
            var object = this;

            object.switchToAM();
            object.switchToPM();
        };
        this.switchToAM = function () {
            var sessionSwitchButton = document.getElementsByClassName('sessionSwitchButton');
            switchAM = sessionSwitchButton[0];      // #outputSessionAM
            switchPM = sessionSwitchButton[1];      // #outputSessionPM
            switchAM.onclick = function () {
                switchAM.style.color = "#ffffff";
                switchAM.style.transition = "all 0.8s";
                switchPM.style.color = "#b3cefb";
                switchPM.style.transition = "all 0.8s";
            }
        };
        this.switchToPM = function () {
            var sessionSwitchButton = document.getElementsByClassName('sessionSwitchButton');
            switchAM = sessionSwitchButton[0];      // #outputSessionAM
            switchPM = sessionSwitchButton[1];      // #outputSessionPM
            switchPM.onclick = function () {
                switchPM.style.color = "#ffffff";
                switchPM.style.transition = "all 0.8s";
                switchAM.style.color = "#b3cefb";
                switchAM.style.transition = "all 0.8s";
            }
        };
        this.switchUnitTime = function () {
            var object = this;

            object.switchHour();
            object.switchMinute();
        };
        this.switchHour = function () {
            var button = document.querySelector('.time-oclock .hourMode');
            button.onclick = function () {
                var timeModal = document.getElementsByClassName('clock-showing');
                var switchHour = timeModal[1];      // #hour
                var switchMinute = timeModal[0];    // #minute
                var getTimeShowing = document.getElementsByClassName('time-showing-detail');
                var switchHourOutput = getTimeShowing[0];       // #outputHour
                var switchMinuteOutput = getTimeShowing[1];     // #outputMinute

                switchHourOutput.style.color = "#ffffff";
                switchMinuteOutput.style.color = "#b3cefb";
                switchHour.style.display = "block";
                switchMinute.style.display = "none";

                // object.stopControlMinuteMouseDown();
                var timeModal = document.getElementsByClassName('clock-showing');
                var moveMinutePointer = timeModal[0];     // #minute
                moveMinutePointer.style.cursor = "default";
            }
        };
        this.switchMinute = function () {
            var button = document.querySelector('.time-oclock .minuteMode');
            button.onclick = function () {
                var timeModal = document.getElementsByClassName('clock-showing');
                var switchHour = timeModal[1];      // #hour
                var switchMinute = timeModal[0];    // #minute
                var getTimeShowing = document.getElementsByClassName('time-showing-detail');
                var switchHourOutput = getTimeShowing[0];       // #outputHour
                var switchMinuteOutput = getTimeShowing[1];     // #outputMinute

                switchHourOutput.style.color = "#b3cefb";
                switchMinuteOutput.style.color = "#ffffff";
                switchHour.style.display = "none";
                switchMinute.style.display = "block";

                // object.stopControlHourMouseDown();
                var timeModal = document.getElementsByClassName('clock-showing');
                var moveHourPointer = timeModal[1];     // #hour
                moveHourPointer.style.cursor = "default";
            }
        };
        this.saveTimeButton = function () {
            var button = document.getElementsByClassName('time-picker-buttons');
            var saveTime = button[2];

            saveTime.onclick = function () {
                var getTimeShowing = document.getElementsByClassName('time-showing-detail');
                var hour = getTimeShowing[0];       // #outputHour
                var minute = getTimeShowing[1];     // #outputMinute
                var sessionSwitchButton = document.getElementsByClassName('sessionSwitchButton');
                var outputSessionAM = sessionSwitchButton[0];   //outputSessionAM
                var outputSessionPM = sessionSwitchButton[1];   //outputSessionPM

                var timeModal = document.getElementsByClassName('clock-showing');
                var switchHour = timeModal[1];      // #hour
                var switchMinute = timeModal[0];    // #minute

                switchHour.style.display = "block";
                switchMinute.style.display = "block";

                var modal = document.querySelector(".modal");
                modal.classList.remove('is-active');

                if (outputSessionAM.style.color != "rgb(255, 255, 255)") {
                    var resultSession = document.getElementsByClassName('time-result-session');
                    resultSession[0].innerHTML = outputSessionPM.innerText;
                } else {
                    var resultSession = document.getElementsByClassName('time-result-session');
                    resultSession[0].innerHTML = outputSessionAM.innerText;
                }
                var resultHour = document.getElementsByClassName('time-result-hour');
                resultHour[0].innerHTML = hour.innerText;
                var resultMinute = document.getElementsByClassName('time-result-minute');
                resultMinute[0].innerHTML = minute.innerText;
            }
        };
        this.clearTimeButton = function () {
            var button = document.getElementsByClassName('time-picker-buttons');
            var clearButton = button[0];

            clearButton.onclick = function () {
                var timeModal = document.getElementsByClassName('clock-showing');
                var switchHour = timeModal[1];      // #hour
                var switchMinute = timeModal[0];    // #minute

                switchMinute.style.display = "block";
                switchHour.style.display = "block";

                var modal = document.querySelector(".modal");
                modal.classList.remove('is-active');

                var resultSession = document.getElementsByClassName('time-result-session');
                resultSession[0].innerHTML = "--";
                var resultHour = document.getElementsByClassName('time-result-hour');
                resultHour[0].innerHTML = "--";
                var resultMinute = document.getElementsByClassName('time-result-minute');
                resultMinute[0].innerHTML = "--";
            }
        };

        // NOT ADD YET
        this.addHourLocation = function () {
            for (var index = 0; index < 12; index++) {
                var numberHour = index + 1;
                var xDefault = 1;
                var yDefault = 1;

                xDefault = document.querySelector('.hour-step' + numberHour).getBoundingClientRect().left + window.scrollX;
                yDefault = document.querySelector('.hour-step' + numberHour).getBoundingClientRect().top + window.scrollY;

                stepsOfClockLocation.locationForHours[index].xHour = xDefault + 20;
                stepsOfClockLocation.locationForHours[index].yHour = yDefault + 20;
            }
        };
        this.clickOnClock = function () {
            var object = this;

            var timeModal = document.getElementsByClassName('clock-showing');
            var moveHourPointer = timeModal[1];     // #hour
            var moveMinutePointer = timeModal[0];   // #minute

            moveHourPointer.onmousedown = function () {
                moveHourPointer.style.cursor = "move";
                object.beginControlHourMouseDown();
            }
            moveHourPointer.onmouseup = function () {
                moveHourPointer.style.cursor = "default";
                object.stopControlHourMouseDown();
            }

            moveMinutePointer.onmousedown = function () {
                moveMinutePointer.style.cursor = "move";
                object.beginControlMinuteMouseDown();
            }
            moveMinutePointer.onmouseup = function () {
                moveMinutePointer.style.cursor = "default";
                object.stopControlMinuteMouseDown();
            }
        };
        this.scrollHourClock = function () {
            var timeModal = document.getElementsByClassName('clock-showing');
            var scrollClock = timeModal[1];    // #hour
    
            scrollClock.addEventListener('wheel', function (eventData) {
                if (eventData.deltaY <= 0) {
                    var getTimeShowing = document.getElementsByClassName('time-showing-detail');
                    var chosenHour = getTimeShowing[0].innerHTML;       // #outputHour
                    var presentHour = Number(chosenHour);
                    presentHour += 1;
                    console.log(presentHour);
                    if (presentHour == 13) {
                        presentHour = 1;
                    }
                } else {
                    var getTimeShowing = document.getElementsByClassName('time-showing-detail');
                    var chosenHour = getTimeShowing[0].innerHTML;       // #outputHour
                    var presentHour = Number(chosenHour);
                    presentHour -= 1;
                    if (presentHour == 0) {
                        presentHour = 12;
                    }
                }
    
                for (var index = 0; index < 12; index++) {
                    var numberHour = index + 1;
                    if (presentHour == numberHour) {
                        document.getElementsByClassName("hour-step" + presentHour)[0].click();
                    }
                }
            });
        };
        this.scrollMinuteClock = function () {
            var timeModal = document.getElementsByClassName('clock-showing');
            var scrollClock = timeModal[0];    // #minute
    
            scrollClock.addEventListener('wheel', function (eventData) {
                if (eventData.deltaY <= 0) {
                    var getTimeShowing = document.getElementsByClassName('time-showing-detail');
                    var chosenMinute = getTimeShowing[1].innerHTML;       // #outputMinute
                    var presentMinute = Number(chosenMinute);
                    presentMinute += 1;
                    if (presentMinute == 61) {
                        presentMinute = 1;
                    }
                } else {
                    var getTimeShowing = document.getElementsByClassName('time-showing-detail');
                    var chosenMinute = getTimeShowing[1].innerHTML;       // #outputMinute
                    var presentMinute = Number(chosenMinute);
                    presentMinute -= 1;
                    if (presentMinute == 0) {
                        presentMinute = 60;
                    }
                    if (presentMinute == -1) {
                        presentMinute = 59;
                    }
                }
    
                for (var index = 0; index < 60; index++) {
                    var numberMinute = index + 1;
                    if (presentMinute == numberMinute) {
                        document.getElementsByClassName("minute-step" + presentMinute)[0].click();
                    }
                }
            });
        };
        
        //RUN FUNCTION
        this.createDisplayStructure();
        this.normalizeNumber();
        this.createClockStructure();
        this.createModalStructure();
    }
    return constructor;
})();