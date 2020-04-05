//EVENT LISTENERS

let button = document.querySelectorAll("button");
console.log(button);
button.forEach(buttonElement => {

  buttonElement.addEventListener("click", function() {

    let buttonHTML = this.innerHTML;

    switchSounds(buttonHTML);
    buttonAnimation(buttonHTML);

  });

});


document.addEventListener("keypress", function(event) {

  switchSounds(event.key);

  buttonAnimation(event.key);

})



//SOUNDS

const getSounds = function(sound) {

  sound = new Audio(`sounds/${sound}.mp3`);
  sound.play();
}

const switchSounds = function(eventElement) {

    switch (eventElement) {
      case "w":
        getSounds("crash");
        break;
      case "a":
        getSounds("kick-bass");
        break;
      case "s":
        getSounds("snare");
        break;
      case "d":
        getSounds("tom-1");
        break;
      case "j":
        getSounds("tom-2");
        break;
      case "k":
        getSounds("tom-3");
        break;
      case "l":
        getSounds("tom-4");
        break;

    }
  }

//ANIMATIONS

const buttonAnimation=function(eventElement){

  let activeKey=document.querySelector(`.${eventElement}`);
  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed");
  }, 100);

}
