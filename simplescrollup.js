document.addEventListener("DOMContentLoaded", function(){
    // Variables
    var buttonUp = document.querySelector('a[href="#up"]');

    /**
     * Show and hide button
     */
    function isVisibled() {
        var heightHide = parseInt(buttonUp.getAttribute('height-hide')) || 100;
        if (document.body.scrollTop > heightHide || document.documentElement.scrollTop > heightHide) {
            buttonUp.classList.remove('simplescrollup__button--hide');
            buttonUp.classList.add('simplescrollup__button--show');
        } else {
            // Hide
            buttonUp.classList.remove('simplescrollup__button--show');
            buttonUp.classList.add('simplescrollup__button--hide');
        }
    }

    // Auto show and hide button
    window.addEventListener('scroll', isVisibled);
});