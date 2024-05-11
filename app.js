var sortNumber = function (number) {
    number.sort(function (a,b) {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    })
}

var number = [10, 35, 2, 59, 89, 56];
sortNumber(number);
console.log(number);