function hasdupes(nums){
    const hashTable = new Map()

    for (let i=0; i < (nums.length); i++){

        if (hashTable.has(nums[i])){
            return true
        } 

        hashTable.set(nums[i], i)

    }
    return false
}

let nums = [1,2,3,4,5,6,7,8,9,10,11,11]

console.log(hasdupes(nums))