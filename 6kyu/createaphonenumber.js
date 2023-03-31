/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.*/

//My Solution

function createPhoneNumber(numbers) {
  //Convert array of phonedigits to strings
  let phoneNumber = numbers.join('')
  // extract characters from string containing phone digits
  let firstThreeDigits = phoneNumber.slice(0, 3)
  let secondThreeDigits = phoneNumber.slice(3, 6)
  let lastFourDigits = phoneNumber.slice(6)
  let contactNumber = `(${firstThreeDigits}) ${secondThreeDigits}-${lastFourDigits}`
  return contactNumber;
}