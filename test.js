// const count = 3
// function createCounter() {
//     let counter = 1
//     function myFunction() {
//         counter += counter
//         return counter
//     }
//     return myFunction
// }
// const increment = createCounter()
// const c1 = increment()
// const c2 = increment()
// const c3 = increment()

var obj = {
    a: 1,
    b: 3,
    count:  function () {
        console.log(this)
        return obj.a + obj.b
    }
}

function ddd() {
    console.log(this)
}
console.log(this)

obj.count()
ddd()