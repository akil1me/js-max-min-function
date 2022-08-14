
// 1-vazifa consolga massivdagi eng kichik so`zni topish

function info(text) {
  let wordArr = text.split(" ");

  let longWordArr = wordArr[0];

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i].length < longWordArr.length) {
      longWordArr = wordArr[i];
    }
  }

  return longWordArr;
}

let resultInfo = info("Assolumu aleykum men O`zbekistonda tug`ilib o`sganman");

console.log(`Massivdagi eng kichik so'z bu : ${resultInfo}`);

// 2-vazifa consolga massivdagi eng katta raqamni topish

function max(number) {
  let numArr = [-10, 20, 24, 2, -233, 130, 50, 45, 222, 44];

  let longNumArr = numArr[0];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > longNumArr) {
      longNumArr = numArr[i];
    }
  }

  return longNumArr;
}

let resultMaxNum = max();

console.log(`Massivdagi eng katta son bu: `, resultMaxNum);

// 3-vazifa consolga massivdagi eng kichik raqamni topish

function min(number) {
  let numArr = [-10, 20, 24, 2, -233, 130, 50, 45, -27, 44];

  let longNumArr = numArr[0];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < longNumArr) {
      longNumArr = numArr[i];
    }
  }

  return longNumArr;
}

let resultMinNum = min();

console.log(`Massivdagi eng katta son bu: `, resultMinNum);