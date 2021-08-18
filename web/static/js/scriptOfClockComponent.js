var clockComponent = (function () {
    var constructor = function (selector) {
        this.selector = selector;
        this.container;
        this.button;
        this.timeChosen = [         //STORE CHOSEN TIME
            hour = null, minute = null, session = null
        ];
        this.createDisplayStructure = function () {
            this.container = document.querySelector(this.selector);
            this.button = this.container.querySelector('.button');
        };
        this.createClockStructure = function () {       // CLOCK STRUCTURE 
            var object = this;

            object.createHourStructure();
            object.createMinuteStructure();
            object.addLocationForClock();
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
                //ERASE DUPLICATE HOURS
                var number = index + 1;
                var hourStep = document.getElementsByClassName(`hour-step${number}`);

                for (var element of hourStep) {
                    element.remove();
                }

                //CREATE STRUCTURE
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
                object.timeChosen.hour = number;
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
                //ERASE DUPLICATE HOURS
                var number = index + 1;
                var minuteStep = document.getElementsByClassName(`minute-step${number * 5}`);

                for (var element of minuteStep) {
                    element.remove();
                }

                //CREATE STRUCTURE
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
        };
        this.createSmallStepMinuteStructure = function () {
            var object = this;

            var smallStepsContainer = document.querySelector('.clock-showing .small-steps');
            for (var index = 0; index < 59; index++) {
                var number = index + 1;
                if (number % 5 != 0) {
                    //ERASE DUPLICATE HOURS
                    var minuteStep = document.getElementsByClassName(`minute-step${number}`);

                    for (var element of minuteStep) {
                        element.remove();
                    }

                    //CREATE STRUCTURE
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
                object.timeChosen.minute = number;
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
                    object.timeChosen.minute = number;
                }
            });
        };
        this.stepsOfClockLocation = {
            locationForHours: [],
            locationForMinutes: [],
        };
        this.addLocationForClock = function () {
            object = this;
            //HOUR LOCATION
            for (var index = 0; index < 12; index++) {
                var number = index + 1;
                object.stepsOfClockLocation.locationForHours[index] = { "xHour": number, "yHour": number, "distanceCursor": number }
            }
            //MINUTE LOCATION
            for (var index = 0; index < 60; index++) {
                var number = index + 1;
                object.stepsOfClockLocation.locationForMinutes[index] = { "xMinute": number, "yMinute": number, "distanceCursor": number }
            }
        };

        // MODAL STRUCTURE 
        this.createModalStructure = function () {
            var object = this;

            object.closeModal();
            object.switchSession();
            object.switchUnitTime();
            object.saveTimeButton();
            object.clearTimeButton();
            object.scrollTimeFunction();
            object.turnTimeFunction();
        };
        this.openModal = function () {
            var object = this;

            document.querySelector(`${object.selector} .button-time-picker`).click();
            var modal = document.querySelector('.modal');

            object.button.onclick = function () {
                modal.classList.add('is-active');

                var modalContent = document.querySelector(".modal-content");
                cloneModalContent = modalContent.cloneNode(true);
                modalContent.replaceWith(cloneModalContent);
                modalContent.remove();

                object.createClockStructure();
                object.createModalStructure();

                object.addHourLocation();
                object.addMinuteLocation();
                if (document.querySelector(`${object.selector} .time-result-hour`).innerHTML === '--') {
                    if (object.timeChosen.hour == null) {   //output == "--" && hour == null
                        document.getElementsByClassName('hour-step12')[0].click();    // #saveHour12
                        document.getElementsByClassName('minute-step60')[0].click();    // #saveMinute60
                        document.getElementsByClassName('sessionSwitchButton')[0].click(); //AM

                        document.querySelector('.hourMode').click();
                    } else {                                //output == "--" && hour != null
                        console.log(object.timeChosen.minute);
                        document.getElementsByClassName(`hour-step${object.timeChosen.hour}`)[0].click();
                        document.getElementsByClassName(`minute-step${object.timeChosen.minute}`)[0].click();

                        document.querySelector('.hourMode').click();
                        if (object.timeChosen.session === "AM") {
                            document.getElementsByClassName('sessionSwitchButton')[0].click(); //AM
                        } else {
                            document.getElementsByClassName('sessionSwitchButton')[1].click(); //PM
                        }
                    }
                } else {                                    //output != "--"
                    document.getElementsByClassName(`hour-step${object.timeChosen.hour}`)[0].click();
                    document.getElementsByClassName(`minute-step${object.timeChosen.minute}`)[0].click();

                    document.querySelector('.hourMode').click();
                    if (object.timeChosen.session === "AM") {
                        document.getElementsByClassName('sessionSwitchButton')[0].click(); //AM
                    } else {
                        document.getElementsByClassName('sessionSwitchButton')[1].click(); //PM
                    }
                }
            }
        };
        this.closeModal = function () {
            var object = this;

            var background = document.querySelector('.modal-background');
            var modal = document.querySelector('.modal');
            background.onclick = function () {
                object.closeFunction(object, modal);
            }

            var button = document.getElementsByClassName('time-picker-buttons');
            var closeButton = button[1];    // #closeTime
            closeButton.onclick = function () {
                object.closeFunction(object, modal);
            }
        };
        this.closeFunction = function (object, modal) {
            var getTimeShowing = document.getElementsByClassName('time-showing-detail');
            var hour = getTimeShowing[0];       // #outputHour
            var minute = getTimeShowing[1];     // #outputMinute
            var sessionSwitchButton = document.getElementsByClassName('sessionSwitchButton');
            var outputSessionAM = sessionSwitchButton[0];   //outputSessionAM
            var outputSessionPM = sessionSwitchButton[1];   //outputSessionPM

            //SESSION AM/PM
            if (outputSessionAM.style.color != "rgb(255, 255, 255)") {
                object.timeChosen.session = outputSessionPM.innerText;
            } else {
                object.timeChosen.session = outputSessionAM.innerText;
            }
            object.timeChosen.hour = Number(hour.innerText);

            //MINUTE
            if (minute.innerText === "00") {
                object.timeChosen.minute = 60;
            } else {
                object.timeChosen.minute = Number(minute.innerText);
            }

            modal.classList.remove('is-active');

            var timeModal = document.getElementsByClassName('clock-showing');
            var switchHour = timeModal[1];      // #hour
            var switchMinute = timeModal[0];    // #minute

            switchHour.style.display = "block";
            switchMinute.style.display = "block";

            object.stopControlMinuteMouseDown();
            object.stopControlHourMouseDown();
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

                object.stopControlMinuteMouseDown();
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

                object.stopControlHourMouseDown();
                var timeModal = document.getElementsByClassName('clock-showing');
                var moveHourPointer = timeModal[1];     // #hour
                moveHourPointer.style.cursor = "default";
            }
        };
        this.saveTimeButton = function () {
            var object = this;
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

                object.timeChosen.hour = Number(hour.innerText);
                if (minute.innerText === "00") {
                    object.timeChosen.minute = 60;
                } else {
                    object.timeChosen.minute = Number(minute.innerText);
                }

                if (outputSessionAM.style.color != "rgb(255, 255, 255)") {
                    document.querySelector(`${object.selector} .time-result-session`).innerHTML = outputSessionPM.innerText;
                    object.timeChosen.session = outputSessionPM.innerText;
                } else {
                    document.querySelector(`${object.selector} .time-result-session`).innerHTML = outputSessionAM.innerText;
                    object.timeChosen.session = outputSessionAM.innerText;
                }
                document.querySelector(`${object.selector} .time-result-hour`).innerHTML = hour.innerText;
                document.querySelector(`${object.selector} .time-result-minute`).innerHTML = minute.innerText;

                object.stopControlMinuteMouseDown();
                object.stopControlHourMouseDown();
            }
        };
        this.clearTimeButton = function () {
            var object = this;

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

                document.querySelector(`${object.selector} .time-result-session`).innerHTML = "--";
                document.querySelector(`${object.selector} .time-result-hour`).innerHTML = "--";
                document.querySelector(`${object.selector} .time-result-minute`).innerHTML = "--";

                object.timeChosen.hour = null;
                object.timeChosen.minute = null;
                object.timeChosen.session = null;

                object.stopControlMinuteMouseDown();
                object.stopControlHourMouseDown();
            }
        };
        this.scrollTimeFunction = function () {
            var object = this;

            object.scrollHourClock();
            object.scrollMinuteClock();
        }
        this.scrollHourClock = function () {
            var timeModal = document.getElementsByClassName('clock-showing');
            var scrollClock = timeModal[1];    // #hour

            scrollClock.addEventListener('wheel', function (eventData) {
                if (eventData.deltaY <= 0) {
                    var getTimeShowing = document.getElementsByClassName('time-showing-detail');
                    var chosenHour = getTimeShowing[0].innerHTML;       // #outputHour
                    var presentHour = Number(chosenHour);
                    presentHour += 1;
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

        this.turnTimeFunction = function () {
            var object = this;

            var timeModal = document.getElementsByClassName('clock-showing');
            var moveHourPointer = timeModal[1];     // #hour
            var moveMinutePointer = timeModal[0];   // #minute

            moveHourPointer.onmousedown = function () {
                object.beginControlHourMouseDown();
            }
            moveHourPointer.onmouseup = function () {
                object.stopControlHourMouseDown();
            }

            moveMinutePointer.onmousedown = function () {
                object.beginControlMinuteMouseDown();
            }
            moveMinutePointer.onmouseup = function () {
                object.stopControlMinuteMouseDown();
            }
        };
        this.addHourLocation = function () {
            var object = this;

            for (var index = 0; index < 12; index++) {
                var numberHour = index + 1;
                var xDefault = 1;
                var yDefault = 1;

                xDefault = document.querySelector('.hour-step' + numberHour).getBoundingClientRect().left + window.scrollX;
                yDefault = document.querySelector('.hour-step' + numberHour).getBoundingClientRect().top + window.scrollY;

                object.stepsOfClockLocation.locationForHours[index].xHour = xDefault + 20;
                object.stepsOfClockLocation.locationForHours[index].yHour = yDefault + 20;
            }
        };
        this.beginControlHourMouseDown = function () {
            var object = this;

            var timeModal = document.getElementsByClassName('clock-showing');
            var moveHourPointer = timeModal[1];     // #hour
            moveHourPointer.style.cursor = "move";
            moveHourPointer.onmousemove = object.locateHourCursorDown();
        };
        this.locateHourCursorDown = function () {
            var object = this;

            document.onmousemove = function (eventData) {
                xCursor = eventData.pageX;
                yCursor = eventData.pageY;

                var distanceFromHourToCursor = 1;
                var minDistanceHour = 10000;
                var hourChosen = 0;

                for (var index = 0; index < 12; index++) {
                    distanceFromHourToCursor = Math.sqrt((object.stepsOfClockLocation.locationForHours[index].xHour - xCursor) ** 2
                        + (object.stepsOfClockLocation.locationForHours[index].yHour - yCursor) ** 2);
                    object.stepsOfClockLocation.locationForHours[index].distanceCursor = distanceFromHourToCursor;

                    if (object.stepsOfClockLocation.locationForHours[index].distanceCursor < minDistanceHour) {
                        minDistanceHour = object.stepsOfClockLocation.locationForHours[index].distanceCursor;
                        hourChosen = index + 1;
                        document.getElementsByClassName("hour-step" + hourChosen)[0].click();
                    }
                }
            }
        };
        this.stopControlHourMouseDown = function () {
            var object = this;

            var timeModal = document.getElementsByClassName('clock-showing');
            var moveHourPointer = timeModal[1];     // #hour
            moveHourPointer.style.cursor = "default";
            moveHourPointer.onmousemove = object.locateHourCursorUp;
        };
        this.locateHourCursorUp = function () {
            document.onmousemove = null;
        };
        this.addMinuteLocation = function () {
            var object = this;

            // Big Steps
            for (var index = 0; index < 12; index++) {
                var numberMinuteBigSteps = (index + 1) * 5;
                var xDefault = 1;
                var yDefault = 1;

                xDefault = document.querySelector('.minute-step' + numberMinuteBigSteps).getBoundingClientRect().left + window.scrollX;
                yDefault = document.querySelector('.minute-step' + numberMinuteBigSteps).getBoundingClientRect().top + window.scrollY;

                if (index == 0) {
                    var subIndex1 = index + 4;
                    object.stepsOfClockLocation.locationForMinutes[subIndex1].xMinute = xDefault + 20;
                    object.stepsOfClockLocation.locationForMinutes[subIndex1].yMinute = yDefault + 20;
                } else {
                    var subIndex2 = index * 5 + 4;
                    object.stepsOfClockLocation.locationForMinutes[subIndex2].xMinute = xDefault + 20;
                    object.stepsOfClockLocation.locationForMinutes[subIndex2].yMinute = yDefault + 20;
                }
            }

            // Small Steps
            for (var index = 0; index < 60; index++) {
                var numberMinuteSmallSteps = index + 1;
                if (numberMinuteSmallSteps % 5 != 0) {
                    var xDefault = 1;
                    var yDefault = 1;

                    xDefault = document.querySelector('.minute-step' + numberMinuteSmallSteps).getBoundingClientRect().left + window.scrollX;
                    yDefault = document.querySelector('.minute-step' + numberMinuteSmallSteps).getBoundingClientRect().top + window.scrollY;

                    object.stepsOfClockLocation.locationForMinutes[index].xMinute = xDefault + 7.5;
                    object.stepsOfClockLocation.locationForMinutes[index].yMinute = yDefault + 7.5;
                }
            }
        };
        this.beginControlMinuteMouseDown = function () {
            var object = this;

            var timeModal = document.getElementsByClassName('clock-showing');
            var moveMinutePointer = timeModal[0];    // #minute
            moveMinutePointer.style.cursor = "move";
            moveMinutePointer.onmousemove = object.locateMinuteCursorDown();
        };
        this.locateMinuteCursorDown = function () {
            var object = this;

            document.onmousemove = function (eventData) {
                xCursor = eventData.pageX;
                yCursor = eventData.pageY;

                var distanceFromMinuteToCursor = 1;
                var minDistanceMinute = 10000;
                var minuteChosen = 0;

                for (var index = 0; index < 60; index++) {
                    distanceFromMinuteToCursor = Math.sqrt((object.stepsOfClockLocation.locationForMinutes[index].xMinute - xCursor) ** 2
                        + (object.stepsOfClockLocation.locationForMinutes[index].yMinute - yCursor) ** 2);
                    object.stepsOfClockLocation.locationForMinutes[index].distanceCursor = distanceFromMinuteToCursor;

                    if (object.stepsOfClockLocation.locationForMinutes[index].distanceCursor < minDistanceMinute) {
                        minDistanceMinute = object.stepsOfClockLocation.locationForMinutes[index].distanceCursor;
                        minuteChosen = index + 1;
                        document.getElementsByClassName("minute-step" + minuteChosen)[0].click();
                    }
                }
            }
        };
        this.stopControlMinuteMouseDown = function () {
            var object = this;

            var timeModal = document.getElementsByClassName('clock-showing');
            var moveMinutePointer = timeModal[0];    // #minute
            moveMinutePointer.style.cursor = "default";
            moveMinutePointer.onmousemove = object.locateMinuteCursorUp();
        };
        this.locateMinuteCursorUp = function () {
            document.onmousemove = null;
        };
        //RUN FUNCTION
        this.createDisplayStructure();
        this.normalizeNumber();
        this.openModal();
    }
    return constructor;
})();