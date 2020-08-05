
let  Queue  = require('./queue')

let q = new Queue(3, 2)

q.enqueue(1)
q.enqueue(2) //ignored...

let x = 0
while(x = q.dequeue()) {
    console.log(x)
}
/*
Prints:
3
1
*/
// view rawqueuesample.js hosted with ❤ by GitHub