//1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) 
//და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს

function numbers(m, n) {
    if (m > n) { return m; }
    else if (m < n) { return n ;}
    else if(m===n)  {return  0}

}

console.log (numbers(3,7))
console.log(numbers(6,2))
console.log(numbers(4,4))

//დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი

var ricxvebisjami= function(x,y)

{ return x+y
    
}
var jami=ricxvebisjami(4,8)
console.log (jami)

//დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)

function printmyName() {

    const firstname= "Ana";
const lastname= "Artilakva";
console.log (firstname+" "+lastname)
}
printmyName()

//დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ 
//( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)

function srulisaxeli(firstname,lastname) {
    return (firstname+" " +lastname)
}
const sruli=srulisaxeli("Ana", "Artilakva"
)
console.log(sruli)

//Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n)
// და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი

function namravli(n) {
    let ricxvi=1; 
    for (let i=1; i<=n,i++;) 
        ricxvi*=i;
    return ricxvi;
}
    console.log(namravli(7))
