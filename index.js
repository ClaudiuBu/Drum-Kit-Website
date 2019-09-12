var btn = document.getElementsByTagName("button");
var sound = new Audio();
//  var playlist = new Array('sounds/crash.mp3','sounds/kick-bass.mp3','sounds/snare.mp3',
//      'sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3'
//          ,'sounds/tom-4.mp3');
//  var path = 'sounds/kick-bass.mp3';

for(var i =0;i<btn.length;i++){
    
    btn[i].addEventListener("click", function(){
          var buttonInnerHTML = this.innerHTML;

            switch(buttonInnerHTML){
                case 'w':
                    sound.src=('sounds/tom-4.mp3');
                    sound.play();
                    break;
                case 'a':
                    sound.src=('sounds/tom-3.mp3');
                    sound.play();
                    break;
                case 's':
                    sound.src=('sounds/tom-2.mp3')
                    sound.play();
                    break;
                case 'd':
                    sound.src=('sounds/tom-1.mp3')
                    sound.play();
                    break;  
                case 'j':
                    sound.src=('sounds/snare.mp3')
                    sound.play();
                    break;
                case 'k':
                    sound.src=('sounds/kick-bass.mp3')
                    sound.play();
                    break;  
                case 'l':
                    sound.src=('sounds/crash.mp3')
                    sound.play();
                    break;
                default:
                    sound.src=("sounds/tom-3.mp3");
                    sound.play();

            }

    }
    
    );}