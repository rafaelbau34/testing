function capitalize(str) {
  if (!str) return str;

  if (str.charAt(0) === str.charAt(0).toUpperCase()) {
    return str;
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

function reverse(str) {
  const splat = str.split("");
  splat.reverse();
  return splat.join("");
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },

  subtract: (a, b) => {
    return a - b;
  },

  multiply: (a, b) => {
    return a * b;
  },

  divide(a, b) {
    if (b === 0) {
      return "ERROR, cannot divide by 0";
    }
    return a / b;
  },
};
