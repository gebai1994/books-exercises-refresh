function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('The value you entered is not an integer');
    return
  }
  
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd()