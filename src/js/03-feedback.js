import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
populateTextarea();


function onFormInput() {
    const email = input.value;
    const message = textarea.value;
    
    const formData = {
        email,
        message
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
        
}

function populateTextarea(event) {
    const parsedSavedFeedback = JSON.parse(localStorage.getItem(STORAGE_KEY))

    
    if (parsedSavedFeedback) {
       input.value = parsedSavedFeedback.email;
        textarea.value = parsedSavedFeedback.message;
        console.log(parsedSavedFeedback);
    }

}


function onFormSubmit(event) {
    event.preventDefault();

        const formData = {
        email: input.value,
        message: textarea.value
    }

         
    console.log(formData);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
}
