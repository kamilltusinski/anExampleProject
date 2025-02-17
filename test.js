

    // for(let i = 1; i<=100; i++){
    // if(i%3 === 0 & i%5 === 0 ){
    //     console.log("FizzBuzz")
    // }
    // else if(i%3 === 0){
    //     console.log("Fizz")
    // }
    // else if(i%5 === 0 ){
    //     console.log("Buzz")
    // } 
    // else { 
    //     console.log(i)
    // }
    // }

    // for (let i = 1; i <= 100; i++) {
    //     console.log(i % 3 === 0 ? (i % 5 === 0 ? "FizzBuzz" : "Fizz") : i % 5 === 0 ? "Buzz" : i);
    // }

    // for (let i = 1; i <= 100; i++) {
    //     let output = "";
    //     if (i % 3 === 0) output += "Fizz";
    //     if (i % 5 === 0) output += "Buzz";
    //     console.log(output || i);
    // }

    for(let i = 0; i <=100; i++) {
        let result = ''
        if(i % 3 === 0) result += 'Fizz'
        if(i % 5 === 0) result += 'Buzz'
        console.log(result || i)
    }