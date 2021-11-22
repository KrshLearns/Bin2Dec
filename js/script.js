const btn = document.getElementById("btn");
const from = document.getElementById("from");
const to = document.getElementById("to");
const input = document.getElementById("input");
const output = document.getElementById("output");

const conversions = {
  binary: 2,
  octagonal: 8,
  decimal: 10,
  hexadecimal: 16,
};

btn.addEventListener("click", () => {
  if (from.value === to.value) {
    return alert("The input and output number system can't be the same");
  }
  
  const inputType = conversions[from.value.toLowerCase()];
  const outputType = conversions[to.value.toLowerCase()];

  if (!input.value) {
    return alert("You need to enter a input");
  }
  
  if (!inputType || !outputType) {
    return alert("A incorrect number system has been detected.");
  }

  if (checks[inputType](input.value) === false) {
    return alert(`Invalid ${from.value} number detected`);
  }
  
  output.value = parseInt(input.value, inputType).toString(outputType)
});


const checks = {
  2: (str) => {
    const array = str.split("");

    for (var i of array) {
      if (!(parseInt(i) === 0 || parseInt(i) === 1)) return false;
    }
    return true;
  },

  8: (str) => {
    const regex = /[0-7]/;

    const array = str.split("");

    for (var i of array) {
      if (!regex.test(parseInt(i))) return false;
    }
    return true;
  },

  10: (str) => {
    const regex = /[0-9]/;

    const array = str.split("");

    for (var i of array) {
      if (!regex.test(parseInt(i))) return false;
    }
    return true;
  },

  16: (str) => {
    const regex = /[0-9A-Fa-f]/;

    const array = str.split("");

    for (var i of array) {
      if (!(regex.test(i) && regex.test(parseInt(1)))) return false;
    }
    return true;
  },
};