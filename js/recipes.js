(function () {

    const recipesSlogan = document.querySelector('.recipes__slogan');
    const changeTitles = [
        'Our favourite dessert recipes',
        'Our favourite coffee recipes',
        'Our favourite recipes!'
    ];
    let i = 0;

    function changeSlogan() {
        recipesSlogan.innerHTML = changeTitles[i];
        i = (i + 1) % changeTitles.length;
    }

    setInterval(changeSlogan, 1000);

}) ();