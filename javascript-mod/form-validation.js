// ============================
// Form Validation
// ============================

document.addEventListener('DOMContentLoaded', () => {
    // Get form elements
    const inquiryForm = document.querySelector('.form-inquiry form');
    const reservationForm = document.querySelector('.form-reservation form');
    
    // Regular expressions for validation
    const nameRegex = /^[A-Za-z.]+$/;  // Only letters and periods
    const contactRegex = /^\d{11}$/;    // Exactly 11 digits
    
    // Validate name fields (works for both forms)
    function validateName(input) {
        const value = input.value.trim();
        if (!nameRegex.test(value)) {
            input.setCustomValidity('Please use only letters and periods');
            return false;
        }
        input.setCustomValidity('');
        return true;
    }
    
    // Validate contact number
    function validateContact(input) {
        const value = input.value.trim();
        if (!contactRegex.test(value)) {
            input.setCustomValidity('Please enter exactly 11 digits');
            return false;
        }
        input.setCustomValidity('');
        return true;
    }
    
    // Set up real-time validation for inquiry form
    if (inquiryForm) {
        const nameInput = inquiryForm.querySelector('#name');
        if (nameInput) {
            nameInput.addEventListener('input', () => validateName(nameInput));
        }
    }
    
    // Set up real-time validation for reservation form
    if (reservationForm) {
        const fullNameInput = reservationForm.querySelector('#full-name');
        const contactInput = reservationForm.querySelector('#contact-number');
        
        if (fullNameInput) {
            fullNameInput.addEventListener('input', () => validateName(fullNameInput));
        }
        
        if (contactInput) {
            // Restrict input to numbers only
            contactInput.addEventListener('keypress', (e) => {
                if (!/^\d$/.test(e.key)) {
                    e.preventDefault();
                }
            });
            
            // Limit to 11 characters
            contactInput.setAttribute('maxlength', '11');
            
            // Validate on input
            contactInput.addEventListener('input', () => validateContact(contactInput));
        }
    }
    
    // Form submission handlers
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            const nameInput = inquiryForm.querySelector('#name');
            if (!validateName(nameInput)) {
                e.preventDefault();
            }
        });
    }
    
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            const fullNameInput = reservationForm.querySelector('#full-name');
            const contactInput = reservationForm.querySelector('#contact-number');
            
            if (!validateName(fullNameInput) || !validateContact(contactInput)) {
                e.preventDefault();
            }
        });
    }
});