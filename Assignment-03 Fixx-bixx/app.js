for (let i = 1 ; i <= 100 ; i++){
   
    
    if(i%3 === 0 && i%5 === 0){
        // document.write(i + " FizzBuzz");
        console.log(i + "FizzBuzz")
    }

    else if(i % 3 === 0){
        // document.write(i + " Fizz");
        console.log(i + "Fizz")
    }

    else if(i % 5 === 0){
        // document.write(i + " Buzz");
        console.log(i + "Buzz")
    }

    else{
        // document.write(i);
        console.log(i);
    }


}

