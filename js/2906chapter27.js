//object

let person = {
    firstname : "Sandeep",
    lastName : "Gupta",
    
    sayHello3 : function(){
        console.log("hello3");
    }
    ,
    sayHello4(){
        console.log("hello4");
    }
    
};

// There are 4 ways to create object methods(

//1
person.sayHello1 = function(){
    console.log("hello1");
}

person.sayHello1();

//2


function greet (){
    console.log("hello2");
}

person.sayHello2 = greet;

person.sayHello2();

//3

person.sayHello3();

// 4

person.sayHello4();




