function findMean(arr) {
  const arrLength = arr.length;
  //   console.log(arrLength);
  let acc = 0;
  //   console.log(arr);
  for (let i = 0; i < arrLength; i++) {
    // console.log(arr[i]);
    acc += Number(arr[i]);
    document.querySelector(".sum").textContent = "Total: " + acc;
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
const analysebtn = document.querySelector(".analyse");

analysebtn.addEventListener("click", function () {
  let allValues = [];
  for (let i = 1; i < inputLength + 1; i++) {
    allValues.push(document.querySelector(".inputRow-" + i).value);
  }
  if (!allValues.includes("")) {
    // finding mean

    mean.textContent = "Mean: " + findMean(allValues);

    // sort to new arr
    const sortedValuesUp = allValues.sort(function (a, b) {
      return a - b;
    });
    const sortedValuesDown = [...sortedValuesUp];
    sortedValuesDown.reverse();
    htl.textContent = sortedValuesUp.join(", ");
    lth.textContent = sortedValuesDown.join(", ");

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
    console.log(allValues);
  } else callError();
});

const callError = function () {
  const callErrorElement = document.querySelector(".callError");
  callErrorElement.style.visibility = "unset";
  setTimeout(function () {
    callErrorElement.style.visibility = "hidden";
  }, 2000);
};
