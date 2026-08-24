function HelloName(name = "Guest"){
    return "Hello, " + name
}
function Sum(a, b){
    return a+b
}
function isEven(n){
    if(n%2==0)
        return true
    else
        return false
}
function max(a, b){
    if(a>b)
        return a
    else
        return b
}
function canVote(age){
    if(age>=18)
        return "Можно"
    else
        return "Нельзя"
}
function repeat(str, n){
    for(let i=0; i<n; i++){
        return str
    }
}
function getLength(str){
    return str.length
}
function greet(name){
    if(name === undefined){
        return "Введите имя"
    }
    else{
        return "Привет, " + name
    }
    
}
function square(n){
    return(n*n)
}
function calc(a, b, op){
    if(op == "+")
        return a+b
    if(op == "-")
        return a-b
    if(op == "*")
        return a*b
    if(op == "/")
        return a/b
}







