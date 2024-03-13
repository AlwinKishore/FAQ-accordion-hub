var toggleCollapse = document.querySelectorAll('.accordion-header');

toggleCollapse.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
        var collapse = toggle.nextElementSibling;
        collapse.classList.toggle('show');
        var image = toggle.childNodes[3];
        if(image.src.includes('icon-plus.svg')){
            image.src = 'assets/images/icon-minus.svg'
        }
        else{
            image.src = 'assets/images/icon-plus.svg'
        }
    });
});

function resizeFunction() {
    let w = window.outerWidth;
    var bgImage = document.getElementsByClassName('bg-img')
    if(w < 425){
        bgImage.src = 'assets/images/background-pattern-desktop.svg'
    }
    else{
        bgImage.src = 'assets/images/background-pattern-mobile.svg'
    }
}