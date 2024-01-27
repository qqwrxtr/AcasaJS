// ex4
let txt1 =document.createTextNode('Ex 4');
let ex4 = document.createElement('div');
document.body.appendChild(ex4);
let rasp = document.createElement('p');
ex4.appendChild(txt1);
ex4.appendChild(rasp);

let n = 4;

    for (var a = 1; a < n+n; a++) {
        a++;
        let pp1 = document.createTextNode(`${a} + `);
        rasp.appendChild(pp1);
    }

    for (var sum = 1; sum < n+n; sum++) {
        const sum = n*n+n;
        var suma = sum;
    } 

    let ex4rsp = document.createTextNode(` = ${suma}`)
        rasp.appendChild(ex4rsp);
    
// ex5
let ex5 = document.createElement('div');
document.body.appendChild(ex5);
let txt2 = document.createTextNode('Ex 5');
ex5.appendChild(txt2);

var a1 = 3;
var b1 = 4;
var c1 = 5;

let laturi = document.createElement('p');
laturi.innerHTML = `laturile sunt = ${a1} cm , ${b1} cm , ${c1} cm`;
ex5.appendChild(laturi);
let ex5rsp = document.createElement('p');
ex5.appendChild(ex5rsp);
let poate = document.createElement('p');
ex5.appendChild(poate);

if ((a1>0) && (b1>0) && (c1>0)) {
    let perim = a1 + b1 + c1;
    let p = (a1 + b1 + c1)/2;
    let aria = (p * (p-a1) * (p-b1) * (p-c1))
    ex5rsp.textContent = `Poate fi triungi si are perimetrul de ${perim}cm si aria de ${aria}cm`;
    

} else {
    ex5rsp.textContent = 'nu poate fi triunghi';
}

if ((a1==b1) && (b1!=c1)) {
    poate.textContent = 'triunghi isoscel';
} else if((a1==b1) && (b1==c1)) {
    poate.textContent = 'triunghi echilateral';
} else if((a1!=b1!=c1)){
    poate.textContent = 'triunghi oarecare';
}

// ex6
let ex6 = document.createElement('div');
document.body.appendChild(ex6);
let txt3 = document.createTextNode('Ex 6');
ex6.appendChild(txt3);
let ex6rsp = document.createElement('p');
ex6.appendChild(ex6rsp);


var AB = 3;
var BC = 5;
var AC = 7;

var perim2 = AB + BC + AC;
var p2 = (AB + BC + AC)/2;
var aria2 = (p2 * (p2-AB) * (p2-BC) * (p2-AC));

let lat2 = document.createTextNode(`Laturile sunt : AB = ${AB}cm , BC = ${BC}cm , AC = ${AC}cm `);
let rsp = document.createTextNode(`Perimetru = ${perim2}cm , Aria = ${aria2}cm `);
ex6.appendChild(lat2 );
ex6.appendChild(rsp);

// ex7
let ex7 = document.createElement('div');
document.body.appendChild(ex7);
let txt4 = document.createTextNode('Ex 7');
ex7.appendChild(txt4);
let ex7rsp = document.createElement('p');
ex7.appendChild(ex7rsp);

var n5 = 127;

let x4 = n5 % 10;
let alttxt = document.createTextNode(`ultima cifra a numarului ${n5} este ${x4}`);
ex7rsp.appendChild(alttxt)


// ex8
// nu inteleg ce trebuie de facut

//ex9
let ex9 = document.createElement('div');
document.body.appendChild(ex9);
let txt5 = document.createTextNode('Ex 9');
ex9.appendChild(txt5);
let ex9rsp = document.createElement('p');
ex9.appendChild(ex9rsp);

var a12 = 10;
var b12 = 20;
var c12 = 30;

if ((a12 > b12) && (b12 > c12) && (a12 > c12)) {
    ex9rsp.textContent = `${a12} ${b12} ${c12}`
}

