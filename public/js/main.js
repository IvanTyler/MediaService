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