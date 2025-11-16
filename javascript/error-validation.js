// Add Event Listener to Document
document.addEventListener('DOMContentLoaded', () => {

    // Assign Form Inquiry to inquiryForm variable
    const inquiryForm = document.querySelector('.form-inquiry form');
    
    // Assign Form Reservation to reservationForm variable
    const reservationForm = document.querySelector('.form-reservation form');

    // Create Regular Expression for input validation
    const nameRegex = /^[A-Za-z\s.]+$/;
    const contactRegex = /^\d{11}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Show Error message function
    function showError(input, message) {
        const error = input.parentElement.querySelector('.error-message');
        if (error) {
            error.textContent = message;
            error.style.color = '#ff4d4d';
            error.style.fontSize = '0.85em';
        }
    }

    // Clear Error message function
    function clearError(input) {
        const error = input.parentElement.querySelector('.error-message');
        if (error) error.textContent = '';
    }

    // Validate Name function
    function validateName(input) {
        const value = input.value.trim();
        if (!nameRegex.test(value)) {
            showError(input, 'Please use only letters, spaces, and periods.');
            return false;
        }
        clearError(input);
        return true;
    }

    // Validate Contact function
    function validateContact(input) {
        const digits = input.value.replace(/\D/g, '');
        if (!contactRegex.test(digits)) {
            showError(input, 'Please enter exactly 11 digits.');
            return false;
        }
        clearError(input);
        return true;
    }

    // Validate Email function
    function validateEmail(input) {
        const value = input.value.trim();
        if (!emailRegex.test(value)) {
            showError(input, 'Please enter a valid email address.');
            return false;
        }
        clearError(input);
        return true;
    }

    /*
     * Inquiry Form
     */
    if (inquiryForm) {

        // Assign constant variable
        const nameInput = inquiryForm.querySelector('#name');
        const emailInput = inquiryForm.querySelector('#email');
        const messageInput = inquiryForm.querySelector('#message');

        // Assign Event Listener
        nameInput.addEventListener('input', () => validateName(nameInput));
        emailInput.addEventListener('input', () => validateEmail(emailInput));
        messageInput.addEventListener('input', () => clearError(messageInput));

        // Assign Event Listener to submit input for Inquiry Form
        inquiryForm.addEventListener('submit', (e) => {
            let valid = true;
            if (!validateName(nameInput)) valid = false;
            if (!validateEmail(emailInput)) valid = false;        
            if (messageInput.value.trim() === '') {
                showError(messageInput, 'Message cannot be empty.');
                valid = false;
            }

            // If "valid" is false, prevent browser behavior and show error messages
            if (!valid) e.preventDefault();
            else {
                // else if "valid" is true, send data to Google Sheet using fetch function to Inquiry form
                e.preventDefault();
                fetch("https://script.google.com/macros/s/AKfycbzV2AcFsm4DvUlTH863F6F7I6UUskeC32H3b8_Ru_V_nzOeCitnXP_uXlfOCp9HEoL81Q/exec", {
                    method: "POST",
                    body: new URLSearchParams({
                        formType: "Inquiry Form",
                        name: nameInput.value,
                        email: emailInput.value,
                        message: messageInput.value
                    })
                })
                .then(res => res.text())
                .then(() => {
                    // Show success submission message
                    alert("Inquiry submitted successfully!");
                    inquiryForm.reset();
                })
                .catch(() => alert("Error sending to Google Sheets."));
            }
        });
    }

    /*
     * Reservation Form
     */
    if (reservationForm) {

        // Assign constant variable
        const fullNameInput = reservationForm.querySelector('#full-name');
        const contactInput = reservationForm.querySelector('#contact-number');
        const dateInput = reservationForm.querySelector('#reservation-date');
        const timeInput = reservationForm.querySelector('#reservation-time');
        const guestsInput = reservationForm.querySelector('#guests');

        // Assign Event Listener
        fullNameInput.addEventListener('input', () => validateName(fullNameInput));

        contactInput.addEventListener('keypress', (e) => {
        if (!/^\d$/.test(e.key)) e.preventDefault();
        });
        
        contactInput.addEventListener('input', () => {
            let digits = contactInput.value.replace(/\D/g, '').slice(0, 11);
            let formatted = digits;
            if (digits.length > 4 && digits.length <= 7)
                formatted = digits.slice(0,4) + '-' + digits.slice(4);
            else if (digits.length > 7)
                formatted = digits.slice(0,4) + '-' + digits.slice(4,7) + '-' + digits.slice(7);
            contactInput.value = formatted;
            validateContact(contactInput);
        });

        // Assign Event Listener to submit input for Reservation Form
        reservationForm.addEventListener('submit', (e) => {
            let valid = true;
            if (!validateName(fullNameInput)) valid = false;
            if (!validateContact(contactInput)) valid = false;

            if (!dateInput.value) {
                showError(dateInput, 'Please select a date.');
                valid = false;
            } else clearError(dateInput);

            if (!timeInput.value) {
                showError(timeInput, 'Please select a time.');
                valid = false;
            } else clearError(timeInput);

            if (guestsInput.value < 1) {
                showError(guestsInput, 'Please enter at least 1 guest.');
                valid = false;
            } else clearError(guestsInput);

            // If "valid" is false, prevent browser behavior and show error messages
            if (!valid) e.preventDefault();
            else {
                // else if "valid" is true, send data to Google Sheet using fetch function to Reservation form
                e.preventDefault();
                fetch("https://script.google.com/macros/s/AKfycbzV2AcFsm4DvUlTH863F6F7I6UUskeC32H3b8_Ru_V_nzOeCitnXP_uXlfOCp9HEoL81Q/exec", {
                    method: "POST",
                    body: new URLSearchParams({
                        formType: "Reservation Form",
                        "full-name": fullNameInput.value,
                        "contact-number": contactInput.value,
                        "reservation-date": dateInput.value,
                        "reservation-time": timeInput.value,
                        guests: guestsInput.value
                    })
                })
                .then(res => res.text())
                .then(() => {
                    // Show success submission message
                    alert("Reservation submitted successfully!");
                    reservationForm.reset();
                })
                .catch(() => alert("Error sending to Google Sheets."));
            }
        });
    }
});