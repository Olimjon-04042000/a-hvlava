//  Nollar soni



function zeroNumber(n, m) {
    let sum = 1;
    let count = 0;
    if (n > m) {
        let a;
        a = n;
        n = m;
        m = a;
    }
    for (let i = n; i <= m; i++) {
        sum *= i;
    }
    while (sum > 0) {
        if (sum % 10 == 0) {
            count++;
        }
        sum = Math.trunc(sum / 10);
    }

    return count;
}
console.log(zeroNumber(3, 14));




//  Sezar shifrlash algoritmi


// let arrShifr = [];
// let xabar = prompt("Jo'natmoqchi bo'lgan xabaringizni kiriting:");

// function shifrlash(k) {
//     let arr = xabar.split("");

//     for (let i = 0; i < arr.length; i++) {
//         switch (arr[i]) {
//             case "a":
//                 arrShifr.push("d")
//                 break;
//             case "b":
//                 arrShifr.push("e")
//                 break;
//             case "c":
//                 arrShifr.push("f")
//                 break;
//             case "d":
//                 arrShifr.push("g")
//                 break;
//             case "e":
//                 arrShifr.push("h")
//                 break;
//             case "f":
//                 arrShifr.push("i")
//                 break;
//             case "g":
//                 arrShifr.push("j")
//                 break;
//             case "h":
//                 arrShifr.push("k")
//                 break;
//             case "i":
//                 arrShifr.push("l")
//                 break;
//             case "j":
//                 arrShifr.push("m")
//                 break;
//             case "k":
//                 arrShifr.push("n")
//                 break;
//             case "l":
//                 arrShifr.push("o")
//                 break;
//             case "m":
//                 arrShifr.push("q")
//                 break;
//             case "n":
//                 arrShifr.push("q")
//                 break;
//             case "o":
//                 arrShifr.push("r")
//                 break;
//             case "p":
//                 arrShifr.push("s")
//                 break;
//             case "q":
//                 arrShifr.push("t")
//                 break;
//             case "r":
//                 arrShifr.push("u")
//                 break;
//             case "s":
//                 arrShifr.push("v")
//                 break;
//             case "t":
//                 arrShifr.push("w")
//                 break;
//             case "u":
//                 arrShifr.push("x")
//                 break;
//             case "v":
//                 arrShifr.push("y")
//                 break;
//             case "w":
//                 arrShifr.push("z")
//                 break;
//             case "x":
//                 arrShifr.push("a")
//                 break;
//             case "y":
//                 arrShifr.push("b")
//                 break;
//             case "z":
//                 arrShifr.push("c")
//                 break;

//             default:
//                 arrShifr.push()

//                 break;
//         }

//     }
//     let shifrText = arrShifr.join("");
//     return shifrText;

// }
// console.log(shifrlash(3));