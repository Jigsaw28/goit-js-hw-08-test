import throttle from "lodash.throttle";

const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea[name = "message"]');

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);

const dataStorage = {};

function onInputForm(e) {
  dataStorage.email = form.elements.email.value;
  dataStorage.message = form.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataStorage));
}

function onSubmitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(dataStorage);
}

storageStatus()
function storageStatus() {
    const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (saveData) {
        email.value = saveData.email;
        message.value = saveData.message;
    }
}
