

module.exports = function reverse (n) {

    let num = Math.abs(n).toString().split('').reverse()
    let result = +num.join('')
    return result
}




