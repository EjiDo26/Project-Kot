function HelloName(name = "Guest"){
    console.log("Hello,", name)
}
function Sum(a, b){
    console.log(a+b)
}
function isEven(n){
    if(n%2==0)
        console.log("true")
    else
        console.log("false")
}
function max(a, b){
    if(a>b)
        console.log(a)
    else
        console.log(b)
}
function canVote(age){
    if(age>=18)
        console.log("Можно")
    else
        console.log("Нельзя")
}
function repeat(str, n){
    for(let i=0; i<n; i++){
        console.log(str)
    }
}
function getLength(str){
    console.log(str.length)
}
function greet(name){
    if(name == undefined){
        console.log("Введите имя")
    }
    else{
        console.log("Hello,", name)
    }
    
}
function square(n){
    console.log(n*n)
}
function calc(a, b, op){
    if(op == "+")
        console.log(a+b)
    if(op == "-")
        console.log(a-b)
    if(op == "*")
        console.log(a*b)
    if(op == "/")
        console.log(a/b)
}







