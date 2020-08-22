function dropdown() {
    var show = document.querySelector('ul.navbar');
    //var background = document.getElementsByTagName('section');
    if(show.className == 'navbar'){
        show.className += ' responsive';
        //background.style.opacity = "0.5";
    } else {
        show.className = 'navbar';
        //background.style.opacity = "1";
    }
}