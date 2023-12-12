    //  1. Basic Arithmetic:
    
    console.log(math.add(3,4))          // Output: 7
    console.log(math.subtract(8,4))     // Output: 4
    console.log(math.subtract(4,8))     // Output: -4
    console.log(math.multiply(2,8))     // Output: 16
    console.log(math.divide(14,2))      // Output: 14

    //  2. Exponential and Logarithmic Functions:
    
    console.log(math.exp(2))            // Output: 7.38905609893065
    console.log(math.log(10,2))         // Output: 3.3219280948873626

    //  3. Trigonometric Functions:

    console.log(math.sin(math.unit(90, 'deg')));            // Output: 1
    console.log(math.cos(math.unit(60, 'deg')));            // Output: 0.5000000000000001
    console.log(math.tan(math.unit(45, 'deg')));            // Output: 0.9999999999999999
      

    //  4. Square Root and Power:

    console.log(math.sqrt(25));            // Output: 5
    console.log(math.pow(2,3));            // Output: 8

    //  5. Absolute Value and Sign:

    console.log(math.abs(-7));            // Output: 7
    console.log(math.sign(-10));            // Output: -1

    //  6. Random Number:

    console.log(math.random());            // random number between 0 and 1

    //  7. Matrix Operations:

    const matrixA = math.matrix([[1, 2], [3, 4]]);
    const matrixB = math.matrix([[5, 6], [7, 8]]);

    const resultMatrixAddition = math.add(matrixA, matrixB);
    console.log(resultMatrixAddition) // Output: [[6, 8], [10, 12]]

    //  8. Unit Conversion:

    console.log(math.unit(12, 'in').to('cm'));            // Output: -1
