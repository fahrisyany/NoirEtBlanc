


var container2 = document.querySelector('.container2')
var jumbo = document.querySelector('.jumbo')


container2.addEventListener('click', function (e) {

    //cek yg diklik adalah thumb
    if (e.target.className === 'thumb2') {

        jumbo.src = e.target.src
        jumba.classList.add('fade')
    }

});
