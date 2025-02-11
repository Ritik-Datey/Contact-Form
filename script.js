document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    function validateForm() {
        let isValid = true;

        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Enter a valid email address.';
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message cannot be empty.';
            isValid = false;
        }

        submitBtn.disabled = !isValid;
    }

    form.addEventListener('input', validateForm);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Message sent successfully!');
        form.reset();
        validateForm();
    });
});