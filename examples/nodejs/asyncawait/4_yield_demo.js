// See https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5

function * generatorFunction() { // Line 1
    console.log('Before first yield.');
    yield 'Hello, ';   // Line 2
    console.log('Before second yield');  
    yield 'World!';
}

function * produceNumbers() {
    for (var i = 0; i < 100000000; ++i)
        yield i;
}

function callGenerator() {
    const generatorObject = generatorFunction();
    console.log(generatorObject.next().value);
    console.log(generatorObject.next().value);
}

callGenerator();