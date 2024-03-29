

//Detectarea butonului pe care s-a dat click

var btn = document.getElementsByTagName("button");
var sound = new Audio();

for(var i =0;i<btn.length;i++){

    btn[i].addEventListener("click", function(){
          var buttonInnerHTML = this.innerHTML;
          makeSound(buttonInnerHTML);
          makeAnimation(buttonInnerHTML);

    }

    );}

//Detectarea butonului apasat

    document.addEventListener("keydown", function(){
      makeSound(event.key);
      makeAnimation(event.key);
    });

  //Logica

function makeSound(arg1){


    switch(arg1){
        case 'w':
            sound.src=('sounds/tom-4.mp3');
            sound.play();
            break;
        case 'a':
            sound.src=('sounds/tom-3.mp3');
            sound.play();
            break;
        case 's':
            sound.src=('sounds/tom-2.mp3');
            sound.play();
            break;
        case 'd':
            sound.src=('sounds/tom-1.mp3');
            sound.play();
            break;
        case 'j':
            sound.src=('sounds/snare.mp3');
            sound.play();
            break;
        case 'k':
            sound.src=('sounds/kick-bass.mp3');
            sound.play();
            break;
        case 'l':
            sound.src=('sounds/crash.mp3');
            sound.play();
            break;
        default:
            sound.src=("sounds/tom-3.mp3");
            sound.play();

    }
}
function makeAnimation(arg1){
  var activeButton =  document.querySelector("."+arg1);
  activeButton.classList.add("pressed");
  setTimeout(stopAnimation, 250);

  function stopAnimation(){
    activeButton.classList.remove("pressed");
  }
}
