const prompt = require("readline-sync")

var mark = prompt.question("Please enter the mark for the student\n")

if (mark >= 40) {
    console.log('Successfully completed\n');
} else {
    console.log('Failed to complete');
}

//need to check more on the next lines

switch (mark) {
    case mark >= 40:
     
        console.log('Successfully completed\n');
        break;
    case mark < 40:
        
        console.log('Failed to complete\n');
        break;

    default:

        console.log('\n');
        break;
}