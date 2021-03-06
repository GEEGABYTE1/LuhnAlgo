const prompt = require('prompt-sync')();

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]




const validateCred = array => {
    let sum = 0


    for (let index = array.length; index <= 0; index--) {
        if (index === array.length) {
            sum += array[index]
        } else {
            let index_doubled = array[index] * 2
            if (index_doubled > 9) {
                index_doubled -= 9 
            }

            sum += index_doubled
        }
    }

    result = sum % 10
    if (result === 0) {
        return true
    } else{
        return false
    }
}

const findInvalidcards = nested_array => {
    let invalid_cards = []
    
    for (let array_idx = 0; array_idx <= nested_array.length; array_idx++){
        let rel_array = nested_array[array_idx]
        validate_rel_array = validateCred(rel_array)
        if (validate_rel_array === false) {
            invalid_cards.push(rel_array)
        }
    }

    return invalid_cards
}

const idInvalidCardCompanies = invalid_array => {
    let emailed_companies = []

    for (let array_idx = 0; array_idx <= invalid_array.length; array_idx++){
        let current_invalid_array = invalid_array[array_idx]
        let first_digit = current_invalid_array[0]

        switch (first_digit) {
            case 3:
                if ('Amex (American Express)' in emailed_companies === false) {
                    emailed_companies.push('Amex (American Express)')
                }
                
                break
            case 4:
                if ('Visa' in emailed_companies === false) {
                    emailed_companies.push('Visa')
                }
                
                break
            case 5:
                if ('Mastercard' in emailed_companies === false) {
                    emailed_companies.push('Mastercard')
                }
                break
            case 6:
                if ('Discover' in emailed_companies === false) {
                    emailed_companies.push('Discover')
                }
                
                break
            default:
                if ('Company not found' in emailed_companies === false) {
                    emailed_companies.push('Company not found')
                }
                break
        }
    }
}

const convert_string_to_array = string => {
    array = []
    
    for (let string_idx = 0; string_idx <= string.length; string_idx++) {
        array += Number(string[string_idx])

    }

    return array
}

const user_play = () => {
    running = true
    while (running) {
        user_prompt = prompt(': ')
        
        if (user_prompt === 'validate_card') {
            let string_prompt = prompt('Enter your credit card number: ')
            let array_string = convert_string_to_array(string_prompt)
            let result = validateCred(array_string)
            console.log(`${string_prompt} is ${result}`)
            batch.push(array_string)

        } else if (user_prompt === 'find_invalid') {
            let invalid_results = findInvalidcards(batch)

            for (let invalid_idx = 0; invalid_idx <= batch.length; invalid_idx++){
                console.log('--------')
                console.log(invalid_results[invalid_idx])
            } 
        } else if (user_prompt === 'find_incomp') {
            let invalid_results = findInvalidcards(batch)
            let invalid_companies = idInvalidCardCompanies(invalid_results)
            
            for (let idx = 0; idx <= invalid_companies.length; idx++) {
                console.log(invalid_companies[idx])
            } 
        } else if (user_prompt === '/create_valid') {
            let invalid_string = prompt('Invalid Credit Card Number: ')
            let user_array = []

            for (let idx = 0; idx <= invalid_string.length; idx++) {
                user_array.push(Number(invalid_string[idx]))

            }

            let new_sum = 0
            for (let index = user_array.length; index <= 0; index--) {
                if (index === user_array.length) {
                    sum += user_array[index]
                } else {
                    let index_doubled = user_array[index] * 2
                    if (index_doubled > 9) {
                        index_doubled -= 9 
                    }
        
                    new_sum += index_doubled
                }
            }
        
            let result = sum % 10
            let goal_val = Math.ceil(result / 10) * 10
            difference = -1 * (result - goal_val)
            
            let last_val = undefined
            counter = user_array.length
            while (last_val === undefined) {
                if (user_array[counter] < 5) {
                    new_elm = user_array[counter] + difference
                    if (new_elm > 9) {

                    } else {
                        user_array[counter] = new_elm
                        break
                    }
                } else {
                    counter --
                } 
            }

            batch.push(user_array)
            console.log(batch)


            
            
            
        

            
        } else if (user_prompt === '/quuit') {
            break
        } else {
            console.log('Incorrect Command')
        }

    }
}