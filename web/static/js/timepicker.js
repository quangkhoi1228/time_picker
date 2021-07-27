/*
    1 đối tượng thì bao gồm:
        - thuộc tính
        - phương thức

ví dụ: đối tượng "người" bao gồm:
        -tay: thuộc tính
        -chân: thuộc tính
        -nói: phương thức
        -đi: phương thức


class Nguoi{
    tay = 2;
    chân = 2;
    nói = function(){
        console.log('tôi là người');
    }
}
*/



Nguoi = (function () {
    // constructor
    var constructor = function (name, year) {
        this.name = name;
        this.year = year;
        this.load = function () {
            console.log(this.name);
        }
    }

    // public static method
    constructor.staticmethod = {
        hello: function () { },
    };

    return constructor;
})();
