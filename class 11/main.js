var examValue= document.getElementById('exam')

var classText=document.getElementsByClassName('testClass')


for(let i=0; i<classText.length; i++){
    classText[i].innerHTML="Hello I am From DOM"
}



var tagExample= document.querySelectorAll('p')
console.log(tagExample);


var selectExample= document.querySelector('#test')
let btn= document.querySelector('#btn')
let btn2= document.querySelector('#btn2')

btn.addEventListener('click', function () {
    selectExample.style.cssText = "color: red; background-color: blue;";
})

btn2.addEventListener('click', function(){
    selectExample.style.cssText = "color: #000; background-color: #fff;";
})






let para=document.querySelector("#para")
let hide=document.querySelector("#hide")
let show=document.querySelector("#show")

hide.addEventListener('click', function() {
    para.style.cssText = "display: none;";
})
show.addEventListener('click', function() {
    para.style.cssText = "display: block; margin:20px; color: red; background-color: blue;";
})