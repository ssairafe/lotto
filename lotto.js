
function mode(numbers) {
  let modes = [], count = [], i, number, maxIndex = 0;

  for (i = 0; i < numbers.length; i += 1) {
    number = numbers[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }

  return modes;
}

function pickLotto(n) {
  let numArray = [...Array(n).keys()].map(x => ++x);
  let addedDigitsArray = [];
  let concatedArray = [];
  let modeArray = [];

  if (numArray[numArray.length -1] < 10){
    console.log("s = " + numArray[numArray.length - 1])
    return numArray[numArray.length - 1];
  } else {
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] > 9) {
        let addedDigits = 0;
        let stringNum = numArray[i].toString();
        let stringNumSplit = stringNum.split("");
        for (let j = 0; j < stringNumSplit.length; j++) {
          let num = parseInt(stringNumSplit[j]);
          addedDigits += num;
        }
        addedDigitsArray.push(addedDigits);
      }
    }
    concatedArray = numArray.concat(addedDigitsArray);
    modeArray = mode(concatedArray);

    console.log("s = " + modeArray + " because those would be the most occuring winning numbers");
    return modeArray
  }
}

let numbers = [3, 11, 24, 30, 117, 1119, 130, 18, 47];

for (let i = 0; i < numbers.length; i++) {
  pickLotto(numbers[i]);
}
