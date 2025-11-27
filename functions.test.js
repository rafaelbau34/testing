import {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./functions.js";

// 1. CAPITALIZE TESTS

describe("capitalize", () => {
  test("should capitalize the first letter of a lowercase string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("should return the string unchanged if the first letter is already capitalized", () => {
    expect(capitalize("World")).toBe("World");
    expect(capitalize("A test")).toBe("A test");
  });

  test("should handle single characters", () => {
    expect(capitalize("a")).toBe("A");
    expect(capitalize("B")).toBe("B");
  });

  test("should handle empty strings", () => {
    expect(capitalize("")).toBe("");
  });

  test("should handle non-alphabetical first characters (e.g., numbers or punctuation)", () => {
    expect(capitalize("123 test")).toBe("123 test");
    expect(capitalize("!test")).toBe("!test");
  });
});

// 2. REVERSE TESTS

describe("reverse", () => {
  test("should reverse a simple word", () => {
    expect(reverse("apple")).toBe("elppa");
  });

  test("should reverse a phrase including spaces", () => {
    expect(reverse("hello world")).toBe("dlrow olleh");
  });

  test("should reverse a string with numbers and punctuation", () => {
    expect(reverse("123!@#")).toBe("#@!321");
  });

  test("should return an empty string when input is empty", () => {
    expect(reverse("")).toBe("");
  });
});

// 3. CALCULATOR OBJECT TESTS

describe("calculator", () => {
  test("add should correctly sum two positive numbers", () => {
    expect(calculator.add(5, 3)).toBe(8);
  });

  test("add should handle negative numbers", () => {
    expect(calculator.add(-5, 3)).toBe(-2);
  });

  test("subtract should correctly find the difference between two numbers", () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test("subtract should handle negative results", () => {
    expect(calculator.subtract(5, 12)).toBe(-7);
  });

  test("multiply should correctly find the product of two numbers", () => {
    expect(calculator.multiply(6, 7)).toBe(42);
  });

  test("multiply should handle multiplication by zero", () => {
    expect(calculator.multiply(99, 0)).toBe(0);
  });

  test("divide should correctly return the quotient", () => {
    expect(calculator.divide(20, 5)).toBe(4);
    expect(calculator.divide(10, 3)).toBeCloseTo(3.33333);
  });

  test("divide should return an error message when dividing by zero", () => {
    expect(calculator.divide(8, 0)).toBe("ERROR, cannot divide by 0");
  });
});

// 4. CAESAR CIPHER TESTS

describe("caesarCipher", () => {
  test("should correctly shift a lowercase string", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  test("should correctly shift an uppercase string", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
  });

  test("should correctly wrap from z to a", () => {
    expect(caesarCipher("z", 1)).toBe("a");
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("should correctly wrap from Z to A", () => {
    expect(caesarCipher("Z", 1)).toBe("A");
    expect(caesarCipher("STU", 8)).toBe("ABC");
  });

  test("should preserve spaces and punctuation", () => {
    expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
  });

  test("should preserve non-alphabetical characters like numbers", () => {
    expect(caesarCipher("test 123!", 1)).toBe("uftu 123!");
  });

  test("should handle large shift factors by using modulo", () => {
    expect(caesarCipher("abc", 27)).toBe("bcd"); // 27 % 26 = 1
  });

  test("should handle a shift factor of zero", () => {
    expect(caesarCipher("test", 0)).toBe("test");
  });
});

// 5. ANALYZE ARRAY TESTS

describe("analyzeArray", () => {
  const testArray = [1, 8, 3, 4, 2, 6];
  const expectedOutput = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

  test("should correctly calculate the average, min, max, and length", () => {
    expect(analyzeArray(testArray)).toEqual(expectedOutput);
  });

  test("should work with negative numbers", () => {
    const negativeArray = [-10, 5, 0, 15];
    expect(analyzeArray(negativeArray)).toEqual({
      average: 2.5,
      min: -10,
      max: 15,
      length: 4,
    });
  });

  test("should handle an empty array", () => {
    expect(analyzeArray([])).toEqual({
      average: undefined,
      min: undefined,
      max: undefined,
      length: 0,
    });
  });

  test("should handle an array with only one element", () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });
});
