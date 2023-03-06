if (window.addEventListener) {
    window.addEventListener('load', initAccordion, false)
}
function initAccordion() {
    let accordTitleElements = document.getElementsByClassName('faq__accord-header')
    Array.prototype.forEach.call(accordTitleElements, function(el) {
        el.addEventListener('click', handleAccordTitleClick, false)
    });
}
function handleAccordTitleClick() {
    let accordElementToChange = this.parentNode
    let accords = this.parentNode.parentNode.getElementsByClassName('faq__block-right-accord')

    if (accordElementToChange.classList.contains('faq__collapsed')) {
        Array.prototype.forEach.call(accords, function(accord) {
            accord.classList.remove('faq__expanded')
            accord.classList.add('faq__collapsed')
        });
        accordElementToChange.classList.remove('faq__collapsed')
        accordElementToChange.classList.add('faq__expanded')
    } else {
        accordElementToChange.classList.remove('faq__expanded')
        accordElementToChange.classList.add('faq__collapsed')
    }
}