
function validatePhone(phone, phoneError) {
    let phoneValue = document.getElementById(phone).value;
    let element = document.getElementById(phoneError);

    if (!element) {
        console.error('Element not found:', phoneError);
        return false;
    }

    if (!/^\+\d{2,3}\d{10}$/.test(phoneValue)) {
        if (!/^\+\d{1,3}/.test(phoneValue)) {
            element.classList.add('error');
            element.innerHTML = 'Enter Country Code';
        } else if (/\+\d{2,3}\d{1,9}$/.test(phoneValue)) {
            element.classList.add('error');
            element.innerHTML = 'Enter a valid 10 digit number';
        } else {
            element.classList.add('error');
            element.innerHTML = 'Enter a valid number';
        }
        return false;
    }

    element.classList.remove('error');
    element.classList.add('verified');
    element.innerHTML = 'Verified ' + '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMail(mail, mailError) {
    let mailValue = document.getElementById(mail).value;
    let element = document.getElementById(mailError);

    if (!element) {
        console.error('Element not found:', mailError);
        return false;
    }

    if (!/^\S+@\S+\.com$/.test(mailValue)) {
        element.classList.add('error');
        element.innerHTML = 'Enter a valid email address';
        return false;
    }

    element.classList.remove('error');
    element.classList.add('verified');
    element.innerHTML = 'Verified ' + '<i class="fas fa-check-circle"></i>';
    return true;
}

function validate(callback, getNumber, phoneError, getEmail, mailError, submitError) {
    // console.log('validate function called');
    let phoneValidationResult = validatePhone(getNumber, phoneError);
    let mailValidationResult = validateMail(getEmail, mailError);

    if (phoneValidationResult && mailValidationResult) {
        // Proceed with form submission logic
        // console.log('generateLink function will be called');
        callback();
    } else {
        submitError.classList.add('error');
        submitError.classList.add('mt-3');
        submitError.innerHTML = 'Invalid Credentials';
    }
}
