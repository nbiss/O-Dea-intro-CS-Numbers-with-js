function topKFrequent(nums, k) {
    const res =[]
    let freqMap = new Map()
    
    for (let num of nums){
        freqMap.set(num, ((freqMap.get(num) || 0) +1))
    }

    let newArr = freqMap.entries()
    return newArr

    for(let i=0; i<newArr.length; i++){
        if (!res[0] || newArr[i][1] > res[0][1]){
            res.unshift(newArr[i])
        }
    }

    return res.slice(0, k)
    
}

let nums = [1,2,2,3,3,3];
k = 2;

console.log(topKFrequent(nums, k));