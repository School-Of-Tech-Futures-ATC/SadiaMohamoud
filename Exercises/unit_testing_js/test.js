const { add } = require("./functions.js");

describe("add(7 , 3", () => {  
    it("should result in the value being 10", () => {
    // Arrange
    const num1 = 7;
    const num2 = 3;
    // Act
    const result = add(num1, num2)
    // Assert
    expect(result).toEqual(10)
    });
    })