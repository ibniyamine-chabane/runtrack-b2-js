
let count = 0;

function myCountChar(haystack, needle) {
    for (let i = 0; i < haystack.length ; i++) {

        if (haystack[i] == needle) {
            count++
        }
    }
    return count   
}

console.log(myCountChar("trotrorigolo", "r"))