//Write a function to check whether a number is divisible by 3 or 5?
function divBy3or5(num){
    if(num % 3 == 0 || num % 5 == 0){
        return true
    }
    else{
        return false
    }
}

//Write a function that checks all numbers less than 58 that are divisible by 3 or 5?
function lessThan58(){
    const res = new Array(58)
    return res.filter((i)=> {
        return (i % 3 == 0 || i % 5 == 0)
    })
    

    // let ans = []
    // for (let i=0; i<59; i++){
    //     if(i % 3 == 0 || i % 5 == 0)
    //         ans.push(i)
    // }
    // return ans
}

//Write a function that sums all the numbers less than 17? What is the result?
function sumAll17(){
    let num = 0
    for(let i=0; i<17; i++){
        num = num + i
    }
    return num
}


console.log(divBy3or5(15))
console.log(lessThan58())
console.log(sumAll17())