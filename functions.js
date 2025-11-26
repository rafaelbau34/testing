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

function caesarCipher(str, shiftFactor) {
  const shift = shiftFactor % 26;

  const result = [...str]
    .map((char) => {
      const charCode = char.charCodeAt(0);
      const shiftChar = (base) => {
        return ((charCode - base + shift + 26) % 26) + base;
      };

      if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(shiftChar(65));
      } else if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(shiftChar(97));
      } else {
        return char;
      }
    })
    .join("");
  return result;
}

console.log(`Caesar Cipher ('abc', 1): ${caesarCipher("abc", 1)}`); // Output: 'bcd'
console.log(`Caesar Cipher ('xyz', 3): ${caesarCipher("xyz", 3)}`); // Output: 'abc'
console.log(
  `Caesar Cipher ('Hello, World!', 5): ${caesarCipher("Hello, World!", 5)}`
); // Output: 'Mjqqt, Btwqi!'
