const findMedian = (arr = []) => {
  const sorted = arr.slice().sort((a, b) => {
    return a - b;
  });
  if (sorted.length % 2 === 0) {
    const first = sorted[sorted.length / 2 - 1];
    const second = sorted[sorted.length / 2];
    return (first + second) / 2;
  } else {
    const mid = Math.floor(sorted.length / 2);
    return sorted[mid];
  }
};
function findMode(numbers) {
  // as result can be bimodal or multimodal,
  // the returned result is provided as an array
  // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
  var modes = [],
    count = [],
    i,
    number,
    maxIndex = 0;
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
function findMean(arr) {
  let arrLength = arr.length;
  //   console.log(arrLength);
  let acc = 0;
  //   console.log(arr);
  for (let i = 0; i < arrLength; ) {
    // console.log(arr[i]);
    if (arr[i] != "") {
      acc += Number(arr[i]);
      document.querySelector(".sum").textContent = "Total: " + acc;
      i++;
    } else if (arr[i] == "") {
      arrLength--;
      i++;
    }
  }
  return acc / arrLength;
}

let inputLength = 0;
const mainContainer = document.querySelector(".main");
const addbtn = document.querySelector(".add");
const deletebtn = document.querySelector(".delete");

const addRow = function () {
  const html = `<div class="row-${inputLength + 1}">
  <p><input type="number" class='inputRow-${inputLength + 1}' /> Row ${
    inputLength + 1
  }</p>
</div>`;

  inputLength++;
  mainContainer.insertAdjacentHTML("beforeend", html);
};

const deleteRow = function () {
  const row = document.querySelector(`.row-${inputLength}`);
  row.remove();
  inputLength--;
};

addbtn.addEventListener("click", function () {
  addRow();
});
deletebtn.addEventListener("click", function () {
  deleteRow();
});

const htl = document.querySelector(".htl");
const lth = document.querySelector(".lth");
const highest = document.querySelector(".highest");
const lowest = document.querySelector(".lowest");
const mean = document.querySelector(".mean");
const mode = document.querySelector(".mode");
const median = document.querySelector(".median");
const range = document.querySelector(".range");
const analysebtn = document.querySelector(".analyse");

analysebtn.addEventListener("click", function () {
  let allValues = [];
  for (let i = 1; i < inputLength + 1; i++) {
    allValues.push(document.querySelector(".inputRow-" + i).value);
  }
  let newArr = [];
  for (const item of allValues) {
    if (item != "") {
      newArr.push(Number(item));
    }
  }
  allValues = newArr.slice();
  // console.log(newArr);
  if (true) {
    // finding mean

    mean.textContent = "Mean: " + findMean(allValues);

    // sort to new arr
    const sortedValuesUp = allValues.sort(function (a, b) {
      return a - b;
    });
    const sortedValuesDown = [...sortedValuesUp];
    sortedValuesDown.reverse();
    htl.textContent = "Highest to Lowest:" + sortedValuesUp.join(", ");
    lth.textContent = "Lowest to Highest:" + sortedValuesDown.join(", ");

    // finding highest and lowest values

    let max = 0;
    let min = sortedValuesUp[0];
    for (let i = 0; i <= sortedValuesUp.length; i++) {
      if (sortedValuesUp[i] > max) {
        max = sortedValuesUp[i];
      }
    } // setting "MAX" variable to the highest value

    for (let i = 0; i <= sortedValuesUp.length; i++) {
      if (sortedValuesUp[i] < min) {
        min = sortedValuesUp[i];
      }
    }
    highest.textContent = "Highest Value: " + max;
    lowest.textContent = "Lowest Value: " + min;
    // console.log(allValues);
    // console.log(findMedian(allValues));
    // console.log(findMode(allValues));
    const rangeInfo = max - min;
    rangeInfo != NaN ? (range.textContent = "Range: " + rangeInfo) : "Error";

    median.textContent = "Median: " + findMedian(allValues);
    mode.textContent = "Mode: " + findMode(allValues);
  }
});

// const callError = function () {
//   const callErrorElement = document.querySelector(".callError");
//   callErrorElement.style.visibility = "unset";
//   setTimeout(function () {
//     callErrorElement.style.visibility = "hidden";
//   }, 2000);
// };
// before white space removal check
