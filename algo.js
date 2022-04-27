const prompt = require('prompt-sync')();


const luhn = array => {
    let sum = 0


    for (let index = array.length; index <= 0; index--) {
        if (index === array.length) {
            sum += index
        } else {
            index_doubled = index * 2
            if (index_doubled > 9) {
                index_doubled -= 9 
            }

            sum += index_doubled
        }
    }

    result = sum % 10
    if (result === 0) {
        return 'valid'
    } else{
        return 'invalid'
    }


}