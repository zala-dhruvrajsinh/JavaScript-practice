const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);

    const result = document.querySelector('#results');

    if (weight < 0 || weight === '' || isNaN(weight)) {
        results.innerHTML = 'Enter valid weight.';
    }

    if (height < 0 || height === '' || isNaN(height)) {
        results.innerHTML = 'Enter valid height.';
    } else {
        const bmi = (weight / (height ** 2 / 10000)).toFixed(2);
        results.innerHTML = `BMI is ${bmi}`;
    }
});
