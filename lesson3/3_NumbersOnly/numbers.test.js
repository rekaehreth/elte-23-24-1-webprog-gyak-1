// TDD or Test Driven Development (https://en.wikipedia.org/wiki/Test-driven_development)
    // is a process of repeating the following steps
    // 1. Write a failing (unit) test
    // 2. Extend implementation, so previously failing test passes
    // 3. Refactor code

const dataProvider = [
    {
        message: "Non-numeric characters don't appear in the input",
        assertion: () => {
            let input = document.querySelector('input');
        
            input.value = 'a';
            input.dispatchEvent(new Event('input'));

            const expectation = input.value === '';
            input.value = '';

            return expectation;
        },
    },
    {
        message: "Keeps valid part of input",
        assertion: () => { 
            let input = document.querySelector('input');
            const inputEvent = new Event('input');

            input.value = '234';
            input.dispatchEvent();

            input.value = 'c';
            input.dispatchEvent(inputEvent);

            const expectation = input.value === '234';
            input.value = '';

            return expectation;
        },
    }, 
    {
        message: "Accepts empty input",
        assertion: () => { 
            let input = document.querySelector('input');
            const inputEvent = new Event('input');

            input.value = '2';
            input.dispatchEvent(inputEvent);

            input.value = '';
            input.dispatchEvent(inputEvent);

            const expectation = input.value === '';

            return expectation;
        },
    }, 
    {
        message: "Works for every input with class number",
        assertion: () => { 
            let expectation = true;
            let numberClassInputs = document.querySelectorAll('input.number');
            numberClassInputs.forEach(input => {
                input.value = '234';
                input.dispatchEvent(new Event('input'));
    
                input.value = 'c';
                input.dispatchEvent(new Event('input'));
    
                expectation = input.value === '234';
                input.value = '';
            })
            return expectation;
        },
    }, 
];

// This method of testing is called testing with a Data Provider / Data Driven Testing
dataProvider.forEach(({ assertion, message }) => {
    console.assert(assertion(), message);
});