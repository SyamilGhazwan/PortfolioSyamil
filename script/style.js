const inputHamburger = document.querySelector('#check');
const ul = document.querySelector('#ul');
const hamburger = document.getElementById('bt');
const link = document.querySelectorAll('#ul li');


// menampilkan slide navbar and Auto CLose slide navbar jika di CLICK salah satu link 
inputHamburger.addEventListener('click', function(){
    hamburger.style.rotate = "90deg"
    setTimeout(() => {
        hamburger.style.rotate = "0deg"
    }, 2000);
    ul.classList.toggle('navSlider')
    for (let i = 0; i < link.length; i++) {
        if (link[i].addEventListener ('click', () => {
            ul.classList.toggle('navSlider')
            setTimeout(() => {
                ul.classList.remove('navSlider')
            }, 100);
        })); 
    }
});

function jam () {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let session = document.getElementById('autominute');
    if(h >= 12){
        session.innerHTML = 'PM'
    } else {
        session.innerHTML = 'AM'
    }
    document.getElementById('autohours').innerHTML = h + ":" + m + ":" + s ;
}
setInterval (jam, 1000);