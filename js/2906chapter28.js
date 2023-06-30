// this in object

let person = {
    firstname : "Sandeep",
    lastName : "Gupta",
    
    sayHello3 : function(){
        console.log("hello i am " + this.firstname +  " and i have a "+ car.brand + " Car");
    }
    ,
    sayHello4(){
        console.log("hello4");
    }
    
};

let car = {
    brand : 'Tata',
    model : 'Safari'
}
person.sayHello3();
