const form = document.querySelector("form");
console.log(form)
const required = document.querySelectorAll('.required');

const h4 = document.querySelector('h4');
const warning = document.createElement('h5');
const check = document.createElement('p');
check.innerHTML = '';

const formValidation = () => {
  required.forEach((input) => {
    if (input.value === '') {
      input.classList.add('js__red');
      warning.innerHTML = 'An error occurred, check the following fields'; 
      h4.appendChild(warning); 
    } else {
      input.classList.remove('js__red');
      check.innerHTML = 'Submitted form';
      check.classList.add('js__green');
      form.appendChild(check);
    }
  })
}

form.addEventListener("submit", (event) => {
  console.log('hi')
  event.preventDefault();
  formValidation();
  event.target.reset();
});