if ((a12 > b12) && (b12 < c12) && (a12 > c12)) {
    ex9rsp.textContent = `${a12} ${c12} ${b12}`
}

if ((a12 < b12) && (b12 > c12) && (a12 > c12)) {
    ex9rsp.textContent = ` ${b12} ${a12} ${c12}`
}

if ((a12 < b12) && (b12 < c12) && (a12 < c12)) {
    ex9rsp.textContent = ` ${c12} ${b12} ${a12}`
}

if ((a12 < b12) && (b12 > c12) && (a12 < c12)) {
    ex9rsp.textContent = ` ${b12} ${c12} ${a12}`
}


// ex10
let txt11 =document.createTextNode('Ex 10');
let ex10 = document.createElement('div');
document.body.appendChild(ex10);
let ex10rasp = document.createElement('p');
ex10.appendChild(txt11);
ex10.appendChild(ex10rasp);


let a5 = 1;
let b5 = 10;

let count = 0;

for (let i = a5; i <= b5; i++) {
  if (i % 3 == 0) {
    count++;
  }
}
let text = "Numere divizibile prin 3 pe intervalul [" + a5 + ", " + b5 + "]: " + count;

ex10rasp.textContent = text;


//ex11
let ex11 = document.createElement('div');
document.body.appendChild(ex11);
let txt6 = document.createTextNode('Ex 11');
ex11.appendChild(txt6);
let ex11rsp = document.createElement('p');
ex11.appendChild(ex11rsp);

let a55 = 5;
let b55 = 8;

let perimeter = 2 * (a55 + b55);

let area = a55 * b55;


let diagonal = Math.sqrt(a55 * a55 + b55 * b55);

ex11rsp.textContent = ` Perimetrul : ${perimeter}  ,  Aria : ${area}  ,  Diagonala : ${diagonal}`


//ex12
let ex12 = document.createElement('div');
document.body.appendChild(ex12);
let txt7 = document.createTextNode('Ex 12');
ex12.appendChild(txt7);
let ex12rsp = document.createElement('p');
ex12.appendChild(ex12rsp);

let num = -7;

let result = Math.abs(num);

ex12rsp.textContent = `Modulul numarului "${num}"  este  ${result}`;


//ex13
let ex13 = document.createElement('div');
document.body.appendChild(ex13);
let txt8 = document.createTextNode('Ex 13');
ex13.appendChild(txt8);
let ex13rsp = document.createElement('p');
ex13.appendChild(ex13rsp);

let year = 2024;

let isLeap = (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));

if (isLeap) {
    ex13rsp.textContent = `${year}  este an bisect `;
} else {
    ex13rsp.textContent = `${year}  nu este an bisect `;
}


// ex14
let txt9 =document.createTextNode('Ex 14');
let ex14 = document.createElement('div');
document.body.appendChild(ex14);
let ex14rasp = document.createElement('p');
ex14.appendChild(txt9);
ex14.appendChild(ex14rasp);

let n2 = 3;

    for (var a4 = 0; a4 < n2+n2; a4++) {
        a4++;
        let pp3 = document.createTextNode(`${a4} + `);
        ex14rasp.appendChild(pp3);
    }

    for (var sum2 = 1; sum2 < n2+n2; sum2++) {
        const sum2 = n2*n2;
        var suma2 = sum2;
    } 

    let ex14rsp = document.createTextNode(` = ${suma2} `)
        ex14.appendChild(ex14rsp);

//ex15
let ex15 = document.createElement('div');
document.body.appendChild(ex15);
let txt10 = document.createTextNode('Ex 15');
ex15.appendChild(txt10);
let ex15rsp = document.createElement('p');
ex15.appendChild(ex15rsp);

let n4 = 42;

let result2 = (n4 >= 10 && n4 < 100) ? "Da" : "Nu";

ex15rsp.textContent = `${result2} , numarul ${n4} este alcatuit din 2 cifre`

