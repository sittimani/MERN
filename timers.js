
const timer = setInterval(() => {
    console.log('set interval after 1000th ms')
}, 1000);

console.log('mani')

setTimeout(() => {
    console.log('set timeout after 5000th ms')
    clearInterval(timer)
}, 0);

setImmediate(() => {
    console.log('immediate')
})

// callback hell -> to avoid its disadvantage we go for promise -> promise chaining -> async await

// Main thread -> n main thread -> 1 thread -> event loop (c++) -> child thread
// child thread