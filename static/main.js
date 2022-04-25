const form = document.getElementById('form');
const age = document.getElementById('age');
const sex = document.getElementById('sex');
const bmi = document.getElementById('bmi');
const children = document.getElementById('children');
const smoker = document.getElementById('smoker');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    // const ageValue = age.value.trim();
    // const sexValue = sex.value.trim();
    // const bmiValue = bmi.value.trim();
    // const childrenValue = children.value.trim();
    // const smokervalue=smoker.value.trim();

    if (age === '') {
        setErrorFor(age, 'age cannot be blank');
    } else if(age > 100){
        setErrorFor(age,'age cannot be more than 100')
    } else if(age<=0){
        setErrorFor(age,'age cannot be less than or equal to 0')
    }
    else {
        setSuccessFor(age);
    }

    if (sex === '') {
        setErrorFor(sex, 'sex cannot be blank');
    } else if (sex>1) {
        setErrorFor(sex, 'Not a valid input');
    } else if(sex<0) {
        setErrorFor(sex, 'Not a valid input')
    }
    else {
        setSuccessFor(sex);
    }

    if (bmiValue === '') {
        setErrorFor(bmi, 'bmi cannot be blank');
    } else {
        setSuccessFor(bmi);
    }

    if (childrenValue === '') {
        setErrorFor(children, 'children input cannot be blank');
    } else {
        setSuccessFor(children);
    }

    if (smoker === '') {
        setErrorFor(smoker, 'smoker cannot be blank');
    } else if (smoker>1) {
        setErrorFor(sex, 'Not a valid input');
    } else if(smoker<0) {
        setErrorFor(smoker, 'Not a valid input')
    }
    else {
        setSuccessFor(smoker);
    }

}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
