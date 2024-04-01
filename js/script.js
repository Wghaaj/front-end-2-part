console.log('It works!');

const form = document.getElementById('timerForm');
const count = document.getElementById('timerCount');
const result = document.getElementById('result');

let intervalId;

form.addEventListener('submit', () => {
    event.preventDefault();

    let countValue = count.valueAsNumber;

    if (countValue > 0) {
        result.innerHTML = countValue;
    }

    intervalId = setInterval(() => {
        if (countValue > 0) {
        countValue--;
        result.innerHTML = countValue;
        console.log(countValue);
        } else {
        console.log('clear');
        clearInterval(intervalId)
        }
    }, 1000)
})