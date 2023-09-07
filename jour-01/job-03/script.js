
count = 0;

function myIsString(haystack, needle) {
    for (let i = 0; i < haystack.length ; i++) {

        if (haystack[i] == needle) {
            return true
        } else {
            return false
        }
    } 
}

console.log(myIsString("trotrorigolo", "gogo"))