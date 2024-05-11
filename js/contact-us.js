
const button = document.getElementById('button');
const form = document.querySelector('form');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const username = document.getElementById('name');
const message = document.getElementById('message');

const check = () => {
    let isValid = true;

    if (!/^[a-zA-Z]+( [a-zA-Z]+)*$/.test(username.value) || username.value === '') {
        isValid = false;
        username.style.border = 'none';
        username.classList.add("red-border");
    } else {
        username.classList.remove("red-border");
        username.style.border = '1px';
    }

    if (isNaN(tel.value) || tel.value === '') {
        isValid = false;
        tel.style.border = 'none';
        tel.classList.add("red-border");
    } else {
        tel.classList.remove("red-border");
        tel.style.border = '1px';
    }

    if (!email.validity.valid || email.value === '') {
        isValid = false;
        email.style.border = 'none';
        email.classList.add("red-border");
    } else {
        email.classList.remove("red-border");
        email.style.border = '1px';
    }

    if (message.value === '') {
        isValid = false;
        message.style.border = 'none';
        message.classList.add("red-border");
    } else {
        message.classList.remove("red-border");
        message.style.border = '1px';
    }

    return isValid;
};

const showLoading = () => {
    button.innerHTML = `<svg width="27" height="27" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.1734 11.6532C22.5679 11.6532 20.021 12.4258 17.8546 13.8734C15.6883 15.3209 13.9998 17.3783 13.0028 19.7854C12.0057 22.1925 11.7448 24.8412 12.2531 27.3966C12.7614 29.952 14.0161 32.2993 15.8584 34.1416C17.7007 35.9839 20.048 37.2386 22.6034 37.7469C25.1588 38.2552 27.8075 37.9943 30.2146 36.9972C32.6217 36.0002 34.6791 34.3117 36.1266 32.1454C37.5742 29.979 38.3468 27.4321 38.3468 24.8266" stroke="#24A3FF" stroke-width="4"/>
    </svg>
    `;
    button.style.backgroundColor = 'rgba(237, 237, 247, 1)';
    button.style.boxShadow = 'none';
};

const showSentMessage = () => {
    button.textContent = 'Sent';
    button.style.backgroundColor = 'rgba(237, 237, 247, 1)';
    button.style.color = '#323264';
};

const handleClick = () => {
    if (check()) {
        showLoading();
        setTimeout(() => {
            showSentMessage()
        }, 2000);
    }
};

button.addEventListener("click", handleClick);

