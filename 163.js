//163. Missing Ranges
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
 var findMissingRanges = function(nums, lower, upper) {
    
    let ran = [];
    nums = [lower-1, ...nums, upper+1];
 
    for(let i = 1; i < nums.length; i++) {
        let range = nums[i] - nums[i-1];
            
        if(range === 2) {
                ran.push(`${nums[i - 1] + 1}`)
        } else if (range > 2) {
                ran.push(`${nums[i - 1] + 1}->${nums[i] - 1}`)
        }      
    }   
    return ran;
};
