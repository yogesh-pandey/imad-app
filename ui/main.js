console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML=("On clicking name Doesn't Change");

//move the image
var img= document.getElementById('madi');
img.onlcick=function(){
    img.style.marginLeft = '100px';
};