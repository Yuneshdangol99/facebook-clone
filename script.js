const settingsmenu = document.querySelector('.settings-menu');
const darkbtn = document.querySelector('#dark-btn');
const like = document.querySelector('#likes');


function settingsmenutoggle() {
   settingsmenu.classList.toggle('settings-menu-height');
}
darkbtn.onclick = function(){
    darkbtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');
}

