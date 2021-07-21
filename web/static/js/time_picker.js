var time_picker = {
    openModal: function () {
        var button = document.querySelector('#launchModal');
        var modal = document.querySelector('.modal');
        button.onclick = function () {
            modal.classList.add('is-active');
        }
    },
    openDropdown: function () {
        var dropdown = document.getElementById('launchDropdown');
        dropdown.onclick = function () {
            var openBox = document.getElementById("dropdown-menu");
            if (openBox.style.display == "none") {
                openBox.style.display = "block";
            } else {
                openBox.style.display = "none";
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
    staNumber: function (number) {
        if (number < 10) {
            number = '0' + number;
        }
        return number;
    },
    createStructure: function () {
        /*
        design pattern
            - cách đặt tên : kiểu lạc đà
                - class
                    -JS: bắt đầu bằng danh từ và viết hoa các chữ cái đầu tiên :  HoaHuongDuong
                - hàm
                    -JS: bắt đầu bằng động từ và viết hoa các chữ cái đầu từ chữ thứ hai :  taoMoi, capNhat
                - biến
                    - JS : bắt đầu bằng danh từ và viết hoa các chữ cái đầu từ chữ thứ hai: nguoiVietNam
            
            - luồng code
                - 1 hàm chỉ được làm 1 nhiệm vụ duy nhất
        */
        time_picker.switchHour();
        time_picker.switchMinute();
        time_picker.createHourStructure();
        time_picker.createMinuteStructure();

    },
    createMinuteStructure: function () {
        time_picker.createBigStepMinuteStructure();
        time_picker.createSmallStepMinuteStructure();


    },
    createBigStepMinuteStructure: function () {
        var bigStepsContainer = document.querySelector('#minute .big-steps');
        for (var number = 1; number < 13; number++) {
            var button = document.createElement('button');
            button.setAttribute('class', 'oclock-' + number);
            button.setAttribute('id', 'saveMinute' + time_picker.staNumber(number * 5));
            var value;
            if (number * 5 == 60) {
                value = 0;
            } else {
                value = number * 5;
            }
            button.setAttribute('value', value);
            button.setAttribute('data-color', 'blue');


            var div = document.createElement('div');
            div.setAttribute('id', 'blueMinute' + time_picker.staNumber(number * 5));
            button.appendChild(div);

            var p = document.createElement('p');
            p.innerHTML = value;
            div.appendChild(p);

            bigStepsContainer.appendChild(button);
        }
    },
    createSmallStepMinuteStructure: function () {
        var smallStepsContainer = document.querySelector('#minute .small-steps');
        for (var number = 1; number < 60; number++) {
            if (number % 5 != 0) {
                var button = document.createElement('button');
                button.setAttribute('class', 'minute-step' + number);
                button.setAttribute('id', 'saveMinute' + time_picker.staNumber(number));
                button.setAttribute('value', time_picker.staNumber(number));
                button.setAttribute('data-color', 'blue');

                var div = document.createElement('div');
                div.setAttribute('id', 'blueMinute' + time_picker.staNumber(number));
                button.appendChild(div);

                var p = document.createElement('p');
                div.appendChild(p);
                smallStepsContainer.appendChild(button);
            }
        }
    },
    createHourStructure: function () {
        var container = document.getElementById('hour');
        for (var number = 1; number < 13; number++) {
            var button = document.createElement('button');
            button.setAttribute('class', 'oclock-' + number);
            button.setAttribute('id', 'saveHour' + time_picker.staNumber(number));
            button.setAttribute('value', time_picker.staNumber(number));
            button.setAttribute('data-color', 'blue');


            var div = document.createElement('div');
            div.setAttribute('id', 'blueHour' + time_picker.staNumber(number));
            button.appendChild(div);

            var p = document.createElement('p');
            p.innerHTML = number;
            div.appendChild(p);

            container.appendChild(button);
            time_picker.addEventHourButton(button, number);
        }
    },
    addEventHourButton: function (button, number) {
        console.log(button);
        //string template
        // '' ""

        //String template: ``


        //định nghĩa chuỗi trong js có các kiểu định nghĩa sau: "dog" ,'ba' , `má`
        button.addEventListener("click", function () {
            var hourHandle = document.getElementById("hourHandle");
            hourHandle.style.transform = `translate(-50%, -50%) rotate(${number * 30}deg)`;
            document.getElementById("outputHour").innerHTML = button.getAttribute('value');
            var highlightContainer = document.querySelector('#hour > button > div.highlight');
            highlightContainer.classList.remove('highlight');
            button.querySelector('div').classList.add('highlight');
        });
    },

    setHourState: function (hour) {
        var hourHandle = document.getElementById("hourHandle");
        hourHandle.style.transform = `translate(-50%, -50%) rotate(${number * 30}deg)`;
        document.getElementById("outputHour").innerHTML = saveHour01.value;
        var highlightContainer = document.querySelector('#hour > button > div.highlight');
        highlightContainer.classList.remove('highlight');
        button.querySelector('div').classList.add('highlight');
    }
};

