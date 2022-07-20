//returns string without any of the vowels

function removeVowels(string) {

    string = string.toLowerCase()
    let noVowelString = ''

    for (let i = 0; i < string.length ; i++) {
        if (!(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u')){
            console.log(string[i])
            noVowelString += string[i]
        }
    }

    return noVowelString

}

// console.log(removeVowels('banana'))

function twoSums(nums, target) {

    let numToTest = 0;

    for (let i = 0; i < nums.length; i++) {
        numToTest = nums[i]

        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue
            }
            if (nums[j] + nums[i] === target) {
                return [i, j]
            }
        }
    }
};

// console.log(twoSums([2,7,11,15], 9))

function longestSubString(s) {
    // let count = 0;
    // let largestCount = 0;
    for(let i = 0; i < s.length; i++) {
        if(i === 0) {
            console.log(s[i])
            // count++;
            continue
        }
        if(s[i] !== s[i-1]) {
            console.log(s[i] + ' doesnt equal ' + s[i-1])
            // count++
        }
        else {
            console.log(s[i] + ' does equal ' + s[i-1])
            // if(largestCount < count) {
            //     largestCount = count
            // }
            // count = 0;
        }
    }
    // return largestCount
};

// console.log(longestSubString("abcabcbb"))

var a = 1
var b = a++
var c = ++a

console.log(a)
console.log(b)
console.log(c)