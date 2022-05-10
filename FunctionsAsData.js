const isTwoPlusTwo  = checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
isTwoPlusTwo();
console.log(isTwoPlusTwo.name); // output: name of function = checkThatTwoPlusTwoEqualsFourAMillionTimes
