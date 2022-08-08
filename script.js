// let colorbutton= document.querySelector("#colorchange");
// let blue= document.querySelector("body");

// colorbutton.onclick= changeImage;
// function changeImage{ 
//     let image= document.querySelector("#AnyYellowColor");
//     image.body.style.backgroundimage= blue;

// }

// let blue= document.querySelector("body")
// blue.style.backgroundcolor="blue"

let buttonHead= document.getElementById("heading");
let button= document.getElementById("colorchange");

button.onclick= function(){
    if(buttonHead.style.backgroundColor=="blue"){
        button.style.backgroundColor="yellow"
    }
    else{
        buttonHead.style.backgroundColor="blue"
    }
}
   
