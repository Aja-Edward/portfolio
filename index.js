const header = document.querySelector("header");
const card = document.querySelector('.card');
const menu = document.querySelector(' #menu-icon');
const navbar = document.querySelector('.navbar');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email')
const subject = document.getElementById('subject');
const textarea = document.getElementById('textarea');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const textareaValue = textarea.value.trim();

    if (usernameValue === "") {
        setErrorFor(username, "May I know your name please?");
    } else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "May I have your email please?");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Please crosscheck your email. There seems to be an error.");
    } else {
        setSuccessFor(email)
    }

    if (subjectValue === "") {
        setErrorFor(subject, "Please, I need your subject")
    } else {
        setSuccessFor(subject)
    }

    if (textareaValue === "") {
        setErrorFor(textarea, "Sorry, it seems you are missing description")
    } else {
        setSuccessFor(textarea)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}



function isEmail(email) {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);

}

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});



menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});







