/*console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML=("On clicking name Doesn't Change");

//move the image
var img= document.getElementById('madi');
marginLeft=0;
function moveRight(){
    marginLeft = marginLeft +10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
   // img.style.marginLeft = '100px';
};
*/
//counter code
var button = document.getElementById('counter');
button.onclick=function(){
    
    //make a request to a counter endpoint.
    
    //Capture the response and store it in the variable.
    
    //Render the variable in the correct span
    counter= counter+1
    var span =document.getElementById('count');
    span.innerHTML = counter.toString();
};