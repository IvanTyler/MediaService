console.log('js work')

const $extraOptionsTitle = document.querySelector('.extra-options-title')
const $windowExtraOptions = document.querySelector('.window-extra-options')


$extraOptionsTitle.addEventListener('click', function() {
    if ($windowExtraOptions.classList.contains('hide')) {
        $windowExtraOptions.classList.remove('hide')
    } else {
        $windowExtraOptions.classList.add('hide')
    }
})

const $nameUser = document.querySelector('#nameUser')
const $email = document.querySelector('#email')

const $userNameImg = document.querySelector('.form-registration__input-type-img.nameUser')
const $userNameEmailImg = document.querySelector('.form-registration__input-type-img.email')

$nameUser.addEventListener('input', function() {
    const lengthStringName = $nameUser.value.trim().length
    if (lengthStringName >= 1) {
        $userNameImg.style.opacity = '0'
        $userNameImg.style.zIndex = '-1'
    } else {
        $userNameImg.style.opacity = '1'
        $userNameImg.style.zIndex = '1'
    }
})

$email.addEventListener('input', function() {
    const lengthStringEmail = $email.value.trim().length
    if (lengthStringEmail >= 1) {
        $userNameEmailImg.style.opacity = '0'
        $userNameEmailImg.style.zIndex = '-1'
    } else {
        $userNameEmailImg.style.opacity = '1'
        $userNameEmailImg.style.zIndex = '1'
    }
})