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
// console.log(this)

// obj.count()
// ddd()

function foo(x) {
  return function () {
    console.log(x)
  }
}
foo(3)()

var isType = function (type) {
  return function (obj) {
    return toString.call(obj) == `[object ${type}]`
  }
}

var isString = isType('String')
var isFunction = isType('Function')

console.log(isString('mmmmm'))
console.log(isString([1,2,3]))

console.log('mmmmm'.toString)
