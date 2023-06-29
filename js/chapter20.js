
function add(){
    console.log(arguments);
    console.log(arguments[1]);

    if(arguments.length == 0){
        console.log("No argument passed !");

    } else {
        let sum = 0;
        for(let i = 0 ; i<arguments.length;i++){
            sum = sum + arguments[i];

        }
        console.log(sum);

    }
}


//add(2,3);
//add(2,3,4);
//add(2,3,4);
//add();

let addition = add;
addition(3,4);