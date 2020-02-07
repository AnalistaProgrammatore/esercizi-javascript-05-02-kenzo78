/**
* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
* For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
* When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
* (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/
for (var i = 1; i < 100; i++) {
    if (i % 15 === 0) console.log("AperolSpritz!");// i numeri divisibili sia per 3 che per 5 sono divisibili per 15, quindi per trovare quei numeri basta usare %15===0
    else if (i % 3 === 0) console.log("Aperol!");
    else if (i % 5 === 0) console.log("Spritz!");
    else console.log(i);
}


console.log(i)
console.log('____________________________________________________________________________________________________________________________________' + '\n')
//########################################################### Sviluppo 2 ###############################################################################

messaggio = "";
for (var i = 1; i <= 100; i++ , messaggio = "") {
    if (i % 3 === 0) messaggio += "Campari";
    if (i % 5 === 0) messaggio += "Spritz";
    console.log(messaggio || i) // in questo modo scrive ciò che è contenuto nella stringa messaggio o il numero, se i numeri sono sia divisibile per 3 che per 5 unisce i messaggi
}
