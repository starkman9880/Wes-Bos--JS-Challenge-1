function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip if it's not a transform
    this.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to starț
    audio.play();
    key.classList.add('playing');
  };

  // const keys = document.querySelectorAll('.key');
  // didn't work with the solution from the video
  const keys = Array.from(document.querySelectorAll('.key')); // why do I need to create this array?
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);