/*let sayHello=function(name)
{
    return "Hey there "+name +"!"

}

console.log(sayHello('Abhishek'))*/

//Step1:Remove Function keyword and put => after (name)
/*let sayHello=(name)=>
{
    return `Hey there ${name} !` //Never " " in Advance JS

}*/

//console.log(sayHello('Abhishek')) //Version preferred

//Version 2: Remove return keyWord and Parenthensis

let sayHello=(name)=>`Hey there ${name} !` 
console.log(sayHello('Abhishek'))