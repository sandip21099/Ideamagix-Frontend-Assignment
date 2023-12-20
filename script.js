document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const faqItem = this.parentElement.parentElement;
            const answer = faqItem.querySelector('.faq-answer');

            if (faqItem.classList.contains('active')) {
                faqItem.classList.remove('active');
                answer.style.display = 'none';

            } else {
                faqItem.classList.add('active');
                answer.style.display = 'block';
                toggleButtons.innerHTML = "+";
            }

            toggleButtons.innerText = "-";
        });
    });
});

// craouse section

let hambergerIcon = document.querySelector(".hamberger-icon")
let hamberger = document.querySelector('.hamberger');
let bar = document.querySelector(".bar");
let crossIcon = document.querySelector('.cross-icon');

const myFunc = () => {

    hamberger.style.display = 'block';
}

const close = () => {
    hamberger.style.display = 'none';
    console.log("hiii");
}

crossIcon.addEventListener('click', close);




