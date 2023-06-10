let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let moon3 = document.getElementById('moon3');
let moon4 = document.getElementById('moon4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let moon7 = document.getElementById('moon7');
let amr = document.querySelector('.amr');
let upBtn = document.getElementById('upBtn');
window.onscroll = function() {
    //animation of pic
    let valu = scrollY;
    stars.style.right = valu + 'px';
    moon.style.top = valu * 5 + 'px';
    moon3.style.top = valu * 2 + 'px';
    moon4.style.top = valu * 1 + 'px';
    river.style.top = valu + 'px';
    boat.style.top = valu + 'px';
    boat.style.left = valu * 4 + 'px';
    amr.style.display = "block";
    amr.style.fontSize = valu + 'px';
    // statement to stop fontsize of "Amr Khalifa" word
    if (scrollY >= 70) {
        amr.style.fontSize = 70 + 'px';
        amr.style.position = 'fixed';
        // amr khalifa display
        if (scrollY >= 475) {
            amr.style.display = 'none';
        } else {
            amr.style.display = 'block';
        }
    }
    //change from Dark to light
    if (scrollY >= 72) {
        document.querySelector('.main').style.background = 'linear-gradient(rgb(97, 146, 239), rgb(149, 167, 192))';
        stars.style.display = 'none';
    } else {
        document.querySelector('.main').style.background = 'linear-gradient(rgb(7, 3, 45), rgb(21, 43, 72))';
        stars.style.display = 'block';
    }
    // display button scroll up
    if (scrollY >= 72) {

        document.getElementById('upBtn').style.display = 'block';

    } else {
        document.getElementById('upBtn').style.display = 'none';

    }

}
window.onclick =
    // When the user clicks on the button, scroll to the top of the document
    function upBtn() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
