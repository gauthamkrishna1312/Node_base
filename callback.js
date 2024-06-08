
console.log("Start")
let t1 = new Date()
let num = 0
for (let index = 0; index < 5; index++) {
    num = num + 1
    console.log(num)
}
let diff = new Date() - t1
console.log("End")
console.log("Time taken = " + diff)

//creting a delay function to do nithing with CPU time
time = 1000
function upload(time) {
    let t2 = new Date()
    while (new Date() - t2 <= time) {
        
    }
}

for (let k = 0; k < 2; k++) {
    console.log("Upload " + k + " started "+ "\n")
    upload(time)
    console.log("Upload " + k + " completed "+ "\n")
    
}

//async upload

function showEnd(){
    console.log("Upload completed\n")
}

for (let k = 0; k < 2; k++) {
    console.log("Upload " + k + " started " + "\n")
    setTimeout(showEnd,1000)
}

