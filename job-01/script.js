// function myUpperCase(string) {
    string = "pommodoro";
    count = 0;
    upperCount = 0;
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    upper = "";
    for (let i = 0; i < string.length ; i++) {
        count++; 
        // console.log(count)
        for (let c = 0; c < 26 ; c++) {
            if (string[count] == upperCase[c]) {
                upper = upperCase[c];
                console.log(upper)
            }
            // console.log(upperCase[c]);
        }
    }
    // return count;
// }

// console.log(myUpperCase("boris"))