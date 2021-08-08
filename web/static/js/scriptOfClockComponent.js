var inputComponent = (function () {
    var constructor = function (selector) {
        this.selector = selector;
        this.container;
        this.button;
        this.createDisplayStructure = function () {
            this.container = document.querySelector(this.selector);
            this.button = this.container.querySelector('.button');
        };

        // CLOCK STRUCTURE 
        this.createClockStructure = function () {
            var object = this;
            object.createHourStructure();
            // object.createMinuteStructure();
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
            for (var number = 1; number <= 12; number++) {
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
            for (var number = 1; number <= 12; number++) {
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

            var smallStepsContainer = document.querySelector('.clock-showiobjectng .small-steps');
            for (var number = 1; number < 60; number++) {
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
            // object.closeModal();
        }
        this.openModal = function () {
            var object = this;

            document.querySelector(`${object.selector} .button-time-picker`).click();
            var modal = document.querySelector('.modal');
            //     var count = 0;

            object.button.onclick = function () {
                modal.classList.add('is-active');
            }
            //     // object.addHourLocation();
            //     // object.addMinuteLocation();
            //     if (count == 0) {
            //         document.getElementsByClassName('hour-step12')[0].click();    // #saveHour12
            //         document.getElementsByClassName('minute-step60')[0].click();    // #saveMinute60
            //         var getTimeShowing = document.getElementsByClassName('time-showing-detail');
            //         switchHourOutput = getTimeShowing[0];       //#outputHour
            //         switchMinuteOutput = getTimeShowing[1];     //#outputMinute

            //         switchHourOutput.style.color = "#ffffff";
            //         switchMinuteOutput.style.color = "#b3cefb";

            //         var sessionSwitchButton = document.getElementsByClassName('sessionSwitchButton');
            //         switchAM = sessionSwitchButton[0];      // #outputSessionAM
            //         switchPM = sessionSwitchButton[1];      // #outputSessionPM

            //         switchAM.style.color = "#ffffff";
            //         switchAM.style.transition = "all 0s";
            //         switchPM.style.color = "#b3cefb";
            //         switchPM.style.transition = "all 0s";

            //         count++;
            //     } else {
            //         var timeModal = document.getElementsByClassName('clock-showing');
            //         var switchHour = timeModal[1];      // #hour
            //         var switchMinute = timeModal[0];    // #minute

            //         var getTimeShowing = document.getElementsByClassName('time-showing-detail');
            //         var switchHourOutput = getTimeShowing[0];       // #outputHour
            //         var switchMinuteOutput = getTimeShowing[1];     // #outputMinute

            //         switchHourOutput.style.color = "#ffffff";
            //         switchMinuteOutput.style.color = "#b3cefb";
            //         switchHour.style.display = "block";
            //         switchMinute.style.display = "none";
            //     }
        };
        // this.closeModal = function () {
        //     var background = document.querySelector('.modal-background');
        //     var modal = document.querySelector('.modal');
        //     background.onclick = function () {
        //         modal.classList.remove('is-active');

        //         var timeModal = document.getElementsByClassName('clock-showing');
        //         var switchHour = timeModal[1];      // #hour
        //         var switchMinute = timeModal[0];    // #minute

        //         switchHour.style.display = "block";
        //         switchMinute.style.display = "block";
        //     }

        //     var button = document.getElementsByClassName('time-picker-buttons');
        //     var closeButton = button[1];    // #closeTime
        //     closeButton.onclick = function () {
        //         modal.classList.remove('is-active');

        //         var timeModal = document.getElementsByClassName('clock-showing');
        //         var switchHour = timeModal[1];      // #hour
        //         var switchMinute = timeModal[0];    // #minute

        //         switchHour.style.display = "block";
        //         switchMinute.style.display = "block";
        //     }
        // };
        this.createDisplayStructure();
        this.normalizeNumber();
        this.createClockStructure();
        this.createModalStructure();
    }
    return constructor;
})();