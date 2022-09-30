
const form =document.querySelector('.form__label')
const input = document.querySelector('.form__input')

input.addEventListener('focus', function(){
    form.classList.add('form__label--active')
})

input.addEventListener('blur', function(){
    form.classList.remove('form__label--active')
}) 