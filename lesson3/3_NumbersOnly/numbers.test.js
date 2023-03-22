const testCases = [
    {
        assertion: () => {
            let input = document.querySelector('input');
        
            input.value = 'a';
            input.dispatchEvent(new Event('input'));

            const expectation = input.value === '';
            input.value = '';

            return expectation;
        },
        message: "Non-numeric characters don't appear in the input",
    },
    {
        assertion: () => { 
            let input = document.querySelector('input');

            input.value = '234';
            input.dispatchEvent(new Event('input'));

            input.value = 'c';
            input.dispatchEvent(new Event('input'));

            const expectation = input.value === '234';
            input.value = '';

            return expectation;
        },
        message: "Keeps valid part of input",
    }, 
    {
        assertion: () => { 
            let input = document.querySelector('input');

            input.value = '2';
            input.dispatchEvent(new Event('input'));

            input.value = '';
            input.dispatchEvent(new Event('input'));

            const expectation = input.value === '';

            return expectation;
        },
        message: "Accepts empty input",
    }, 
    {
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
        message: "Works for every input with class number",
    }, 
];

testCases.forEach(({assertion, message}) => {
    console.assert(assertion(), message);
});
