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

// Sample Test

const string_to_array = () => {
    let input_string = prompt('String: ')
    let array = []
    
    for (let string_idx = 0; string_idx <= input_string.length; string_idx++) {
        array.push(input_string[string_idx])
    }

    return array
}

array_input = string_to_array()
result = luhn(array_input)
console.log(result)

