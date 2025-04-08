function topKFrequent(nums, k) {
    const count = {};
    const newArr = Array.from({length: nums.length + 1}, ()=>[])

    for (let num of nums){
        count[num] = ((count[num] || 0) +1)
    }
    console.log('count:',count)
    // count = { 1: 1, 2: 2, 3: 3} 
    

    for (let num in count){
        newArr[count[num]].push(parseInt(num));
    }
    console.log('newArr:', newArr)
    // newArr = [ [], [3,4,6], [2,5], [-1], [], [], [], [], [], [] ]
    // puts the index as the frequencey 
    // and the number with that frequency as the value

    let res = []

    //return
    for(let i= newArr.length -1; i>0; i--){
        for(let n of newArr[i]){
            res.push(n)

            if (res.length == k){
            return res
            }
        }
    }


}




nums = [4,2,3,5,-1,2,-1,-1,5,6]
k =2
console.log(topKFrequent(nums, k))