# Luhn's Algorithm 

Also called the "mod 10" algorithms, and is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers. 

View `credit_card.js` for a sample application.

# How it Works ⚙️

1) Start from the right and iterate left

2) As we iterate towards the left, every digit is doubled except for the checksum number (our first digit). If the digit doubled is greater than 9, we subtract 9 from the number. 

3) We then sum all values

4) If the sum % 10 is 0, the paramter holds true, else false.


*Note*: This can be done recursively as well.

Made by Jaival 🦖