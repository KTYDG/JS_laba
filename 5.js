function Fizzbuzz(n) {
    for (let i = 1, mess = ""; i <= n; i++, mess = "") {
        if (i % 3 == 0) {
            mess = "fizz";
        }
        if (i % 5 == 0) {
            mess = mess + "buzz";
        }
        if (mess.length == 0) {
            mess = String(i);
        }
        console.log(mess);
    }
}

Fizzbuzz(15)
// Вывод:
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz