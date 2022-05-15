let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');
let content = document.querySelector('.content');
window.onscroll = function(){
    let value = scrollY
    stars.style.left = value + 'px';
    moon.style.top = value *3 + 'px';
    mountains3.style.top = value *2 + 'px';
    mountains4.style.top = value *1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value*5  + 'px';
    nouvil.style.fontSize = value  + 'px';
    if(scrollY >= 67){
        nouvil.style.fontSize = 67  + 'px';
        nouvil.style.position = 'fixed';
        content.style.zIndex = "100";

        if(scrollY >= 305){
            nouvil.style.display = 'none';
            mountains3.style.display = 'none';
            river.style.display = 'none';
            moon.style.display = 'none';
        }else{
            nouvil.style.display = 'block';
            mountains3.style.display = 'block';
            moon.style.display = 'block';
            river.style.display = 'block';
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';

        }

    }
}